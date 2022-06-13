import { apiRequestHeader, RequestBodyTypes } from "@/const/ApiTypes";
import { ApiListTypes } from "@/const/ApiList";

const xhr = async (req: apiRequestHeader, body: RequestBodyTypes[ApiListTypes], callback: any) => {
  const domain = "http://localhost:8095";
  const url = domain + req.url;
  const method = req.method;
  const header = req.header;
  const requestBody = {
    header,
    body,
  };

  // send fetch post request to url with body
  fetch(url, {
    method: method,
    body: JSON.stringify(requestBody),
  })
    .then((res) => res.json())
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      const result = {
        message: "서버와의 연결이 실패했습니다.",
        data: err,
      };
      callback(result);
    });
};

export default xhr;
