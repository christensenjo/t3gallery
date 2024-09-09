import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
    const image = await getImage(props.id);
    if (!image) throw new Error("Image not found");

    return (
        <div className="flex h-screen w-screen min-w-0 items-center justify-center text-white">
            <div className="relative size-full">
                <Image
                    src={image.url}
                    fill
                    priority
                    className="object-contain"
                    alt={image.name}
                />
            </div>
            <div className="w-64 flex flex-col items-center justify-center bg-gray-700 h-full">
                <div className="text-xl font-bold">{image.name}</div>
            </div>
        </div>
    );
}

