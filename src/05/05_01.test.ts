import React from "react";
import {
    createGreetingMessage, createMessages,
    getStreetsTitlesOfGovernmentsBuildings,
    getStreetsTitlesOfHouses,
    ManType
} from "./05_01";
import {CityType} from "../02/02_02";
let people: Array<ManType> = [];

beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 18}
    ]
});

test("should get array of greeting messages", () => {
    const messages = createGreetingMessage(people);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Andrew. Welcom to IT-INCUBATOR");
    expect(messages[1]).toBe("Hello Alexander. Welcom to IT-INCUBATOR");
    expect(messages[2]).toBe("Hello Dmitry. Welcom to IT-INCUBATOR");
})



let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                }
            }],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }

            }
        ],
        citizensNumber: 1000000
    }
});

// 1. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test("list of streets title of goverments buildings", () => {
    let streetsNames = getStreetsTitlesOfGovernmentsBuildings(
        city.governmentBuildings
    );

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Central Str");
    expect(streetsNames[1]).toBe("South Str");
})

//2. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test("list of streets titles", () => {
    let streets = getStreetsTitlesOfHouses(city.houses);

    expect(streets.length).toBe(3);
    expect(streets[0]).toBe("White street");
    expect(streets[1]).toBe("Happy street");
    expect(streets[2]).toBe("Happy street");

});

//3.

test("create greeting messages for streets", () => {
    let messages = createMessages(city.houses);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello guys from White street");
    expect(messages[1]).toBe("Hello guys from Happy street");
    expect(messages[2]).toBe("Hello guys from Happy street");

})
