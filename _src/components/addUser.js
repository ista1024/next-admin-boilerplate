import React, { useState } from "react";
import Card from "./card";
import Table from "./table";
import Popup from "./popup";
import TableNavbar from "./tableNavbar";

import Axios from "./utils/axios";

function AddUser(props) {
  function sendmsg(){
    console.log('test start');

    //<Axios method="post" url="test_api" data={{'test':'test'}} action="" />
    //Axios.SendMsg(url="test_api", request_data={'test':'test'});

    console.log('test end');
    
  }

  function makePopupBtn(className, text, toggle){
      return (
        <div>
          <button
            type="button"
            class="btn me-auto"
            data-bs-dismiss="modal"
            data-bs-toggle="modal"
            data-bs-target={props.target_id}
          >
            취소
          </button>
          <button
            type="button"
            class={className}
            style={{ marginLeft: "0.3rem" }}
            data-bs-dismiss="modal"
            onClick={sendmsg}
          >
            {text}
          </button>
        </div>
      );
  }
  const table_th=['선택', '사용자 이름', '사용자 ID', 'KEY-LEVEL']
  const table_td=[]
  const table = <Table table_th={table_th} table_td={table_td} />;
  const button = makePopupBtn("btn btn-warning", "추가", false);

  const html = [<br />, <br />, table];

    return (
      <div>
        <div class="modal-body">
          < Card html={html} size="col-12" />

        </div>
        <div class="modal-footer">{button}</div>
      </div>
    );
}
export default AddUser;