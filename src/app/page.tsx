// import Link from "next/link";
// import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import ClientUploadDropzone from "./_components/clientuploaddropzone";
import { getMyImages } from "~/server/queries";

export const dynamic = 'force-dynamic';

async function Images() {

  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {
        images.map((image) => (
          <div key={image.id} className="flex flex-col justify-center items-center max-w-96">
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
          <ClientUploadDropzone />
          <Images />
        </div>
      </SignedIn>
    </main>
  );
}