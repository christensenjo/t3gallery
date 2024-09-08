import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
    const image = await getImage(props.id);
    if (!image) throw new Error("Image not found");

    return <Image src={image.url} alt={image.name} width={384} height={384} />;
}