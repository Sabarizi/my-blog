import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">About</h1>
      <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
        Welcome to “Life in Madinah,” a captivating lifestyle blog chronicling
        the remarkable journey of Fahim, a digital nomad, and Dr. Safi, a
        cardiologist in Madinah. Hailing from the vibrant land of Bangladesh,
        Fahim’s adventurous spirit led him to make a life-altering decision in
        2020 – to uproot his existence and settle in the enchanting city of
        Madinah, alongside his cherished family.
      </p>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <Image
            src={"/view.jpg"}
            alt="Madina"
            height={300}
            width={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            After meticulous planning and unwavering determination, Fahim’s
            dream materialized in July 2022, as he embarked on his long-awaited
            expedition to Madinah. This blog is a captivating narrative of his
            transformational voyage – an open book sharing the highs, lows, and
            invaluable insights gained during this remarkable transition.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col md:flex-row-reverse items-center mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <Image
            src={"/view1.jpg"}
            alt="Madina"
            height={300}
            width={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            From the intricacies of adapting to a new culture and overcoming the
            initial shock, to the exhilaration of being able to visit the
            illustrious Masjid An Nabawi on a daily basis, Fahim’s storytelling
            paints a vivid tapestry of his experiences. Join us as we delve
            into his challenges, triumphs, and the unique flavor of his everyday
            life in Madinah.
          </p>
        </div>
      </div>

      {/* Additional Section */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <Image
            src={"/view2.jpeg"}
            alt="Madina"
            height={300}
            width={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-semibold mb-4">Join Our Journey</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Experience the beauty, spirituality, and culture of Madinah through
            the eyes of Fahim. Be inspired, learn, and connect with the essence
            of this holy city as he continues to share his extraordinary
            experiences and profound reflections.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
