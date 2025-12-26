-- COMPLETE FIX FOR CERTIFICATE AND PROGRESS TRACKING SYSTEM
-- Run this script in Supabase SQL Editor to fix all database permission issues

-- Step 1: Fix profiles table policies
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;

CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT 
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE 
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Step 2: Fix user_course_progress table policies
DROP POLICY IF EXISTS "Users can view their own course progress" ON user_course_progress;
DROP POLICY IF EXISTS "Users can insert their own course progress" ON user_course_progress;
DROP POLICY IF EXISTS "Users can update their own course progress" ON user_course_progress;

CREATE POLICY "Users can view their own course progress"
  ON user_course_progress FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own course progress"
  ON user_course_progress FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own course progress"
  ON user_course_progress FOR UPDATE 
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Step 3: Fix user_lesson_progress table policies  
DROP POLICY IF EXISTS "Users can view their own lesson progress" ON user_lesson_progress;
DROP POLICY IF EXISTS "Users can insert their own lesson progress" ON user_lesson_progress;
DROP POLICY IF EXISTS "Users can update their own lesson progress" ON user_lesson_progress;

CREATE POLICY "Users can view their own lesson progress"
  ON user_lesson_progress FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own lesson progress"
  ON user_lesson_progress FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own lesson progress"
  ON user_lesson_progress FOR UPDATE 
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Step 4: Ensure your current user has a profile
-- This will create a profile for any existing users
INSERT INTO public.profiles (id, full_name, email)
SELECT 
  id,
  COALESCE(raw_user_meta_data->>'full_name', email, 'User') as full_name,
  email
FROM auth.users
ON CONFLICT (id) DO UPDATE SET
  full_name = COALESCE(EXCLUDED.full_name, profiles.full_name),
  email = COALESCE(EXCLUDED.email, profiles.email);

-- Step 5: Verify everything is set up correctly
SELECT 'Profiles created:' as status, COUNT(*) as count FROM public.profiles
UNION ALL
SELECT 'Course progress records:', COUNT(*) FROM user_course_progress
UNION ALL
SELECT 'Lesson progress records:', COUNT(*) FROM user_lesson_progress;
