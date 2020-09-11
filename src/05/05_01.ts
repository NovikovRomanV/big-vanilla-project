import React from "react";
import {GoverBuildType, HouseType} from "../02/02_02";
export type ManType = {
    name: string
    age: number
}

export const people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18}
]

export const dimychTransformator = (man: ManType) => {
    return {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1],
    }
}

const devs1 = [
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Andrew", lastName: "Ivanov"
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Alexander", lastName: "Petrov"
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Dmitry", lastName: "Sidorov"
    },
]

const devs2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),
]

const devs3 = people.map(dimychTransformator);

const devs4 = people.map(man => ({
        stack: ["css", "html", "js", "tdd", "react"],
        firstName:  man.name.split(" ")[0],
        lastName: man.name.split(" ")[1],
    })
)

export const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcom to IT-INCUBATOR`)

export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(" ")[0]}. Welcom to IT-INCUBATOR`)
};

export const getStreetsTitlesOfGovernmentsBuildings = (buildings: Array<GoverBuildType>) => {
    return buildings.map( b => b.address.street.title )
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(h => h.address.street.title)
}

export const createMessages = (houses: Array<HouseType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}