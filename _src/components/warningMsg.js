import React from 'react';

function warningMsg(props){

    return (
      <div class="modal-body text-center py-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon mb-2 text-danger icon-lg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <desc>
            Download more icon variants from
            https://tabler-icons.io/i/alert-triangle
          </desc>
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 9v2m0 4v.01"></path>
          <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"></path>
        </svg>
        <div class="text-muted">
          {props.text}
        </div>
      </div>
    );
}
export default warningMsg;