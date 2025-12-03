-- Create a function to check if user is admin
CREATE OR REPLACE FUNCTION is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  -- Add your admin user IDs or emails here
  -- For now, we'll use email-based check
  RETURN EXISTS (
    SELECT 1 FROM auth.users 
    WHERE id = user_id 
    AND email IN ('ines.jabri@supcom.tn') -- Add more admin emails as needed
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission
GRANT EXECUTE ON FUNCTION is_admin(UUID) TO authenticated;

-- Note: To add more admins, simply add their email to the list above
-- Example: AND email IN ('admin1@example.com', 'admin2@example.com', 'ines.jabri@supcom.tn')
