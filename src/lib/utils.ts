import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatInitials(name: string) {
  if (!name) return ''
  const parts = name.trim().split(' ')
  const initials = parts.filter(Boolean).map((part) => part[0].toUpperCase())
  if (initials.length >= 2) {
    return `${initials[0]}${initials[initials.length - 1]}`
  }
  return initials[0] || ''
}
