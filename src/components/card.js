import React from 'react';
 
function Card(props) {
    const html = props.html.map((code) => {return code});
    const size = props.size;
  return (
    <div class={size}>
      <div class='card'>
        {html}
      </div>
    </div>
  );
}

export default Card;