import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function animateNumber(start: number, end: number, duration: number, callback: (value: number) => void) {
  const startTime = Date.now();
  
  const updateNumber = () => {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const value = start + (end - start) * progress;
    callback(value);
    
    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    }
  };
  
  requestAnimationFrame(updateNumber);
}
