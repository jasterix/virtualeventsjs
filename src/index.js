const apiUrl = "https://virtual-events.herokuapp.com/events";

const eventsContainer = document.querySelector(".event-listing-container");
const eventListing = document.querySelector(".row.event-listing");

console.log("hello");

fetch(apiUrl)
  .then((response) => response.json())
  .then((events) => eventManager(events));

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

  let dateHeaders = () => {
    let uniqueDates = [...new Set(events.map((x) => x.startDate))];

    // return uniqueDates;
    return uniqueDates.map((date) => {
      let formatted = new Intl.DateTimeFormat("en-US", dateOptions).format(
        Date.parse(date)
      );
      return formatted;
    });
  };
  // dateHeaders;

  let matchingEvents = () => {
    const uniqueEvents = [...new Set(events.map((x) => x.title))];
    return uniqueEvents;
  };

  // matchingEvents();

  let displayEvents = (dates, uniqueEvents) => {
    let now = Date.now(0);
    let n = new Date();
    let eventsList = uniqueEvents();
    let datesList = dates().sort((a, b) => new Date(b) - new Date(a));

    for (let i = 0; i < datesList.length; i++) {
      eventsContainer.innerHTML += `<div class="dateHeader"><ul>${datesList[i]}</ul></div>`;
      eventsList.filter((x) => {
        let element = events.find((el) => el.title === x);

        let elDate = new Date(element.startDate);
        // console.log(elDate.getMonth());

        let elementDate = new Intl.DateTimeFormat("en-US", dateOptions).format(
          Date.parse(element.startDate)
        );
        let elementTime = new Intl.DateTimeFormat("en-US", timeOptions).format(
          Date.parse(element.startDate)
        );

        if (elementDate === datesList[i]) {
          eventsContainer.innerHTML += `<a href="#">
          <li class="row eventHeader">
          <div class="row-item time">${elementTime}</div>
          </div>
          <div class="row-item">
          <span class="type chunk">${element.eventType}</span>
          <span class="title chunk">${element.title}</span>
          
          <div>
          </li>
          </a>`;
        }
      });
    }

    // console.log(datesList, eventsList);
  };
  displayEvents(dateHeaders, matchingEvents);
};

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

describe("Max Character", () => {
  it("maxChar() finds the most frequently used character", () => {
    assert.equal(maxChar("a"), "a");
    assert.equal(maxChar("test"), "t");
    assert.equal(maxChar("I loveeeeee noodles"), "e");
    assert.equal(maxChar("1337"), "3");
  });
});

// mocha.run();
