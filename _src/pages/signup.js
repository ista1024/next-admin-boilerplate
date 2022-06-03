import React, { useState } from 'react';

import "../dist/css/tabler.min.css";

import axios from 'axios';
import { navigate } from "gatsby";

function Signup() {

    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    const [inputRePw, setInputRePw] = useState('')

    const [passwordCheck, setPasswordCheck] = useState({
        display: 'none',
        color: 'red'
    })

	// input data 의 변화가 있을 때마다 value 값을 변경해서 usestate 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const handleInputRePw = (e) => {
        setInputRePw(e.target.value)
    }

	// login 버튼 클릭 이벤트
    const onClickSignup = () => {
        if (inputPw !== inputRePw) {
            setPasswordCheck({display: 'block', color:'red'})
        }
        else if (inputId === "" || inputPw === "" || inputRePw === "") {
            alert("모든 정보를 입력해주세요.");
        }

        else {
            setPasswordCheck({display: 'none', color:'red'})
            console.log('success')

            const params = new URLSearchParams();
            params.append('name', inputId)
            params.append('password', inputPw)
            axios
                .post('/signup/', params)
                .then(function(response) {
                    if (response['data']['result'] === "OK") {
                        alert("회원가입이 완료 되었습니다.")
                        setTimeout(() => navigate('/signin'), 500);
                    }
                    else {
                        alert(response['data']['message'])
                    }
                })
                .catch(function(error) {
                    console.log(error);
                })
        }
    }

    return (

  <body  class=" border-top-wide border-primary d-flex flex-column">
    <div class="page page-center">
      <div class="container-tight py-4">
        <div class="text-center mb-4">
          <a href="." class="navbar-brand navbar-brand-autodark"><img src={ process.env.PUBLIC_URL + "logo.svg" } height="36" alt="" /></a>
        </div>
        <form class="card card-md" action="." method="get" autocomplete="off">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">회원가입</h2>
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
              <label class="form-label">
                비밀번호 확인
              </label>
              <div class="input-group input-group-flat">
                <input type="password" class="form-control"  placeholder="비밀번호 재입력"  autocomplete="off" value={inputRePw} onChange={handleInputRePw}/>
              </div>
            </div>
            <label class="form-label" style={passwordCheck}>
              <span>비밀번호가 일치하지 않습니다.</span>
            </label>
            <div class="form-footer">
              <button type="button" class="btn btn-primary w-100" onClick={onClickSignup}>회원가입</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </body>
   )

}

export default Signup
