import LecturerLoginForm from "./loginForm";


export default function lecturerLogin() {
  return (
    <section className="flex justify-center items-center w-full h-screen">
      <div className="shadow-md w-full md:w-[50%] py-[40px] px-[24px] border rounded-[20px]">
        <img
          className="w-[101px] h-[101px] border rounded-full m-auto"
          src="/images/lcu-logo.png"
          alt="logo"
        />
        <h2 className="text-center text-[20px] md:text-2xl font-semibold mt-3">
          Sign in to your account
        </h2>
        <p className="my-1 text-[16px] md:text-base text-center text-secondary">
          Enter your details to log in to your account
        </p>
        <LecturerLoginForm />
      </div>
    </section>
  );
}
