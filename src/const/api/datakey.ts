// 데이터키 관리 기능
/* datakey
 *   new: 데이터키 생성
 *   decode: 데이터키 복호화 요청
 */

const datakey = {
  // 데이터키 생성
  // 507000
  // /kms/api/datakey/new
  new: {
    url: "/kms/api/datakey/new",
    method: "post",
    header: {
      trId: "5070000",
      function: "data_key_new",
    },
  },
  // 데이터키 복호화 요청
  // 507001
  // /kms/api/datakey/decode
  decode: {
    url: "/kms/api/datakey/decode",
    method: "post",
    header: {
      trId: "507001",
      function: "data_key_decode",
    },
  },
};

export default datakey;
