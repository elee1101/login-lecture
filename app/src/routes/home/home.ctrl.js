"use strict";

//메인화면이면 hello, 로그인화면이면 login화면 이동하는 함수? module화

const hello = (req, res) =>{
  res.render("home/index");
}

const login = (req, res) => {
  res.render("home/login");
}

module.exports = {
  hello,
  login,
};

// {hello : hello} 형식으로 저장됨
