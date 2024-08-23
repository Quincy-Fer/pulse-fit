import Image from "next/image";

const Overview = () => {
  return (
    <section className="mx-auto my-10 px-8 ">
      <div className="flex flex-col mb-8 ">
        <h3 className="text-start text-3xl "> Join the PulseFit Community</h3>
        <p className="tracking-[1px]">
          Affordable Options for Individual, Family, and Group Memberships
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="max-w-[600px] leading-relaxed mb-4">
            At PulseFit, we offer three distinct membership tiers designed to
            fit your unique fitness goals and lifestyle. Whether you're just
            beginning your fitness journey or looking to take your training to
            the next level, we have the perfect option for you. Each tier
            provides access to our state-of-the-art facilities, expert-led
            classes, and a variety of exclusive benefits that make your PulseFit
            experience truly exceptional.
          </p>
          <ul>
            <li className="max-w-[600px] leading-relaxed mb-4">
              <span className="text-accent font-bold uppercase underline underline-offset-4">
                Essential Pulse{" "}
              </span>
              <br />
              Ideal for those who want the basics done right—standard gym access
              and a selection of virtual and in-person classes to keep you
              active.
            </li>
            <li className="max-w-[600px] leading-relaxed mb-4">
              <span className="text-accent font-bold uppercase underline underline-offset-4">
                Enhanced Pulse
              </span>
              <br />
              Offers enhanced features like 24/7 gym access, additional group
              classes, and premium amenities to elevate your fitness routine.
            </li>
            <li className="max-w-[600px] leading-relaxed mb-4">
              <span className="text-accent font-bold uppercase underline underline-offset-4">
                Ultimate Pulse
              </span>
              <br />
              Our most comprehensive plan, delivering all-inclusive access,
              personal training, advanced recovery tools, and exclusive perks
              for those who demand the best.
            </li>
          </ul>
        </div>
        <div className="relative border border-black w-[600px] h-[420px]">
          <Image
            src="/images/membership-intro.jpg"
            fill={true}
            alt="laughing members"
          />{" "}
        </div>
      </div>
    </section>
  );
};

export default Overview;
