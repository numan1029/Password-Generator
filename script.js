window.addEventListener("DOMContentLoaded", () => {
  // DOM Declared
  const pwShow = document.querySelector(".pw-show");
  const copyBox = document.querySelector("#copy");
  const length = document.querySelector(".length");
  const generate = document.querySelector(".generate");

  // main program

  generate.addEventListener("click", () => {
    let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let symbols = [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "-",
      "_",
      "=",
      "+",
      ":",
      ";",
      "|",
      "<",
      ">",
      "?",
      "/",
    ];
    let letter = [
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "k",
      "l",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
    ];

    // ${letter[Math.floor(Math.random() * letter.length)]}
    //   ${number[Math.floor(Math.random() * number.length)]}
    //   ${symbols[Math.floor(Math.random() * symbols.length)]}
    let generatePw = `${letter[Math.floor(Math.random() * letter.length)]}${
      symbols[Math.floor(Math.random() * symbols.length)]
    }${number[Math.floor(Math.random() * number.length)]}${
      letter[Math.floor(Math.random() * letter.length)]
    }${symbols[Math.floor(Math.random() * symbols.length)]}${
      number[Math.floor(Math.random() * number.length)]
    }${letter[Math.floor(Math.random() * letter.length)]}${
      symbols[Math.floor(Math.random() * symbols.length)]
    }${number[Math.floor(Math.random() * number.length)]}${
      letter[Math.floor(Math.random() * letter.length)]
    }${symbols[Math.floor(Math.random() * symbols.length)]}${
      number[Math.floor(Math.random() * number.length)]
    }${letter[Math.floor(Math.random() * letter.length)]}${
      symbols[Math.floor(Math.random() * symbols.length)]
    }${number[Math.floor(Math.random() * number.length)]}${
      letter[Math.floor(Math.random() * letter.length)]
    }${symbols[Math.floor(Math.random() * symbols.length)]}${
      number[Math.floor(Math.random() * number.length)]
    }${letter[Math.floor(Math.random() * letter.length)]}${
      number[Math.floor(Math.random() * number.length)]
    }${number[Math.floor(Math.random() * number.length)]}`;


      pwShow.value = generatePw.substring(0, Number(length.value));
  });

  copyBox.addEventListener('click', () => {
    if (pwShow.value.length < 1) {
      alert('Please Generate Number')
    }
    else {
      pwShow.select();
      document.execCommand('copy');
      alert('Password Copied')
    }
  })
});
