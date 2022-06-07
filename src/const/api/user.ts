// 사용자 관리 기능
/* manageUser
 *   list: 사용자 목록
 *   register: 사용자 추가
 *   change: 사용자 변경
 *   delete: 사용자 삭제
 *   initPassword: 암호 초기화
 *   emailConfirm: 메일인증 확인
 *   passwdReset: 패스워드 재설정
 */

const user = {
  // 사용자 목록
  list: {
    url: "/kms/admin/user/list",
    method: "post",
    header: {
      trId: "501300",
      function: "user_list",
    },
  },
  // 사용자 추가
  register: {
    url: "/kms/admin/user/register",
    method: "post",
    header: {
      trId: "501301",
      function: "user_register",
    },
  },
  // 사용자 변경
  change: {
    url: "/kms/admin/user/change",
    method: "post",
    header: {
      trId: "501302",
      function: "user_change",
    },
  },
  // 사용자 삭제
  delete: {
    url: "/kms/admin/user/delete",
    method: "post",
    header: {
      trId: "501303",
      function: "user_delete",
    },
  },
  // 암호 초기화
  initPassword: {
    url: "/kms/admin/user/init-password",
    method: "post",
    header: {
      trId: "501304",
      function: "user_init-password",
    },
  },
  // 메일인증 확인
  // 501305
  // /kms/public/user/email/confirm
  emailConfirm: {
    url: "/kms/public/user/email/confirm",
    method: "post",
    header: {
      trId: "501305",
      function: "user_email_confirm",
    },
  },
  // 패스워드 재설정
  // 501307
  // /kms/public/user/passwd/reset
  passwdReset: {
    url: "/kms/public/user/passwd/reset",
    method: "post",
    header: {
      trId: "501307",
      function: "user_passwd_reset",
    },
  },
};

export default user;

// user response body type
export interface userRequestProps {
  list: {
    userList: {
      userId: string;
      userName: string;
      userLevel: string;
      email: string;
    },
    status: string;
  },
  register: null,
}

// user response body type
export interface userResponseProps {
  list: {
  },
  register: {
    userId: string;
    password: string;
    name: string;
    level: string;
    email: string;
    regUserId: string;
  },
}