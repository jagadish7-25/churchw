-- Run this in your Supabase SQL Editor

-- Create gallery table
CREATE TABLE IF NOT EXISTS public.gallery (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    title TEXT NOT NULL,
    media_url TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('image', 'video'))
);

-- Create prayer requests table
CREATE TABLE IF NOT EXISTS public.prayer_requests (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    user_id UUID REFERENCES auth.users(id),
    name TEXT NOT NULL,
    request TEXT NOT NULL,
    is_public BOOLEAN DEFAULT false
);

-- Setup Storage for gallery
INSERT INTO storage.buckets (id, name, public) VALUES ('gallery', 'gallery', true) ON CONFLICT DO NOTHING;

-- Policies
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public profiles are viewable by everyone." ON public.gallery FOR SELECT USING (true);
-- Add more specific admin policies as needed

ALTER TABLE public.prayer_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can insert their own requests" ON public.prayer_requests FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view public requests" ON public.prayer_requests FOR SELECT USING (is_public = true OR auth.uid() = user_id);
