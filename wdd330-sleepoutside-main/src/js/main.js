document.addEventListener("DOMContentLoaded", () => {
  getDailyQuote();
});

async function getDailyQuote() {
  const quoteText = document.getElementById("quote-text");
  const quoteAuthor = document.getElementById("quote-author");

  try {
    const response = await fetch("https://zenquotes.io/api/random");
    if (!response.ok) throw new Error("Invalid response");

    const data = await response.json();

    quoteText.textContent = `"${data[0].content}"`;
    quoteAuthor.textContent = `— ${data[0].author}`;
  } catch (error) {
    console.error("Error loading the daily quote:", error);
    quoteText.textContent = "Could not load the quote.";
    quoteAuthor.textContent = "";
  }
}
