"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"

export default function TestSupabasePage() {
  const [status, setStatus] = useState({
    urlSet: false,
    anonKeySet: false,
    serviceRoleKeySet: false,
    connectionWorking: false,
    authUsers: 0,
    profilesTableExists: false,
    error: null as string | null,
  })

  useEffect(() => {
    const testConnection = async () => {
      try {
        const supabase = createClient()

        // Check environment variables
        const urlSet = !!process.env.NEXT_PUBLIC_SUPABASE_URL
        const anonKeySet = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

        // Try to get auth user
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser()

        // Try to query auth.users table (if you have permission)
        const { data: usersData, error: usersError } = await supabase
          .from("auth.users")
          .select("count(*)")
          .throwOnError()
          .catch(() => ({ data: null, error: "Cannot access auth.users - expected" }))

        // Check if profiles table exists
        const { data: profilesData, error: profilesError } = await supabase
          .from("profiles")
          .select("count(*)")
          .throwOnError()
          .catch(() => ({ data: null, error: true }))

        setStatus({
          urlSet,
          anonKeySet,
          serviceRoleKeySet: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
          connectionWorking: !userError || userError.message.includes("not authenticated"),
          authUsers: usersData?.[0]?.count || 0,
          profilesTableExists: !profilesError,
          error: null,
        })
      } catch (error) {
        setStatus((prev) => ({
          ...prev,
          error: error instanceof Error ? error.message : "Unknown error",
        }))
      }
    }

    testConnection()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Supabase Connection Test</h1>

        <div className="space-y-4">
          {/* Environment Variables */}
          <div className="bg-white p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Environment Variables</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>NEXT_PUBLIC_SUPABASE_URL:</span>
                <span
                  className={`px-3 py-1 rounded ${status.urlSet ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                >
                  {status.urlSet ? "✓ SET" : "✗ NOT SET"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>NEXT_PUBLIC_SUPABASE_ANON_KEY:</span>
                <span
                  className={`px-3 py-1 rounded ${status.anonKeySet ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                >
                  {status.anonKeySet ? "✓ SET" : "✗ NOT SET"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>SUPABASE_SERVICE_ROLE_KEY:</span>
                <span
                  className={`px-3 py-1 rounded ${status.serviceRoleKeySet ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                >
                  {status.serviceRoleKeySet ? "✓ SET" : "✗ NOT SET"}
                </span>
              </div>
            </div>
          </div>

          {/* Connection Status */}
          <div className="bg-white p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Connection Status</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Supabase Connection:</span>
                <span
                  className={`px-3 py-1 rounded ${status.connectionWorking ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                >
                  {status.connectionWorking ? "✓ WORKING" : "✗ FAILED"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Profiles Table:</span>
                <span
                  className={`px-3 py-1 rounded ${status.profilesTableExists ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                >
                  {status.profilesTableExists ? "✓ EXISTS" : "✗ NOT FOUND"}
                </span>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {status.error && (
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2 text-red-800">Error</h2>
              <p className="text-red-700">{status.error}</p>
            </div>
          )}

          {/* Info */}
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-blue-800">What This Shows</h2>
            <ul className="text-blue-700 space-y-1 text-sm">
              <li>✓ All environment variables should be SET</li>
              <li>✓ Connection should be WORKING</li>
              <li>✓ Profiles table should EXIST</li>
              <li>If any show ✗, check your Supabase configuration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
