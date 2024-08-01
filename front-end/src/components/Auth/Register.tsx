import React, { useState } from "react";
import EmailVerifying from "./EmailVerifying";
import EmailForm from "./EmailForm";


const Register: React.FC = () => {
  const [emailFormShown, setEmailFormShown] = useState(true);
  const [emailVerifyingShown, setEmailVerifyingShown] = useState(false);
//   const [email, setEmail] = useState('');
//   const [verifyEmail, setVerifyEmail] = useState('');



  return (
    <div className="w-full lg:min-h-[75vh] min-h-[60vh] flex justify-center items-center py-48">
    <div className="bg-[#2A2C2C] min-[475px]:w-[30rem] w-full rounded-2xl min-[475px]:p-5 p-3 shadow-2xl"
      onClick={(e) => {
        e.stopPropagation();
      }}>
    {emailFormShown && <EmailForm setEmailFormShown={setEmailFormShown} setEmailVerifyingShown={setEmailVerifyingShown}/>}
     {emailVerifyingShown && <EmailVerifying setEmailFormShown={setEmailFormShown} setEmailVerifyingShown={setEmailVerifyingShown}/>}
    </div>
    </div>
  );
};

export default Register;