"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  } 

  login() {
    const body = this.body
    const {id, psword} = UserStorage.getUserInfo(body.id);

    if (id) {
      if (id === body.id && psword === body.psword) {
        return {success: true};
      }
      return {success: false, msg: "wrong password"};
    }
    return {success: false, msg: "not valid"};
  }

  register() {
    UserStorage.save(this.body);
  }
}

module.exports = User;