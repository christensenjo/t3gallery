import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default function ImageModal({
    params: { id: photoId },
}: {
    params: { id: string };
}) {
    const idAsNumber = Number(photoId);
    if (Number.isNaN(idAsNumber)) throw new Error("Invalid image id")

    return (
        <Modal>
            <FullPageImageView id={idAsNumber} />
        </Modal>
    );
}