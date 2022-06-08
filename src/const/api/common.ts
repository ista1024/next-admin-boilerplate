// 로그인 기능 공통 api
/* common
 *   saltuuid: salt 값 획득
 *   login: 로그인 요청
 */

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

export default common;

// common request body type
export interface commonRequestProps {
  saltuuid: {
    userId: string;
  }
  login: {
    userId: string;
    uuid: string;
    passwordHash: string;
  }
}

// common response body type
export interface commonResponseProps {
  saltuuid: {
    salt: string;
    uuid: string;
  },
  login: {
    token: {
      accessToken: string;
      expired: string;
    },
    userId: string;
    userLevel: string;
    failCnt: number;
    status: string;
  },
}
