// 이력 관리 기능
/* history
 *   service: 서비스 이력 관리
 *   apikey: API 키 사용 이력 관리
 *   key: 키사용 이력관리 (루트키/고객사키 공통)
 */

const history = {
  // 서비스 이력 관리
  // 505000
  // /kms/admin/history/service
  service: {
    url: "/kms/admin/history/service",
    method: "post",
    header: {
      trId: "505000",
      function: "history_service",
    },
  },
  // API 키 사용 이력 관리
  // 505001
  // /kms/admin/history/apikey
  apikey: {
    url: "/kms/admin/history/apikey",
    method: "post",
    header: {
      trId: "505001",
      function: "history_apikey",
    },
  },
  // 키사용 이력관리 (루트키/고객사키 공통)
  // 505002
  // /kms/admin/history/key
  key: {
    url: "/kms/admin/history/key",
    method: "post",
    header: {
      trId: "505002",
      function: "history_key",
    },
  },
};

export default history;
