import React, {useState} from "react";

import Header from "../components/header";
import SideBar from "../components/sideBar";
import Footer from "../components/footer";

import DropdownBtn from "../components/dropdown_btn";
import Card from "../components/card";
import Table from "../components/table";
import DataTable from "../components/dataTable";

import Popup from "../components/popup";

const Base = () => {

  // Base Template
  const items = [
    { link: "mypage", name: "마이페이지" },
    { link: "signout", name: "로그아웃" },
  ]; 

  // Popup 컨텐츠
  const contents = <Card html="" size="col-6"/>;

  var popupState = true;
  var popupFunction = null;

  function handleCallback([state, setState]){
    popupState = state;
    popupFunction = setState;
  }

  function handlePopup(){
    if (popupState){
        popupFunction(false);
    }
    else {
        popupFunction(true);
    }
  }

  // End Base Template

  return (
    <html lang="ko">
      <Header />
      <body>
        <div class="page">
          <SideBar />

          <div class="page-wrapper" style={{maxWidth:1140, marginLeft:"20rem"}}>
            {/* 페이지 내용 공간 */}
            <div class="container-xl" >
              {/* Page Title */}
              <div class="page-header d-print-none">
                <div class="row g-2 align-items-center">
                  <div class="col">
                    <div class="page-pretitle">KEY Management Service(KMS)</div>
                    <h2 class="page-title">Dashboard</h2>
                  </div>

                  <div class="col-12 col-md-auto ms-auto d-print-none">
                    <div class="btn-list">
                      <span class="d-none d-sm-inline">
                        <DropdownBtn items={items} title="로그인 ID" id="user" />

                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="page-body">
              <div class="container-xl">

                <div class="row row-deck row-cards">

                    <button onClick={handlePopup}>test</button>

                </div>

              </div>
            </div>

            <Footer />
            <Popup contents={contents} handleCallback={handleCallback}/>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Base;
