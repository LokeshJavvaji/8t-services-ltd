
import { ServicesPage } from "@/components/services/service"

export default function WebDevelopmentServices() {
  const data = [
    {
      type: "Web Development Services",
      image: '/web/web5.jpg',
      video:'',
      content: [
        {
          title: 'Custom Web Development Solutions',
          description: "Our web development services provide custom solutions tailored to your business needs, from simple websites to complex web applications."
        }
      ]
    },
    {
      type: "keyFeatures",
      image: '/web/web2.jpg',
      video:'',
      content: [
        {
          title: "Custom Design",
          description: "Websites are designed to meet specific business needs and branding, ensuring a unique and professional online presence."
        },
        {
          title: "Responsive Design",
          description: "Websites are optimized for various devices and screen sizes, ensuring a seamless user experience across all platforms."
        },
        {
          title: "Functionality",
          description: "Websites can include features like e-commerce integration, contact forms, and social media integration, enhancing user engagement and conversion rates."
        },
        {
          title: "Security",
          description: "Websites are built with security measures to protect against hacking and data breaches, ensuring the integrity and confidentiality of sensitive data."
        },
      ],
    },
    {
      type: "Why Choose Our Web Development Services?",
      image: '/web/web3.jpg',
      video:'',
      content: [
        {
          title: "Expertise and Experience",
          description: "Our team of expert web developers has years of experience in designing and developing custom web solutions."
        },
        {
          title: "Customized Solutions",
          description: "We provide customized web development solutions tailored to your specific business needs and goals."
        },
        {
          title: "Cost-Effective",
          description: "Our web development services are cost-effective, helping you achieve your online goals without breaking the bank."
        },
      ],
    }
  ]

  return (
    <ServicesPage data={data} />
  )
}
