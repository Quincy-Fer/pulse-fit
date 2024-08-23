import ContactForm from "@/components/contact/ContactForm";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

const page = () => {
  return (
    <section className="bg-slate-100 mx-auto ">
      <div className="pt-36 pb-20 bg-accent">
        <h2 className="text-white text-center text-5xl">Contact Us</h2>
      </div>

      <div className="p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <ContactForm />
          {/* contact section */}
          <div className="flex flex-col">
            <h3 className="text-3xl  uppercase font-bold mb-10">
              Find us at: 
            </h3>
            <div className="flex gap-2 mb-4 ">
              <FaMapMarkerAlt className="text-2xl text-accent" />
              <p className="text-lg text-gray-800">Elysium 1 , FlavorTown</p>
            </div>
            <div className="flex gap-2 mb-4 ">
              <FaPhone className="text-2xl text-accent" />
              <p className="text-lg text-gray-800">123-456-789</p>
            </div>
            <div className="flex gap-2 ">
              <FaEnvelope className="text-2xl text-accent" />
              <a
                href="mailto:pulsefit_demo@gmail.com"
                className="text-lg hover:text-accent transition-all text-gray-800"
              >
                pulsefit_demo@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
