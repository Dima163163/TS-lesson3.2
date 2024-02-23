"use strict";
const persons = [
    {
        type: 'admin',
        name: 'Иван Петров',
        age: 27,
        role: 'Administrator',
    },
    {
        type: 'user',
        name: 'Марат Aляуддинов',
        age: 20,
        group: 'музыкант',
    },
    {
        type: 'user',
        name: 'Алекс Алексеев',
        age: 33,
        group: 'художник',
    },
    {
        type: 'admin',
        name: 'Василий Васильев',
        age: 20,
        role: 'Administrator2',
    }
];
const isAdmin = (person) => {
    return person.type === 'admin';
};
const isUser = (person) => {
    return person.type === 'user';
};
const logPerson = (person) => {
    let information = '';
    if (isAdmin(person)) {
        information = person.role;
    }
    if (isUser(person)) {
        information = person.group;
    }
    console.log(` - ${person.name}, ${person.age}, ${information}`);
};
console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);
console.log();
console.log('Users:');
persons.filter(isUser).forEach(logPerson);
