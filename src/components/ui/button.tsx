import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap text-xs font-black uppercase tracking-wider ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 relative font-orbitron overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-2 border-primary/50 rounded-2xl shadow-[0_4px_12px_hsl(var(--primary)/0.4),0_0_40px_hsl(var(--primary)/0.2)] hover:shadow-[0_8px_24px_hsl(var(--primary)/0.6),0_0_60px_hsl(var(--primary)/0.4)] hover:translate-y-[-4px] hover:scale-105 active:translate-y-[-2px] active:scale-102 before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary-glow/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
        destructive: "bg-destructive text-destructive-foreground border-2 border-destructive/50 rounded-2xl shadow-[0_4px_12px_hsl(var(--destructive)/0.4)] hover:shadow-[0_8px_24px_hsl(var(--destructive)/0.6)] hover:translate-y-[-4px] hover:scale-105",
        outline: "border-2 border-primary/70 bg-transparent text-primary rounded-2xl hover:bg-primary/10 hover:border-primary shadow-[0_4px_12px_hsl(var(--primary)/0.2)] hover:shadow-[0_8px_24px_hsl(var(--primary)/0.4)] hover:translate-y-[-4px] hover:scale-105",
        secondary: "bg-accent text-accent-foreground border-2 border-accent/50 rounded-2xl shadow-[0_4px_12px_hsl(var(--accent)/0.4),0_0_40px_hsl(var(--accent)/0.2)] hover:shadow-[0_8px_24px_hsl(var(--accent)/0.6),0_0_60px_hsl(var(--accent)/0.4)] hover:translate-y-[-4px] hover:scale-105",
        ghost: "rounded-xl hover:bg-primary/10 hover:text-primary border-2 border-transparent hover:border-primary/50 hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline font-black",
      },
      size: {
        default: "h-14 px-10 py-4",
        sm: "h-12 px-8 text-[0.65rem]",
        lg: "h-16 px-14 text-sm",
        icon: "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
