// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string;
  data: object[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'Line Chart Data', data: chartData })
}

const chartData = [
  {
    "id": "japan",
    "color": "hsl(206, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 227
      },
      {
        "x": "helicopter",
        "y": 40
      },
      {
        "x": "boat",
        "y": 194
      },
      {
        "x": "train",
        "y": 185
      },
      {
        "x": "subway",
        "y": 129
      },
      {
        "x": "bus",
        "y": 123
      },
      {
        "x": "car",
        "y": 210
      },
      {
        "x": "moto",
        "y": 92
      },
      {
        "x": "bicycle",
        "y": 129
      },
      {
        "x": "horse",
        "y": 104
      },
      {
        "x": "skateboard",
        "y": 0
      },
      {
        "x": "others",
        "y": 212
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(286, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 134
      },
      {
        "x": "helicopter",
        "y": 173
      },
      {
        "x": "boat",
        "y": 176
      },
      {
        "x": "train",
        "y": 165
      },
      {
        "x": "subway",
        "y": 222
      },
      {
        "x": "bus",
        "y": 235
      },
      {
        "x": "car",
        "y": 135
      },
      {
        "x": "moto",
        "y": 229
      },
      {
        "x": "bicycle",
        "y": 82
      },
      {
        "x": "horse",
        "y": 257
      },
      {
        "x": "skateboard",
        "y": 38
      },
      {
        "x": "others",
        "y": 47
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(40, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 46
      },
      {
        "x": "helicopter",
        "y": 82
      },
      {
        "x": "boat",
        "y": 31
      },
      {
        "x": "train",
        "y": 139
      },
      {
        "x": "subway",
        "y": 277
      },
      {
        "x": "bus",
        "y": 233
      },
      {
        "x": "car",
        "y": 267
      },
      {
        "x": "moto",
        "y": 154
      },
      {
        "x": "bicycle",
        "y": 14
      },
      {
        "x": "horse",
        "y": 238
      },
      {
        "x": "skateboard",
        "y": 39
      },
      {
        "x": "others",
        "y": 235
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(256, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 247
      },
      {
        "x": "helicopter",
        "y": 195
      },
      {
        "x": "boat",
        "y": 124
      },
      {
        "x": "train",
        "y": 72
      },
      {
        "x": "subway",
        "y": 21
      },
      {
        "x": "bus",
        "y": 246
      },
      {
        "x": "car",
        "y": 118
      },
      {
        "x": "moto",
        "y": 299
      },
      {
        "x": "bicycle",
        "y": 269
      },
      {
        "x": "horse",
        "y": 23
      },
      {
        "x": "skateboard",
        "y": 179
      },
      {
        "x": "others",
        "y": 295
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(243, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 219
      },
      {
        "x": "helicopter",
        "y": 150
      },
      {
        "x": "boat",
        "y": 130
      },
      {
        "x": "train",
        "y": 133
      },
      {
        "x": "subway",
        "y": 112
      },
      {
        "x": "bus",
        "y": 243
      },
      {
        "x": "car",
        "y": 283
      },
      {
        "x": "moto",
        "y": 44
      },
      {
        "x": "bicycle",
        "y": 216
      },
      {
        "x": "horse",
        "y": 157
      },
      {
        "x": "skateboard",
        "y": 46
      },
      {
        "x": "others",
        "y": 115
      }
    ]
  }
]