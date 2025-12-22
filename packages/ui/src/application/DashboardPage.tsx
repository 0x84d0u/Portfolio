"use client";

import { usePathname } from "next/navigation";
import { Text } from "../foundation/Typograpghy"
import { Section } from "./Section"
import Link from "next/link";
import { cn } from "../cn";
import { NavigationItem } from "./Navigation";


export type DashboardPageProps = {
   children?: React.ReactNode;
   title?: string;
   subtitle?: string;
   buttons?: React.ReactNode;
   navigation?: NavigationItem[];
};

// // Returns true if nav item should be active
// export const isNavigationItemActive = (item: NavigationItem, pathname: string) => {
//     if (item.isActive) return true;

//     if (item.matcher) return item.matcher.test(pathname);

//     // fallback: match path prefix
//     return pathname === item.path || pathname.startsWith(item.path + "/");
// };

// // Resolves dynamic title/subtitle based on regexes
// export const resolvePathnameText = (
//     value: string | Record<string, RegExp>,
//     pathname: string
// ): string | null => {
//     if (!value) return null;
//     if (typeof value === "string") return value;

//     for (const displayText in value) {
//         const regex = value[displayText];
//         if (regex?.test(pathname)) return displayText;
//     }

//     return null;
// };


export const DashboardPage = ({
   children,
   title,
   subtitle,
   buttons,
   navigation,
}: DashboardPageProps) => {

   const renderNavigation = () => {
      if (!navigation) return null;

      return (
         <div className="flex items-center justify-start">
            {navigation.map((item, key) => {
               //   const isActive = isNavigationItemActive(item, pathname);
               const isActive = false;
               return (
                  <Link
                     key={key}
                     href={item.path}
                     className={cn(
                        "transition-all text-muted h-9",
                        "font-semibold",
                        "flex items-center border-b-2 border-transparent px-4",
                        isActive
                           ? "text-accent border-accent"
                           : "hover:text-heading"
                     )}
                     target={item.newTab ? "_blank" : undefined}
                  >
                     {item.label}
                  </Link>
               );
            })}
         </div>
      );
   };

   return (
      <main className="flex-1 flex flex-col bg-slate-50">
         <div className="h-16 tablet:hidden" />
         {(title || subtitle || buttons|| navigation) && (
            <Section className="p-0 py-12 ">
               {(title || subtitle || buttons) && <div className="flex items-center justify-between">
                  {(title || subtitle) && <div>
                     {title && <Text as="h1" className="text-3xl text-heading font-semibold">{title}</Text>}
                     {subtitle && <Text as="p">{subtitle}</Text>}
                  </div>}
                  {buttons && <div>{buttons}</div>}
               </div>}
               {navigation && renderNavigation()}
            </Section>
         )}
         {children}
      </main>
   );
};