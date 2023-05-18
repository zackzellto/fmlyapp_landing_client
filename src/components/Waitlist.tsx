import React, { FormEvent, useState } from "react";

interface WaitlistProps {
  onSubmit: (email: string) => void;
}

const Waitlist: React.FC<WaitlistProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(email);
    setEmail("");
  };

  return (
    <div className="flex flex-col drop-shadow-xl items-center justify-center mt-4 opacity-0 animate-fade-in opacity-100 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-96 lg:w-[500px] relative  rounded-xl px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-[#48ddc9d2] shadow-lg hover:bg-[#239F89] w-full text-black  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Join Waitlist
          </button>
        </div>
      </form>
    </div>
  );
};

export default Waitlist;
