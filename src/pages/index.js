import React from "react";

import Header from "../components/header";
import SideBar from "../components/sideBar";
import Footer from "../components/footer";

import DropdownBtn from "../components/dropdown_btn";
import Card from "../components/card";
import Table from "../components/table";
import DataTable from "../components/dataTable";

const IndexPage = () => {
  const items = ["마이페이지", "로그아웃"];

  const table_th = ['NAME',	'TITLE'	,'EMAIL','ROLE']
  const table_td = 
  [
    ['Paweł Kuna', 'UI Designer, Training',	'paweluna@howstuffworks.com',	'User'],
    ['Jeffie Lewzey', 'Chemical Engineer, Support',	'jlewzey1@seesaa.net',	'Admin'],
    ['Mallory Hulme', 'Geologist IV, Support',	'mhulme2@domainmarket.com',	'User'],
    ['Dunn Slane', 'Research Nurse, Sales',	'dslane3@epa.gov',	'User'],
  ]

  const table = <Table table_th={table_th} table_td={table_td} />

  const data_table_th = [
                          {class:'table-sort desc', data_sort:'sort-name', data:'name'},
                          {class:'table-sort', data_sort:'sort-city', data:'city'},
                          {class:'table-sort', data_sort:'sort-type', data:'type'},
                          {class:'table-sort', data_sort:'sort-score', data:'score'}
                        ]
  const data_table_td = [
                          [{class:'sort-name', data:'Wildfire6'}, {class:'sort-city', data:'Sweden'}, {class:'sort-type', data:'RMC Twister'}, {class:'sort-score', data:'99.3%'}],
                          [{class:'sort-name', data:'Wildfire2'}, {class:'sort-city', data:'Sweden'}, {class:'sort-type', data:'RMC Twister'}, {class:'sort-score', data:'99.3%'}],
                          [{class:'sort-name', data:'Wildfire3'}, {class:'sort-city', data:'Sweden'}, {class:'sort-type', data:'RMC Twister'}, {class:'sort-score', data:'99.3%'}],
                          [{class:'sort-name', data:'Wildfire4'}, {class:'sort-city', data:'Sweden'}, {class:'sort-type', data:'RMC Twister'}, {class:'sort-score', data:'99.3%'}],
                          [{class:'sort-name', data:'Wildfire5'}, {class:'sort-city', data:'Sweden'}, {class:'sort-type', data:'RMC Twister'}, {class:'sort-score', data:'99.3%'}],
                        ]

                      
  const data_table = <DataTable table_th={data_table_th} table_td={data_table_td} />

  const html = [table]

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

                    <Card html={html} size="col-12" />
                    <Card html={[data_table]} size="col-12" />

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
