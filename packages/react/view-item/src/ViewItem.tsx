"use client";

import {useMemo} from "react";
import type {ReactNode} from "react";

// helpers
import {classnames as cn} from "@hayitbek/realpay-utils";

// types
export type ViewItemProps<T extends React.ElementType> = {
  label: string;
  value: ReactNode;
  containerClassname?: string;
  labelClassname?: string;
  valueClassname?: string;
  emptyPrefix?: string;
  isLastElement?: boolean;
  as?: T;
} & Omit<React.ComponentProps<T>, "as">;

export const ViewItem = <T extends React.ElementType>(
  props: ViewItemProps<T>
) => {
  const {
    label,
    value,
    containerClassname,
    labelClassname,
    valueClassname,
    emptyPrefix = "-",
    isLastElement = false,
    as: Comp = "div",
  } = props;

  const validateValue = useMemo(() => {
    if (typeof value === "boolean") return String(value);
    else if (value === null || value === undefined || value === "")
      return emptyPrefix;
    else return value;
  }, [value, emptyPrefix]);

  return (
    <Comp
      className={cn(
        "flex items-center justify-between py-2",
        !isLastElement && "border-b border-[#F4F4F4]",
        containerClassname
      )}
    >
      <p className={cn("text-[#868686] text-sm leading-4", labelClassname)}>
        {label}
      </p>
      <p
        className={cn(
          "text-black font-medium text-sm w-1/2 text-end break-all",
          valueClassname
        )}
      >
        {validateValue}
      </p>
    </Comp>
  );
};
