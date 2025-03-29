import React, { useState, useEffect, useRef } from "react";

export default function Otp() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Allow only digits and handle empty input
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }

    if (!value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  return (
    <div>
      {otp.map((digit, i) => (
        <input
          key={i}
          ref={(el) => (inputsRef.current[i] = el)}
          type="text"
          placeholder="-"
          value={digit}
          onChange={(e) => handleChange(e, i)}
          maxLength={1}
          style={{ width: "40px", marginRight: "8px", textAlign: "center" }}
        />
      ))}
    </div>
  );
}
