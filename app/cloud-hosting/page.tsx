
import { ServicesPage } from "@/components/services/service"

export default function CloudHostingServices() {
  const data = [
    {
      type: "",
      image: '/cloud/c5.jpg',
      video:'',
      content: [
        {
          title: 'Scalable and Secure Cloud Hosting Solutions',
          description: "Our cloud hosting services provide virtual servers, storage, and networking resources to host websites, applications, and data, ensuring scalability, reliability, and security."
        }
      ]
    },
    {
      type: "keyFeatures",
      image: '/cloud/c2.jpg',
      video:'',
      content: [
        {
          title: "Scalability",
          description: "Resources can be scaled up or down as needed to match changing business demands."
        },
        {
          title: "Reliability",
          description: "Data is replicated across multiple servers for redundancy, ensuring high uptime and minimal downtime."
        },
        {
          title: "Security",
          description: "Data is protected with robust security measures, including firewalls, intrusion detection, and encryption."
        },
        {
          title: "Flexibility",
          description: "Users can choose from various operating systems, programming languages, and software frameworks to match their specific needs."
        },
      ],
    },
    {
      type: "Why Choose Our Cloud Hosting Services?",
      image: '/cloud/c6.jpg',
      video:'',
      content: [
        {
          title: "Improved Uptime and Reliability",
          description: "Our cloud hosting services ensure high uptime and minimal downtime, improving the reliability of your websites and applications."
        },
        {
          title: "Enhanced Security and Compliance",
          description: "Our robust security measures and compliance with industry standards ensure the protection of your data and applications."
        },
        {
          title: "Increased Scalability and Flexibility",
          description: "Our cloud hosting services provide scalable resources and flexible deployment options, allowing you to quickly adapt to changing business demands."
        },
      ],
    }
  ]

  return (
    <ServicesPage data={data} />
  )
}
