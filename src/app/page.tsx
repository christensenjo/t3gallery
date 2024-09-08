// import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import ClientUploadDropzone from "./_components/clientuploaddropzone";
import { getMyImages } from "~/server/queries";
import Link from "next/link";

export const dynamic = 'force-dynamic';

async function Images() {

  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {
        images.map((image) => (
          <div key={image.id} className="flex flex-col justify-center items-center w-96 h-96">
            <Link href={`/img/${image.id}`}>
              <Image src={image.url} alt={image.name} style={{objectFit: "contain"}} width={384} height={384} />
            </Link>
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