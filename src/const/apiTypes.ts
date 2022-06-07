import { commonRequestProps, commonResponseProps } from "@/const/api/common";
import { userRequestProps, userResponseProps } from "@/const/api/user";

interface apiTypes {
  request: {
    common: commonRequestProps,
    user: userRequestProps,
  };
  response: {
    header: {
      trId: string;
      rtnCode: string;
      rtnMessage: string | null;
    };
    common: commonResponseProps,
    user: userResponseProps,
  };
}

export default apiTypes;
