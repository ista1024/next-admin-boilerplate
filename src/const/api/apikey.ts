// 인증키 관리 기능
/* apikey
 *   list: 목록
 *   register: 생성
 *   delete: 삭제
 *   StatusChange: 상태변경
 *   secretInfo: secret 정보
 */

const apikey = {
  // 목록
  // 503000
  // /kms/admin/apikey/list
  list: {
    url: "/kms/admin/apikey/list",
    method: "post",
    header: {
      trId: "503000",
      function: "apikey_list",
    },
  },
  // 생성
  // 503001
  // /kms/admin/apikey/register
  register: {
    url: "/kms/admin/apikey/register",
    method: "post",
    header: {
      trId: "503001",
      function: "apikey_register",
    },
  },
  // 삭제
  // 503002
  // /kms/admin/apikey/delete
  delete: {
    url: "/kms/admin/apikey/delete",
    method: "post",
    header: {
      trId: "503002",
      function: "apikey_delete",
    },
  },
  // 상태변경
  // 503003
  // /kms/admin/apikey/status/change
  statusChange: {
    url: "/kms/admin/apikey/status/change",
    method: "post",
    header: {
      trId: "503003",
      function: "apikey_status_change",
    },
  },
  // secret 정보
  // 503004
  // /kms/admin/apikey/secret-info
  secretInfo: {
    url: "/kms/admin/apikey/secret-info",
    method: "post",
    header: {
      trId: "503004",
      function: "apikey_secret_info",
    },
  },
};

export default apikey;
