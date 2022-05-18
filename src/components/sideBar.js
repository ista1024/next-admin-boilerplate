import React, { useState } from 'react';

function SideBar(){

    const [pageName, getPageName] = useState('')

    const onClickPageName = (pageName) => {
        console.log(pageName);
    }


    return(

         <aside class="navbar navbar-vertical navbar-expand-lg navbar-dark">
              <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
                         <span class="navbar-toggler-icon"></span>
                    </button>
                    <h1 class="navbar-brand navbar-brand-autodark">
                         <a href=".">
                              <img src={process.env.PUBLIC_URL + "/logo_ictk_white.png"} width="144" height="76" alt="홈 아이콘" />
                         </a>
                    </h1>

                    <div class="collapse navbar-collapse" id="navbar-menu">
                         <ul class="navbar-nav pt-lg-3">

                              <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="false" role="button" aria-expanded="false">
                  <span class="nav-link-icon d-md-none d-lg-inline-block">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-id" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                       <rect x="3" y="4" width="18" height="16" rx="3"></rect>
                       <circle cx="9" cy="10" r="2"></circle>
                       <line x1="15" y1="8" x2="17" y2="8"></line>
                       <line x1="15" y1="12" x2="17" y2="12"></line>
                       <line x1="7" y1="16" x2="17" y2="16"></line>
                    </svg>
                  </span>
                                         <span class="nav-link-title">
                      마이페이지
                  </span>
                                    </a>
                                    <div class="dropdown-menu">
                                         <div class="dropdown-menu-columns">
                                              <div class="dropdown-menu-column">
                                                    <a class="dropdown-item" href="#" onClick={() => onClickPageName("editProfile")}>
                                                         개인정보수정
                                                    </a>
                                                    <a class="dropdown-item" href="/signout" onClick={() => onClickPageName("signOut")} >
                                                         로그아웃
                                                    </a>
                                              </div>
                                         </div>
                                    </div>
                              </li>

                              <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#navbar-base" data-bs-toggle="dropdown" data-bs-auto-close="false" role="button" aria-expanded="false">
                  <span class="nav-link-icon d-md-none d-lg-inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                       <path d="M3.5 5.5l1.5 1.5l2.5 -2.5"></path>
                       <path d="M3.5 11.5l1.5 1.5l2.5 -2.5"></path>
                       <path d="M3.5 17.5l1.5 1.5l2.5 -2.5"></path>
                       <line x1="11" y1="6" x2="20" y2="6"></line>
                       <line x1="11" y1="12" x2="20" y2="12"></line>
                       <line x1="11" y1="18" x2="20" y2="18"></line>
                    </svg>
                  </span>
                                         <span class="nav-link-title">
                    고객사 관리
                  </span>
                                    </a>
                                    <div class="dropdown-menu">
                                         <div class="dropdown-menu-columns">
                                              <div class="dropdown-menu-column">
                                                    <a class="dropdown-item" href="#" onClick={() => onClickPageName("addCustomer")}>
                                                         고객사 등록
                                                    </a>
                                                    <a class="dropdown-item" href="#" onClick={() => onClickPageName("deleteCustomer")} >
                                                         고객사 삭제
                                                    </a>
                                                    <a class="dropdown-item" href="#" onClick={() => onClickPageName("editCustomer")} >
                                                         고객사 조회 및 수정
                                                    </a>
                                              </div>
                                         </div>
                                    </div>
                              </li>


                              <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#navbar-extra" data-bs-toggle="dropdown" data-bs-auto-close="false" role="button" aria-expanded="false" >
                  <span class="nav-link-icon d-md-none d-lg-inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                       <circle cx="9" cy="7" r="4"></circle>
                       <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                       <path d="M16 11l2 2l4 -4"></path>
                    </svg>

                  </span>
                                         <span class="nav-link-title">
                    사용자 관리
                  </span>
                                    </a>
                                    <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#" onClick={() => onClickPageName("addUser")}>
                                                 사용자 등록
                                            </a>
                                            <div class="dropend">
                                                 <a class="dropdown-item dropdown-toggle" href="#sidebar-cards" data-bs-toggle="dropdown" data-bs-auto-close="false" role="button" aria-expanded="false" >
                                                      사용자 수정
                                                      <span class="badge badge-sm bg-green text-uppercase ms-2">New</span>
                                                 </a>
                                                 <div class="dropdown-menu">
                                                      <a class="dropdown-item" href="#" onClick={() => onClickPageName("addUser")}>
                                                            사용자 정보 설정
                                                      </a>
                                                      <a class="dropdown-item" href="#" onClick={() => onClickPageName("setPolicy")}>
                                                            정책 설정
                                                            <span class="badge badge-sm bg-green text-uppercase ms-2">New</span>
                                                      </a>
                                                      <a class="dropdown-item" href="#" onClick={() => onClickPageName("setAuth")}>
                                                            권한 설정
                                                      </a>
                                                      <a class="dropdown-item" href="#" onClick={() => onClickPageName("setUserKey")}>
                                                            사용자 키 설정
                                                      </a>
                                                 </div>
                                            </div>

                                            <a class="dropdown-item" href="#" onClick={() => onClickPageName("deleteUser")} >
                                                 사용자 삭제
                                            </a>

                                            <a class="dropdown-item" href="#" onClick={() => onClickPageName("checkUser")}>
                                                 사용자 정보 확인
                                            </a>
                                    </div>
                              </li>

                              <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#navbar-layout" data-bs-toggle="dropdown" data-bs-auto-close="false" role="button" aria-expanded="false" >
                  <span class="nav-link-icon d-md-none d-lg-inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-key" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="8" cy="15" r="4"></circle><line x1="10.85" y1="12.15" x2="19" y2="4"></line><line x1="18" y1="5" x2="20" y2="7"></line><line x1="15" y1="8" x2="17" y2="10"></line></svg>
                  </span>
                                         <span class="nav-link-title">
                    마스터키 관리
                  </span>
                                    </a>
                                    <div class="dropdown-menu">
                                         <div class="dropdown-menu-columns">
                                              <div class="dropdown-menu-column">
                                                    <a class="dropdown-item" href="#" onClick={() => onClickPageName("createKey")}>
                                                         키 생성
                                                    </a>
                                                    <a class="dropdown-item" href="#" onClick={() => onClickPageName("stateKey")}>
                                                         키 상태 확인
                                                    </a>
                                                    <a class="dropdown-item" href="#" onClick={() => onClickPageName("checkKey")}>
                                                         키 정보 확인
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