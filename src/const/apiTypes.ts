import { commonRequestProps, commonResponseProps } from "@/const/api/common";
import { userRequestProps, userResponseProps } from "@/const/api/user";

export interface apiRequestHeader {
  url: string;
  method: string;
  header: {
    trId: string;
    function: string;
  },
}

export interface RequestBodyTypes {
  common: commonRequestProps,
  user: userRequestProps,
  key: undefined,
  apikey: undefined,
  history: undefined,
  datakey: undefined,
}
export interface ReponseBodyTypes {
  header: {
    trId: string;
    rtnCode: string;
    rtnMessage: string | null;
  };
  common: commonResponseProps,
  user: userResponseProps,
}

interface ApiTypes {
  request: RequestBodyTypes;
  response: ReponseBodyTypes
}

export default ApiTypes;
