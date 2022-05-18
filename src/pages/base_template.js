import React, { useEffect } from "react";

import "../dist/css/tabler.min.css";

import Header from "../components/header";
import SideBar from "../components/sideBar";
import Footer from "../components/footer";

function Base() {

  return (
    <html lang="ko">
      <Header />
      <body>
        <div class="page">
          <SideBar />

          <div class="page-wrapper" style={{maxWidth:1140, marginLeft:"20rem"}}>
            {/* 페이지 내용 공간 */}

            <div class="container-xl">
              {/* Page Title */}
              <div class="page-header d-print-none">
                <div class="row g-2 align-items-center">
                  <div class="col">
                    <div class="page-pretitle">KEY Management Service(KMS)</div>
                    <h2 class="page-title">{/* TITLE */}</h2>
                  </div>

                  <div class="col-12 col-md-auto ms-auto d-print-none">
                    <div class="btn-list">
                      <span class="d-none d-sm-inline">
                        <a href="#" class="btn btn-white">
                          {" "}
                          test
                        </a>
                      </span>
                    </div>
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
}

export default Base