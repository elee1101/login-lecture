"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  } 

  async login() {
    const body = this.body
    const { id, psword} = await UserStorage.getUserInfo(body.id);

    if (id) {
      if (id === body.id && psword === body.psword) {
        return {success: true};
      }
      return {success: false, msg: "wrong password"};
    }
    return {success: false, msg: "not valid"};
  }

  async register() {
    try {
      const response = await UserStorage.save(this.body);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

module.exports = User;