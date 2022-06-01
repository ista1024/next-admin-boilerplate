import React, { useState } from "react";
import Table from "../table";
import Popup from "../popup";
import TableNavbar from "../tableNavbar";

function CreateKey(props) {
  function makePopupBtn(className, text, clickEvent, toggle){
      return (
        <div>
          <button type="button" class="btn me-auto" data-bs-dismiss="modal">
            취소
          </button>
          <button
            type="button"
            class={className}
            style={{ marginLeft: "0.3rem" }}
            data-bs-dismiss = "modal" 
            data-bs-toggle="modal"
            data-bs-target="#createKeyAddUser"
          >
            {text}
          </button>
        </div>
      );
  }

    const button = makePopupBtn("btn btn-primary", "다음", "NextClickEvent", false)
    return (
      <div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">키 이름</label>
            <input
              type="text"
              class="form-control"
              name="name"
              placeholder="3~15 글자"
            />
          </div>

          <label class="form-label">키 유형</label>
          <div class="form-selectgroup-boxes row mb-3">
            <div class="col-lg-6">
              <label class="form-selectgroup-item">
                <input
                  type="radio"
                  name="type"
                  value="symmetry"
                  class="form-selectgroup-input"
                  checked
                />
                <span class="form-selectgroup-label d-flex align-items-center p-3">
                  <span class="me-3">
                    <span class="form-selectgroup-check"></span>
                  </span>
                  <span class="form-selectgroup-label-content">
                    <span class="form-selectgroup-title strong mb-1">대칭</span>
                    <span class="d-block text-muted h6">
                      암호화/복호화 작업에 사용되는 암호화 키
                      <br />
                      <br />
                    </span>
                  </span>
                </span>
              </label>
            </div>

            <div class="col-lg-6">
              <label class="form-selectgroup-item">
                <input
                  type="radio"
                  name="type"
                  value="asymmetry"
                  class="form-selectgroup-input"
                  disabled
                />
                <span class="form-selectgroup-label d-flex align-items-center p-3">
                  <span class="me-3">
                    <span class="form-selectgroup-check"></span>
                  </span>
                  <span class="form-selectgroup-label-content">
                    <span class="form-selectgroup-title strong mb-1">
                      비대칭
                    </span>
                    <span class="d-block text-muted h6">
                      데이터 암호화/복호화 및 메시지 서명 및 확인에 사용되는
                      PUBLIC/PRIVATE 키 쌍
                    </span>
                  </span>
                </span>
              </label>
            </div>
          </div>

          <label class="form-label">키 사용</label>
          <div class="form-selectgroup-boxes row mb-3">
            <div class="col-lg-6">
              <label class="form-selectgroup-item">
                <input
                  type="radio"
                  name="purpose"
                  value="cryption"
                  class="form-selectgroup-input"
                  checked
                />
                <span class="form-selectgroup-label d-flex align-items-center p-3">
                  <span class="me-3">
                    <span class="form-selectgroup-check"></span>
                  </span>
                  <span class="form-selectgroup-label-content">
                    <span class="form-selectgroup-title strong mb-1">
                      암호화 및 복호화
                    </span>
                    <span class="d-block text-muted h6">
                      키를 데이터 암호화 및 복호화에 사용합니다.
                    </span>
                  </span>
                </span>
              </label>
            </div>

            <div class="col-lg-6">
              <label class="form-selectgroup-item">
                <input
                  type="radio"
                  name="purpose"
                  value="signature"
                  class="form-selectgroup-input"
                  disabled
                />
                <span class="form-selectgroup-label d-flex align-items-center p-3">
                  <span class="me-3">
                    <span class="form-selectgroup-check"></span>
                  </span>
                  <span class="form-selectgroup-label-content">
                    <span class="form-selectgroup-title strong mb-1">
                      서명/검증 (ECDSA)
                    </span>
                    <span class="d-block text-muted h6">
                      키를 서명/검증에 사용합니다.
                    </span>
                  </span>
                </span>
              </label>
            </div>

            <div class="col-lg-12">
              <div>
                <br />
                <label class="form-label">설명</label>
                <textarea class="form-control" rows="3"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">{button}</div>
      </div>
    );
}
export default CreateKey;