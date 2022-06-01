import React from 'react';

function popupMsg(props){

    return (
      <div class="modal-body text-center py-4">
        <div class="text-muted">
          {props.text}
        </div>
      </div>
    );
}
export default popupMsg;