"use client";

import type { ComponentProps } from "react";

// components
import { Button, type ButtonProps } from "./Button";

export interface BackButtonProps extends ButtonProps {
  customIcon?: JSX.Element;
  goBack?: () => void;
  onClickHandler?: "button" | "icon";
}

export const BackButton = (props: BackButtonProps) => {
  const { goBack, onClickHandler = "icon" } = props;

  return (
    <Button
      icon={
        props.customIcon ? (
          props.customIcon
        ) : (
          <ChevronLeftIcon
            onClick={() => {
              if (onClickHandler === "icon") {
                goBack?.();
              }
            }}
            className="w-4 h-4 mr-2"
          />
        )
      }
      variant="outline"
      onClick={() => {
        if (onClickHandler === "button") {
          goBack?.();
        }
      }}
      {...props}
    />
  );
};

const ChevronLeftIcon = (props: ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-arrow-left"
      {...props}
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
};
