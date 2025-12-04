import { format, formatDistance, formatRelative } from 'date-fns'

// Format date utilities
export const formatDate = (date: string | Date, formatStr: string = 'MMM dd, yyyy') => {
  return format(new Date(date), formatStr)
}

export const formatDateRelative = (date: string | Date) => {
  return formatRelative(new Date(date), new Date())
}

export const formatDateDistance = (date: string | Date) => {
  return formatDistance(new Date(date), new Date(), { addSuffix: true })
}

// String utilities
export const truncate = (str: string, length: number = 100) => {
  if (str.length <= length) return str
  return str.substring(0, length) + '...'
}

export const slugify = (str: string) => {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Array utilities
export const unique = <T>(arr: T[]): T[] => {
  return Array.from(new Set(arr))
}

export const chunk = <T>(arr: T[], size: number): T[][] => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  )
}

// Validation utilities
export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const isValidUrl = (url: string) => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// Number formatting
export const formatNumber = (num: number) => {
  return new Intl.NumberFormat('en-IN').format(num)
}

// Rating utilities
export const calculateAverageRating = (ratings: number[]) => {
  if (ratings.length === 0) return 0
  const sum = ratings.reduce((acc, rating) => acc + rating, 0)
  return Number((sum / ratings.length).toFixed(1))
}

// Interest/Tag utilities
export const commonInterests = [
  'Playdates',
  'Parks & Outdoors',
  'Books & Reading',
  'Arts & Crafts',
  'Music & Dance',
  'Sports & Fitness',
  'STEM & Science',
  'Food & Cooking',
  'Cultural Events',
  'Parenting Support',
  'Weekend Trips',
  'Photography',
  'Gaming',
  'Volunteering',
]

export const neighborhoods = [
  'Indiranagar',
  'Koramangala',
  'Whitefield',
  'JP Nagar',
  'Yelahanka',
  'HSR Layout',
  'Malleshwaram',
  'Jayanagar',
  'Sarjapur Road',
  'Electronic City',
  'Marathahalli',
  'Hebbal',
]

// Error handling
export class AppError extends Error {
  statusCode: number
  
  constructor(message: string, statusCode: number = 500) {
    super(message)
    this.statusCode = statusCode
    this.name = 'AppError'
  }
}

// Response helpers
export const successResponse = <T>(data: T, message?: string) => {
  return {
    success: true,
    data,
    message,
  }
}

export const errorResponse = (message: string, statusCode: number = 500) => {
  return {
    success: false,
    error: message,
    statusCode,
  }
}

// Sanitize HTML (basic)
export const sanitizeHtml = (html: string) => {
  return html
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

// Generate avatar color based on string
export const getAvatarColor = (str: string) => {
  const colors = [
    'bg-red-500',
    'bg-orange-500',
    'bg-amber-500',
    'bg-yellow-500',
    'bg-lime-500',
    'bg-green-500',
    'bg-emerald-500',
    'bg-teal-500',
    'bg-cyan-500',
    'bg-sky-500',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-violet-500',
    'bg-purple-500',
    'bg-fuchsia-500',
    'bg-pink-500',
    'bg-rose-500',
  ]
  
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  
  return colors[Math.abs(hash) % colors.length]
}

// Get initials from name
export const getInitials = (name: string) => {
  const parts = name.split(' ')
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase()
  }
  return name.substring(0, 2).toUpperCase()
}

// File upload utilities
export const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']

export const validateImageFile = (file: File) => {
  if (file.size > MAX_FILE_SIZE) {
    throw new AppError('File size must be less than 5MB', 400)
  }
  
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    throw new AppError('Only JPEG, PNG, WebP, and GIF images are allowed', 400)
  }
  
  return true
}

// Debounce function
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Local storage utilities
export const storage = {
  get: <T>(key: string): T | null => {
    if (typeof window === 'undefined') return null
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch {
      return null
    }
  },
  
  set: <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  },
  
  remove: (key: string): void => {
    if (typeof window === 'undefined') return
    try {
      window.localStorage.removeItem(key)
    } catch (error) {
      console.error('Error removing from localStorage:', error)
    }
  },
}
