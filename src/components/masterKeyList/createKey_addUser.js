import React, { useState } from "react";
import Card from "../card";
import Table from "../table";
import Popup from "../popup";
import TableNavbar from "../tableNavbar";

function CreateAddUser(props) {
  function makePopupBtn(className, text, toggle){
      return (
        <div>
          <button
            type="button"
            class="btn me-auto"
            data-bs-dismiss="modal"
            data-bs-toggle="modal"
            data-bs-target="#createKey"
          >
            이전
          </button>
          <button
            type="button"
            class={className}
            style={{ marginLeft: "0.3rem" }}
            data-bs-dismiss="modal"
          >
            {text}
          </button>
        </div>
      );
  }
  const table_th=['선택', '사용자 이름', '사용자 ID', 'KEY-LEVEL']
  const table_td=[]
  const table = <Table table_th={table_th} table_td={table_td} />;
  const button = makePopupBtn("btn btn-primary", "저장", false);
  //const [key_check, setKeyButton] = useState(false);


  const h5 = <h5>&nbsp;&nbsp; 키 사용자를 추가하시기 바랍니다.</h5>
  const tableNavbarRight = (
    <div style={{ display: "flex" }}>
      <li class="nav-item" style={{ marginRight: "0.4rem" }}>
        <a
          class=
              "btn btn-outline-secondary w-100 disabled"
          
        >
          <span class="nav-link-title">삭제</span>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="btn btn-outline-warning w-100"
          role="button"
          data-bs-toggle="modal"
          data-bs-target="#addUser"
        >
          <span class="nav-link-title">추가</span>
        </a>
      </li>
    </div>
  );
  const table_navbar = <TableNavbar right={tableNavbarRight} />

  const html = [h5, <br />, <br />, table_navbar, table];

    return (
      <div>
        <div class="modal-body">
          < Card html={html} size="col-12" />

        </div>
        <div class="modal-footer">{button}</div>
      </div>
    );
}
export default CreateAddUser;