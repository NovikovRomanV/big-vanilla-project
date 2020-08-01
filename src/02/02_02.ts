export type TitleType = {
    title: string
}

export type AddressType = {
    number?: number
    street: TitleType
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type GoverBuildType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GoverBuildType>
    citizensNumber: number
}