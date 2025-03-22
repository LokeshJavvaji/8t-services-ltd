
export default function Welcome() {
  return (
    <section className="grid md:flex-row items-center justify-center gap-8 p-6 container mx-auto">
      <div className="w-full text-center md:text-left">
        <h1 className="text-center text-3xl md:text-4xl gap-5 p-7 font-bold">
          Transforming Businesses with 8T Services
        </h1>
        <p className="mt-9 text-xl text-black-600">
          At 8T, we empower businesses to succeed in the digital age by providing innovative, scalable, and secure solutions. Our comprehensive suite of services includes cloud hosting, web development, data processing, portal development, and more.
        </p>
        <div className="w-full p-10">
          <iframe
            className="w-full h-60 md:h-80 lg:h-96 rounded-lg"
            src="https://www.youtube.com/embed/BDdACdrs1vE?autoplay=1&loop=1&playlist=BDdACdrs1vE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <p className="mt-9 text-xl text-black-600 text-center">
          With years of experience, we have developed a deep understanding of our client needs. We offer customized solutions, including cloud migration, web application development, data analytics, and portal development. Our commitment to quality extends to exceptional customer service, ensuring friendly, professional, and helpful interactions with our team.
        </p>
      </div>
    </section>
  );
}
