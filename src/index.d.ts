import type { ClassValue } from 'clsx';
import type { ComponentPropsWithRef, ForwardRefExoticComponent, RefAttributes } from 'react';

export declare function cn(...inputs: ClassValue[]): string;

export type ExternalLinkProps = Omit<ComponentPropsWithRef<'a'>, 'href' | 'target' | 'rel'> & {
  href: string;
};

export declare const ExternalLink: ForwardRefExoticComponent<
  ExternalLinkProps & RefAttributes<HTMLAnchorElement>
>;
