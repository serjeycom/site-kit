import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { forwardRef, createElement } from 'react';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const ExternalLink = forwardRef(function ExternalLink({ href, ...props }, ref) {
  return createElement('a', {
    ...props,
    href,
    target: '_blank',
    rel: 'noopener noreferrer',
    ref,
  });
});
