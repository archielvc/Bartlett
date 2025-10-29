import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive uppercase tracking-wider cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-black/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-[#F5F5F5] text-black hover:bg-[#E5E5E5]",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        nav: "bg-white text-black hover:bg-white/90",
      },
      size: {
        default: "h-11 px-6 py-3 rounded-full",
        sm: "h-9 px-4 py-2 rounded-full gap-1.5",
        lg: "h-12 px-8 py-4 rounded-full",
        icon: "size-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button(
  {
    className,
    variant,
    size,
    asChild = false,
    children,
    showCircle = false,
    ...props
  }: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
      showCircle?: boolean;
    },
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 600 }}
      {...props}
    >
      {children}
      {showCircle && (variant === "default" || variant === "nav") && (
        <span className={cn(
          "ml-1 w-2 h-2 rounded-full inline-block",
          variant === "nav" ? "bg-black" : "bg-white"
        )} />
      )}
    </Comp>
  );
}

const ButtonWithRef = React.forwardRef(Button);

export { ButtonWithRef as Button, buttonVariants };