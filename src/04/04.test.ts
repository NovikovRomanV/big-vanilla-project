import React from "react";
test("should take old men older then 90", () => {
    const ages = [10, 5, 251, 35, 85, 70];

    const oldAges = ages.filter( a => a > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(251);
});

test("should take courses chipper 160", () => {
    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "REACT", price: 150},
    ];

    const chipCourses = courses.filter(c => c.price < 160);

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe("CSS");
    expect(chipCourses[1].title).toBe("REACT");
});

test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Sold", isDone: false},
        {id: 4, title: "Sugar", isDone: true},
    ];

    const TasksIsDone = tasks.filter(t => t.isDone);

    expect(TasksIsDone.length).toBe(2);
    expect(TasksIsDone[0].title).toBe("Milk");
    expect(TasksIsDone[1].title).toBe("Sugar");
});

test("get only uncompleted tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Sold", isDone: false},
        {id: 4, title: "Sugar", isDone: true},
    ];

    const uncompletedTasks = tasks.filter(t => !t.isDone);

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].title).toBe("Bread");
    expect(uncompletedTasks[1].title).toBe("Sold");
})