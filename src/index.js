const apiUrl = "https://virtual-events.herokuapp.com/events";

const eventsContainer = document.querySelector(".event-listing-container");

console.log("hello");

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((event) => {
      addDate(event);
    });
  });

const addDate = (event) => {
  function dateGroup() {
    const dateOptions = {
      weekday: "long",
      month: "long",
      day: "numeric",
    };
    const dateGroup = new Intl.DateTimeFormat("en-US", dateOptions).format(
      Date.parse(event.startDate)
    );
    return dateGroup;
  }

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
  return (eventsContainer.innerHTML += `<div><li>${dateGroup()}</li>
  <li>${eventTime()}</li></div>`);
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
