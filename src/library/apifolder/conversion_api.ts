import type { APIRoute } from "astro";

export const postConversionAPI = async (eventData) => {
  const accessToken =
    "EAAGy3YzhZCrYBOzkGDnjTZC24ZB1hJkhNpgIOOtZBtLe8ejUAePEOtvoQV05WRhvZAEGqq8Tc7e5d6iqDur7QxI5B2hJBZB6o0zuLsg7dFjPK7mcJ74jSbuZB7b8VyZBXv39WWZAFEeNHo5VV1NUceutWQDQudajiIpZBlfQKpSi8jUtifJkDL0VYIQjeobO6tDutG";
  const pixelId = "520465736757688";

  try {
    console.log("Sending event to Facebook:", eventData.event_name);
    const response = await fetch(
      `https://graph.facebook.com/v11.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [eventData],
          // {
          //   event_name: "PageView",
          //   event_time: 1724744641,
          //   user_data: {
          //     fbc: "fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890",
          //     fbp: "fb.1.1558571054389.1098115397",
          //   },
          // },

          test_event_code: "TEST11038",
        }),
      }
    );

    const result = await response.json();
    console.log("Facebook API response:", result);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Event submission failed" }), {
      status: 500,
    });
  }
};
