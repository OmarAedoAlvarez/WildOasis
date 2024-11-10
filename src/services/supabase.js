import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ggdimzoykyrtflnhgyhx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnZGltem95a3lydGZsbmhneWh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEyNzc0NDEsImV4cCI6MjA0Njg1MzQ0MX0.GVRkA-sWLoeXeZIqfaXHLVJJVx_DFe9xHg27HlxTwyc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
