import LoginForm from "./login-form";

export default function Page() {

  return (
    <div className='bg-primary h-[100vh] w-[100vw] flex justify-center items-center'>
      <div className='text-center'>
        <p className='font-[700] text-[px] md:text-[36px] leading-[px] md:leading-[px] text-white'>POS MANAGEMENT LOGIN</p>
        <LoginForm />
      </div>
    </div>
  )
}
