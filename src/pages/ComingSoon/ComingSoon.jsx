import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaDribbble, FaFacebookMessenger, FaInstagram, FaTelegramPlane, FaTwitch, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: "4",
    hours: "14",
    minutes: "15",
    seconds: "00",
  });

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      const now = new Date();
      const targetDate = new Date(now.getFullYear() + 1, 0, 1);
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({
          days: `${days}`,
          hours: `${hours}`,
          minutes: `${minutes}`,
          seconds: `${seconds}`,
        });
      }
    }, 1000);

    return () => clearInterval(countdownTimer); // Clean up the interval
  }, []);

  return (
    <div className="">
      <div className='bg-cover bg-center relative px-4 md:px-28 py-8 md:pb-40 h-screen' style={{ backgroundImage: "url('/bbgg.jpg')" }}>
      <Link to='/' className="text-white font-medium text-xl flex justify-start items-center gap-2"><FaAngleLeft className="text-xl"/> Back To Home</Link>
        <div className="flex justify-center items-center mt-24">
          <div className="text-center">
            <h1 className="text-6xl text-white font-bold">We're Coming Soon!</h1>
            <p className="text-white text-2xl font-medium my-5">We are working hard to bring you a new experience</p>
            <div className="flex justify-center items-center text-white gap-6 mt-8">
              <div>
                <span className="text-[#ff4f57] font-bold text-5xl">{timeRemaining.days}</span>
                <p className="text-lg font-medium mt-4">Days</p>
              </div>
              <div>
                <span className="text-[#e85acb] font-bold text-5xl">: {timeRemaining.hours}</span>
                <p className="text-lg font-medium mt-4">Hours</p>
              </div>
              <div>
                <span className="text-[#0dc4b9] font-bold text-5xl">: {timeRemaining.minutes}</span>
                <p className="text-lg font-medium mt-4 text-center">Minutes</p>
              </div>
              <div>
                <span className="text-[#529bfc] font-bold text-5xl">: {timeRemaining.seconds}</span>
                <p className="text-lg font-medium mt-4 text-center">Seconds</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center mt-6">
                <input type="email" placeholder="Enter Your Email here to tuned!" className="w-full px-4 py-4 rounded-tl-md rounded-bl-md" />
                <button className="bg-[#f24570] px-6 py-[16px] rounded-tr-md rounded-br-md"><FaTelegramPlane className="text-2xl text-white" /></button>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center gap-3 mt-8">
                <div className="bg-white rounded-md px-4 py-4 hover:rounded-full">
                  <FaTwitter className="text-primary text-2xl"/>
                </div>
                <div className="bg-white rounded-md px-4 py-4 hover:rounded-full">
                  <FaTwitch className="text-primary text-2xl"/>
                </div>
                <div className="bg-white rounded-md px-4 py-4 hover:rounded-full">
                  <FaInstagram className="text-primary text-2xl"/>
                </div>
                <div className="bg-white rounded-md px-4 py-4 hover:rounded-full">
                  <FaDribbble className="text-primary text-2xl"/>
                </div>
                <div className="bg-white rounded-md px-4 py-4 hover:rounded-full">
                  <FaFacebookMessenger className="text-primary text-2xl"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
