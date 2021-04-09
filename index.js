let value = document.querySelector(".vx1");
let translated = document.querySelector(".vx2");
// let btn = document.querySelector("button");

// let bool = btn.value.split(" : ");

// btn.addEventListener("click", () => {
//   if (bool[1] === "true") {
//     btn.value = "Reversed? : false";
//   } else {
//     btn.value = "Reversed? : true";
//   }
// });

value.addEventListener("input", () => {
  // if (bool) {
  //   translated.value = revTranslate(value.value);
  // } else {
  //   translated.value = translate(value.value);
  // }

  translated.value = translate(value.value);
});
