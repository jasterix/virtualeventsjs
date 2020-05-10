const apiUrl = "https://virtual-events.herokuapp.com/events";

const eventsContainer = document.querySelector(".event-listing-container");

console.log("hello");

fetch(apiUrl)
  .then((response) => response.json())
  .then((events) => eventManager(events));

let eventManager = (events) => {
  console.log(events[0]);

  const dateOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  let uniqueIDs = [];
  // const allDates = [
  //   events.map((event) => {
  //     return {
  //       id: event._id,
  //       startDate: event.startDate,
  //     };
  //   }),
  // ];
  const uniqueDates = [...new Set(events.map((x) => x.startDate))];
  console.log(uniqueDates);

  return uniqueDates.forEach((date) => {
    let formatted = new Intl.DateTimeFormat("en-US", dateOptions).format(
      Date.parse(date)
    );
    return (eventsContainer.innerHTML += `<div><li>${formatted}</li>
    <li>${formatted}</li></div>`);
  });
  // function dateGroup(uniqueDates) {
  //   const dateOptions = {
  //     weekday: "long",
  //     month: "long",
  //     day: "numeric",
  //   };
  //   const dates = (event) => {
  //     let formattedDate = Intl.DateTimeFormat("en-US", dateOptions).format(
  //       Date.parse(event.startDate)
  //     );
  //     return formattedDate;
  //   };
  // }
  const addDate = (event) => {
    function eventTime() {
      const timeOptions = {
        hour: "numeric",
        minute: "numeric",
      };
      const eventTime = new Intl.DateTimeFormat("en-US", timeOptions).format(
        Date.parse(event.startDate)
      );
      return eventTime;
    }

    return dateGroups.forEach((date) => {
      let eventItems = events.filter((event) => {
        return date === event.startDate;
      });
      return eventItems.map((eventItem) => {
        console.log(eventItem);

        return (eventsContainer.innerHTML += `<div><li>${eventItem}</li>
      <li>${eventItem}</li></div>`);
      });
    });
  };
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
