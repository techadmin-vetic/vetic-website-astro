/* Interfaces and Utility functions. */

import type { TFAQ } from "@components/shared/CommonComponents/FAQComponent/shared_components_interface";

export const fetchParams = (searchVal: any) => {
  const queryParams = new URLSearchParams(searchVal);
  const utm_source = queryParams.get("utm_source");
  const utm_medium = queryParams.get("utm_medium");
  const utm_campaign = queryParams.get("utm_campaign");
  const utm_mobile = queryParams.get("utm_mobile");
  const utm_term = queryParams.get("utm_term");
  const fbclid = queryParams.get("fbclid");
  const gclid = queryParams.get("gclid");

  return {
    utm_source: utm_source || "",
    utm_medium: utm_medium || "",
    utm_campaign: utm_campaign || "",
    utm_mobile: utm_mobile || "",
    utm_term: utm_term || "",
    fbclid: fbclid || "",
    gclid: gclid || "",
  };
};

export const convertTo12HourFormat = (time24) => {
  let [hours, minutes] = time24.split(":");
  hours = parseInt(hours);
  let period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }
  return `${hours}:${minutes} ${period}`;
};

export const reduceFAQs = (
  faqData: Array<any>,
  questionKey: string,
  answerKey: string
): TFAQ[] => {
  return faqData.reduce((final, current) => {
    final.push({
      question: current[questionKey],
      answer: current[answerKey],
      isOpen: false,
    });
    return final;
  }, []);
};
