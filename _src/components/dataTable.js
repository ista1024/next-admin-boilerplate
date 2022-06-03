import React from "react";

function DataTable(props) {
  // input
  // th = [{class:'table-sort', data-sort:'sort-name', data:'name'}]
  // td = [
  //          [{class:'sort-name', data:'Wildfire'}, {class:'sort-city', data:'Sweden'}],
  //          [{class:'sort-name', data:'Wildfire'}, {class:'sort-city', data:'Sweden'}],
  //      ]

  const th_items = props.table_th.map((th) => {
    return (
      <th>
        <button class={th.class} data-sort={th.data_sort}>
          {th.data}
        </button>
      </th>
    );
  });
  const td_items = props.table_td.map((item) => (
    <tr>
      {item.map((td) => (
        <td class={td.class}>{td.data}</td>
      ))}
    </tr>
  ));

  return (
    <div>
      <div id="table-default">
        <table class="table">
          <thead>
            <tr>{th_items}</tr>
          </thead>
          <tbody class="table-tbody">{td_items}</tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
