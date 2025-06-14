import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabaseUrl = "https://aaqheelbkeuedashhlih.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhcWhlZWxia2V1ZWRhc2hobGloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNTU5MTQsImV4cCI6MjA2MzczMTkxNH0.KprhLswi5E5Y4fZuX0z5L9qasr9ZCFpfFsj8GzmAt0I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
