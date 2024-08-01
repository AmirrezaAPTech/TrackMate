import React, { useState, useRef, KeyboardEvent } from "react";

interface EmailVerifyingProps {
    setEmailFormShown: (x:boolean) => void;
    setEmailVerifyingShown: (x:boolean) => void;
}

const EmailVerifying: React.FC<EmailVerifyingProps> = ({setEmailFormShown, setEmailVerifyingShown}) => {
  const [verificationCode, setVerificationCode] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const handleInputChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) {
      return; // Only number
    }

    if (value.length > 1) {
      value = value.slice(-1);
    }
    const newVerificationCode = [...verificationCode];
    newVerificationCode[index] = value;
    setVerificationCode(newVerificationCode);

    if (value !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && verificationCode[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const paste = e.clipboardData.getData("text");
    if (!/^\d{6}$/.test(paste)) {
      return;
    }
    const newVerificationCode = paste.split("");
    setVerificationCode(newVerificationCode);

    newVerificationCode.forEach((val, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index]!.value = val;
      }
    });

    // Move focus to the last input field
    inputRefs.current[5]?.focus();
  };

  return (
    <div className="pt-4 flex flex-col gap-y-7">
    <p className='text-4xl font-semibold text-center mb-5'>Verify Email</p>
      <div className="w-full flex justify-between items-center">
        {verificationCode.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            pattern="\d*"
            className="w-12 h-12 max-[340px]:w-10 max-[340px]:h-10 lg:w-14 lg:h-14 text-center bg-[#222222] text-[#A238FF] text-2xl border border-white rounded-md focus:outline-none focus:border-[#0076b67a]"
          />
        ))}
      </div>
      <button className="w-full text-center h-14 rounded-xl transition-all duration-200 hover:bg-[#a238ffb0] bg-[#A238FF] shadow-custom">Submit</button>
      <div
        className="text-[#A1A1A1] font-extralight w-full flex justify-center items-center cursor-pointer"
        onClick={() => (
            setEmailFormShown(true), setEmailVerifyingShown(false))
        }
      >
        {/* <Image src={arrowLeft} alt="arrow icon" /> */}
        Change Email
      </div>
    </div>
  );
};

export default EmailVerifying;
