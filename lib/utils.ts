import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { generate } from 'short-uuid';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function genId() {
  return generate();
}
