import React from 'react';

function TableNavbar(props) {
    return (
        <div class="navbar-expand-md">
          <div class="collapse navbar-collapse" id="navbar-menu">
            <div class="navbar navbar-light">
              <div class="container-xl">
                <div class="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md">
                    {props.left}
                </div>
                <ul class="navbar-nav g-2 mb-n3">
                    {props.right}
                </ul>
              </div>
            </div>
          </div>
        </div>
    )
}

export default TableNavbar;