import Slider from "@/components/Slider/Slider";

export default function ImgSlider() {
    const images = [
  "/slide/im1.jpg",
  "/slide/im3.jpg",
  "/data/d1.jpg",
  "/cloud/c1.jpg",
  "/web/web6.jpg",
  "/cloud/c6.jpg",
  "/slide/im6.jpg",
];

    return (
        <div className="w-full">
            <Slider images={images} />
            <p></p>
        </div>
    );
}
