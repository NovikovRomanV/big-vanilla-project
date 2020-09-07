export const ages = [10, 5, 251, 35, 85, 70];

export const predicate = (age: number) => {
    return age > 90;
}

export const oldAges = [251];

type cousesType = {
    title: string
    price: number
}

const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "REACT", price: 150},
];

const chipPredicate = (course: cousesType ) => {
    return course.price < 160;
}

const chipCourses = [
    {title: "CSS", price: 110},
    {title: "REACT", price: 150}
]