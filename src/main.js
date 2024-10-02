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
    "Ви великий майстер і любите готувати корисну та здорову їжу. Ваше завдання — створити швидкий і поживний сніданок на 4-5 рядків і розділити кожен рядок <br />. Обов’язково дотримуйтесь інструкцій користувача. Не додавайте назву до сніданку. Підпишіть сніданок за допомогою «Ваш SheCodes AI» всередині елемента <strong>.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemBreakfast = document.querySelector("#breakfast");
  poemBreakfast.classList.remove("hidden");
  poemBreakfast.innerHTML = `<div class="generating"> Зачекайте, я генерую Вам сніданок з ${userInstruction.value}</div>`;

  axios.get(apiUrl).then(displayBreakfast);
}

let formGenerator = document.querySelector("#generator-form");
formGenerator.addEventListener("submit", generateBreakfast);
