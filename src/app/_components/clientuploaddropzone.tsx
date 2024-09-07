"use client";

import { UploadDropzone } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

export default function ClientUploadDropzone(){
    const router = useRouter();

    return (
    <div className="flex flex-col justify-center items-center w-full mx-16 px-16">
        <UploadDropzone 
            endpoint="imageUploader" 
            className="bg-zinc-800 w-full cursor-pointer ut-button:bg-slate-500 ut-label:text-slate-500" 
            onClientUploadComplete={() => {
                router.refresh();  // Reruns the current route on the server, then sends down client but only what changed from current client
            }}
        />
    </div>
    );
}
