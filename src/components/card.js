import React from 'react';
 
function Card(props) {
  let html;
  if (typeof(props.html) == []){
     html = props.html.map((code) => {return code});
  }
  else{
    html = props.html;
  }
    const size = props.size;
  return (
    <div class={size}>
      <div class='card'>
        <div style={{margin : "1rem 2rem"}}>
        {html}
        </div>
      </div>
    </div>
  );
}

export default Card;