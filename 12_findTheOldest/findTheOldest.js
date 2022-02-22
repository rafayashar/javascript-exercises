const findTheOldest = function(people) {
    return people.reduce((a, b) => {

        const lastPerson = getAge(a.yearOfBirth, a.yearOfDeath);
        const nextPerson = getAge(b.yearOfBirth, b.yearOfDeath);
        return (lastPerson > nextPerson ? a : b);
        })
    };

    const getAge = function(birth, death) {
        if (!death) {
            death = new Date().getFullYear();
        }

        return (death - birth);
    };

// Do not edit below this line
module.exports = findTheOldest;