import React, {useState} from "react";

import Card from "../components/card";
import Table from "../components/table";

import Popup from "../components/popup";
import Base from "../components/base";

import TableFooter from "../components/tableFooter";
import TableNavbar from "../components/tableNavbar";
import PageSubscript from "../components/pageSubscript";
import DropdownBtn from "../components/dropdown_btn";
import CreateKey from "../components/masterKeyList/createKey";
import CreateKeyAddUser from "../components/masterKeyList/createKey_addUser";
import AddUser from "../components/addUser";

const MasterKeyList = () => {
  const [popup, setPopup] = useState(<div><Popup /><Popup /></div>)

  const [search, setSearch] = useState('');
  const table_th = ['선택',	'키 이름'	,'ID', '상태', '업데이트', '목적']

  const [key_check, setKeyButton] = useState(false);

  const [keyActiveText, setkeyActiveText] = useState('');


  // Key CheckBox Handler
  const handleKeyButton = (value) => {
    setKeyButton(true);
    for (let i = 0; i < table_td.length; i++) {
      if (table_td[i].includes(value)) {
        if (table_td[i].includes('비활성화')){
          setkeyActiveText('활성화');
        }
        else{
          setkeyActiveText('비활성화');
        }
      }
    }
  }

  function check_box(value) {
    const temp = <input id="check_box" type="radio" name="key" value={value} onChange={(e) => handleKeyButton(e.target.value)}/>;
    return temp
  };

  const table_td = 
    [
      [check_box('0000-0000-0000-0001'), '마스터 키 1',	'0000-0000-0000-0001',	'비활성화', '2022.02.10 17:10:22', '암호화 및 복호화'],
      [check_box('0000-0000-0000-0002'), '마스터 키 2',	'0000-0000-0000-0002',	'비활성화', '2022.05.10 21:10:22', '암호화 및 복호화'],
      [check_box('0000-0000-0000-0003'), '마스터 키 3',	'0000-0000-0000-0003',	'활성화', '2022.05.12 17:15:22', '암호화 및 복호화'],
      [check_box('0000-0000-0000-0004'), '마스터 키 4',	'0000-0000-0000-0004',	'활성화', '2022.05.13 18:24:22', '암호화 및 복호화'],
    ]
  const [search_table_td, setTable_td] = useState(table_td);


  // Search Handler
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setTable_td(
      table_td.filter((list) => {
        return list.join().includes(e.target.value);
      })
    );
  }

  const pageSubscript = <PageSubscript title="고객사 키 목록" explane="고객이 생성한 고객사 키 목록입니다." />

  // Table Navigation Bar
  const tableNavbarLeft = (
    <form action="." method="get">
      <div class="input-icon">
        <span class="input-icon-addon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <desc>
              Download more icon variants from https://tabler-icons.io/i/search
            </desc>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="10" cy="10" r="7"></circle>
            <line x1="21" y1="21" x2="15" y2="15"></line>
          </svg>
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Search…"
          aria-label="Search in website"
          id="search"
          value={search}
          onChange={handleSearch}
        />
      </div>
    </form>
  );
  const tableNavbarRight = (
    <div style={{display:"flex"}}>
      <li
        class="nav-item dropdown col-6 col-sm-4 col-md-2 col-xl"
        style={{ marginRight: "0.4rem" }}
      >
        <a
          class={
            key_check
              ? "dropdown-toggle btn btn-outline-primary w-100"
              : "dropdown-toggle btn btn-outline-primary w-100 disabled"
          }
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          role="button"
          aria-expanded="false"
        >
          <span class="nav-link-title">키 작업 &nbsp;</span>
        </a>
        <div class="dropdown-menu">
          <a
            class="dropdown-item"
            role="button"
            id="keyActive"
            onClick={(e) => keyActive(e.target.innerText)}
          >
            {/*활성화 비활성화 */}
            {keyActiveText}
          </a>
          <a class="dropdown-item" role="button" id="inputKey">
            사용 권한
          </a>
          <a
            class="dropdown-item"
            role="button"
            id="updateKey"
            data-bs-toggle="modal"
            data-bs-target="#modal-simple"
            onClick={keyUpdate}
          >
            갱신
          </a>
          <a class="dropdown-item" role="button" id="deleteKey">
            키 삭제
          </a>
        </div>
      </li>
      <li class="nav-item">
        <a
          class="btn btn-outline-secondary w-100"
          data-bs-toggle="modal"
          data-bs-target="#createKey"
          onClick={createKey}
        >
          <span class="nav-link-title">키 생성</span>
        </a>
      </li>
    </div>
  );

  const tableNavbar = <TableNavbar left={tableNavbarLeft} right={tableNavbarRight} />

  const table = <Table table_th={table_th} table_td={search_table_td} />

  const html = [pageSubscript, tableNavbar, table, <TableFooter />];

  function keyActive(value) {
   // key == 선택된 key 값 , value == 클릭한 상태 값
    const key = document.querySelector('input[name="key"]:checked').value;

    if (value === "비활성화") {
      // 비활성화 시 팝업 생성
    }

    // DB에 상태를 변경 or API 전송

    // Callback이 오면 페이지 새로고침하면 DB에 새로 저장된 데이터를 불러옴

  }

  function makePopupBtn(className, text, clickEvent){
      return (
        <div>
          <button type="button" class="btn me-auto" data-bs-dismiss="modal">
            취소
          </button>
          <button
            type="button"
            class={className}
            style={{ marginLeft: "0.3rem" }}
            onClick = {
               () => clickEvent()
            }
            data-bs-dismiss = "modal"
          >
            {text}
          </button>
        </div>
      );
  }
  function createKey() {
    const createKey = <Popup title="키 사용자 추가" body={<CreateKey />} id="createKey"/>
    const createAddUser = <Popup title="키 사용자 추가" body={<CreateKeyAddUser />} id="createKeyAddUser" />
    const addUser = <Popup title="키 사용자 추가" body={<AddUser target_id="#createKeyAddUser"/>} id="addUser" />
 
    setPopup(<div>{createKey}{createAddUser}{addUser}</div>)
  }

  function keyUpdate() {
    const button = makePopupBtn("btn btn-primary", "키 갱신")
    setPopup(<Popup title="팝업 테스트" body="키 갱신을 눌렀을 때" button={button}/>)
  }
  const component = (
    <div>
      <Card html={html} size="col-12" />
    </div>
  );

  return (
    <Base title="고객사 키 관리" component={component} popup={popup}/>
  );
};

export default MasterKeyList;