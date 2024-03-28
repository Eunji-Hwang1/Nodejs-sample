"user strict"

class UserStorage {
    static #users = {
        id: ["hey", "hoo", "why"],
        password: ["buddy", "ho", "uwwy"],
        name: ["야", "너", "왜"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;