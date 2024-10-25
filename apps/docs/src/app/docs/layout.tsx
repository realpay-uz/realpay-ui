import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";

//
import { CustomMenuItem } from "@/components/custom-menu-item";
import { pageTree } from "@/lib/source";

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={pageTree}
      nav={{ title: "RealPay UI Documentation" }}
      sidebar={{
        components: {
          Item: CustomMenuItem,
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}
