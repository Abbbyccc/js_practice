const clone1 = {
    name: 'Rick',
    age: 77,
    country: 'US',
}

const clone2 = {
    name: 'Rick',
    age: 77,
    country: 'US',
}

const samePerson = person;
person['name'] = 'Rick'
person['age'] = 78
person['country'] = 'FR'