import React from 'react';
 
function Card(props) {
    const html = props.html;
  return (
    <div class="card card-md">
      <div class="card-body">
        <div class="row align-items-center">
            {html}
        </div>
      </div>
    </div>
  );
}

export default Card;