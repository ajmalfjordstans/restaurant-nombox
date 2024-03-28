'use client'
import { useState } from 'react';

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState);
  };

  return (
    <div className="flex flex-col gap-4 mt-[50px]">
      {/* Username field */}
      <div className="h-[94px] w-full md:w-[611px] rounded-[20px] bg-white flex overflow-hidden">
        <span className="flex items-center pl-3 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="36" className='' fill="none" viewBox="0 0 36 38">
            <path
              stroke="#4E2DD8"
              strokeWidth="5"
              d="M25.5 9.5c0 3.747-3.235 7-7.5 7-4.264 0-7.5-3.253-7.5-7s3.236-7 7.5-7c4.265 0 7.5 3.253 7.5 7z"
            ></path>
            <path
              stroke="#FF4BAC"
              strokeWidth="5"
              d="M3 36c4.684-9.055 17.24-21.733 30 0"
            ></path>
          </svg>
        </span>
        <input type="text" placeholder="Username" className="pl-3 pr-10 border rounded-md border-none outline-none w-full" />
      </div>

      {/* Password field */}
      <div className="h-[94px] w-full max-w-[611px] rounded-[20px] bg-white flex overflow-hidden">
        <span className="flex items-center pl-3 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="37" height="42" fill="none" viewBox="0 0 37 45" >
            <rect width="32" height="23" x="2.5" y="19.5" stroke="#FF4BAC" strokeWidth="5" rx="7.5" ></rect>
            <circle cx="18" cy="28" r="4" fill="#C4C4C4"></circle>
            <path fill="#C4C4C4" d="M17 30H19V36H17z"></path>
            <path stroke="#4E2DD8" strokeWidth="5" d="M9.5 15C8.167 10.333 8.968 3 19 3c9.5 0 10.167 6.667 9.5 12"
            ></path>
          </svg>
        </span>
        <input type={passwordVisible ? 'text' : 'password'} placeholder="Password" className="pl-3 pr-10 border rounded-md border-none outline-none w-full" />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="flex items-center pr-3 text-gray-400 cursor-pointer"
        >
          {passwordVisible ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>

          )}
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
