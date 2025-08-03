const {createClient} = require('@supabase/supabase-js');
require('dotenv').config();
const supabaseUrl = process.env.REACT_APP_Project_url
const supabaseKey=process.env.REACT_APP_Anonkey
// let REACT_APP_Anonkey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloZnhwa3hzbW1maGZmc3FpeGZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2NDg3MzAsImV4cCI6MjA2ODIyNDczMH0.tRoRFyvqwSKC6NwWNIMz5njiJI5q044aHyLqkscoxTQ'
// let REACT_APP_Project_url = 'https://ihfxpkxsmmfhffsqixfa.supabase.co'
const supabase = createClient(supabaseUrl,supabaseKey);
module.exports = supabase;




