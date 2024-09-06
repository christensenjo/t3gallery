// import Link from "next/link";
// import Image from "next/image";


const mockUrls = [
  "https://utfs.io/f/d9dc58cb-df28-414d-a616-b90e80f85d05-n5ho2k.png",
  "https://utfs.io/f/2299ffc0-7b94-4048-af23-fbbe0b1da8fc-1ehd0y.png",
  "https://utfs.io/f/9b44ebc1-664b-4a1c-8f7b-94e755e5896d-13pzu9.png",
  "https://utfs.io/f/33c44614-151d-43b6-9f65-b9ec07725b52-xb9wj.png"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          [...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image) => (
            <div key={image.id}>
              <img src={image.url} alt={`Image ${image.id}`} className="w-96 p-4" />
            </div>
          ))
        }
      </div>
    </main>
  );
}