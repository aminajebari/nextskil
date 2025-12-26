-- This script populates profiles for users who signed up before the profiles table was created

-- First, let's see what users exist
-- SELECT id, email, raw_user_meta_data FROM auth.users;

-- Insert profiles for existing users (only if they don't already have one)
INSERT INTO public.profiles (id, full_name, created_at, updated_at)
SELECT 
  au.id,
  COALESCE(au.raw_user_meta_data->>'full_name', au.email) as full_name,
  au.created_at,
  NOW()
FROM auth.users au
WHERE NOT EXISTS (
  SELECT 1 FROM public.profiles p WHERE p.id = au.id
)
ON CONFLICT (id) DO NOTHING;

-- Verify profiles were created
SELECT 
  p.id,
  p.full_name,
  au.email,
  p.created_at
FROM public.profiles p
JOIN auth.users au ON au.id = p.id;
