import Image from "next/image";
import ButtonJoin from "./ButtonJoin";

const CTABig = () => {
  return (
    <section className="mx-auto w-full">
      <div className="mt-10 p-16 bg-accent">
        <h2 className="text-center text-5xl text-white mb-10">
          Get Fit, Get Pulsing!
        </h2>
        <div className=" grid lg:grid-cols-2 gap-12">
          <div>
            <Image
              src="/images/membership.jpg"
              width={750}
              height={1000}
              alt="guy lifting weight"
              className="border-2 border-white"
            />
          </div>
          <div className="flex flex-col ">
            <p className="text-white text-lg tracking-widest leading-relaxed max-w-[600px]">
              Are you ready to make a real change? Whether you're looking to
              build strength, lose weight, or simply live a healthier lifestyle,
              our gym is the perfect place to start your journey. With
              state-of-the-art equipment, expert trainers, and a supportive
              community, you'll have everything you need to succeed.
            </p>
            <p className="text-white text-lg tracking-widest leading-relaxed max-w-[600px] mt-6">
              <span className="font-bold">Don't wait any longer!</span> Your
              best self is just a workout away. Join us today and take the first
              step toward the healthier, stronger, and more confident you.
            </p>
            <div className="text-center">
              <ButtonJoin
                text="Join Today !"
                containerStyles="text-lg text-white border-4 border-white mt-12 px-6 py-4 font-bold uppercase
                hover:bg-black transition-all duration-300  "
                href="/membership"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABig;
