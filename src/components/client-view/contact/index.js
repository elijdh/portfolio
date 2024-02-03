"use client";

import { useEffect, useState } from "react";
import AnimationWrapper from "../animation-wrapper";
import { addData } from "@/services";

const controls = [
  {
    name: "name",
    placeholder: "Enter your name",
    type: "text",
    label: "Name",
  },
  {
    name: "subject",
    placeholder: "Enter a subject for your message",
    type: "text",
    label: "Subject",
  },
  {
    name: "email",
    placeholder: "Enter your email address",
    type: "text",
    label: "Email",
  },
  {
    name: "message",
    placeholder: "Enter your message to Elijah",
    type: "text",
    label: "Message",
  },
];

const initialFormData = {
  name: "",
  subject: "",
  email: "",
  message: "",
};

export default function ClientContactView() {
  const [formData, setFormData] = useState(initialFormData);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  async function handleSendMessage() {
    const res = await addData("contact", formData);
    console.log(res, "contact-res");

    if (res && res.success) {
      setFormData(initialFormData);
      setShowSuccessMessage(true);
    }
  }

  useEffect(() => {
    if (showSuccessMessage) {
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 1500);
    }
  }, [showSuccessMessage]);

  const isValidForm = () => {
    return formData &&
      formData.name !== "" &&
      formData.subject !== "" &&
      formData.email !== "" &&
      formData.message != ""
      ? true
      : false;
  };
  console.log(isValidForm(), "isValidForm");
  return (
    <div
      className="flex flex-col inner justify-center items-center h-screen sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="contact"
    >
      <AnimationWrapper className="py-6">
        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
            {"Contact Me".split(" ").map((item, index) => (
              <span
                className={`${
                  index === 1 ? "text-red-main" : "text-foreground"
                }`}
              >
                {item}{" "}
              </span>
            ))}
          </h1>
        </div>
      </AnimationWrapper>
      <div className="text-gray-500 relative">
        <div className="container px-5">
          <div className="w-full">
            <div className="flex flex-wrap -m-2">
              {controls.map((controlItem) =>
                controlItem.name === "message" ? (
                  <div className="p-2 w-full">
                    <label className="text-sm text-foreground">
                      {controlItem.label}
                    </label>
                    <textarea
                      id={controlItem.name}
                      name={controlItem.name}
                      placeholder={controlItem.placeholder}
                      value={formData[controlItem.name]}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [controlItem.name]: e.target.value,
                        })
                      }
                      className="w-full border-input border-[2px] bg-[#ffffff] rounded min-h-40 text-base outline-none text-[#000000] py-1 px-3 resize-y leading-6"
                    ></textarea>
                  </div>
                ) : (
                  <div className="p-2 w-full">
                    <label className="text-sm text-foreground">
                      {controlItem.label}
                    </label>
                    <input
                      id={controlItem.name}
                      name={controlItem.name}
                      placeholder={controlItem.placeholder}
                      value={formData[controlItem.name]}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [controlItem.name]: e.target.value,
                        })
                      }
                      className="w-full border-input border-[2px] bg-[#ffffff] rounded h-[32px] text-base outline-none text-[#000000] py-1 px-3 resize-none leading-6"
                    />
                  </div>
                )
              )}
              {showSuccessMessage && (
                <p className="text-[14px] font-bold my-[8px]">
                  Your message was sent!
                </p>
              )}
              <div className="p-2 w-full">
                <button
                  disabled={!isValidForm()}
                  onClick={handleSendMessage}
                  className="disabled:opacity-50 py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg text-2xl tracking-widest bg-red-main"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
