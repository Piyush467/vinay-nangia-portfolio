import React, { useState } from "react";
import Heading from "../components/shared/Heading";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    introduction: "",
    purpose: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-[86.5%] mx-auto min-h-full py-12 items-start flex-col flex gap-12">
      <div className="w-fit mx-auto">
        <Heading title="Contact" />
      </div>

      {/* contact form */}
      <section className="w-full max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex gap-4 flex-col md:flex-row w-full ">
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="name" className="text-neutral-900 font-medium ">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                onChange={handleChange}
                className="w-full px-4 py-2 text-sm rounded-xl border border-neutral-300"
                required
              />
            </div>

            <div className="flex w-full flex-col gap-2">
              <label htmlFor="contact" className="text-neutral-900 font-medium">
                Contact (Email and Phone)
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                placeholder="Enter your email and phone number"
                onChange={handleChange}
                className="w-full px-4 py-2 text-sm rounded-xl border border-neutral-300"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="introduction"
              className="text-neutral-900 font-medium"
            >
              Self Introduction
            </label>
            <textarea
              id="introduction"
              name="introduction"
              value={formData.introduction}
              onChange={handleChange}
              placeholder="Enter your self introduction"
              rows={3}
              className="w-full px-4 py-2 text-sm  rounded-xl border border-neutral-300 resize-none  min-h-[104px]"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="purpose" className="text-neutral-900 font-medium">
              Purpose of Contact
            </label>
            <textarea
              id="purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              rows={4}
              placeholder="Enter your purpose of contact"
              className="w-full px-4 py-2 text-sm rounded-xl border border-neutral-300 resize-none  min-h-[104px]"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-neutral-800 transition-colors duration-200"
          >
            Send
          </button>
        </form>
      </section>

      <div className="py-8 px-4 rounded-xl flex flex-col md:flex-row gap-4 md:items-center md:justify-around w-full bg-neutral-300">
        <p className="text-base bg-neutral-200 py-2 px-4 rounded-lg text-neutral-700 font-medium">
          <span className="font-bold">Phone:</span> +91 9639184798
        </p>
        <p className="text-base bg-neutral-200 py-2 px-4 rounded-lg text-neutral-700 font-medium">
          <span className="font-bold">Email:</span> vinaynangia@gmail.com
        </p>
      </div>
    </div>
  );
}
