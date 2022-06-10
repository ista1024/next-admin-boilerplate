import common, { message } from "./js/loginConst.js";
import Sha256 from "./js/Sha256.js";
import xhr from "./js/xhr.js";
import validateMessage from "./js/validateMessage.js";

export const data = common;

export const setCookie = (name, value, expire) => {
  let expires = "";
  if (expire) {
    const d = new Date();
    d.setTime(d.getTime() + expire * 1000);
    expires = "expires=" + d.toUTCString();
  }
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

// pwHash = Sha256.hash( uuid + Sha256.hash( userPasswd + salt ))
export const login = async ({ userId, password }, callback) => {
  const loginCallback = async (res) => {
    if (res.header && res.header.rtnCode === "000000") {
      const salt = res.body.salt;
      const uuid = res.body.uuid;
      const passwordHash = await Sha256(uuid + Sha256(password + salt));
      xhr(data.login, { userId, uuid, passwordHash }, (response) => {
        if (response.header.rtnCode === "000000") {
          const token = response.body.token;
          setCookie("accessToken", token.accessToken, expired);
        } else {
          console.log(response.header.rtnMsg);
          callback({
            message: response.header.rtnMsg,
            data: response.rtnCode,
          });
        }
      });
    } else {
      callback(res);
    }
  };
  // userid: /^[a-zA-Z0-9]{4,12}$/,
  if (!validateMessage("userId", userId)) {
    callback({
      message:
        "아이디를 정확히 입력해주세요.\n영문 대소문자, 숫자 4자리 이상 12자리 이하로 입력해주세요.",
      data: {},
      target: "#loginUserId",
    });
    return;
  }
  // password: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}$/,
  if (!validateMessage("password", password)) {
    callback({
      message:
        "비밀번호를 정확히 입력해주세요.\n영문 대소문자, 숫자, 특수문자를 포함하여 6자리 이상 16자리 이하로 입력해주세요.",
      data: {},
      target: "#loginPassword",
    });
    return;
  }
  xhr(data.saltuuid, { userId }, loginCallback);
};

function validateRegisterData(inputs, callback) {
  if (inputs && typeof inputs === "object") {
    const target = { ...inputs.target };
    delete inputs.target;
    Object.keys(inputs).map((attr) => {
      console.log(attr);
    });
    for (key in obj) {
      if (!validateMessage(key, obj[key])) {
        callback({
          message: message[key],
          data: {},
          target: target[key],
        });
        return;
      }
    }
  }
}

export const register = async (
  // { userId, password, repeatPassword, name, email },
  registerData,
  callback
) => {
  const registerCallback = async (res) => {
    if (res.header && res.header.rtnCode === "000000") {
      const salt = res.body.salt;
      const uuid = res.body.uuid;
      const passwordHash = await Sha256(uuid + Sha256(password + salt));
      xhr(data.register, registerData, (response) => {
        if (response.header.rtnCode === "000000") {
          const token = response.body.token;
          setCookie("accessToken", token.accessToken, expired);
        } else {
          console.log(response.header.rtnMsg);
          callback({
            message: response.header.rtnMsg,
            data: response.rtnCode,
          });
        }
      });
    } else {
      callback(res);
    }
  };
  validateRegisterData(registerData, callback);

  /*
  // userid: /^[a-zA-Z0-9]{4,12}$/,
  if (!validateMessage("userId", userId)) {
    callback({
      message: message.userId,
      data: {},
      target: "#registerUserId",
    });
    return;
  }
  if (password !== repeatPassword) {
    callback({
      message: message.repeatPassword,
      data: {},
      target: "#registerPassword",
    });
    return;
  }
  // password: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}$/,
  if (!validateMessage("password", password)) {
    callback({
      message: message.password,
      data: {},
      target: "#registerPassword",
    });
    return;
  }
  // name: /^[가-힣]{2,4}$/,
  if (!validateMessage("name", name)) {
    callback({
      message: message.name,
      data: {},
      target: "#registerName",
    });
    return;
  }
  // email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
  if (!validateMessage("email", email)) {
    callback({
      message: message.email,
      data: {},
      target: "#registerEmail",
    });
    return;
  }
  */
};
