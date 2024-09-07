// import Link from "next/link";
// import Image from "next/image";

import { db } from "~/server/db";

export const dynamic = 'force-dynamic';

// This is a server component, and it ONLY runs on the server, not the client
export default async function HomePage() {
  
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => [desc(model.id)],
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          [...images].map((image, index) => (
            <div key={image.id + '-' + index} className="flex flex-col justify-center items-center p-4">
              <img src={image.url} alt={`${image.name}`} className="w-96" />
              <p>{image.name}</p>
            </div>
          ))
        }
      </div>
    </main>
  );
}