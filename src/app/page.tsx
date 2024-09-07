// import Link from "next/link";
// import Image from "next/image";

import { db } from "~/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { UploadDropzone } from "~/utils/uploadthing";

export const dynamic = 'force-dynamic';

async function Images() {
  
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => [desc(model.id)],
  });
  
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {
        [...images].map((image, index) => (
          <div key={image.id + '-' + index} className="flex flex-col justify-center items-center max-w-96">
            <img src={image.url} alt={`${image.name}`} className="w-96" />
            <p className="truncate w-full text-center">{image.name}</p>
          </div>
        ))
      }
    </div>
  )
}

// This is a server component, and it ONLY runs on the server, not the client
export default async function HomePage() {

  return (
    <main className="">

      <SignedOut>
        <div className="flex flex-wrap gap-4 justify-center text-4xl items-center h-screen">Please sign in to view the gallery</div>
      </SignedOut>
      
      <SignedIn>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center w-full mx-16 px-16">
            <UploadDropzone endpoint="imageUploader" className="bg-zinc-800 w-full cursor-pointer ut-button:bg-slate-500 ut-label:text-slate-500" />
          </div>
          <Images />
        </div>
      </SignedIn>
    </main>
  );
}