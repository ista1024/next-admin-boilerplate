import React, { useState } from 'react';

import logo from '../dist/images/logo_ictk_white.png';

function SideBar() {
  const [pageName, getPageName] = useState("");

  const onClickPageName = (pageName) => {
    console.log(pageName);
  };

  return (
    <aside class="navbar navbar-vertical navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <h1 class="navbar-brand navbar-brand-autodark">
          <a href=".">
            <img src={logo} width="144" height="76" alt="홈 아이콘" />
          </a>
        </h1>

        <div class="collapse navbar-collapse" id="navbar-menu">
          <ul class="navbar-nav pt-lg-3">
            <li class="nav-item">
              <a class="nav-link" href="/userManage">
                <span class="nav-link-icon d-md-none d-lg-inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-id"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="3" y="4" width="18" height="16" rx="3"></rect>
                    <circle cx="9" cy="10" r="2"></circle>
                    <line x1="15" y1="8" x2="17" y2="8"></line>
                    <line x1="15" y1="12" x2="17" y2="12"></line>
                    <line x1="7" y1="16" x2="17" y2="16"></line>
                  </svg>
                </span>
                <span class="nav-link-title">사용자 관리</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link">
                <span class="nav-link-icon d-md-none d-lg-inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-key"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="8" cy="15" r="4"></circle>
                    <line x1="10.85" y1="12.15" x2="19" y2="4"></line>
                    <line x1="18" y1="5" x2="20" y2="7"></line>
                    <line x1="15" y1="8" x2="17" y2="10"></line>
                  </svg>
                </span>

                <span class="nav-link-title">ROOT 키 관리</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/masterKeyList">
                <span class="nav-link-icon d-md-none d-lg-inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-user-check"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                    <path d="M16 11l2 2l4 -4"></path>
                  </svg>
                </span>
                <span class="nav-link-title">고객사 키 관리</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link">
                <span class="nav-link-icon d-md-none d-lg-inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-api"
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
                      https://tabler-icons.io/i/api
                    </desc>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 13h5"></path>
                    <path d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3"></path>
                    <path d="M20 8v8"></path>
                    <path d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5"></path>
                  </svg>
                </span>

                <span class="nav-link-title">API 인증 키 관리</span>
              </a>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#navbar-layout"
                data-bs-toggle="dropdown"
                data-bs-auto-close="false"
                role="button"
                aria-expanded="false"
              >
                <span class="nav-link-icon d-md-none d-lg-inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-list-check"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3.5 5.5l1.5 1.5l2.5 -2.5"></path>
                    <path d="M3.5 11.5l1.5 1.5l2.5 -2.5"></path>
                    <path d="M3.5 17.5l1.5 1.5l2.5 -2.5"></path>
                    <line x1="11" y1="6" x2="20" y2="6"></line>
                    <line x1="11" y1="12" x2="20" y2="12"></line>
                    <line x1="11" y1="18" x2="20" y2="18"></line>
                  </svg>
                </span>

                <span class="nav-link-title">HISTORY</span>
              </a>
              <div class="dropdown-menu">
                <div class="dropdown-menu-columns">
                  <div class="dropdown-menu-column">
                    <a class="dropdown-item" href="#">
                      서비스 이력
                    </a>
                    <a class="dropdown-item" href="#">
                      고객사 키 이력
                    </a>
                    <a class="dropdown-item" href="#">
                      ROOT 키 이력
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
export default SideBar;