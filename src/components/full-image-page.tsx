import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number; isModal?: boolean }) {
    const image = await getImage(props.id);
    if (!image) throw new Error("Image not found");

    const uploaderInfo = await clerkClient.users.getUser(image.userId);

    return (
        <div className="flex flex-col w-screen">
            <div className="flex flex-col gap-6 h-screen w-screen min-w-0 items-center text-white text-center">
                {props.isModal && (
                    <div className="text-sm italic mb-16"><p>Press Escape to Return to Gallery</p></div>
                )}
                <div className="flex flex-col h-full w-full gap-4 overflow-scroll items-center">
                    <h1 className="text-4xl max-w-screen-xl overflow-ellipsis">{image.name}</h1>
                    <div className="relative size-full">
                        <Image
                            src={image.url}
                            fill
                            priority
                            className="object-contain"
                            alt={image.name}
                        />
                    </div>
                    <ul className="flex flex-col justify-center mx-auto bg-white rounded-lg text-black p-8">
                        <li>Uploaded by: {uploaderInfo.fullName}</li>
                        <li>Created on: {image.createdAt.toLocaleDateString()}</li>
                        <li>Last updated at: {image.updatedAt?.toLocaleDateString()}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

