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

let props:ManType ;

beforeEach(() => {
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    }
})

test("", () => {

    // const age = props.age;
    // const lessons = props.lessons;

    const {age, lessons, address: {street: {title}}} = props;

    // const {age: a, lessons: l} = props
    const a = props.age;
    const l = props.lessons;

    expect(age).toBe(32);
    expect(lessons.length).toBe(2)

    expect(a).toBe(32);
    expect(l.length).toBe(2);
    expect(title).toBe("Nezavisimosti street");
});

test("", () => {
    // const l1 = props.lessons[0];
    // const l2 = props.lessons[1];

    // const [l1, ...restLessons] = props.lessons

    const [l1, l2] = props.lessons;

    expect(l1.title).toBe("1");
    expect(l2).toStrictEqual({title: "2"});


})
