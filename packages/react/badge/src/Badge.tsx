"use client";

import {cva, type VariantProps} from "class-variance-authority";
import * as React from "react";

import {classnames as cn} from "@hayitbek/realpay-utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-primary hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-background",
        success:
          "border-transparent bg-success text-success-foreground hover: bg-sucess/80",
        outlineDestructive: "text-destructive border-destructive",
        outlineSuccess: "text-success border-success",
        darkDestructive: "bg-[#75302E] text-white",
      },
      size: {
        small: "px-2.5 py-0.5",
        medium: "p-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "small",
    },
  }
);

export type BadgeProps<T extends React.ElementType> = Omit<
  React.ComponentProps<T>,
  "as"
> &
  VariantProps<typeof badgeVariants> & {
    as?: T;
  };

const Badge = <T extends React.ElementType = "div">(props: BadgeProps<T>) => {
  const {as, className, variant} = props;
  const Comp = as ? as : "div";
  return (
    <Comp className={cn(badgeVariants({variant}), className)} {...props} />
  );
};

export {Badge, badgeVariants};
