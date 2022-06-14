// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  header: {};
  body: { totCnt: number, curPage: number, headerInfos: object[], users: object[] };
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ header: data.header, body: data.body })
}

const data = {
  "header": {
    "trId": "501300",
    "rtnCode": "000000",
    "rtnMessage": "성공입니다."
  },
  "body": {
    "totCnt": 2,
    "curPage": 0,
    "headerInfos": [
      {
        "idx": 0,
        "name": "userId",
        "isSort": true,
        "isFilter": true
      },
      {
        "idx": 1,
        "name": "name",
        "isSort": true,
        "isFilter": true
      },
      {
        "idx": 2,
        "name": "level",
        "isSort": true,
        "isFilter": true
      },
      {
        "idx": 3,
        "name": "reg_date",
        "isSort": true,
        "isFilter": false
      },
      {
        "idx": 4,
        "name": "update_date",
        "isSort": true,
        "isFilter": false
      }
    ],
    "users": [
      {
        "userId": "admin",
        "name": null,
        "level": "ADMIN",
        "regDate": "2022-06-03 17:51:07",
        "updateDate": "2022-06-03 17:51:07"
      },
      {
        "userId": "super_admin",
        "name": null,
        "level": "SUPER_ADMIN",
        "regDate": "2022-06-03 17:49:45",
        "updateDate": "2022-06-03 17:49:45"
      }
    ]
  }
}