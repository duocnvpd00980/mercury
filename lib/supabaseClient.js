import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pptrtazpxcuevajuquvn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwdHJ0YXpweGN1ZXZhanVxdXZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3Mzk1OTIsImV4cCI6MjAzNzMxNTU5Mn0.gdivnRu3aewxnRZXjEzmCd9ZJbfYgZPjFB4VYfeI7Ew';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
