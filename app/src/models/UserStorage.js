"use strict";

const fs = require("fs").promises

class UserStorage {
  //static: 클래스 자체에서 변수 접근 가능
  //# 은닉화
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // => [id, psword, name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) return users;

    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers; 
  }

  static getUsers(isAll, ...fields) {
    return fs
      .readFile("./src/databases/users.json")
      //logic이 성공했을 때 실행
      .then((data) => {
        return this.#getUsers(data, isAll, fields);
      })

      //logic이 실패했을 때, 에러
      .catch(console.error);
  }

  static getUserInfo(id) {
    return fs
      .readFile("./src/databases/users.json")
      //logic이 성공했을 때 실행
      .then((data) => {
        return this.#getUserInfo(data, id);
      })

      //logic이 실패했을 때, 에러
      .catch(console.error);
  }

  static async save(userInfo) {
    const users = await this.getUsers(true);
    if (users.id.includes(userInfo.id)) {
      throw "Existed ID";
        }
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    
    //데이터 추가
    fs. writeFile("./src/databases/users.json", JSON.stringify(users));
    return { success: true};
  }
}

module.exports = UserStorage;