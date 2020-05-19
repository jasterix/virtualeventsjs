document.addEventListener("DOMContentLoaded", function () {
  init();
});

const init = function () {
  let spn = document.querySelector("#event-view");
  const eventId = localStorage.getItem("eventId");
  spn.innerHTML += ` Event ID: ${eventId}
  `;
  getDetails(eventId);
};

const getDetails = (id) => {
  fetch(`https://virtual-events.herokuapp.com/events/${id}`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((el) => console.log(el));
    });
};
