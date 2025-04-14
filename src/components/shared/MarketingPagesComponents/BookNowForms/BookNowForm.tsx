import { fetchParams } from "@utils/global_utils";
import React, { useState, useEffect } from "react";
interface FormValues {
  fullname: string;
  phoneNumber: string;
}

const Forms: React.FC<{ inSideModal: boolean }> = ({ inSideModal }) => {
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

  useEffect(() => {
    const stored = localStorage.getItem("location");
    setLeadLocation(stored ? JSON.parse(stored) : "Gurgaon");
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    validateForm();
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
  };

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
      <div className={inSideModal ? "px-10" : "w-full h-full"}>
        {!showThankYou ? (
          <form onSubmit={handleSubmit} className=" ">
            <input
              type="text"
              placeholder="Fullname"
              name="fullname"
              value={values.fullname}
              onChange={handleInputChange}
              onBlur={handleInputChange}
              className="w-full h-12 border border-gray-300 rounded-sm py-2 px-3 mb-3"
              required
            />
            {errors.fullname && (
              <p className="text-red-500">{errors.fullname}</p>
            )}
            <input
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleInputChange}
              onBlur={handleInputChange}
              className="w-full h-12 border border-gray-300 rounded-sm py-2 px-3 mb-3"
              required
            />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber}</p>
            )}
            <button
              type="submit"
              className={`${
                isPhoneNumberValid
                  ? spin
                    ? "bg-gray-400 cursor-not-allowed flex align-center justify-center"
                    : "bg-blue-950 hover:bg-blue-950"
                  : "bg-gray-400 cursor-not-allowed"
              } text-white py-2 px-4 rounded-md w-full mt-2 book-now-form-button`}
              disabled={!isPhoneNumberValid}
            >
              {spin ? (
                <img
                  src="https://vetic-img.s3.ap-south-1.amazonaws.com/website/landing+page/leadsubmit.svg"
                  alt="lead"
                  className="w-6 h-6 bg-gray-700 rounded-2xl"
                />
              ) : (
                "Book Now"
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
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-green-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
