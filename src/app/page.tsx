import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="relative h-screen">
        <Image
          src={"/madina1.jpg"}
          alt="madina"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Prophet Muhammad (PBUH) Said
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mb-8">
          “I leave you two things. As long as you follow these, you will never
          go astray: Allah s Book and the Sunnah of the Prophet.”
          <br />
          [Muwatta, Al-Qadr (Decree); 3]
        </p>
        <button className="bg-blue-500 text-b px-6 py-3 rounded-lg text-lg font-medium shadow-lg hover:bg-blue-600 transition duration-300">
          <Link href="blog"> View My Blog</Link>
        </button>
      </div>
    </div>
  );
}
