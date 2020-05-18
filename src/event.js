const init2 = function () {
  let spn = document.querySelector("#event-view");
  let endTime = new Date();
  let startTime = document.location.search.replace(/^.*?\=/, "");
  let netTime = startTime - endTime;
  spn.innerHTML += ` end time - start time:  ${endTime.getTime()} - ${startTime}
  <div>end time: ${netTime}</div>
  `;
  console.log(startTime);
};

document.addEventListener("DOMContentLoaded", function () {
  init2();
});

// const pageBody = document.querySelector("#event-view");
// const clickHere = (event) => {
//   const id = event.target.dataset.id;
//   console.log(id);

//   window.location = "src/event.html";

// const loadEvent = (id) => {
//   console.log(id);

// };
const getDetails = (id) => {
  fetch(`https://virtual-events.herokuapp.com/events/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};
