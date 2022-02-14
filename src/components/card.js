import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const card = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const cardImageContainer = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardAuthorName = document.createElement("span");

  card.appendChild(cardHeadline);
  card.appendChild(cardAuthor);
  card.appendChild(cardImageContainer);
  card.appendChild(cardImage);
  card.appendChild(cardAuthorName);
  cardAuthor.appendChild(cardImageContainer);
  cardAuthor.appendChild(cardAuthorName);
  cardImageContainer.appendChild(cardImage);

  card.classList.add("card");
  cardHeadline.classList.add("headline");
  cardAuthor.classList.add("author");
  cardImageContainer.classList.add("img-container");

  cardImage.src = article.authorPhoto;
  cardHeadline.textContent = article.headline;
  cardAuthorName.textContent = article.authorName;

  card.addEventListener("click", () => {
    console.log(article.headline);
  })

  return card;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const cardEntry = document.querySelector(selector);

  axios.get(`http://localhost:5000/api/articles`)
  .then(res => {
    const data = res.data.articles;
    
    for (var key in data) {
      var obj = data[key];
      for (var arr in obj) {
        var element = obj[arr];
        const cardMaker = Card(element);
        cardEntry.appendChild(cardMaker);
      }
    } 
  })
  .catch(err => console.error(err))
  .finally(() => {
    console.log("Done");
  })
}

export { Card, cardAppender }
