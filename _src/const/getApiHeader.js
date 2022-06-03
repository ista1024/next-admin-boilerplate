import ApiList from "./apiList";

// api 리턴 함수
export default function getApiHeader(api) {
  return ApiList[api];
}
