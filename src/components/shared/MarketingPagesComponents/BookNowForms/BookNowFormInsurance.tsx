import React, { useState, useEffect } from "react";
import { fetchParams } from "@utils/global_utils";
interface FormValues {
  fullname: string;
  phoneNumber: string;
}

const Forms: React.FC<{ inSideModal: boolean; location: string }> = ({
  inSideModal,
  location,
}) => {
  const [showThankYou, setShowThankYou] = useState<boolean>(false);
  const [values, setValues] = useState<FormValues>({
    fullname: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState<FormValues>({
    fullname: "",
    phoneNumber: "",
  });
  const [spin, setSpin] = useState(false);
  const [leadLocation, setLeadLocation] = useState("");
  const [isWhite, setIsWhite] = useState<boolean>(true);

  useEffect(() => {
    // const stored = localStorage.getItem("location");
    setLeadLocation(location);
  }, []);

  const validateForm = () => {
    let isValid = true;
    const newErrors: FormValues = {
      fullname: "",
      phoneNumber: "",
    };
    if (values.fullname.trim() === "") {
      newErrors.fullname = "Fullname is required";
      isValid = false;
    } else if (!/^[a-zA-Z ]{2,30}$/.test(values.fullname)) {
      newErrors.fullname = "Invalid name format";
      isValid = false;
    }
    if (values.phoneNumber.trim() === "") {
      newErrors.phoneNumber = "Phone number is required";
      isValid = false;
    } else if (!/^(\+91|\+91-|0)?[6789]\d{9}$/.test(values.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "phoneNumber") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setValues({
        ...values,
        [name]: numericValue,
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
    validateForm();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      const { utm_source, utm_medium, utm_campaign, fbclid, gclid } =
        fetchParams(window.location.search);
      const leadSource =
        utm_source === "" && utm_medium === "" && utm_campaign === "";
      const gclead = gclid !== "";
      const fblead = fbclid !== "";
      setSpin(true);
      const asPath = "";
      const requestBody = JSON.stringify({
        name: values.fullname,
        mobile: values.phoneNumber,
        country_code: "+91",
        utm_source: leadSource
          ? gclead
            ? "Google"
            : fblead
            ? "Facebook"
            : "website"
          : utm_source,
        utm_medium: leadSource
          ? gclead || fblead
            ? ""
            : "website"
          : utm_medium,
        utm_campaign: leadSource
          ? gclead || fblead
            ? ""
            : "website"
          : utm_campaign,
        gclid: gclid,
        fbclid: fbclid,
        city: leadLocation,
        referer_url: window.location.href,
        type: "CONSULTATION",
      });

      fetch("https://api.vetic.in/lead/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
        credentials: "omit",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((responseData) => {
          if (responseData.status) {
            setValues({ fullname: "", phoneNumber: "" });
            setSpin(false);
            const openThankYouEvent = new CustomEvent("openThankYou", {});
            const closeNowEvent = new CustomEvent("closeBookNow", {});
            localStorage.setItem("trace", JSON.stringify(""));
            window.open(
              `/thankyou?mobile=${values.phoneNumber}`,
              "_self",
              "noopener,noreferrer"
            );
          }
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });

      setErrors({
        fullname: "",
        phoneNumber: "",
      });
    }
  };

  const isPhoneNumberValid =
    values.phoneNumber?.trim()?.length === 10 && values.fullname !== "";

  return (
    <>
      <div className={inSideModal ? "px-2" : "w-full h-full"}>
        {!showThankYou ? (
          <form onSubmit={handleSubmit} className=" ">
            <div className="mb-4 lg:mb-6">
              <label className="block text-sm lg:mb-2 font-medium text-zinc-700">
                Enter Your Name
              </label>
              <input
                type="text"
                placeholder="Fullname"
                name="fullname"
                value={values.fullname}
                onChange={handleInputChange}
                onBlur={handleInputChange}
                className="mt-1 block w-full px-3 py-2 lg:py-4 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
              {errors.fullname && (
                <p className="text-xs text-red-500">{errors.fullname}</p>
              )}
            </div>

            <div className="mb-4 lg:mb-6">
              <label className="block text-sm lg:mb-2 font-medium text-zinc-700">
                Enter Phone Number
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleInputChange}
                onBlur={handleInputChange}
                className="mt-1 block w-full px-3 py-2 lg:py-4 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
              {errors.phoneNumber && (
                <p className="text-xs text-red-500">{errors.phoneNumber}</p>
              )}
            </div>

            <button
              type="submit"
              className={`${
                isPhoneNumberValid
                  ? spin
                    ? "bg-primaryColor cursor-not-allowed flex align-center justify-center"
                    : "bg-primaryColor hover:bg-primaryColor"
                  : "bg-primaryColor cursor-not-allowed"
              } w-full book-now-form-button tracking-button flex items-center justify-center font-bricolage px-6 py-2 text-md border border-transparent text-base font-normal rounded-md text-white `}
            >
              {spin ? (
                <img
                  src="https://vetic-img.s3.ap-south-1.amazonaws.com/website/landing+page/leadsubmit.svg"
                  alt="lead"
                  className="w-6 h-6 bg-primaryColor rounded-2xl"
                />
              ) : (
                "Inquire Now"
              )}
            </button>
          </form>
        ) : (
          <div className="w-full flex justify-center items-center flex-col mt-8">
            <p className="flex justify-center items-center gap-x-2">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
              <span className="text-sm">
                {" "}
                Thank You for booking an appointment with us.
              </span>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Forms;
