'use client';

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import StarBorder from "@/components/StarBorder"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-accent-primary text-white hover:bg-accent-primary-dark shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/30",
        secondary: "bg-accent-secondary text-black hover:bg-accent-secondary-dark shadow-lg shadow-accent-secondary/20",
        outline: "bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white",
        ghost: "hover:bg-white/5 text-white",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-12 rounded-xl px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, suppressHydrationWarning, children, ...props }, ref) => {
    const getBorderColor = () => {
      switch (variant) {
        case 'secondary':
          return '#60A5FA'; // Blue-400
        case 'outline':
          return '#3B82F6'; // Blue-500
        case 'ghost':
          return '#3B82F6'; // Blue-500
        default:
          return '#3B82F6'; // Blue-500
      }
    };

    return (
      <StarBorder
        as="button"
        color={getBorderColor()}
        speed="5s"
        thickness={1}
        className={cn(buttonVariants({ variant, size }), className)}
        suppressHydrationWarning={suppressHydrationWarning}
        {...props}
        ref={ref}
      >
        {children}
      </StarBorder>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

