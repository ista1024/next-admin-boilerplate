import React, { useState } from 'react';
import "../dist/css/tabler.min.css";
import axios from "axios";
import { navigate } from "gatsby";
import Alerts from "../components/alerts";
//import logo from '../dist/images/0.0-ICTK-main-green.png';

import { graphql } from "gatsby";

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        APIUrl
      }
    }
  }`

function Signin({data}) {
  const APIUrl = data.site.siteMetadata.APIUrl;
  console.log(APIUrl);

    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    const [Remember, setRemember] = useState(false)

    const [errorMessage, setErrorMessage] = useState("");
    const [errorType, setErrorType] = useState("");
    const [alertShow, setAlertShow] = useState(false);

	// input data 의 변화가 있을 때마다 value 값을 변경해서 usestate 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const handleRemember = (e) => {
        setRemember(true)
    }

    const handleErrorMessage = (e) => {
      if (errorMessage !== "") {
        setAlertShow(true);
        setErrorType("danger");

        setTimeout(() => setAlertShow(false), 5000)
      }
    }

	// login 버튼 클릭 이벤트
    const onClickSignin = () => {
        const params = new URLSearchParams();
        params.append('name', inputId);
        params.append('password', inputPw);

        /*axios
          .post("http://localhost:8000/signin/", params)
          .then(function (response) {
            if (response["data"]["result"] === "OK") {
              if (Remember) {
                window.localStorage.setItem("name", inputId);
              }
              setTimeout(() => navigate("/"), 500);
            } else {
              handleErrorMessage();
              setErrorMessage(response["data"]["message"]);
            }
          })
          .catch(function (error) {
            console.log(error);
          });*/
        navigate('/');
    }

    return (

  <body  class=" border-top-wide border-primary d-flex flex-column">
    <div class="page page-center">
      <div class="container-tight py-4">
        <Alerts title = {errorMessage} text = "test" type = {errorType} style= {{display: alertShow ? 'block' : 'none' }}/>
        <div class="text-center mb-4">
          {/*<a href="." class="navbar-brand navbar-brand-autodark"><img src={logo} height="36" alt="" /></a>*/}
        </div>
        <form class="card card-md" action="." method="get" autocomplete="off">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">로그인</h2>
            <div class="mb-3">
              <label class="form-label">아이디</label>
              <input type="text" class="form-control" placeholder="아이디 입력" value={inputId} onChange={handleInputId}/>
            </div>
            <div class="mb-2">
              <label class="form-label">
                비밀번호

              </label>
              <div class="input-group input-group-flat">
                <input type="password" class="form-control"  placeholder="비밀번호 입력"  autocomplete="off" value={inputPw} onChange={handleInputPw}/>
              </div>
            </div>
            <div class="mb-2">
              <label class="form-check">
                <input type="checkbox" class="form-check-input" value={Remember} onChange={handleRemember}/>
                <span class="form-check-label">이 계정을 기억합니다.</span>

                <span class="form-label-description">
                  <a href="/resetPassword">비밀번호 재설정</a>
                </span>
              </label>
            </div>
            <div class="form-footer">
              <button type="button" class="btn btn-primary w-100" onClick={onClickSignin}>로그인</button>
            </div>
          </div>
        </form>
        <div class="text-center text-muted mt-3">
          아직 계정이 없으시나요? <a href="/signup" tabindex="-1">회원가입</a>
        </div>
      </div>
    </div>
  </body>
   )

}

export default Signin