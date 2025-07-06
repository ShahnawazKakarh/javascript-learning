// Following both are types to create an object, there is no difference both have empty string

// Type 1: Singleton: A singleton is an object that is created only once in your program — and everywhere you use it, you reference that same single instance.
// Made via Constructor
// Useful for config, settings, cache

// Type 2: Non-Singleton: A non-singleton object is any object where you create a new instance each time. They are not globally shared — each object is unique.
// Useful for entities (users, items)


// const tinderUserS = new Object()  // singelton object
// const tinderUserNS = {}  // non-singelton object

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Shahnawz",
            lastname: "Khan"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

// if we want to confirm that any value is available in the object or not we use question mark ? for protection otherwise we have to use if else
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
const obj4 = {
    5: "a",
    6: "b"
}

// if we add obj1 and obj2 in obj3 it will give obj in obj not a single object string values
// const obj3 = { obj1, obj2 }

// so we use assign() which gives us a single object
// assign(target, source)
// target will be {} while source will be obj1, obj2, obj4
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// spread operator
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

// keys helps in getting all keys [will return full object with key value]
// [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.keys(tinderUser));

// it returns only the values of objects
// [ '123abc', 'Sammy', false ]
console.log(Object.values(tinderUser));

// every key value pair is framed in Array first value will be key and second will be value
// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "Code with JavaScript",
    price: "999",
    courseInstructor: "Shahnawaz"
}

// to destructure any value
course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
