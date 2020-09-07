import {CityType, GoverBuildType} from "../02/02_02";
import {city} from "../03/03";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
  city.houses = city.houses.filter(h => h.address.street.title !== street);
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GoverBuildType>, number: number) => {
    return  buildings.filter(b => b.staffCount > number);
}