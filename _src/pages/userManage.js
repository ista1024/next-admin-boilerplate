import React, {useState} from "react";

import Base from "../components/base";

import Card from "../components/card";
import Table from "../components/table";
import DataTable from "../components/dataTable";

import Popup from "../components/popup";
import WarningMsg from "../components/warningMsg";
import PopupMsg from "../components/popupMsg";

const UserManage = () => {

  // Base Template
  const items = [
    { link: "mypage", name: "마이페이지" },
    { link: "signout", name: "로그아웃" },
  ]; 

  // Popup 컨텐츠
  const [popup, setPopup] = useState(<Popup />)
  // End Base Template

  const [key_check, setKeyButton] = useState(false);

  // Key CheckBox Handler
  const handleKeyButton = (value) => {
    setKeyButton(true);
  }

  function check_box(value) {
    const temp = <input id="check_box" type="radio" name="key" value={value} onChange={(e) => handleKeyButton(e.target.value)}/>;
    return temp
  };

  const table_th = ['선택',	'ID'	,'이름','LEVEL', '업데이트']
  const table_td = 
  [
      [check_box('TEST1'), 'TEST1', 'TEST1', 'ADMIN', '2022.05.22 13:22:10'],
      [check_box('TEST2'), 'TEST2', 'TEST2', 'ADMIN', '2022.05.22 13:22:10']

  ]


  const h3 = <h3>사용자 목록</h3>

  const h5 = <h5>&nbsp;&nbsp;&nbsp;KMS 관리자 서버에 접속하는 사용자를 관리합니다.</h5>

  const br = <br />

  // Table Navigation Bar
  const search_div = (
    <div class="navbar-expand-md">
      <div class="collapse navbar-collapse" id="navbar-menu">
        <div class="navbar navbar-light">
          <div class="container-xl">
            <div class="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md"></div>
            <ul class="navbar-nav g-2 mb-n3">
              <li class="nav-item" style={{ marginRight: "0.4rem" }}>
                <a
                  class={
                    key_check
                      ? "btn btn-outline-secondary w-100"
                      : "btn btn-outline-secondary w-100 disabled"
                  }
                  role="button"
                  id="initPassword"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-simple"
                  onClick={initPassword}
                >
                  암호초기화
                </a>
              </li>
              <li class="nav-item" style={{ marginRight: "0.4rem" }}>
                <a
                  class={
                    key_check
                      ? "btn btn-outline-secondary w-100"
                      : "btn btn-outline-secondary w-100 disabled"
                  }
                  role="button"
                  id="deleteUser"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-simple"
                  onClick={deleteUser}
                >
                  삭제
                </a>
              </li>
              <li class="nav-item" style={{ marginRight: "0.4rem" }}>
                <a
                  class={
                    key_check
                      ? "btn btn-outline-secondary w-100"
                      : "btn btn-outline-secondary w-100 disabled"
                  }
                  role="button"
                  id="addUser"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-simple"
                  onClick={addUser}
                >
                  추가
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  const table = <Table table_th={table_th} table_td={table_td} />

  const html = [h3, h5, br, br, search_div, table];


  const component = (
    <div>
      <Card html={html} size="col-12" />
    </div>
  );

  function makePopupBtn(className, text){
      return (
        <div>
          <button type="button" class="btn me-auto" data-bs-dismiss="modal">
            취소
          </button>
          <button
            type="button"
            class={className}
            data-bs-dismiss="modal"
            style={{ marginLeft: "0.3rem" }}
          >
            {text}
          </button>
        </div>
      );
  }

;
  function initPassword(){
    const value = document.querySelector('input[name="key"]:checked').value;
    const text = (
      <div>
        등록된 이메일로 초기화 암호를 전송합니다.
        <br />
        사용자 암호를 초기화 하시겠습니까?
      </div>
    );
    const body = <WarningMsg text={text} />
    const button = makePopupBtn("btn btn-warning", "확인")
    setPopup(<Popup title="사용자 암호 초기화" body={body} button={button}/>)
  }
  function deleteUser(){
    const value = document.querySelector('input[name="key"]:checked').value;
    const text = (
      <div>
        사용자를 삭제하면
        <br />
        해당 계정으로 등록된 API키도 삭제됩니다.
        <br />
        <br />
        <Table table_th={['사용자이름', '인증키']} table_td={[[value, 'test']]}/>
      </div>
    );
    const body = <WarningMsg text={text} />
    const button = makePopupBtn("btn btn-warning", "삭제")
    setPopup(<Popup title="사용자 삭제 " body={body} button={button}/>)
  }
  function addUser(){
    const value = document.querySelector('input[name="key"]:checked').value;

    const text = (
      <div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">사용자 ID</label>
            <input
              type="text"
              class="form-control"
              name="id"
              placeholder="최소 3자 이상 100자 이하"
            />
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label">password</label>
                <div class="input-group input-group-flat">
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    autocomplete="off"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label">password 확인</label>
                <div class="input-group input-group-flat">
                  <input
                    type="password"
                    class="form-control"
                    name="re-password"
                    autocomplete="off"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="mb-3">
              <label class="form-label">권한</label>
              <select class="form-select">
                <option value="ADMIN" selected="">
                  ADMIN
                </option>
                <option value="KEY_MGR">KEY_MGR</option>
                <option value="USER">USER</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label">이메일 주소</label>
                <div class="input-group input-group-flat">
                  <input
                    type="text"
                    class="form-control"
                    name="email"
                    placeholder="이메일 주소를 입력하세요."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    const body = <PopupMsg text={text} />;
    const button = makePopupBtn("btn btn-warning", "삭제")
    setPopup(<Popup title="사용자 삭제 " body={body} button={button}/>)
  }
  
  return (
    <Base title="사용자 관리" component={component} popup={popup}/>
  );
};

export default UserManage;