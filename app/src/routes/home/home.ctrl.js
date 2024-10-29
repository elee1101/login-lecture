"use strict";

//아래 데이터
const users = {
  id: ["aaaa", "bbbb", "cccc"],
  psword: ["1234", "4321", "5678"]
}

//메인화면이면 home, 로그인화면이면 login화면 이동하는 함수? module화

const output = {
  home: (req, res) =>{
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
}

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "failed to login",
    });
  },
};
  
module.exports = {
  output,
  process,
};

// {hello : hello} 형식으로 저장됨
