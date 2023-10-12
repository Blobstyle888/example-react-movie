"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type TPageName = "Movie" | "Favorite" | "NotFound";

type TPage = {
  pageName: TPageName;
};

const useCurrentPage = (): TPage => {
  const pathName = usePathname();
  const page = useMemo(() => {
    switch (pathName) {
      case "/movie":
        return "Movie";
      case "/favorite":
        return "Favorite";
      default:
        return "NotFound";
    }
  }, [pathName]);

  return { pageName: page };
};

export default useCurrentPage;
