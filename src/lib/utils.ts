import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const copyToClipboard = (text: string) => {
  if(navigator && navigator.clipboard) {
    navigator.clipboard.writeText(text)
  }
}