document.addEventListener("DOMContentLoaded", function() {
  var text = [
    "> Hello!",
    "> My name is Viveka Pandiaraj.",
    "> I am a Full Stack Developer based in Vancouver, BC.",
    "> I enjoy creating responsive and user-friendly web applications.",
    "> I’m passionate about both front-end design and back-end logic.",
    "> If you're interested to know more about me, you're in the right place :)"
  ];

  var i = 0; // To track the current line
  var speed = 100; // Delay between typing each character in ms
  var lineSpeed = 500; // Delay between lines (after one line is typed) in ms
  var typingElement = document.getElementById("typing");

  function typeLine() {
    if (i < text.length) {
      var currentLine = text[i];
      var j = 0; // To track the current character in the line
      var lineElement = document.createElement("div"); // Create a new div for each line
      typingElement.appendChild(lineElement); // Add the div to the container

      function typeCharacter() {
        if (j < currentLine.length) {
          lineElement.innerHTML += currentLine[j];
          j++;
          setTimeout(typeCharacter, speed);
        } else {
          i++; // Move to the next line
          setTimeout(typeLine, lineSpeed); // Wait before typing next line
        }
      }

      typeCharacter();
    }
  }

  typeLine(); // Start typing effect
});
