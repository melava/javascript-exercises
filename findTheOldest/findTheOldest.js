let findTheOldest = function(people) {
    people.forEach(person => {
        if (person.yearOfDeath === undefined) {
            let date = new Date();
            let thisYear = date.getFullYear();
            person.yearOfDeath = thisYear;
        }
    });
    let oldest = people.sort((a,b) => {
        last = a.yearOfDeath - a.yearOfBirth;
        next = b.yearOfDeath - b.yearOfBirth;
        return last > next ? -1 : 1;  
    });
    return oldest[0]
}

module.exports = findTheOldest
