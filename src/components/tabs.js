import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const tabsTopics = document.createElement("div");
  const tabsOne = document.createElement("div");
  const tabsTwo = document.createElement("div");
  const tabsThree = document.createElement("div");
  const tabsFour = document.createElement("div");
  const tabsFive = document.createElement("div");

  tabsTopics.classList.add("topics");
  tabsOne.classList.add("tab");
  tabsTwo.classList.add("tab");
  tabsThree.classList.add("tab");
  tabsFour.classList.add("tab");
  tabsFive.classList.add("tab");

  tabsTopics.appendChild(tabsOne);
  tabsTopics.appendChild(tabsTwo);
  tabsTopics.appendChild(tabsThree);
  tabsTopics.appendChild(tabsFour);
  tabsTopics.appendChild(tabsFive);

  tabsTopics.querySelectorAll(".tab").forEach((el, i) => {
    el.textContent = topics[i];
  });

  return tabsTopics;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  const tabsEntry = document.querySelector(selector);

  axios.get(`http://localhost:5000/api/topics`)
    .then(res => {
      const tabMaker = Tabs(res.data.topics);
      tabsEntry.appendChild(tabMaker);   
    })
    .catch(err => console.error(err))
    .finally(() => {
      console.log("Done");
    })
}

export { Tabs, tabsAppender }
