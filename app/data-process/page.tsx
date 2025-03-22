
import { ServicesPage } from "@/components/services/service"

export default function DataProcessingServices() {
  const data = [
    {
      type: "Data Processing Services",
      image: '/data/d4.jpg',
      video:'',
      content: [
        {
          title: 'Unlocking Insights with Data Processing',
          description: "Our data processing services help you unlock insights from your data, making informed decisions to drive business growth."
        }
      ]
    },
    {
      type: "keyFeatures",
      image: '/data/d1.jpg',
      video:'',
      content: [
        {
          title: "Data Cleaning",
          description: "We remove errors, duplicates, and inconsistencies from your data, ensuring accuracy and quality."
        },
        {
          title: "Data Transformation",
          description: "Our data transformation services convert your data into a format suitable for analysis, enabling you to make data-driven decisions."
        },
        {
          title: "Data Analysis",
          description: "We analyze your data to identify patterns, trends, and correlations, providing actionable recommendations to drive business growth."
        },
        {
          title: "Data Visualization",
          description: "We present your data in a clear and concise manner using charts, graphs, and other visualizations, facilitating understanding and decision-making."
        },
      ],
    },
    {
      type: "Why Choose Our Data Processing Services?",
      image: '/data/d3.jpg',
      video:'',
      content: [
        {
          title: "Expertise and Experience",
          description: "Our team of data processing experts has years of experience in handling complex data projects, ensuring accurate and reliable results."
        },
        {
          title: "Customized Solutions",
          description: "We provide customized data processing solutions tailored to your specific business needs, ensuring you get the insights you need to drive growth."
        },
        {
          title: "Cost-Effective",
          description: "Our data processing services are cost-effective, helping you achieve your business goals without breaking the bank."
        },
      ],
    }
  ]

  return (
    <ServicesPage data={data} />
  )
}
