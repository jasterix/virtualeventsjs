const eventTitle = document.querySelector(".event-title");
const eventDateDetails = document.querySelector(".event-date");
const dateChunk = document.querySelector(".date-chunk");
// const eventHost = document.querySelector(".host");

document.addEventListener("DOMContentLoaded", function () {
  init();
});

const init = function () {
  const eventData = JSON.parse(localStorage.getItem("eventData"));
  let span = document.querySelector("#event-view");

  getDetails(eventData.id);
};

const getDetails = (id) => {
  fetch(`https://virtual-events.herokuapp.com/events/${id}`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((event) => {
        showDetails(event);
      });
    });
};

const showDetails = (event) => {
  let date = localStorage.getItem("date");
  eventTitle.innerText = `${event.title}`;
  //   eventHost.innerText = `${event.host}`;
  formatDate(event.startDate, event.endDate);
};

const formatDate = (startDate, endDate) => {
  const dateOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    dayPeriod: "short",
  };
  const timeZoneOptions = {};
  timeZoneOptions.timeZoneName = "short";
  const starts = new Intl.DateTimeFormat("en-US", dateOptions).format(
    new Date(startDate)
  );
  const ends = new Intl.DateTimeFormat("en-US", dateOptions).format(
    new Date(endDate)
  );
  const startTime = new Intl.DateTimeFormat("en-US", timeOptions).format(
    new Date(startDate)
  );
  const endTime = new Intl.DateTimeFormat("en-US", timeOptions).format(
    new Date(endDate)
  );

  const timezone = new Intl.DateTimeFormat("en-US", timeZoneOptions)
    .format(new Date(endDate))
    .split(",")[1];
  console.log(timezone);

  chunkDate(starts, ends, startTime, endTime, timezone);
};

const chunkDate = (starts, ends, startTime, endTime, timezone) => {
  let eventDate = "";
  let eventTime = "";
  if (starts === ends) {
    eventDate = starts;
    eventTime = startTime + " to " + endTime + timezone;
  }
  displayDate(eventDate, eventTime);
};

const displayDate = (eventDate, eventTime) => {
  console.log(dateChunk);

  console.log(eventDate, eventTime);
  eventDateDetails.innerHTML += `${eventDate}`;
  dateChunk.innerText += `${eventDate}
    ${eventTime}`;
};
