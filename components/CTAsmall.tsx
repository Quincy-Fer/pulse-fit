import ButtonJoin from "./ButtonJoin";

const CTAsmall = () => {
  return (
    <section className="p-8 w-full mx-auto bg-accent flex justify-center">
      <div className="flex flex-col justify-center ">
        <h3 className="text-center text-3xl text-white">
          Ready to Get Started?
        </h3>
        <p className="text-center mt-4 text-base uppercase text-white tracking-[3px] mb-4 ">
          Reach out and let's create a rhythm that drives your success.
        </p>
        <div className="self-center">
          <ButtonJoin
            text="Get In Touch"
            href="/contact"
            containerStyles="border border-white px-8 py-3 text-white uppercase font-bold transition-all
            hover:bg-black hover:border-black duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default CTAsmall;
