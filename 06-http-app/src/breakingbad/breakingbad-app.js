/**
 * @returns {Object}
 */
const fetchQuote = async () => {
  const res = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
  const data = await res.json();

  return data[0];
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingBadApp = async (element) => {
  document.querySelector("#app-title").innerHTML = "Breaking Bad App";
  element.innerHTML = "Cargando...";

  const quoteLabel = document.createElement("blockquote");
  const authorLabel = document.createElement("h3");
  const nextQuoteButton = document.createElement("button");
  nextQuoteButton.innerText = "Siguiente Quote";

  const renderQuote = ({ quote, author }) => {
    quoteLabel.innerHTML = quote;
    authorLabel.innerHTML = author;
    element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
  };

  // Añadir listener
  nextQuoteButton.addEventListener("click", async () => {
    element.innerHTML = "Cargando...";

    const quote = await fetchQuote();
    renderQuote(quote);
  });

  fetchQuote().then(renderQuote);
};
