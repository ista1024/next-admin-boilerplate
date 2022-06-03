import React from 'react';


function Table(props) {
    // input
    // th = [['a','b','c','d']]
    // td = [
    //          ['a','b','c','d'],
    //          ['a','b','c','d'],
    //      ]

    const th_items = props.table_th.map((th) => <th>{th}</th>);

    const td_items = props.table_td.map((item) => <tr>{item.map((td) => <td>{td}</td>)}</tr>);
return (
  <div class="table-responsive" style={{ overflowY: "auto", maxHeight: "20rem" }}>
    <table class="table table-vcenter card-table text-nowrap datatable">
      <thead>
        <tr>{th_items}</tr>
      </thead>
      <tbody>{td_items}</tbody>
    </table>
  </div>
);
}

export default Table;