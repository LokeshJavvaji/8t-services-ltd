
'use client'
// components/ServicesSection.js
import Image from 'next/image';
import Link from 'next/link';

const ServicesSection = ({ active = true }: { active?: boolean }) => {
  const services = [
    {
      title: "Cloud Hosting",
      description: "Our cloud hosting services provide a secure and scalable infrastructure for your website or application. With 8T, you can trust that your data is safe and your site is always available.",
      images: [
        { image: "/cloud/c1.jpg", alt: "Cloud Hosting" },
        { image: "/cloud/c6.jpg", alt: "Cloud Hosting" },
        { image: "/cloud/c3.jpg", alt: "Cloud Hosting" },
      ],
      href: 'cloud-hosting'
    },
    {
      title: "Web Development",
      description: "Our web development services help you create a stunning online presence that drives results. From custom websites to web applications, our team of experts will work with you to bring your vision to life.",
      images: [
        { image: "/web/web6.jpg", alt: "Web Development" },
        { image: "/web/web1.jpg", alt: "Web Development" },
        { image: "/web/web3.jpg", alt: "Web Development" },
      ],
      href: 'web-dev'
    },
    {
      title: "Data Processing",
      description: "Our data processing services help you make sense of your data and drive business growth. With 8T, you can trust that your data is secure and accurate.",
      images: [
        { image: "/data/d4.jpg", alt: "Data Processing" },
        { image: "/data/d2.jpg", alt: "Data Processing" },
        { image: "/data/d3.jpg", alt: "Data Processing" },
      ],
      href: 'data-process'
    }
  ]

  return (
    <section className="set-image justify-center">
      {active && (
        <div className='container mx-auto'>
          <h1 className="mt-4 text-4xl font-bold">Transform Your Business with 8T Services</h1>
         <p className="mt-4  flex justify-between items-center text-xl text-black-600">At 8T, we empower businesses to succeed in the digital age by providing innovative, scalable, and secure solutions. Our team is dedicated to delivering exceptional services that meet your unique business needs.</p>
        </div>
      )}
      <div className="mx-auto px-4 py-12 pb-0 bg-cover text-black">
        <div className='container mx-auto'>
          <h2 className="text-4xl font-bold mb-10 text-red-500">Our Services</h2>
          {services.map((service, index) => (
            <div className="mb-16" key={index}>
              <h3 className="text-3xl font-bold mb-4">
                {active ? (
                  <Link href={service.href} className='hover:underline'>
                    {service.title}
                  </Link>
                ) : (
                  <span>
                    {service.title}
                  </span>
                )}
              </h3>
              <p className="mb-10 text-xl">
                {service.description}
              </p>
      
              <div className="flex flex-wrap justify-center">
                {service.images.map((image, index) => (
                  <div className="w-full md:w-1/3 xl:w-1/3 p-6" key={index}>
                    <Image src={image.image} alt={image.alt} layout="responsive" width={400} height={300} className="rounded-lg" />
                  </div>
                ))}
              </div>
              {active && (
                <div className="text-center mt-8">
                  <Link href={service.href} className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-md transition duration-300">
                    Learn More
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
