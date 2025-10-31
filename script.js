function detectFake() {
  const text = document.getElementById("newsText").value.toLowerCase();
  const fakeWords = ["shocking", "unbelievable", "miracle", "click here", "exclusive", "breaking now"];
  const found = fakeWords.filter(word => text.includes(word));
  const result = document.getElementById("result");

  if (text.trim() === "") {
    result.innerHTML = " Please enter some text first!";
    result.style.color = "#facc15";
  } else if (found.length > 0) {
    result.innerHTML = " This news might be FAKE! Contains suspicious words: " + found.join(", ");
    result.style.color = "#f87171";
  } else {
    result.innerHTML = "Looks genuine! No suspicious signs detected.";
    result.style.color = "#4ade80";
  }
}
