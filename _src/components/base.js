import React, {useState} from "react";

import Header from "./header";
import SideBar from "./sideBar";
import Footer from "./footer";

import DropdownBtn from "./dropdown_btn";
import Card from "./card";
import Table from "./table";
import DataTable from "./dataTable";

import Popup from "./popup";

const Base = (props) => {

  // Base Template
  const items = [
    { link: "mypage", name: "마이페이지" },
    { link: "signout", name: "로그아웃" },
  ]; 

  // Popup 컨텐츠

  // const [popup, setPopup] = useState(<Popup />)

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
                    <h2 class="page-title">{props.title}</h2>
                  </div>

                  <div class="col-12 col-md-auto ms-auto d-print-none">
                    <div class="btn-list">
                      <a class="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <desc>Download more icon variants from https://tabler-icons.io/i/refresh</desc>
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
   <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path>
</svg>
                        1:59:50</a>
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

                  {props.component}


                </div>

              </div>
            </div>

            <Footer />
            {props.popup}
          </div>
        </div>
      </body>
    </html>
  );
};

export default Base;
