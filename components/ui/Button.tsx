import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'lazy' | 'moderate' | 'diligent' | 'outline';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary',
      lazy: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
      moderate: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500',
      diligent: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500',
      outline: 'border-2 border-border bg-transparent hover:bg-muted focus:ring-primary',
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
