const apiUrl = "https://virtual-events.herokuapp.com/events";
const header = document.querySelector("header");

const searchResults = document.querySelector(".search-results"); //formerly looked for searchResults
const eventsContainer = document.querySelector("#eventsContainer");

const eventListing = document.querySelector(".row.event-listing");
const eventCount = document.querySelector(".event-count");

// Click to show events

header.addEventListener("click", () => {
  // header.style.display = "none";
  // eventsContainer.style.display = "block";
});

fetch("https://virtual-events.herokuapp.com/events", {
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Filter for unique events / remove duplicates
    const distinct = data.filter(
      (element, index, array) =>
        array.findIndex((t) => t.title === element.title) === index
    );
    const now = new Date(Date.now());
    let upcoming = distinct.filter(
      (element) => new Date(element.startDate) >= now
    );

    // Filter for future events / remove events that passed
    upcoming = upcoming.sort(
      (a, b) => new Date(a.startDate) - new Date(b.startDate)
    );

    //Display and count upcoming and unique events
    eventManager(upcoming);
    eventCounter(upcoming);
    console.log(searchResults);
  });

let eventManager = (events) => {
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

  let formatDates = () => {
    let dates = events.map((event) => event.startDate);
    return dates.map((event) => {
      return new Intl.DateTimeFormat("en-US", dateOptions).format(
        new Date(event)
      );
    });
  };

  let displayEvents = (dates) => {
    let now = Date.now();

    let titles = events.map((event) => event.title);

    let datesList = dates().sort((a, b) => new Date(b) - new Date(a));

    for (let i = datesList.length - 1; i >= 0; i--) {
      searchResults.innerHTML += `<div class="dateHeader date-indicator" ><h3>${datesList[i]}</h3></div>`;
      titles.filter((x) => {
        let element = events.find((el) => el.title === x);

        let elDate = new Date(element.startDate);

        let elementDate = new Intl.DateTimeFormat("en-US", dateOptions).format(
          new Date(element.startDate)
        );
        let elementTime = new Intl.DateTimeFormat("en-US", timeOptions).format(
          new Date(element.startDate)
        );

        if (elementDate === datesList[i]) {
          console.log(elementDate, elementTime);

          searchResults.innerHTML += `<div><a data-id=${element._id} href="src/event.html">
          <li class="grid event-listing-container row event">
          <div class="time">${elementTime}</div>
          
          <span class="host chunk"><h4>${element.host}</h4></span>
          <span class="title chunk"  onclick=loadEvent(event) ><h2 data-eventLink=${element.eventLink} data-id=${element._id} data-startDate=${elementDate} data-time=${elementTime}>${element.title}</h2></span>
          <span class="type chunk"><p>${element.eventType}</p></span>
          
          </li>
          </a>
          </div>
          </ul>`;
        }
      });
    }
  };
  displayEvents(formatDates);
};

let eventCounter = (events) => {
  // REMINDER: Date month starts at 0 (January)
  let thisMonth = new Date(Date.now()).getMonth();

  let eventsThisMonth = events.filter((event) => {
    let eventDate = new Date(event.startDate).getMonth();
    return eventDate === thisMonth;
  });

  return (eventCount.innerHTML += `<p>${events.length} events coming up  •  ${eventsThisMonth.length} events happening this month</p>`);
};

const loadEvent = (event) => {
  console.log(event.target.dataset);

  localStorage.setItem("eventData", JSON.stringify(event.target.dataset));
};
// document.addEventListener("DOMContentLoaded", function (e) {
//   init(e);
// });

// const init = function (e) {
//   console.log(e.target.dataset.id);

//   let startTime = new Date();
//   let title = document.querySelector(".title");

//   title.addEventListener("click"),
//     function () {
//       localStorage.setItem("eventId, e.target.dataset.id");
//     };
// };

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("M", () => {
  it("ma", () => {});
});

// mocha.run();
