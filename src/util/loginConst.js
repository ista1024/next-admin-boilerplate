const common = {
  // salt 값 획득
  saltuuid: {
    url: "/kms/public/common/saltuuid",
    method: "post",
    header: {
      trId: "500003",
      function: "get_salt",
    },
  },
  // 로그인 요청
  login: {
    url: "/kms/public/common/login",
    method: "post",
    header: {
      trId: "500004",
      function: "login",
    },
  },
};

export const message = {
  // 아이디 유효성 체크
  userId:
    "아이디를 정확히 입력해주세요.\n영문 대소문자, 숫자 4자리 이상 12자리 이하로 입력해주세요.",
  // 비밀번호 유효성 체크
  password:
    "비밀번호를 정확히 입력해주세요.\n영문 대소문자, 숫자, 특수문자를 포함하여 6자리 이상 16자리 이하로 입력해주세요.",
  // 비밀번호 일치 체크
  repeatPassword: "비밀번호가 일치하지 않습니다.",
  // 이름 유효성 체크
  name: "이름을 정확히 입력해주세요.\n2자리 이상 10자리 이하로 입력해주세요.",
  // 이메일 유효성 체크
  email: "이메일을 정확히 입력해주세요.",
};

export default common;
