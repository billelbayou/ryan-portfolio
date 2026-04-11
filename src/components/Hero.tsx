import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-12 pb-24 lg:pt-24 lg:pb-32">
      {/* Decorative Adobe Icons */}
      <div className="absolute top-16 right-10 lg:top-1/4 lg:right-1/4 animate-[pulse_4s_ease-in-out_infinite] z-0">
        <Image
          src="/PremierePro.png"
          alt="Premiere Pro"
          width={70}
          height={70}
          className="lg:w-[130px] lg:h-[130px] transform -rotate-12 drop-shadow-[0_0_20px_rgba(204,102,255,0.3)]"
        />
      </div>
      <div className="absolute top-32 right-2 lg:top-1/3 lg:right-[10%] animate-[pulse_5s_ease-in-out_infinite] z-0">
        <Image
          src="/AfterEffect.png"
          alt="After Effects"
          width={45}
          height={45}
          className="lg:w-[80px] lg:h-[80px] transform rotate-12 drop-shadow-[0_0_20px_rgba(153,153,255,0.3)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start pt-10">
            {/* Name with Gradient Underline */}
            <div className="inline-block mb-6">
              <span className="text-sm tracking-[0.15em] uppercase mb-2 block font-light text-white">
                Jimmy Turner
              </span>
              <div className="h-[2px] w-full bg-gradient-to-r from-red-600 via-green-500 to-blue-600"></div>
            </div>

            {/* Main Heading */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1.05] tracking-wider mb-8 text-white"
              style={{ fontFamily: "var(--font-orbitron, sans-serif)" }}
            >
              Professional
              <br />
              Video Editor
            </h1>

            {/* Subtitle */}
            <p
              className="text-gray-300 text-lg md:text-xl font-light mb-10 tracking-wide"
              style={{ fontFamily: "var(--font-body, sans-serif)" }}
            >
              Making Your Videos Look More Cool.
            </p>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="bg-[#7800FF] hover:bg-[#6500D1] text-white font-semibold tracking-widest text-sm md:text-base py-4 px-10 transition-colors uppercase inline-block"
              style={{ fontFamily: "var(--font-orbitron, sans-serif)" }}
            >
              Lets Talk
            </Link>
          </div>

          {/* Right Column - Image Placeholder for Ryan */}
          <Image
            src="/person.png"
            alt=""
            className="object-cover w-full h-full"
            width={80}
            height={80}
          />
        </div>
      </div>
    </section>
  );
}
