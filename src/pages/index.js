import React from "react";

import Header from "../components/header";
import SideBar from "../components/sideBar";
import Footer from "../components/footer";

import Dropdown from "../components/dropdown";
import DropdownBtn from "../components/dropdown_btn";
import Card from "../components/card";

const IndexPage = () => {
  const items = ["test1", "test2", "test3"];

  const html = <Dropdown items={items} title="드랍다운 테스트" id="test" />

  const userSvg = <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <desc>Download more icon variants from https://tabler-icons.io/i/user</desc>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                  </svg>

  console.log(document.documentElement.scrollTop); 

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
                        <DropdownBtn items={items} title="로그인 ID" id="test" />

                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="page-body">
              <div class="container-xl">

                <div class="row row-deck row-cards">

                  <div class="col-lg-12">
                    <Card html={html} />
                  </div>

                </div>

              </div>
            </div>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default IndexPage;
