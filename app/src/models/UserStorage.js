"use strict";

class UserStorage {
  //static: 클래스 자체에서 변수 접근 가능
  //# 은닉화
  static #users = {
    id: ["aaaa", "bbbb", "cccc"],
    psword: ["1234", "4321", "5678"],
    name: ["A", "B", "C"],
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