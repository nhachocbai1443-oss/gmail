import { createClient } from '@supabase/supabase-js';

// --- CẤU HÌNH DATABASE ---
// Bạn cần tạo project tại https://supabase.com
// Sau đó vào Project Settings -> API để lấy URL và ANON KEY
// Thay thế 2 dòng dưới đây bằng thông tin của bạn:

const SUPABASE_URL = 'https://nqwkofpvyedvaorpyqxh.supabase.co'; 
const SUPABASE_ANON_KEY = 'sb_publishable_zmmv_mHKqF3uI1D9V0j2Hg_jiv43f4o';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
