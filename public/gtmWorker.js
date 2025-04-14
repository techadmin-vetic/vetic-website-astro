// gtmWorker.js
self.addEventListener("message", function (e) {
  const data = e.data;
  switch (data.action) {
    case "pushEvent":
      pushToGTM(data.event);
      break;
    case "sendGTAGEvent":
      sendGTAGEvent(data.eventAction, data.eventLabel);
      break;
    default:
      console.error("Unknown action:", data.action);
  }
});

function pushToGTM(event) {
  self.postMessage({
    action: "pushEvent",
    event: event,
  });
}

function sendGTAGEvent(eventAction, eventLabel) {
  self.postMessage({
    action: "sendGTAGEvent",
    eventAction: eventAction,
    eventLabel: eventLabel,
  });
}
