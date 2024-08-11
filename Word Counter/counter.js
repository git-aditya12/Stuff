// User input & Features
let user_input = document.getElementById("input");
let char = document.getElementById("ch");
let words = document.getElementById("words");
let sen = document.getElementById("sen");
let est = document.getElementById("read");
let Paragraph = document.getElementById("para");
let Features = document.getElementById("user-opt");

// Function to Calculate

function count() {
  if (user_input.value === "") {
    alert("Please Enter Some text !");
  } else {
    // Characters Counting & Removing Whitespaces
    let user_val = user_input.value;
    let remspace = user_input.value.replace(/\s+/g, "");
    let charcters = remspace.length;
    char.innerText = charcters;
    // Counting Sentences
    let count = 0;
    if (charcters == 0) {
      count = 0;
      sen.innerText = count;
    } else {
      // Returns array of text
      const sen_match = user_val.match(/[^.!?]*[.!?]/g);
      // Array length
      let sen_num = sen_match ? sen_match.length : 0;
      sen.innerText = sen_num;
    };
    // Counting Words
    const wordreg = /\b\w+\b/g;
    const calword = user_val.match(wordreg);
    let lwords = calword.length;
    words.innerText = lwords;
    // Reading time
    // Average Words per Minute
    let avg = 100;
    let minutes = lwords / avg;
    let seconds = Math.ceil(minutes * 60);
    est.innerText = seconds;
    // Counting Paragraphs
    const para = user_val.split(/\n\s*\n/);
    Paragraph.innerText = para.length;
    // Showing Features Container
    Features.style.display = "Block";
  };
};

// Clear the Field

let clear = document.getElementById("clear").addEventListener("click", () => {
  user_input.value = "";
});

