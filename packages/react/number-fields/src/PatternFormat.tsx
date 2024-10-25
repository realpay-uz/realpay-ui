"use client";

import {type ComponentProps, type ReactNode, useEffect, useState} from "react";
import {PatternFormat, type PatternFormatProps} from "react-number-format";
import {classnames} from "@hayitbek/realpay-utils";

export interface BasePatternFormatProps extends PatternFormatProps {
  label?: string;
  labelClassname?: string;
  icon?: ReactNode;
  isLoading?: boolean;
  wrapperClassname: string;
  clearElement: ReactNode;
  isLoseFocus: boolean;
}

export const BasePatternFormat = (props: BasePatternFormatProps) => {
  const {
    name,
    label,
    icon,
    labelClassname = "",
    isLoading = false,
    wrapperClassname,
    clearElement,
    disabled,
    isLoseFocus = false,
    ...rest
  } = props;
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (isLoseFocus) setFocused(false);
  }, [isLoseFocus]);

  return (
    <>
      {label && (
        <label
          htmlFor={name}
          className={classnames(
            "text-mainGray text-[13px] dark:text-mainLightTextColor",
            labelClassname
          )}
        >
          {label}
        </label>
      )}
      <div
        className={classnames(
          "flex items-center justify-start gap-2 flex-shrink-0 h-[52px] px-3 bg-mainBgLight border border-inputLightBorderColor rounded-[12px] dark:border-inputDarkBorderColor dark:bg-mainBgDark",
          wrapperClassname,
          {
            "opacity-60 pointer-events-none": isLoading || disabled,
            "border-mainColor dark:border-mainColor": focused,
          }
        )}
      >
        {icon && icon}
        <PatternFormat
          autoComplete="off"
          name={name}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          {...rest}
        />
        {isLoading ? <Loader className="h-4 w-4 animate-spin" /> : null}
        {clearElement && !isLoading && clearElement}
      </div>
    </>
  );
};

const Loader = (props: ComponentProps<"svg">) => {
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
      className="lucide lucide-loader-circle"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};
