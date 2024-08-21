import { SUBPAGE_CLASSES_DESCRIPTIONS } from "@/constants";
import Image from "next/image";

const Descriptions = () => {
  return (
    <section className="px-16 pt-16">
      <h3 className="text-3xl mb-2 text-center w-full ">What We Offer</h3>
      <p className="uppercase tracking-[1px] mb-16 text-center text-gray-700  ">
        take a closer look at our wide variety of classes
      </p>
      {/* 1st category */}
      <h4 className=" text-2xl mb-8 text-accent underline underline-offset-4">
        {SUBPAGE_CLASSES_DESCRIPTIONS[0].title}
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-8">
          <div>
            <h5 className="text-lg mb-2">
              {SUBPAGE_CLASSES_DESCRIPTIONS[0].subtitle1}
            </h5>
            <p className="text-gray-800 leading-relaxed max-w-[600px]">
              {SUBPAGE_CLASSES_DESCRIPTIONS[0].paragraph1}
            </p>
          </div>
          <div>
            <h5 className="text-lg mb-2">
              {SUBPAGE_CLASSES_DESCRIPTIONS[0].subtitle2}
            </h5>
            <p className="text-gray-800 leading-relaxed max-w-[600px]">
              {SUBPAGE_CLASSES_DESCRIPTIONS[0].paragraph2}
            </p>
          </div>
        </div>
        <div className="relative border border-black h-[420px] w-[600px]">
          <Image
            src={SUBPAGE_CLASSES_DESCRIPTIONS[0].image}
            alt={SUBPAGE_CLASSES_DESCRIPTIONS[0].alt}
            fill={true}
          />
        </div>
      </div>
      {/* 2nd category */}
      <h4 className=" text-2xl mb-8 text-accent mt-16 underline underline-offset-4">
        {SUBPAGE_CLASSES_DESCRIPTIONS[1].title}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative border border-black h-[420px] w-[600px]">
          <Image
            src={SUBPAGE_CLASSES_DESCRIPTIONS[1].image}
            alt={SUBPAGE_CLASSES_DESCRIPTIONS[1].alt}
            fill={true}
          />
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h5 className="text-lg mb-2">
              {SUBPAGE_CLASSES_DESCRIPTIONS[1].subtitle1}
            </h5>
            <p className="text-gray-800 leading-relaxed max-w-[600px]">
              {SUBPAGE_CLASSES_DESCRIPTIONS[1].paragraph1}
            </p>
          </div>
          <div>
            <h5 className="text-lg mb-2">
              {SUBPAGE_CLASSES_DESCRIPTIONS[1].subtitle2}
            </h5>
            <p className="text-gray-800 leading-relaxed max-w-[600px]">
              {SUBPAGE_CLASSES_DESCRIPTIONS[1].paragraph2}
            </p>
          </div>
        </div>
      </div>
      {/* 3rd category */}
      <h4 className=" text-2xl mb-8 text-accent mt-16 underline underline-offset-4">
        {SUBPAGE_CLASSES_DESCRIPTIONS[2].title}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-8">
          <div>
            <h5 className="text-lg mb-2">
              {SUBPAGE_CLASSES_DESCRIPTIONS[2].subtitle1}
            </h5>
            <p className="text-gray-800 leading-relaxed max-w-[600px]">
              {SUBPAGE_CLASSES_DESCRIPTIONS[2].paragraph1}
            </p>
          </div>
          <div>
            <h5 className="text-lg mb-2">
              {SUBPAGE_CLASSES_DESCRIPTIONS[2].subtitle2}
            </h5>
            <p className="text-gray-800 leading-relaxed max-w-[600px]">
              {SUBPAGE_CLASSES_DESCRIPTIONS[2].paragraph2}
            </p>
          </div>
        </div>
        <div className="relative border border-black h-[420px] w-[600px]">
          <Image
            src={SUBPAGE_CLASSES_DESCRIPTIONS[2].image}
            alt={SUBPAGE_CLASSES_DESCRIPTIONS[2].alt}
            fill={true}
          />
        </div>
      </div>
      {/* 4th category */}
      <h4 className=" text-2xl mb-8 text-accent mt-16 underline underline-offset-4">
        {SUBPAGE_CLASSES_DESCRIPTIONS[3].title}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative border border-black h-[420px] w-[600px]">
          <Image
            src={SUBPAGE_CLASSES_DESCRIPTIONS[3].image}
            alt={SUBPAGE_CLASSES_DESCRIPTIONS[3].alt}
            fill={true}
          />
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h5 className="text-lg mb-2">
              {SUBPAGE_CLASSES_DESCRIPTIONS[3].subtitle1}
            </h5>
            <p className="text-gray-800 leading-relaxed max-w-[600px]">
              {SUBPAGE_CLASSES_DESCRIPTIONS[3].paragraph1}
            </p>
          </div>
          <div>
            <h5 className="text-lg mb-2">
              {SUBPAGE_CLASSES_DESCRIPTIONS[3].subtitle2}
            </h5>
            <p className="text-gray-800 leading-relaxed max-w-[600px]">
              {SUBPAGE_CLASSES_DESCRIPTIONS[3].paragraph2}
            </p>
          </div>
        </div>
      </div>
      {/* 5th category */}
      <h4 className=" text-2xl mb-8 text-accent mt-16 underline underline-offset-4">
        {SUBPAGE_CLASSES_DESCRIPTIONS[4].title}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-8">
          <div>
            <h5 className="text-lg mb-2">
              {SUBPAGE_CLASSES_DESCRIPTIONS[4].subtitle1}
            </h5>
            <p className="text-gray-800 leading-relaxed max-w-[600px]">
              {SUBPAGE_CLASSES_DESCRIPTIONS[4].paragraph1}
            </p>
          </div>
          <div>
            <h5 className="text-lg mb-2">
              {SUBPAGE_CLASSES_DESCRIPTIONS[4].subtitle2}
            </h5>
            <p className="text-gray-800 leading-relaxed max-w-[600px]">
              {SUBPAGE_CLASSES_DESCRIPTIONS[4].paragraph2}
            </p>
          </div>
        </div>
        <div className="relative border border-black h-[420px] w-[600px]">
          <Image
            src={SUBPAGE_CLASSES_DESCRIPTIONS[4].image}
            alt={SUBPAGE_CLASSES_DESCRIPTIONS[4].alt}
            fill={true}
          />
        </div>
      </div>
      {/* 6th category */}
      <h4 className=" text-2xl mb-8 text-accent mt-16 underline underline-offset-4">
        {SUBPAGE_CLASSES_DESCRIPTIONS[5].title}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative border border-black h-[420px] w-[600px]">
          <Image
            src={SUBPAGE_CLASSES_DESCRIPTIONS[5].image}
            alt={SUBPAGE_CLASSES_DESCRIPTIONS[5].alt}
            fill={true}
          />
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h5 className="text-lg mb-2">
              {SUBPAGE_CLASSES_DESCRIPTIONS[5].subtitle1}
            </h5>
            <p className="text-gray-800 leading-relaxed max-w-[600px]">
              {SUBPAGE_CLASSES_DESCRIPTIONS[5].paragraph1}
            </p>
          </div>
          <div>
            <h5 className="text-lg mb-2">
              {SUBPAGE_CLASSES_DESCRIPTIONS[5].subtitle2}
            </h5>
            <p className="text-gray-800 leading-relaxed max-w-[600px]">
              {SUBPAGE_CLASSES_DESCRIPTIONS[5].paragraph2}
            </p>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-dashed border-accent mt-16"></div>
    </section>
  );
};

export default Descriptions;
