import Slider from "@/components/Slider/Slider";
import Image from "next/image";
import Link from "next/link";

const slides = [
  "/slide/im1.jpg",
  "/slide/im3.jpg",
  "/data/d1.jpg",
  "/cloud/c1.jpg",
  "/web/web6.jpg",
  "/cloud/c6.jpg",
  "/slide/im6.jpg",
];

export default function AboutUs() {
  return (
    <main>
      <section className="flex flex-col items-center">
        {/* Text Content Section */}
        <div className="container mx-auto max-w-4xl px-4 py-16 text-center md:max-w-6xl lg:max-w-7xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transforming Businesses with 8T Services
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            At 8T, we empower businesses to thrive in the digital age.
          </p>
          <Link
            href="/our-services"
            className="inline-flex items-center justify-center px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-colors"
            aria-label="Learn more about our services"
          >
            Learn More
          </Link>
        </div>
        <Slider images={slides} />
        <div className="w-full p-6 text-center mx-auto">
    
<p className="text-2xl">
To empower businesses to succeed in the digital age by providing innovative, scalable, and secure solutions. We strive to deliver exceptional services that meet the evolving needs of our clients, from cloud hosting and web development to data processing and portal development. Our goal is to help businesses thrive in a rapidly changing digital landscape, and to establish ourselves as a trusted partner for success.
</p>
        </div>
        <div className="w-full">
          <iframe
            className="w-full h-60 md:h-80 lg:h-96 rounded-lg"
            src="https://www.youtube.com/embed/BDdACdrs1vE?autoplay=1&loop=1&playlist=BDdACdrs1vE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <br></br>
      <section className="border shadow grid gap-4 py-5">
        <div className="container mx-auto p-4 px-10 grid gap-4">
          <div className="grid gap-3">
            <br></br>
            <h1 className="text-3xl font-bold">Our Mission</h1>
            <p className="text-xl">
              To empower businesses to succeed in the digital age by providing
              innovative, scalable, and secure solutions.
            </p>
          </div>
          <div className="grid gap-3">
            <h1 className="text-3xl font-bold">Our Vision</h1>
            <p className="text-xl">
              To be the trusted partner for businesses, helping them navigate
              the complexities of the digital landscape.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="/our-services"
            className="inline-flex items-center justify-center px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-colors"
            aria-label="Learn more about our services"
          >
            Learn More
          </Link>
        </div>
      </section>
      <section className="container mx-auto grid gap-3 my-4">
        <h1 className="flex text-center font-bold text-4xl text-blue-500">
          Why Choose 8T Services?
        </h1>
        <div className="container mx-auto p-4 px-10">
          <div className="flex justify-center grid gap-4">
            <div className="bg-white shadow-md p-4 rounded-md">
              <blockquote className="text-2xl">
                8T Services has been instrumental in helping us scale our
                business.
              </blockquote>
              <cite className="text-lg text-gray-500">- John D., CEO</cite>
            </div>
            <div className="bg-white shadow-md p-4 rounded-md">
              <blockquote className="text-2xl">
                Their expertise in cloud hosting and web development has been a
                game-changer for our company.
              </blockquote>
              <cite className="text-lg text-gray-500">- Emily C., CTO</cite>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-3">
          <div className="relative w-full h-[300px] md:w-[800px] md:h-[600px] lg:w-[1200px] lg:h-[700px]">
            <Image
              src="/team.jpg"
              alt="VPN security application on laptop and smartphone"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto grid gap-3 my-4">
        <h1 className="flex text-center font-bold text-4xl text-blue-500">
          Our Services
        </h1>
        <div className="container mx-auto p-4 px-10 grid gap-4">
          <div className="bg-white shadow-md p-4 rounded-md">
            <h2 className="text-2xl font-bold">Cloud Hosting Services</h2>
            <p className="text-lg">
              Our cloud hosting services provide secure, scalable, and reliable
              solutions for businesses of all sizes.
            </p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-md">
            <h2 className="text-2xl font-bold">Web Development Services</h2>
            <p className="text-lg">
              Our web development services help businesses build a strong online
              presence with custom websites and web applications.
            </p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-md">
            <h2 className="text-2xl font-bold">Data Processing Services</h2>
            <p className="text-lg">
              Our data processing services help businesses make sense of their
              data with expert analysis and insights.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
