"use strict";

//메인화면이면 home, 로그인화면이면 login화면 이동하는 함수? module화

const User = require("../../models/User");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  }
}

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
    // const id = req.body.id,
    //   psword = req.body.psword;

    // const users = UserStorage.getUsers("id", "psword");

    // const response = {};
    // if (users.id.includes(id)) {
    //   const idx = users.id.indexOf(id);
    //   if (users.psword[idx] === psword) {
    //     response.success = true;
    //     return res.json(response);
    //   }
    // }

    // response.success = false;
    // response.msg = "failed to login";
    // return res.json(response);
  },
  register: async (req,res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  }
};
  
module.exports = {
  output,
  process,
};

// {hello : hello} 형식으로 저장됨
