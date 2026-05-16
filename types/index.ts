/**
 * Generic response structure for API calls (Supabase/Forms)
 */
export interface ActionResponse {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Defines a Team Member for the 'Architects' section
 */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socials: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

/**
 * Defines the structure for products under the Apexyron umbrella
 * (RingTask, Xylia, etc.)
 */
export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  status: 'Development' | 'Beta' | 'Live';
  link?: string;
}

/**
 * Waitlist entry structure for database synchronization
 */
export interface WaitlistEntry {
  email: string;
  product_name: 'RingTask' | 'Xylia';
  created_at: string;
}