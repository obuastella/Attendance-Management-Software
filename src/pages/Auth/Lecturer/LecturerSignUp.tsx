import LecturerSignUpForm from "./SignUpForm";

export default function LecturerSignUp() {
  return (
    <section className="flex justify-center items-center w-full h-screen bg-gray-50">
      <div className="shadow-md w-full md:w-[50%] py-[40px] px-[24px] border rounded-[20px] bg-white">
        <img
          className="w-[101px] h-[101px] border rounded-full m-auto"
          src="/images/lcu-logo.png"
          alt="logo"
        />
        <h2 className="text-center text-[24px] md:text-2xl font-semibold mt-3">
          Lecturer Sign Up
        </h2>
        <p className="my-1 mb-2 text-[16px] md:text-base text-center text-secondary">
          Fill in your details to register as a lecturer
        </p>
        <LecturerSignUpForm />
      </div>
    </section>
  );
}
