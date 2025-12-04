import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { createClient } from '@supabase/supabase-js'

// Client-side Supabase client
export const createBrowserClient = () => {
  return createClientComponentClient()
}

// Server-side Supabase client (for API routes)
export const createServerClient = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    }
  )
}

// Database types
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          family_name: string
          email: string
          bio: string | null
          interests: string[] | null
          neighborhood: string | null
          city: string
          avatar_url: string | null
          is_verified: boolean
          verification_requested_at: string | null
          verified_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          family_name: string
          email: string
          bio?: string | null
          interests?: string[] | null
          neighborhood?: string | null
          city?: string
          avatar_url?: string | null
        }
        Update: {
          family_name?: string
          bio?: string | null
          interests?: string[] | null
          neighborhood?: string | null
          avatar_url?: string | null
        }
      }
      groups: {
        Row: {
          id: string
          title: string
          description: string
          locality: string
          tags: string[] | null
          rules: string | null
          image_url: string | null
          is_verified: boolean
          member_count: number
          created_by: string | null
          created_at: string
          updated_at: string
        }
      }
      events: {
        Row: {
          id: string
          group_id: string
          title: string
          description: string
          event_date: string
          location: string
          address: string | null
          max_attendees: number | null
          image_url: string | null
          created_by: string | null
          created_at: string
          updated_at: string
        }
      }
    }
  }
}
