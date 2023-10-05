import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dvxzrwwikgueswnjgyrj.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2eHpyd3dpa2d1ZXN3bmpneXJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxNzM2NDEsImV4cCI6MjAxMTc0OTY0MX0.pilSnYqYzDuboooDpD6daUVCESsxUeFBK053zDyJKHo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;