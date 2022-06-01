import React, {useState} from "react";

import Base from "../components/base";

import DropdownBtn from "../components/dropdown_btn";
import Card from "../components/card";
import Table from "../components/table";
import DataTable from "../components/dataTable";

import Popup from "../components/popup";

const IndexPage = () => {

  // Base Template
  const items = [
    { link: "mypage", name: "마이페이지" },
    { link: "signout", name: "로그아웃" },
  ]; 

  // Popup 컨텐츠
  const [popup, setPopup] = useState(<Popup />)
  // End Base Template

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

  const component = (
    <div>
      <Card html={table} size="col-12" />
      <br />
      <Card html={data_table} size="col-12" />
    </div>
  );
  
  return (
    <Base title="Dashboard" component={component} popup=""/>
  );
};

export default IndexPage;
