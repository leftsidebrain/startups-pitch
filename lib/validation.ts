import { z } from "zod";

export const formSchema = z.object({
  title: z.string().max(100),
  description: z.string().max(500),
  category: z.string().max(50).min(3),
  link: z
    .string()
    .url()
    .refine(async (url) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        const contentType = res.headers.get("content-type");
        return contentType?.startsWith("image/");
      } catch (error) {
        return false;
      }
    }),
  pitch: z.string().min(10),
});
