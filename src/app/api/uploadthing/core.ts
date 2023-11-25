import { db } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  pdfUploader: f({ pdf: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
      const { getUser } = getKindeServerSession();
      const user = await getUser();
      if (!user) throw new Error("Unauthorized");
      return { UserId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const user = await db.user.update({
        where: {
          UserId: metadata.UserId,
        },
        data: {
          File: {
            create: {
              name: file.name,
              url: file.url,
              key: file.key,
            },
          },
        },
      });

      if (!user) {
        return { sucess: false };
      }
      return { sucess: true };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
