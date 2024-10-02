function displayBreakfast(responce) {
  new Typewriter("#breakfast", {
    strings: responce.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateBreakfast(event) {
  event.preventDefault();

  let userInstruction = document.querySelector("#user-context");
  let apiKey = "btf3a0c41c82o04bde5657e178c809b4";
  let prompt = `User instructions: Generate a breakfast with ${userInstruction.value}`;
  let context =
    "You are a great expert and love to cook useful and helthy food. Your mission is to generate a quick and nutritious breakfast in 4-5 rows and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the breakfast. Sign the breakfast with 'SheCodes AI' inside a <strong> element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemBreakfast = document.querySelector("#breakfast");
  poemBreakfast.classList.remove("hidden");
  poemBreakfast.innerHTML = `<div class="generating"> Generating a breakfast with ${userInstruction.value}</div>`;

  axios.get(apiUrl).then(displayBreakfast);
}

let formGenerator = document.querySelector("#generator-form");
formGenerator.addEventListener("submit", generateBreakfast);
