"use client";

import {classnames as cn} from "@hayitbek/realpay-utils";
import {Slot} from "@radix-ui/react-slot";
import {cva, type VariantProps} from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/70 focus-visible:ring-primary",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive",
        outline:
          "border border-slate-200 bg-white hover:bg-slate-100 ring-slate-900 hover:text-slate-900 focus-visible:ring-slate-900 dark:border-input dark:bg-background dark:hover:bg-accent dark:hover:text-accent-foreground ring-accent",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-secondary",
        ghost:
          "hover:bg-accent hover:text-accent-foreground focus-visible:ring-accent",
        success:
          "bg-success text-success-foreground focus-visible:ring-success hover:bg-success/90",
        link: "text-primary underline-offset-4 hover:underline focus-visible:ring-primary",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "right" | "left";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading,
      disabled,
      children,
      icon,
      iconPosition = "left",
      ...props
    },
    ref
  ) => {
    if (asChild) {
      return (
        <Slot ref={ref} {...props}>
          <>
            {React.Children.map(
              children as React.ReactElement,
              (child: React.ReactElement) => {
                return React.cloneElement(child, {
                  className: cn(buttonVariants({variant, size}), className),
                  children: (
                    <>
                      {isLoading && (
                        <Loader
                          className={cn(
                            "h-4 w-4 animate-spin",
                            children && "mr-2"
                          )}
                        />
                      )}
                      {icon && iconPosition === "left" && <>{icon}</>}
                      {child.props.children}
                      {icon && iconPosition === "right" && <>{icon}</>}
                    </>
                  ),
                });
              }
            )}
          </>
        </Slot>
      );
    }
    return (
      <button
        className={cn(buttonVariants({variant, size, className}))}
        disabled={isLoading || disabled}
        ref={ref}
        {...props}
      >
        <>
          {isLoading && (
            <Loader
              className={cn("h-4 w-4 animate-spin", children && "mr-2")}
            />
          )}
          {icon && iconPosition === "left" && <>{icon}</>}
          {children}
          {icon && iconPosition === "right" && <>{icon}</>}
        </>
      </button>
    );
  }
);
Button.displayName = "Button";

const Loader = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="lucide lucide-loader-circle"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M21 12a9 9 0 11-6.219-8.56"></path>
    </svg>
  );
};

export {Button, buttonVariants};
export type {ButtonProps};
