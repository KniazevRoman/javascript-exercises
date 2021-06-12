let findTheOldest = function(people) {
    people.sort((a, b) => {
        let currentYear = new Date().getFullYear();
        return  ((b.yearOfDeath || currentYear) - b.yearOfBirth) - ((a.yearOfDeath || currentYear) - a.yearOfBirth);
    });

    return people[0];
}

module.exports = findTheOldest
