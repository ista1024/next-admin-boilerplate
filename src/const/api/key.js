// 키 관리 기능
/* key
 *   list: 키목록
 *   newInfo: 생성 정보 요청
 *   newReg: 키생성 요청
 *   delete: 키삭제
 *   update: 키갱신
 *   statusChange: 키 활성화/비활성화
 *   userList: 사용자 목록
 *   userAddList: 추가를 위한 사용자 목록
 *   userLevel: 사용자 키레벨 목록
 *   userRegister: 키사용자 추가
 *   detailInfo: 세부정보
 *   detailVersionList: 버전 목록
 *   detailDescChange: 편집-설명
 */

export default key;

const key = {
  // 키목록
  // 502000
  // /kms/admin/key/list
  list: {
    url: "/kms/admin/key/list",
    method: "post",
    header: {
      trId: "502000",
      function: "key_list",
    },
  },
  // 생성 정보 요청
  // 502001
  // /kms/admin/key/new/info
  newInfo: {
    url: "/kms/admin/key/new/info",
    method: "post",
    header: {
      trId: "502001",
      function: "key_new_info",
    },
  },
  // 키생성 요청
  // 502002
  // /kms/admin/key/new/reg
  newReg: {
    url: "/kms/admin/key/new/reg",
    method: "post",
    header: {
      trId: "502002",
      function: "key_new_reg",
    },
  },
  // 키삭제
  // 502003
  // /kms/admin/key/delete
  delete: {
    url: "/kms/admin/key/delete",
    method: "post",
    header: {
      trId: "502003",
      function: "key_delete",
    },
  },
  // 키갱신
  // 502004
  // /kms/admin/key/update
  update: {
    url: "/kms/admin/key/update",
    method: "post",
    header: {
      trId: "502004",
      function: "key_update",
    },
  },
  // 키 활성화/비활성화
  // 502005
  // /kms/admin/key/status/change
  statusChange: {
    url: "/kms/admin/key/status/change",
    method: "post",
    header: {
      trId: "502005",
      function: "key_status_change",
    },
  },
  // 사용자 목록
  // 502100
  // /kms/admin/key/user/list
  userList: {
    url: "/kms/admin/key/user/list",
    method: "post",
    header: {
      trId: "502100",
      function: "key_user_list",
    },
  },
  // 추가를 위한 사용자 목록
  // 502101
  // /kms/admin/key/user/add-list
  userAddList: {
    url: "/kms/admin/key/user/add-list",
    method: "post",
    header: {
      trId: "502101",
      function: "key_user_add-list",
    },
  },
  // 사용자 키레벨 목록
  // 502102
  // /kms/admin/key/user/level
  userLevel: {
    url: "/kms/admin/key/user/level",
    method: "post",
    header: {
      trId: "502102",
      function: "key_user_level",
    },
  },
  // 키사용자 추가
  // 502103
  // /kms/admin/key/user/register
  userRegister: {
    url: "/kms/admin/key/user/register",
    method: "post",
    header: {
      trId: "502103",
      function: "key_user_register",
    },
  },
  // 세부정보
  // 502200
  // /kms/admin/key/detail/info
  detailInfo: {
    url: "/kms/admin/key/detail/info",
    method: "post",
    header: {
      trId: "502200",
      function: "key_detail_info",
    },
  },
  // 버전 목록
  // 502201
  // /kms/admin/key/detail/version/list
  detailVersionList: {
    url: "/kms/admin/key/detail/version/list",
    method: "post",
    header: {
      trId: "502201",
      function: "key_detail_version_list",
    },
  },
  // 편집-설명
  // 502202
  // /kms/admin/key/detail/desc/change
  detailDescChange: {
    url: "/kms/admin/key/detail/desc/change",
    method: "post",
    header: {
      trId: "502202",
      function: "key_detail_desc_change",
    },
  },
};
