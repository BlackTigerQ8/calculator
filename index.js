let currentInput = document.querySelector(".currentInput");
let answerScreen = document.querySelector(".answerScreen");
let buttons = document.querySelectorAll("button");
let erasebtn = document.querySelector("#erase");
let clearbtn = document.querySelector("#clear");
let evaluate = document.querySelector("#evaluate");
let realTimeScreenValue = [];

clearbtn.addEventListener("click", () => {
  realTimeScreenValue = [""];
  answerScreen.innerHTML = 0;
  currentInput.className = "currentInput";
  answerScreen.className = "answerScreen";
  answerScreen.style.color = "rgba(150, 150, 150, 0.87)";
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // When erase button is clicked
    if (!btn.id.match("erase")) {
      // display value on btn press
      realTimeScreenValue.push(btn.value);
      currentInput.innerHTML = realTimeScreenValue.join("");

      // to evaluate answer in real time
      if (btn.classList.contains("num_btn")) {
        answerScreen.innerHTML = eval(realTimeScreenValue.join(""));
      }
    }

    // When erase button is clicked
    if (btn.id.match("erase")) {
      realTimeScreenValue.pop();
      currentInput.innerHTML = realTimeScreenValue.join("");
      answerScreen.innerHTML = eval(realTimeScreenValue.join(""));
    }

    // when evaluate button is clicked
    if (btn.id.match("evaluate")) {
      currentInput.className = "answerScreen";
      answerScreen.className = "currentInput";
      answerScreen.style.color = "#fff";
    }

    // to prevent undefined error in screen
    if (typeof eval(realTimeScreenValue.join("")) == "undefined") {
      answerScreen.innerHTML = 0;
    }
  });
});
