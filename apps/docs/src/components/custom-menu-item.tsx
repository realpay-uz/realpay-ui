"use client";
import { buttonVariants } from "@realpay-ui/button";
import { PageTree } from "fumadocs-core/server";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const CustomMenuItem = ({ item }: { item: PageTree.Item }) => {
  const pathname = usePathname();
  const isActive = (url: string) => url === pathname;
  return (
    <Link
      href={item.url}
      className={buttonVariants({
        variant: isActive(item.url) ? "secondary" : "ghost",
        className: "w-full mt-2",
      })}
    >
      {item.name}
    </Link>
  );
};
