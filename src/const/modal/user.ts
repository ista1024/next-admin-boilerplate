// 사용자 관리 모달
/* manageUser
 *   list: 사용자 목록
 *   register: 사용자 추가
 *   change: 사용자 변경
 *   delete: 사용자 삭제
 *   initPassword: 암호 초기화
 *   emailConfirm: 메일인증 확인
 *   passwdReset: 패스워드 재설정
 */

const UserModal = {
  // 사용자 목록
  list: {
    id: "user-list",
    title: "사용자 목록",
  },
  // 사용자 추가
  register: {
    id: "user-register",
    title: "사용자 추가",
  },
  // 사용자 변경
  change: {
    id: "user-change",
    title: "사용자 변경",
  },
  // 사용자 삭제
  delete: {
    id: "user-delete",
    title: "사용자 삭제",
  },
  // 암호 초기화
  initPassword: {
    id: "user-initPassword",
    title: "사용자 암호 초기화",
  },
};

export default UserModal;
