import MembershipTable from "@/components/membership/MemberShipTable";
import SignUpForm from "@/components/membership/SignUpForm";

const page = () => {
  return (
    <section className="bg-slate-100 mx-auto ">
      <div className="pt-36 pb-20 bg-accent">
        <h2 className="text-white text-center text-5xl">Memberships</h2>
      </div>
      <div className="flex flex-col mx-auto justify-center ">
        <MembershipTable />
      </div>
      <div className="mb-4 px-8 mx-auto">
        <SignUpForm />
      </div>
    </section>
  );
};

export default page;
