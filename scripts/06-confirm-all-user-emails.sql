-- Confirm all user emails in auth.users table
-- This allows existing users to sign in without email verification
UPDATE auth.users 
SET email_confirmed_at = NOW() 
WHERE email_confirmed_at IS NULL;

-- Verify the update
SELECT id, email, email_confirmed_at FROM auth.users LIMIT 5;
