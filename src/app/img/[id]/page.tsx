import FullPageImageView from "~/components/full-image-page";

export default function ImagePage({
    params: { id: photoId },
}: {
    params: { id: string };
}) {
    const idAsNumber = Number(photoId);
    if (Number.isNaN(idAsNumber)) throw new Error("Invalid image id")

    return <FullPageImageView id={idAsNumber} />;
}