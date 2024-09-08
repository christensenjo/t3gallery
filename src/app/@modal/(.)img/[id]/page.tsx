import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function PhotoModal({
    params: { id: photoId },
}: {
    params: { id: string };
}) {
    const idAsNumber = Number(photoId);
    if (Number.isNaN(idAsNumber)) throw new Error("Invalid image id")
    
    const image = await getImage(idAsNumber);
    if (!image) throw new Error("Image not found");

    return (
        <div>
            <Image src={image.url} alt={image.name} width={384} height={384} />
        </div>
    );
}