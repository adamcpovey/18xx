const game = {
  // Generic Game Info
  info: {
    title: "18Ox",
    subtitle: "The Railways of Oxfordshire",
    designer: "Adam Povey",
    width: 150,
    color_10: "orange",
    titleX: 50,
    hexCoords: true,
    currency: "GBP"
  },

  bank: "£12,000",

  players: [
    {
      number: 3,
      certLimit: 15,
      capital: "£800"
    },
    {
      number: 4,
      certLimit: 11,
      capital: "£600"
    },
    {
      number: 5,
      certLimit: 9,
      capital: "£480"
    }
  ],

  // Railway Companies
  companies: [
    {
      name: "Great Western",
      abbrec: "GWR",
      token: ["Free", "£100", "£100", "£100"],
      color: "green",
      shares: [
        {
          quantity: 1,
          label: "Director's certificate",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "London and North Western",
      abbrec: "LNWR",
      token: ["Free", "£100", "£100", "£100"],
      color: "black",
      shares: [
        {
          quantity: 1,
          label: "Director's certificate",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    }
  ],

  trains: [
    {
      name: "1",
      quantity: 6,
      price: "£50",
      color: "yellow",
      info: [
        {
          color: "green",
          note: "Rusted by 3"
        }
      ]
    },
    {
      name: "2",
      quantity: 10,
      price: "£100",
      color: "yellow",
      info: [
        {
          color: "green",
          note: "Rusted by 4"
        }
      ]
    }
  ],

  privates: [
    {
      name: "Schuylkill Valley",
      price: "$20",
      revenue: "$5",
      description: ""
    }
  ],

  phases: [
    {
      name: "2",
      limit: "4",
      number: "6",
      tiles: "yellow"
    },
    {
      name: "3",
      limit: "4",
      number: "5",
      tiles: "green",
      notes: "Private companies may be purchased"
    },
    {
      name: "4",
      rust: "2",
      limit: "3",
      number: "4",
      tiles: "green"
    },
    {
      name: "5",
      limit: "2",
      number: "3",
      tiles: "brown",
      notes: "Private companies are closed"
    },
    {
      name: "6",
      limit: "2",
      number: "2",
      rust: "3",
      tiles: "brown",
      notes: "D Trains may be purchased"
    },
    {
      name: "D",
      limit: "2",
      number: "6",
      rust: "4",
      tiles: "brown"
    }
  ],

  pools: [
    {
      name: "Market",
      notes: [
        {
          color: "orange",
          note: "Shares in the market pay dividends to the corporation"
        },
        {
          color: "brown",
          icon: "exclamation",
          note:
          "No more than 50% of a corporation's shares may be in the market at any time"
        },
        {
          color: "red",
          icon: "times",
          note: "Shares cannot be sold during the first stock round"
        }
      ]
    }
  ],

  rounds: [
    {
      name: "OR3",
      color: "brown"
    },
    {
      name: "OR2",
      color: "green"
    },
    {
      name: "OR1",
      color: "yellow"
    },
    {
      name: "SR",
      color: "gray"
    }
  ],

  turns: [
    {
      name: "Stock Round",
      steps: [
        "Sell any number of shares",
        "Buy one share",
        "Sell any number of shares"
      ],
      ordered: true
    },
    {
      name: "Operating Round",
      steps: [
        "Lay or upgrade track",
        "Purchase a station",
        "Run trains",
        "Pay dividends or withhold revenue",
        "Purchase trains"
      ],
      ordered: true,
      optional: ["Purchase private companies"]
    }
  ],

  stock: {
    type: "2D",
    par: {
      values: [100,90,82,76,71,67]
    },
    movement: {
      up: ["Sold out"],
      down: ["Every share sold"],
      left: ["Withheld revenue"],
      right: ["Paid dividends"]
    },
    market: [
      [
        { value: 60, label: 60, legend: 0, arrow: "down" },
        67,
        71,
        76,
        82,
        90,
        { value: 100, label: 100, par: true },
        112,
        126,
        142,
        160,
        180,
        200,
        225,
        250,
        275,
        300,
        325,
        350
      ],
      [
        { value: 53, label: 53, legend: 0, arrow: "down" },
        { value: 60, label: 60, legend: 0 },
        66,
        70,
        76,
        82,
        { value: 90, label: 90, par: true },
        100,
        112,
        126,
        142,
        160,
        180,
        200,
        220,
        240,
        260,
        280,
        { value: 300, label: 300, arrow: "up" }
      ],
      [
        { value: 46, label: 46, legend: 0, arrow: "down" },
        { value: 55, label: 55, legend: 0 },
        { value: 60, label: 60, legend: 0 },
        65,
        70,
        76,
        { value: 82, label: 82, par: true },
        90,
        100,
        111,
        125,
        140,
        155,
        170,
        185,
        { value: 200, label: 200, arrow: "up" }
      ],
      [
        { value: 39, label: 39, legend: 1, arrow: "down" },
        { value: 48, label: 48, legend: 0 },
        { value: 54, label: 54, legend: 0 },
        { value: 60, label: 60, legend: 0 },
        66,
        71,
        { value: 76, label: 76, par: true },
        82,
        90,
        100,
        110,
        120,
        { value: 130, label: 130, arrow: "up" }
      ],
      [
        { value: 32, label: 32, legend: 1, arrow: "down" },
        { value: 41, label: 41, legend: 1 },
        { value: 48, label: 48, legend: 0 },
        { value: 55, label: 55, legend: 0 },
        62,
        67,
        { value: 71, label: 71, par: true },
        76,
        82,
        90,
        { value: 100, label: 100, arrow: "up" }
      ],
      [
        { value: 25, label: 25, legend: 2, arrow: "down" },
        { value: 34, label: 34, legend: 1 },
        { value: 42, label: 42, legend: 1 },
        { value: 50, label: 50, legend: 0 },
        { value: 58, label: 58, legend: 0 },
        65,
        { value: 67, label: 67, par: true },
        71,
        75,
        { value: 80, label: 80, arrow: "up" }
      ],
      [
        { value: 18, label: 18, legend: 2, arrow: "down" },
        { value: 27, label: 27, legend: 2 },
        { value: 36, label: 36, legend: 1 },
        { value: 45, label: 45, legend: 1 },
        { value: 54, label: 54, legend: 0 },
        63,
        67,
        69,
        { value: 70, label: 70, arrow: "up" }
      ],
      [
        { value: 10, label: 10, legend: 2 },
        { value: 12, label: 12, legend: 2 },
        { value: 30, label: 30, legend: 2 },
        { value: 40, label: 40, legend: 1 },
        { value: 50, label: 50, legend: 0 },
        { value: 60, label: 60, legend: 0 },
        67,
        { value: 68, label: 68, arrow: "up" }
      ],
      [
        null,
        { value: 10, label: 10, legend: 2 },
        { value: 20, label: 20, legend: 2 },
        { value: 30, label: 30, legend: 2 },
        { value: 40, label: 40, legend: 1 },
        { value: 50, label: 50, legend: 0 },
        { value: 60, label: 60, legend: 0, arrow: "up" }
      ],
      [
        null,
        null,
        { value: 10, label: 10, legend: 2 },
        { value: 20, label: 20, legend: 2 },
        { value: 30, label: 30, legend: 2 },
        { value: 40, label: 40, legend: 1 },
        { value: 50, label: 50, legend: 0, arrow: "up" }
      ],
      [
        null,
        null,
        null,
        { value: 10, label: 10, legend: 2 },
        { value: 20, label: 20, legend: 2 },
        { value: 30, label: 30, legend: 2 },
        { value: 40, label: 40, legend: 1, arrow: "up" }
      ]
    ],
    legend: [
      {
        color: "yellow",
        description:
        "Shares of this corporation do not count toward the certificate limit",
        icon: "certificate"
      },
      {
        color: "orange",
        description: "Players may own more than 60% of this corporation",
        icon: "percentage"
      },
      {
        color: "brown",
        description:
        "Players may purchase any number of shares of this corporation in one stock action",
        icon: "money-bill-wave"
      }
    ]
  },

  tiles: {
    "1": 1,
    "2": 1,
    "3": 2,
    "4": 2,
    "7": 4,
    "8": 8,
    "9": 7,
    "55": 1,
    "56": 1,
    "57": 4,
    "58": 2,
    "69": 1,
    "14": 3,
    "15": 2,
    "16": 1,
    "18": 1,
    "19": 1,
    "20": 1,
    "23": 3,
    "24": 3,
    "25": 1,
    "26": 1,
    "27": 1,
    "28": 1,
    "29": 1,
    "53": 2,
    "54": 1,
    "59": 2,
    "39": 1,
    "40": 1,
    "41": 2,
    "42": 2,
    "43": 2,
    "44": 1,
    "45": 2,
    "46": 2,
    "47": 1,
    "61": 2,
    "62": 1,
    "63": 3,
    "64": 1,
    "65": 1,
    "66": 1,
    "67": 1,
    "68": 1,
    "70": 1
  },

  map: {
    hexes: [
      {
        color: "offboard",
        offBoardRevenue: {
          name: {
            name: "LEAMINGTON SPA"
          },
          revenues: [
            { color: "yellow", cost: "10" },
            { color: "green", cost: "20" },
            { color: "brown", cost: "30" },
            { color: "gray", cost: "40" }
          ]
        },
        offBoardTrack: [
          { side: 5 }
        ],
        labels: [
          { label: "A", angle: 180, percent: 0.8 }
        ],
        hexes: ["A18"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: { name: "RUGBY" },
          revenues: [
            { color: "yellow", cost: "0" },
            { color: "green", cost: "20" },
            { color: "brown", cost: "40" },
            { color: "gray", cost: "60" }
          ]
        },
        offBoardTrack: [
          { side: 5 }
        ],
        labels: [
          { label: "A", angle: 180, percent: 0.8 }
        ],
        hexes: ["A26"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: { name: "NORTHAMPTON" },
          revenues: [
            { color: "yellow",  cost: "10" },
            { color: "green", cost: "20" },
            { color: "brown", cost: "30" },
            { color: "gray", cost: "40" }
          ]
        },
        offBoardTrack: [
          { side: 6 }
        ],
        labels: [
          { label: "A", angle: 160, percent: 0.8 },
          { label: "B", angle: 200, percent: 0.8 }
        ],
        hexes: ["A30"]
      },
      {
        color: "plain",
        terrain: [{ type: "track", cost: "£40" }],
        hexes: ["B27"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: { name: "WORCESTER" },
          revenues: [
            { color: "yellow", cost: "10" },
            { color: "green", cost: "20" },
            { color: "brown", cost: "30" },
            { color: "gray", cost: "40" },
          ]
        },
        offBoardTrack: [
          { side: 4 },
          { side: 6 }
        ],
        labels: [
          { label: "A", angle: 180, percent: 0.8 }
        ],
        hexes: ["C8"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: { name: "CAMBRIDGE" },
          revenues: [
            { color: "yellow", cost: "0" },
            { color: "green", cost: "20" },
            { color: "brown", cost: "40" },
            { color: "gray", cost: "60" },
          ]
        },
        offBoardTrack: [
          { side: 1 }
        ],
        labels: [
          { label: "B", angle: 180, percent: 0.8 }
        ],
        hexes: ["C36"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: { name: "CARDIFF" },
          revenues: [
            { color: "yellow", cost: "10" },
            { color: "green", cost: "30" },
            { color: "brown", cost: "50" },
            { color: "gray", cost: "70" },
          ]
        },
        offBoardTrack: [
          { side: 3}
        ],
        labels: [
          { label: "C", angle: 0, percent: 0.8 }
        ],
        hexes: ["H1"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: { name: "BRISTOL" },
          revenues: [
            { color: "yellow", cost: "10" },
            { color: "green", cost: "30" },
            { color: "brown", cost: "50" },
            { color: "gray", cost: "70" },
          ]
        },
        offBoardTrack: [
          { side: 2 },
          { side: 4 }
        ],
        labels: [
          { label: "C", angle: 0, percent: 0.8 }
        ],
        hexes: ["K4"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: { name: "BATH" },
          revenues: [
            { color: "yellow", cost: "0" },
            { color: "green", cost: "20" },
            { color: "brown", cost: "40" },
            { color: "gray", cost: "60" },
          ]
        },
        offBoardTrack: [
          { side: 4 }
        ],
        labels: [
          { label: "C", angle: 0, percent: 0.8 }
        ],
        hexes: ["L5"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: { name: "EXETER" },
          revenues: [
            { color: "yellow", cost: "10" },
            { color: "green", cost: "30" },
            { color: "brown", cost: "50" },
            { color: "gray", cost: "70" },
          ]
        },
        offBoardTrack: [
          { side: 3 }
        ],
        labels: [
          { label: "C", angle: 0, percent: 0.8 }
        ],
        hexes: ["O10"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: { name: "BASINGSTOKE" },
          revenues: [
            { color: "yellow", cost: "0" },
            { color: "green", cost: "20" },
            { color: "brown", cost: "40" },
            { color: "gray", cost: "60" },
          ]
        },
        offBoardTrack: [
          { side: 3}
        ],
        labels: [
          { label: "B", angle: 20, percent: 0.8 },
          { label: "C", angle: 340, percent: 0.8 }
        ],
        hexes: ["O24"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: { name: "LONDON" },
          revenues: [
            { color: "yellow", cost: "0" },
            { color: "green", cost: "20" },
            { color: "brown", cost: "40" },
            { color: "gray", cost: "60" },
          ]
        },
        offBoardTrack: [
          { side: 1 }
        ],
        labels: [
          { label: "B", angle: 180, percent: 0.8 }
        ],
        hexes: ["L37"]
      },
      {
        color: "offboard",
        labels: [
          { label: "Euston", size: 14 }
        ],
        offBoardTrack: [
          { side: 1 },
          { side: 2 },
        ],
        hexes: ["J37"]
      },
      {
        color: "offboard",
        labels: [
          { label: "Marylebone", size: 14 }
        ],
        offBoardTrack: [
          { side: 1 },
          { side: 2 },
        ],
        hexes: ["K36"]
      },
      {
        color: "offboard",
        labels: [
          { label: "Paddington", size: 14 }
        ],
        offBoardTrack: [
          { side: 1 },
          { side: 2 },
        ],
        hexes: ["L35"]
      },
      {
        color: "offboard",
        labels: [
          { label: "Waterloo" , size: 14}
        ],
        offBoardTrack: [
          { side: 1 },
          { side: 6 },
        ],
        hexes: ["M36"]
      },
      {
        color: "gray",
        track: [
          { type: "straight", side: 1 }
        ],
        hexes: ["C10"]
      },
      {
        color: "gray",
        track: [
          { type: "straight", side: 3 }
        ],
        hexes: ["D7"]
      },
      {
        color: "gray",
        track: [
          { type: "sharp", side: 2 }
        ],
        hexes: ["O18", "O20", "O30", "O32"]
      },

      {
        color: "plain",
        borders: [
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["C12"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["C14"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["C16"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["C18"]
      },
      {
        color: "plain",
        borders: [
          { side: 2, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["C22"]
      },
      {
        color: "plain",
        borders: [
          { side: 2, color: "mountain" }
        ],
        hexes: ["C24"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" }
        ],
        hexes: ["C26"]
      },
      {
        color: "plain",
        borders: [
          { side: 5, color: "mountain" }
        ],
        hexes: ["C32"]
      },
      {
        color: "plain",
        terrain: [{ type: "track", cost: "£40" }],
        hexes: ["C34"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["D9", "D11"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["D15"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 5, color: "mountain" }
        ],
        hexes: ["D17"]
      },
      {
        color: "plain",
        borders: [
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["D19"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["D33"]
      },

      {
        color: "plain",
        terrain: [
          { type: "river", cost: "£40" }
        ],
        borders: [
          { side: 1,  color: "water" },
          { side: 2,  color: "water" },
          { side: 3,  color: "water" },
          { side: 4,  color: "water" },
          { side: 5,  color: "water" },
          { side: 6,  color: "water" }
        ],
        hexes: ["G19", "H16", "H18", "I11"]
      },
      {
        color: "",
        hexes: []
      },
      {
        color: "",
        hexes: []
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: { name: "Marlborough" }
          }
        ],
        borders: [
          { side: 1, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 5, color: "water"}
        ],
        hexes: ["F18"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: { name: "Yarnton" }
          }
        ],
        borders: [
          { side: 2, color: "mountain" },
          { side: 6, color: "water" }
        ],
        hexes: ["F20"]
      },
      {
        color: "plain",
        labels: [
          { label: "O", angle: 300, percent: 0.7 }
        ],
        cities: [
          {
            name : { name: "Oxford" }
          }
        ],
        borders: [
          { side: 1, color: "water" }
        ],
        hexes: ["G21"]
      },
      {
        color: "plain",
        hexes: [
          "B19", "B21", "B29",
          "C28", "C30",
          "D25", "D29",
          "E24", "E26",
          "N27", "N35"
        ]
      },
    ]
  }
};

export default game;