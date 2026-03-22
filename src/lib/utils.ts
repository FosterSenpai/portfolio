import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Function to allow using lists for classNames
export const cn = (...inputs: any[]) => {
  return twMerge(clsx(inputs));
};
