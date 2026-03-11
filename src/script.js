function displayItinerary(response) {
  new Typewriter("#itinerary", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
  });
}

function createItinerary(event) {
  event.preventDefault();
  let userInput = document.querySelector("#city-input");
  let apiKey = "40o03736bbe0e6faa9b79f5dt4af0a0f";
  let context =
    "You are a global travel expert and experienced travel guide. List 3 must go to attractions to see when visiting a city. Display using basic HTML <ul> <li> ";
  let prompt = `Name the must see attractions for ${userInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let loadingItinerary = document.querySelector("#itinerary");
  loadingItinerary.innerHTML = `🧳✈️ Generating a travel itinerary for ${userInput.value}`;

  axios.get(apiUrl).then(displayItinerary);
}

let travelFormElement = document.querySelector("#travel-form");
travelFormElement.addEventListener("submit", createItinerary);
