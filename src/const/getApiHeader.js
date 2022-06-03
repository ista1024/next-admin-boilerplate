// 로그인 기능 공통 api
import common from "./api/common";
// 사용자 관리 기능
import user from "./api/user";
// 키 관리 기능
import key from "./api/key";
// 인증키 관리 기능
import apikey from "./api/apikey";
// 이력 관리 기능
import history from "./api/history";
// 데이터키 관리 기능
import datakey from "./api/datakey";

const ApiList = {
  common: common,
  user: user,
  key: key,
  apikey: apikey,
  history: history,
  datakey: datakey,
};

// api 리턴 함수
export default function getApiHeader(api) {
  return ApiList[api];
}
