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

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWhite((prevIsWhite) => !prevIsWhite); // Toggle between white and yellow every interval
    }, 500); // Interval duration in milliseconds
    return () => clearInterval(interval);
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
    console.log(e, "window.location.search");
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
              <label className="block text-sm font-secondaryFont lg:mb-2 font-medium text-zinc-700">
              Your Name
              </label>
              <input
                type="text"
                placeholder="Fullname"
                name="fullname"
                value={values.fullname}
                onChange={handleInputChange}
                onBlur={handleInputChange}
                className="mt-1 block w-full px-3 py-2 lg:py-3 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
              {errors.fullname && (
                <p className="text-xs text-red-500">{errors.fullname}</p>
              )}
            </div>

            <div className="mb-4 lg:mb-6">
              <label className="block text-sm font-secondaryFont lg:mb-2 font-medium text-zinc-700">
              Phone Number
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleInputChange}
                onBlur={handleInputChange}
                className="mt-1 block w-full px-3 py-2 lg:py-3 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    ? "bg-buttonColor cursor-not-allowed flex align-center justify-center"
                    : "bg-buttonColor hover:bg-buttonColor"
                  : "bg-buttonColor cursor-not-allowed"
              } w-full book-now-form-button tracking-button flex items-center justify-center font-secondaryFont px-6 py-2 text-md border border-transparent text-base font-normal rounded-xl text-white `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={` w-4 h-4 mr-3 ${
                  isWhite ? "text-white" : "text-yellow-400"
                }`}
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                  clipRule="evenodd"
                />
              </svg>

              {spin ? (
                <img
                  src="https://vetic-img.s3.ap-south-1.amazonaws.com/website/landing+page/leadsubmit.svg"
                  alt="lead"
                  className="w-6 h-6 bg-primaryColor rounded-2xl"
                />
              ) : (
                "Book Appointment"
              )}
            </button>
            <div className="flex justify-center items-center font-bricolage font-light text-xs mt-2">
           
              4.9 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3 w-3 mr-1 text-yellow-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                ></path>
              </svg>
              in{" "}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 48 48"
                className="w-3 h-3 mx-1"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Ratings | 125K+ Happy Pet Parents
            </div>
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
