const positiveWords = ["good", "happy", "great", "excellent", "awesome", "love"];
const negativeWords = ["bad", "sad", "terrible", "horrible", "hate", "worst"];

function analyzeSentiment() {
  const text = document.getElementById("inputText").value.toLowerCase();
  let score = 0;

  positiveWords.forEach(word => {
    if (text.includes(word)) score++;
  });

  negativeWords.forEach(word => {
    if (text.includes(word)) score--;
  });

  let resultText = "";

  if (score > 0) {
    resultText = "😊 Positive Sentiment";
  } else if (score < 0) {
    resultText = "☹️ Negative Sentiment";
  } else {
    resultText = "😐 Neutral Sentiment";
  }

  document.getElementById("result").textContent = resultText;
}
