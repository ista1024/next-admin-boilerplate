import React from 'react';

function Alerts(props) {
    // type = ['success', 'info', 'warning', 'danger']

    console.log(props)

    const className = "alert alert-" + props.type;
    const title = props.title;
    const alertShow = props.style;

  return (
    <div style={alertShow}>
      <div class= {className} role="alert">
        <h4 class="alert-title">{title}</h4>
      </div>
    </div>
  );
}
export default Alerts;