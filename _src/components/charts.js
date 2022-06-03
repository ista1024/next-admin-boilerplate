
import React, {useState} from 'react';

function Charts(props) {
    const [itemActive, setActive] = useState("dropdown-item ");
    const id = props.id;
    function handleDropdown(e) {
        const activeClass = document.getElementsByClassName('dropdown-item active');
        if (activeClass !== undefined){
            console.log(activeClass)
            Array.from(activeClass).forEach((Class) => {
                Class.classList.remove('active');
            })
            //activeClass[0].className('active');
        }
        console.log(e);
        console.log(e.target.className);
        e.target.className = "dropdown-item active"
    };
    const items = props.items.map((item) => <a class={itemActive} href="#" onClick={handleDropdown}>{item}</a>);
    const title = props.title;


  return (
      <div>
          <button class="btn btn-primary d-sm-inline-block dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="true">
              <span class="nav-link-title">{title}</span>
          </button>
    <div class="dropdown-menu dropdown-menu-demo" id={id}>
      {items}

    </div>
    </div>
  );
}

export default Charts;