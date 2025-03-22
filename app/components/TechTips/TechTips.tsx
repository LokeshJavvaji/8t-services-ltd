
import TechnologyCard from "@/components/TechCard/TechCard";

export default function TechTips() {
  const techTips = [
    {
      imageSrc: "/imp/eco1.jpg",
      title: "Benefits of Cloud Hosting with 8T",
      description: "Discover the advantages of hosting your website or application with 8T's secure and scalable cloud hosting solutions.",
      date: "March 15, 2024",
      readTime: "1 min",
    },
    {
      imageSrc: "/imp/div1.jpg",
      title: "Unlock the Power of Data Processing with 8T",
      description: "Learn how 8T's data processing services can help you make sense of your data and drive business growth.",
      date: "February 20, 2024",
      readTime: "1 min",
    },
    {
      imageSrc: "/imp/imp3.jpg",
      title: "Transform Your Online Presence with 8T's Website Solutions",
      description: "Explore how 8T's website development and design services can help you create a stunning online presence that drives results.",
      date: "January 25, 2024",
      readTime: "2 mins",
    },
  ];

  return (
    <section className="grid md:flex-row items-center justify-center gap-8 p-6 container mx-auto">
      
        <p className="text-center text-3xl md:text-4xl gap-15 p-10 font-bold" style={{ color: "red" }}>
          EXPERIENCE THE POWER OF 8T SERVICES
        </p>
        <div className="w-full flex-col lg:grid lg:grid-cols-3 gap-7 justify-center">
        {techTips.map((cardData, index) => (
          <TechnologyCard key={index} data={cardData} />
        ))}
      </div>
      <ul className="text-xl list-inside">
        <li>
          • Secure and Scalable Cloud Hosting: 8T's cloud hosting solutions provide a secure and scalable infrastructure for your website or application.
        </li>
        <li>
          • Expert Data Processing: 8T's data processing services help you make sense of your data, identify trends, and drive business growth.
        </li>
        <li>
          • Stunning Website Solutions: 8T's website development and design services create a stunning online presence that drives results and grows your business.
        </li>
        <li>
          • Reliable and Efficient Solutions: 8T's services are designed to provide reliable and efficient solutions that meet your business needs and drive growth.
        </li>
        <li>
          • Exceptional Customer Support: 8T's customer support team is dedicated to providing exceptional support and ensuring your satisfaction with our services.
        </li>
      </ul>
    </section>
  );
}
