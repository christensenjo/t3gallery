// import Link from "next/link";
// import Image from "next/image";

import { db } from "~/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = 'force-dynamic';

async function Images() {
  
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => [desc(model.id)],
  });
  
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {
        [...images].map((image, index) => (
          <div key={image.id + '-' + index} className="flex flex-col justify-center items-center">
            <img src={image.url} alt={`${image.name}`} className="w-96" />
            <p>{image.name}</p>
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
        <Images />
      </SignedIn>
    </main>
  );
}