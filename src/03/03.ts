import {StudentType} from "../02/02";
import {CityType, GoverBuildType, HouseType} from "../02/02_02";

export function sum(a: number, b: number) {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    return student.technologies.push({
        id: 4,
        title: skill
    })
}

export function makeActiveStudent(student: StudentType) {
    student.isActive = true
}

export const doesStudentLiveIn = (student: StudentType, cityTitle: string) => {
    return student.address.city.title === cityTitle
}

export const addMoneyToBudget = (building: GoverBuildType, budget: number)=> {
    building.budget += budget
}
export const city:CityType  = {
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


export function repairHouse(houseType: Array<HouseType>) {
    houseType[1].repaired = true;
}


export const toFireStaff = (building: Array<GoverBuildType>, fireCountStaff: number) => {
    building[0].staffCount -= fireCountStaff
}

toFireStaff(city.governmentBuildings, 20)

console.log(city)

export const fireAll = (buldings: GoverBuildType, fireStaf: number) => {
    buldings.staffCount -= fireStaf
}

export const toHireStaff = (building: Array<GoverBuildType>, hireStaff: number) => {
    building[1].staffCount += hireStaff
}

fireAll(city.governmentBuildings[0] && city.governmentBuildings[1], 30)

console.log(city)

export const createMessage = (city: CityType) => {
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber}`
}



console.log(createMessage(city))