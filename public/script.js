document.getElementById("saveButton").addEventListener("click", function () {
  var word = document.getElementById("wordInput").value;
  fetch("/api/saveWord", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ word: word }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Word saved:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
