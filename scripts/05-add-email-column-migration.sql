-- Migration: Add email column to profiles table if it doesn't exist
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS email TEXT UNIQUE;

-- Backfill email from auth.users for existing profiles
UPDATE public.profiles p
SET email = u.email
FROM auth.users u
WHERE p.id = u.id AND p.email IS NULL;

-- Make sure the column is not null going forward (optional - set after backfill)
-- ALTER TABLE public.profiles ALTER COLUMN email SET NOT NULL;
