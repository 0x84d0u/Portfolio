import { IconName } from "../foundation/Icon"

export type NavigationItem = {
    label: string
    icon?: IconName

    path: string
    newTab?: boolean

    isActive?: boolean
    isDisabled?: boolean

    // matcher?: RegExp
}


// export const isNavigationItemActive = (item: NavigationItem, pathname: string) => {
//     if (item.isActive) return true;

//     const { matcher, path } = item;

//     if (!matcher) return pathname === path || pathname.startsWith(path + "/");

//     // Start with false
//     let match = false;

//     // Exact match has priority
//     if (matcher.exact && pathname === matcher.exact) return true;

//     // ExcludeExact has the highest priority to block
//     if (matcher.excludeExact && pathname === matcher.excludeExact) return false;

//     // StartWith match
//     if (matcher.startWith && pathname.startsWith(matcher.startWith)) match = true;

//     // Path-based match
//     if (matcher.path && path) {
//         if (pathname === path || pathname.startsWith(path + "/")) match = true;
//     }

//     return match;
// };

// export const resolveText = (
//     matcher: PathnameMatcher,
//     pathname: string,
//     value: string
// ): string | null => {
//     if (!matcher) return null;

//     let match = false;

//     // Exact match
//     if (matcher.exact && pathname === matcher.exact) match = true;

//     // Starts with match
//     if (matcher.startWith && pathname.startsWith(matcher.startWith)) match = true;

//     // Exclude exact path
//     if (matcher.excludeExact && pathname === matcher.excludeExact) match = false;

//     // Use path-based matching if needed
//     if (matcher.path && matcher.path === true) {
//         // This is usually for nav items; implement as needed
//         // Example: match = pathname === somePath || pathname.startsWith(somePath + "/")
//     }

//     // Return the text if match
//     return match ? value ?? null : null;
// };


// export const resolvePathnameText = (
//     value: string | Record<string, PathnameMatcher>,
//     pathname: string
// ): string | null => {
//     if (!value) return null;

//     // If it's a plain string, return it
//     if (typeof value === "string") return value;

//     // If it's a record keyed by display text
//     for (const displayText in value) {
//         const matcher = value[displayText];
//         if (!matcher) continue; // skip undefined

//         const text = resolveText(matcher, pathname, displayText);
//         if (text) return text;
//     }


//     return null;
// };