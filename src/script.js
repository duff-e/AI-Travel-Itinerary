function displayItinerary(event) {
  event.preventDefault();
  new Typewriter("#itinerary", {
    strings: ["When visiting Rome you MUST visit...."],
    autoStart: true,
    delay: 20,
  });
}

let travelFormElement = document.querySelector("#travel-form");
travelFormElement.addEventListener("submit", displayItinerary);
