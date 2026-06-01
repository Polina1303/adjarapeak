export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      hikes: {
        Row: {
          created_at: string
          description: string | null
          difficulty: string | null
          distance_km: number | null
          duration: string | null
          end_date: string | null
          features: Json
          gallery: Json
          group_size: string | null
          hidden: boolean
          id: string
          image: string | null
          location: string | null
          packing_list: Json
          price: number
          reasons: Json
          sale_price: number | null
          shortly: string | null
          slug: string
          sort_order: number
          start_date: string | null
          start_time: string | null
          title: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          difficulty?: string | null
          distance_km?: number | null
          duration?: string | null
          end_date?: string | null
          features?: Json
          gallery?: Json
          group_size?: string | null
          hidden?: boolean
          id?: string
          image?: string | null
          location?: string | null
          packing_list?: Json
          price?: number
          reasons?: Json
          sale_price?: number | null
          shortly?: string | null
          slug: string
          sort_order?: number
          start_date?: string | null
          start_time?: string | null
          title: string
        }
        Update: {
          created_at?: string
          description?: string | null
          difficulty?: string | null
          distance_km?: number | null
          duration?: string | null
          end_date?: string | null
          features?: Json
          gallery?: Json
          group_size?: string | null
          hidden?: boolean
          id?: string
          image?: string | null
          location?: string | null
          packing_list?: Json
          price?: number
          reasons?: Json
          sale_price?: number | null
          shortly?: string | null
          slug?: string
          sort_order?: number
          start_date?: string | null
          start_time?: string | null
          title?: string
        }
        Relationships: []
      }
      rental_categories: {
        Row: {
          created_at: string
          group_id: string
          id: string
          image: string | null
          slug: string
          sort_order: number
          title: string
        }
        Insert: {
          created_at?: string
          group_id: string
          id?: string
          image?: string | null
          slug: string
          sort_order?: number
          title: string
        }
        Update: {
          created_at?: string
          group_id?: string
          id?: string
          image?: string | null
          slug?: string
          sort_order?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "rental_categories_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "rental_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      rental_groups: {
        Row: {
          created_at: string
          id: string
          image: string | null
          slug: string
          sort_order: number
          title: string
        }
        Insert: {
          created_at?: string
          id?: string
          image?: string | null
          slug: string
          sort_order?: number
          title: string
        }
        Update: {
          created_at?: string
          id?: string
          image?: string | null
          slug?: string
          sort_order?: number
          title?: string
        }
        Relationships: []
      }
      rental_items: {
        Row: {
          available: boolean
          category_id: string
          created_at: string
          description: string | null
          features: Json
          hidden: boolean
          id: string
          image: string | null
          legacy_id: number | null
          price_per_day: number
          sale_price_per_day: number | null
          shortly: string | null
          slug: string
          subcategory_id: string | null
          title: string
        }
        Insert: {
          available?: boolean
          category_id: string
          created_at?: string
          description?: string | null
          features?: Json
          hidden?: boolean
          id?: string
          image?: string | null
          legacy_id?: number | null
          price_per_day?: number
          sale_price_per_day?: number | null
          shortly?: string | null
          slug: string
          subcategory_id?: string | null
          title: string
        }
        Update: {
          available?: boolean
          category_id?: string
          created_at?: string
          description?: string | null
          features?: Json
          hidden?: boolean
          id?: string
          image?: string | null
          legacy_id?: number | null
          price_per_day?: number
          sale_price_per_day?: number | null
          shortly?: string | null
          slug?: string
          subcategory_id?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "rental_items_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "rental_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rental_items_subcategory_id_fkey"
            columns: ["subcategory_id"]
            isOneToOne: false
            referencedRelation: "rental_subcategories"
            referencedColumns: ["id"]
          },
        ]
      }
      rental_subcategories: {
        Row: {
          category_id: string
          created_at: string
          id: string
          slug: string
          sort_order: number
          title: string
        }
        Insert: {
          category_id: string
          created_at?: string
          id?: string
          slug: string
          sort_order?: number
          title: string
        }
        Update: {
          category_id?: string
          created_at?: string
          id?: string
          slug?: string
          sort_order?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "rental_subcategories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "rental_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      shop_categories: {
        Row: {
          created_at: string
          group_id: string
          id: string
          image: string | null
          slug: string
          sort_order: number
          title: string
        }
        Insert: {
          created_at?: string
          group_id: string
          id?: string
          image?: string | null
          slug: string
          sort_order?: number
          title: string
        }
        Update: {
          created_at?: string
          group_id?: string
          id?: string
          image?: string | null
          slug?: string
          sort_order?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "shop_categories_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "shop_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      shop_groups: {
        Row: {
          created_at: string
          id: string
          image: string | null
          slug: string
          sort_order: number
          title: string
        }
        Insert: {
          created_at?: string
          id?: string
          image?: string | null
          slug: string
          sort_order?: number
          title: string
        }
        Update: {
          created_at?: string
          id?: string
          image?: string | null
          slug?: string
          sort_order?: number
          title?: string
        }
        Relationships: []
      }
      shop_products: {
        Row: {
          category_id: string
          created_at: string
          description: string | null
          features: Json
          hidden: boolean
          id: string
          image: string | null
          in_stock: boolean
          legacy_id: number | null
          price: number
          sale_price: number | null
          slug: string
          subcategory_id: string | null
          title: string
        }
        Insert: {
          category_id: string
          created_at?: string
          description?: string | null
          features?: Json
          hidden?: boolean
          id?: string
          image?: string | null
          in_stock?: boolean
          legacy_id?: number | null
          price?: number
          sale_price?: number | null
          slug: string
          subcategory_id?: string | null
          title: string
        }
        Update: {
          category_id?: string
          created_at?: string
          description?: string | null
          features?: Json
          hidden?: boolean
          id?: string
          image?: string | null
          in_stock?: boolean
          legacy_id?: number | null
          price?: number
          sale_price?: number | null
          slug?: string
          subcategory_id?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "shop_products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "shop_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shop_products_subcategory_id_fkey"
            columns: ["subcategory_id"]
            isOneToOne: false
            referencedRelation: "shop_subcategories"
            referencedColumns: ["id"]
          },
        ]
      }
      shop_subcategories: {
        Row: {
          category_id: string
          created_at: string
          id: string
          slug: string
          sort_order: number
          title: string
        }
        Insert: {
          category_id: string
          created_at?: string
          id?: string
          slug: string
          sort_order?: number
          title: string
        }
        Update: {
          category_id?: string
          created_at?: string
          id?: string
          slug?: string
          sort_order?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "shop_subcategories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "shop_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      app_role: "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin"],
    },
  },
} as const
