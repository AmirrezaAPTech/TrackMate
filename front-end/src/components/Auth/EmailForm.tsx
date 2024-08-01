import React, { useState } from 'react';
import googleIcon from '../../Img/google.svg';

interface EmailFormProps {
  setEmailFormShown: (x: boolean) => void;
  setEmailVerifyingShown: (x: boolean) => void;
}

const EmailForm: React.FC<EmailFormProps> = ({ setEmailFormShown, setEmailVerifyingShown }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleContinue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = /\S+@\S+\.\S+/.test(email);
    if (isValid) {
      setEmailFormShown(false);
      setEmailVerifyingShown(true);
    } else {
      console.log('Invalid email');
    }
  };

  return (
    <>
      <p className='text-4xl font-semibold text-center mb-5'>Log In</p>
      <form className="space-y-3" onSubmit={handleContinue}>
        <div className="mt-4 mb-3">
          <label htmlFor="emailInput" className="text-left block w-full pl-1 pb-1">Email</label>
          <input
            type="email"
            id="emailInput"
            required
            className="w-full h-14 bg-[#444444] rounded-xl"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button
          type='submit'
          className="w-full hover:bg-[#a238ffb0] bg-[#A238FF] shadow-custom text-center h-14 rounded-xl transition-all duration-200"
        >
          Continue
        </button>
        <div className="flex items-center py-6">
          <div className="flex-grow border-t border-[#494949]"></div>
          <span className="mx-3 text-light">or</span>
          <div className="flex-grow border-t border-[#494949]"></div>
        </div>
        <div>
          <button
            className={`flex w-full items-center justify-center gap-x-2 rounded-xl hover:bg-[#3535358e] bg-[#444444] p-5 text-login transition-all duration-300`}
          >
            Sign Up With Google
            <img src={googleIcon} alt="googleImg" />
          </button>
        </div>
      </form>
    </>
  );
};

export default EmailForm;
