import React from "react";

type TitleType = {
    title: string
}

type StreetType = {
    street: TitleType
}

type ManType = {
    name: string
    age: number
    lessons: Array<{title: string}>
    address: StreetType
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}
const ManComponent:  React.FC<PropsType> = ({title, man, ...props}) => {
    // const {title, man, ...restProps} = props

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
            </div>
            <div>
                {props.car.model}
            </div>
        </div>
    )
}
