import { useEffect } from "react";

export function useSEO({
  title = "Default title",
  description = "Default description",
}: {
  title: string;
  description: string;
}) {
  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
  }, [title, description]);
}
