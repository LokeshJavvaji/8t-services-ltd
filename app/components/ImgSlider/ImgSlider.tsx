import Slider from "@/components/Slider/Slider";

export default function ImgSlider() {
    const images = [
        "/slide/im1.jpg",
        "/slide/im3.jpg",
        "/slide/im2.jpg",
        "/slide/im5.png",
        "/slide/im6.jpg",
        "/slide/im7.jpg",
        "/slide/im8.jpg",
    ];

    return (
        <div className="w-full">
            <Slider images={images} />
            <p></p>
        </div>
    );
}
