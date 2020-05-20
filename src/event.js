const eventTitle = document.querySelector(".event-title");
const eventDateDetails = document.querySelector(".event-date");
const dateChunk = document.querySelector(".date-chunk");
const eventDescription = document.querySelector(".event-description");
const eventLink = document.querySelector(".eventLink");
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
  eventLink.innerHTML = `<span><i class="far fa-play-circle"></i></span><p><a href=${event.eventLink}>RSVP here</a></p>`;
  eventDescription.innerHTML += `<p>${event.description}</p>
    
  <div><p>
    ${event.free ? "Free event" : ""}
    ${event.techWomen ? "Women in tech" : ""}
    ${event.blackTech ? "Blacktech" : ""}
   </p> </div>
   <p> Link to event: <a href="${event.eventLink}">${event.eventLink}</a></p>
    `;
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
  eventDateDetails.innerHTML += `${eventDate}`;
  dateChunk.innerHTML += `<div><i class="far fa-clock"></i></div><div><p>${eventDate} </p>
    <p>${eventTime}</p></div>
    `;
};
