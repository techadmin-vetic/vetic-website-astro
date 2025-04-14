import { useEffect } from "react";
// import ConversionAPI from "@pages/apifolder/conversion_api"
import { postConversionAPI } from "src/library/apifolder/conversion_api";
const TrackPageView = () => {
  useEffect(() => {
    const trackPageView = async () => {
      //   const eventData = {
      //     event_name: "PageView",
      //     event_time: Math.floor(Date.now() / 1000),
      //     user_data: {
      //       // Add hashed user data here if available
      //     },
      //   };
      const pageViewData = {
        event_name: "PageView",
        event_time: 1724744641,
        user_data: {
          fbc: "fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890",
          fbp: "fb.1.1558571054389.1098115397",
        },
      };

      await postConversionAPI(pageViewData);
      console.log("PageView event sent");

      // Check if the current page is the thank you page
      if (window.location.pathname === "/thankyou") {
        const thankYouEventData = {
          event_name: "ThankYou",
          event_time: Math.floor(Date.now() / 1000),
          user_data: {
            fbc: "fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890",
            fbp: "fb.1.1558571054389.1098115397",
          },
        };
        await postConversionAPI(thankYouEventData);
        console.log("ThankYou event sent");
      }
    };

    trackPageView();
  }, []);

  return null;
};

export default TrackPageView;
