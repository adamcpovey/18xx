const game = {
  // Generic Game Info
  info: {
    title: "18Ox",
    subtitle: "The Railways of Oxfordshire",
    designer: "Adam Povey",
    width: 150,
    color_10: "orange",
    titleX: 50,
    extraTokens: 2,
    hexCoords: true,
    extraMinors: 1,
    currency: "GBP"
  },

  ipo: false,

  tokens: ["Round", "CV\n£30", "Mine +£10", "Bypass"],

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
      abbrev: "GWR",
      tokens: ["Free", "£100", "£100", "£100", "Exchange", "Exchange", "Exchange", "Exchange"],
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
      name: "Midland",
      abbrev: "MR",
      tokens: ["Free", "£100", "£100", "£100", "Exchange", "Exchange", "Exchange", "Exchange"],
      color: "red",
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
      name: "Great Central",
      abbrev: "GCR",
      tokens: ["Free", "£100", "£100", "£100", "Exchange", "Exchange", "Exchange", "Exchange"],
      color: "blue",
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
      name: "South Wales",
      abbrev: "SWR",
      tokens: ["Free", "£100", "£100", "£100", "Exchange", "Exchange", "Exchange", "Exchange"],
      color: "gray",
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
      name: "Metropolitan",
      abbrev: "MetR",
      tokens: ["Free", "£100", "£100", "£100", "Exchange", "Exchange", "Exchange", "Exchange"],
      color: "purple",
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
      name: "Chiltern",
      abbrev: "CR",
      tokens: ["Free", "£100", "£100", "£100", "Exchange", "Exchange", "Exchange", "Exchange"],
      color: "cyan",
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
      abbrev: "LNWR",
      tokens: ["Free", "£100", "£100", "£100", "Exchange", "Exchange", "Exchange", "Exchange"],
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
    },
    {
      name: "Midland and South Western Junction",
      abbrev: "A",
      tokens: ["Free", "Free"],
      color: "brown",
      shares: [
        {
          quantity: 1,
          label: "Director's certificate",
          percent: 40,
          shares: 2
        },
        {
          quantity: 3,
          percent: 20,
          shares: 1
        }
      ]
    },
    {
      name: "Metropolitan and Great Central Junction",
      abbrev: "B",
      tokens: ["Free", "Free"],
      color: "brown",
      shares: [
        {
          quantity: 1,
          label: "Director's certificate",
          percent: 40,
          shares: 2
        },
        {
          quantity: 3,
          percent: 20,
          shares: 1
        }
      ]
    },
    {
      name: "Cheltenham and Great Western Junction",
      abbrev: "C",
      tokens: ["Free", "Free"],
      color: "brown",
      shares: [
        {
          quantity: 1,
          label: "Director's certificate",
          percent: 40,
          shares: 2
        },
        {
          quantity: 3,
          percent: 20,
          shares: 1
        }
      ]
    },
    {
      name: "Great Western and Great Central Junction",
      abbrev: "D",
      tokens: ["Free", "Free"],
      color: "brown",
      shares: [
        {
          quantity: 1,
          label: "Director's certificate",
          percent: 40,
          shares: 2
        },
        {
          quantity: 3,
          percent: 20,
          shares: 1
        }
      ]
    },
    {
      name: "Banbury and Cheltenham",
      abbrev: "E",
      tokens: ["Free", "Free"],
      color: "brown",
      shares: [
        {
          quantity: 1,
          label: "Director's certificate",
          percent: 40,
          shares: 2
        },
        {
          quantity: 3,
          percent: 20,
          shares: 1
        }
      ]
    },
    {
      name: "Oxford, Worcester and Wolverhampton",
      abbrev: "F",
      tokens: ["Free", "Free"],
      color: "brown",
      shares: [
        {
          quantity: 1,
          label: "Director's certificate",
          percent: 40,
          shares: 2
        },
        {
          quantity: 3,
          percent: 20,
          shares: 1
        }
      ]
    },
    {
      name: "Oxford and Rugby",
      abbrev: "G",
      tokens: ["Free", "Free"],
      color: "brown",
      shares: [
        {
          quantity: 1,
          label: "Director's certificate",
          percent: 40,
          shares: 2
        },
        {
          quantity: 3,
          percent: 20,
          shares: 1
        }
      ]
    },
    {
      name: "Buckingham and Brackley Junction",
      abbrev: "H",
      tokens: ["Free", "Free"],
      color: "brown",
      shares: [
        {
          quantity: 1,
          label: "Director's certificate",
          percent: 40,
          shares: 2
        },
        {
          quantity: 3,
          percent: 20,
          shares: 1
        }
      ]
    },
    {
      name: "Oxford and Bletchley Junction",
      abbrev: "I",
      tokens: ["Free", "Free"],
      color: "brown",
      shares: [
        {
          quantity: 1,
          label: "Director's certificate",
          percent: 40,
          shares: 2
        },
        {
          quantity: 3,
          percent: 20,
          shares: 1
        }
      ]
    },
    {
      name: "Swindon, Marlborough and Andover",
      abbrev: "J",
      tokens: ["Free", "Free"],
      color: "brown",
      shares: [
        {
          quantity: 1,
          label: "Director's certificate",
          percent: 40,
          shares: 2
        },
        {
          quantity: 3,
          percent: 20,
          shares: 1
        }
      ]
    },
    {
      name: "Royal Army Logistics",
      abbrev: "K",
      tokens: ["Free", "Free"],
      color: "brown",
      shares: [
        {
          quantity: 1,
          label: "Director's certificate",
          percent: 40,
          shares: 2
        },
        {
          quantity: 3,
          percent: 20,
          shares: 1
        }
      ]
    },
    {
      name: "Oxford, Witney and Fairford",
      abbrev: "L",
      tokens: ["Free", "Free"],
      color: "brown",
      shares: [
        {
          quantity: 1,
          label: "Director's certificate",
          percent: 40,
          shares: 2
        },
        {
          quantity: 3,
          percent: 20,
          shares: 1
        }
      ]
    },
  ],

  minorCompanies: [
    {
      name: "Western",
      abbrev: "K2",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "East Gloucestershire",
      abbrev: "O7",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Bourton-on-the-Water",
      abbrev: "O3",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Marlborough",
      abbrev: "K5",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Chipping Norton",
      abbrev: "O2",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Witney",
      abbrev: "O6",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Lambourne Valley",
      abbrev: "K4",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Wantage Tramway",
      abbrev: "K3",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Woodstock",
      abbrev: "O4",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Berks and Hants",
      abbrev: "K6",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Didcot, Newbury and Southampton",
      abbrev: "K1",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Quarry Tramway",
      abbrev: "O1",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Bicester Military",
      abbrev: "O5",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Wallingford and Watlington",
      abbrev: "O8",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Chinor and Princes Risborough",
      abbrev: "B5",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Buckinghamshire",
      abbrev: "B1",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Aylesbury and Buckingham",
      abbrev: "B3",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Reading, Guilford and Reigate Railway",
      abbrev: "K7",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Great Marlow",
      abbrev: "B8",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "London and Birmingham",
      abbrev: "B2",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Wycombe",
      abbrev: "B6",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Aylesbury",
      abbrev: "B4",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Chesham",
      abbrev: "B7",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Wokingham and Staines",
      abbrev: "K8",
      tokens: ["Free"],
      color: "yellow"
    },
  ],

  trains: [
    {
      name: "1+1",
      quantity: 16,
      price: "£60",
      color: "yellow",
      info: [
        { note: "Upgrade for £60" },
        { color: "green", note: "Rusted by 3" }
      ]
    },
    {
      name: "2",
      quantity: 16,
      price: "£100",
      color: "yellow",
      info: [
        { color: "green", note: "Rusted by 4" }
      ]
    },
    {
      name: "2+1",
      quantity: 9,
      price: "£140",
      color: "yellow",
      info: [
        { note: "Upgrade for £60" },
        { color: "green", note: "Rusted by 4" }
      ]
    },
    {
      name: "3",
      quantity: 9,
      price: "£180",
      color: "green",
      info: [
        { color: "brown", note: "Rusted by 6" }
      ]
    },
    {
      name: "4",
      quantity: 6,
      price: "£300",
      color: "green",
      info: [
        { color: "gray", note: "Rusted by 7" }
      ]
    },
    {
      name: "5",
      quantity: 3,
      price: "£480",
      color: "yellow",
      info: [
        { note: "Permanent" }
      ]
    },
    {
      name: "6",
      quantity: 2,
      price: "£600",
      color: "yellow",
      info: [
        { note: "Permanent" }
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
      name: "3",
      limit: "4",
      number: "9",
      tiles: "green",
      notes: "Minor companies can merge into Unions"
    },
    {
      name: "4",
      rust: "1+1,2",
      limit: "3",
      number: "6",
      tiles: "green",
      notes: "Unions can merge into Majors"
    },
    {
      name: "5",
      limit: "2",
      number: "3",
      tiles: "brown",
      notes: "Majors added to bank"
    },
    {
      name: "6",
      limit: "2",
      number: "2",
      rust: "2+1,3",
      tiles: "brown"
    },
    {
      name: "7",
      limit: "2",
      number: "6",
      rust: "4",
      tiles: "gray"
    }
  ],

  minorPhases: [
    {
      name: "1",
      limit: "2",
      number: "16",
      tiles: "yellow",
      notes: "Companies only start at £50"
    },
    {
      name: "2",
      limit: "2",
      number: "16",
      tiles: "yellow",
      notes: "Companies start at any grey value"
    },
    {
      name: "3",
      limit: "1",
      number: "9",
      tiles: "green"
    },
    {
      name: "4",
      rust: "1+1,2",
      limit: "1",
      number: "6",
      tiles: "green"
    },
    {
      name: "5",
      limit: "1",
      number: "3",
      tiles: "brown"
    },
    {
      name: "6",
      limit: "1",
      number: "2",
      rust: "2+1,3",
      tiles: "brown"
    },
    {
      name: "7",
      limit: "0",
      number: "6",
      rust: "4",
      tiles: "gray"
    }
  ],

  pools: [
    {
      name: "Bank",
      notes: [
        {
          color: "brown",
          icon: "exclamation",
          note:
          "No more than 50% of a corporation's shares may be in the market at any time"
        }
      ]
    }
  ],

  rounds: [
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
        "Buy one share or certificate",
      ],
      ordered: true
    },
    {
      name: "Operating Round",
      steps: [
        "Acquire private companies",
        "Lay or upgrade track",
        "Place a station token",
        "Run trains",
        "Pay or withhold revenue",
        "Merge",
        "Purchase trains"
      ],
      ordered: true
    }
  ],

  stock: {
    type: "2D",
    movement: {
      up: ["Fully owned"],
      down: ["Shares in bank"],
      left: ["Withheld revenue"],
      right: ["Paid dividends"]
    },
    market: [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        { value: 355, label: 355, arrow: "down" },
        420,
        { value: 500, label: 500, legend: 1 }
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        { value: 200, label: 200, arrow: "down" },
        220,
        245,
        275,
        315,
        365,
        { value: 430, label: 430, arrow: "up" }
      ],
      [
        null,
        null,
        { value: 100, label: 100, arrow: "down" },
        109,
        122,
        136,
        150,
        165,
        180,
        200,
        220,
        245,
        275,
        315,
        { value: 365, label: 365, arrow: "up" }
      ],
      [
        { value: 70, label: 70, arrow: "down" },
        79,
        89,
        { value: 100, label: 100, par: true },
        109,
        122,
        136,
        150,
        165,
        180,
        200,
        220,
        245,
        275,
        { value: 315, label: 315, arrow: "up" }
      ],
      [
        { value: 60, label: 60, arrow: "down" },
        67,
        76,
        { value: 86, label: 86, par: true },
        97,
        109,
        122,
        136,
        150,
        165,
        180,
        200,
        220,
        245,
        { value: 275, label: 275, arrow: "up" }
      ],
      [
        { value: 54, label: 54, arrow: "down" },
        59,
        66,
        { value: 75, label: 75, par: true },
        85,
        96,
        108,
        121,
        135,
        150,
        165,
        180,
        200,
        220,
        { value: 245, label: 245, arrow: "up" }
      ],
      [
        { value: 50, label: 50, arrow: "down" },
        54,
        59,
        { value: 66, label: 66, par: true },
        75,
        85,
        96,
        108,
        121,
        135,
        150,
        165,
        180,
        195,
        { value: 215, label: 215, arrow: "up" }
      ],
      [
        { value: 46, label: 46, arrow: "down" },
        50,
        54,
        { value: 59, label: 59, par: true },
        66,
        75,
        85,
        96,
        107,
        119,
        133,
        { value: 147, label: 147, arrow: "up" },
        null,
        null,
        null
      ],
      [
        { value: 43, label: 43, legend: 0, arrow: "down" },
        46,
        50,
        { value: 54, label: 54, par: true },
        59,
        66,
        75,
        85,
        96,
        { value: 107, label: 107, arrow: "up" },
        null,
        null,
        null,
        null,
        null
      ],
      [
        { value: 39, label: 39, legend: 0, arrow: "down" },
        { value: 43, label: 43, legend: 0 },
        46,
        { value: 50, label: 50, par: true, color: "yellow" },
        54,
        59,
        65,
        74,
        { value: 84, label: 48, arrow: "up" },
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        { value: 34, label: 34, legend: 0, arrow: "down" },
        { value: 39, label: 39, legend: 0 },
        { value: 43, label: 43, legend: 0 },
        46,
        50,
        54,
        59,
        { value: 65, label: 65, arrow: "up" },
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        { value: 28, label: 28, legend: 0, arrow: "down" },
        { value: 34, label: 34, legend: 0 },
        { value: 39, label: 39, legend: 0 },
        { value: 43, label: 43, legend: 0 },
        { value: 46, label: 46, legend: 0 },
        { value: 50, label: 50, legend: 0 },
        { value: 54, label: 54, legend: 0, arrow: "up" },
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        { value: 21, label: 21, legend: 0, arrow: "down" },
        { value: 28, label: 28, legend: 0 },
        { value: 34, label: 34, legend: 0 },
        { value: 39, label: 39, legend: 0 },
        { value: 43, label: 43, legend: 0 },
        { value: 46, label: 46, legend: 0, arrow: "up" },
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        { value: 12, label: 12, legend: 0, arrow: "down" },
        { value: 21, label: 21, legend: 0 },
        { value: 28, label: 28, legend: 0 },
        { value: 34, label: 34, legend: 0 },
        { value: 39, label: 39, legend: 0, arrow: "up" },
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        { value: 1, label: 1, legend: 0 },
        { value: 12, label: 12, legend: 0 },
        { value: 21, label: 21, legend: 0 },
        { value: 28, label: 28, legend: 0, arrow: "up" },
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    legend: [
      {
        color: "orange",
        description:
        "Certificates do not count towards limit",
        icon: "certificate"
      },
      {
        color: "offboard",
        description: "Game end",
        icon: "flag-checkered"
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
// -------------------------------------------------
// Off-board areas
// -------------------------------------------------
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
        cities: [
          {
            angle: 180,
            percent: 0.8,
            companies: [
              { label: "CR", color: "cyan" }
            ]
          }
        ],
        hexes: ["A10"]
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
        cities: [
          {
            angle: 180,
            percent: 0.8,
            companies: [
              { label: "GCR", color: "blue" }
            ]
          }
        ],
        hexes: ["A18"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: { name: "WORCESTER" },
          revenues: [
            { color: "yellow", cost: "0" },
            { color: "green", cost: "20" },
            { color: "brown", cost: "40" },
            { color: "gray", cost: "60" },
          ]
        },
        offBoardTrack: [
          { side: 5 }
        ],
        cities: [
          {
            angle: 180,
            percent: 0.8,
            companies: [
              { label: "MR", color: "red" }
            ]
          }
        ],
        hexes: ["C4"]
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
        cities: [
          {
            angle: 180,
            percent: 0.8,
            companies: [
              { label: "LNWR", color: "black" }
            ]
          }
        ],
        hexes: ["C24"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: { name: "GLOUCESTER" },
          revenues: [
            { color: "yellow", cost: "10" },
            { color: "green", cost: "20" },
            { color: "brown", cost: "30" },
            { color: "gray", cost: "40" },
          ]
        },
        offBoardTrack: [
          { side: 4}
        ],
        cities: [
          {
            angle: 180,
            percent: 0.8,
            companies: [
              { label: "SWR", color: "gray" }
            ]
          }
        ],
        hexes: ["F1"]
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
          { side: 4 }
        ],
        cities: [
          {
            angle: 0,
            percent: 0.8,
            companies: [
              { label: "GWR", color: "green" }
            ]
          }
        ],
        hexes: ["L1"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: { name: "BOURNEMOUTH" },
          revenues: [
            { color: "yellow", cost: "10" },
            { color: "green", cost: "30" },
            { color: "brown", cost: "50" },
            { color: "gray", cost: "70" },
          ]
        },
        offBoardTrack: [
          { side: 4 }
        ],
        cities: [
          {
            angle: 0,
            percent: 0.8,
            companies: [
              { label: "MR", color: "red" }
            ]
          }
        ],
        hexes: ["O2"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: { name: "SOUTHAMPTON" },
          revenues: [
            { color: "yellow", cost: "10" },
            { color: "green", cost: "20" },
            { color: "brown", cost: "30" },
            { color: "gray", cost: "40" },
          ]
        },
        offBoardTrack: [
          { side: 3 }
        ],
        border: [
          { side: 2, color: "black" }
        ],
        cities: [
          {
            angle: 0,
            percent: 0.8,
            companies: [
              { label: "MetR", color: "purple" }
            ]
          }
        ],
        hexes: ["O16"]
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
        hexes: ["L29"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: { name: "Marylebone"},
          revenues: []
        },
        offBoardTrack: [
          { side: 1 },
          { side: 2 },
        ],
        cities: [
          {
            angle: 0,
            percent: 0.8,
            companies: [
              { label: "GCR", color: "blue" }
            ]
          },
          {
            angle: 300,
            percent: 0.8,
            companies: [
              { label: "CR", color: "cyan" }
            ]
          }
        ],
        hexes: ["K28"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: { name: "Paddington"},
          revenues: []
        },
        offBoardTrack: [
          { side: 1 },
          { side: 2 },
          { side: 6 }
        ],
        cities: [
          {
            angle: 300,
            percent: 0.8,
            companies: [
              { label: "GWR", color: "green" }
            ]
          }
        ],
        hexes: ["L27"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: { name: "Waterloo"},
          revenues: []
        },
        offBoardTrack: [
          { side: 1 }
        ],
        hexes: ["M28"]
      },
// -------------------------------------------------
// Major cities
// -------------------------------------------------
      {
        color: "oxon",
        labels: [
          { label: "O", percent: 0.75 }
        ],
        cities: [
          {
            name : { name: "Oxford" }
          },
          {
            angle: 240,
            percent: 0.8,
            companies: [
              { label: "LNWR", color: "black" }
            ]
          },
          {
            angle: 120,
            percent: 0.8,
            companies: [
              { label: "SWR", color: "gray" }
            ]
          }
        ],
        borders: [
          { side: 1, color: "land" },
          { side: 4, color: "land" }
        ],
        hexes: ["H13"]
      },
// -------------------------------------------------
// Minor cities
// -------------------------------------------------
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Swindon" } }
        ],
        labels: [
          { label: "K2", percent: 0.75 }
        ],
        hexes: ["K6"]
      },
      {
        color: "oxon",
        centerTowns: [
          { name: { name: "Fairford" } }
        ],
        borders: [
          { side: 1, color: "water" },
          { side: 4, color: "water" },
          { side: 5, color: "water" },
          { side: 6, color: "water" }
        ],
        labels: [
          { label: "O7", percent: 0.75 }
        ],
        hexes: ["I6"]
      },
      {
        color: "oxon",
        centerTowns: [
          { name: { name: "Bourton-on-the-Water" } }
        ],
        borders: [
          { side: 2, color: "land" },
          { side: 6, color: "land" }
        ],
        labels: [
          { label: "O3", percent: 0.75 }
        ],
        hexes: ["F5"]
      },
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Marlborough" } }
        ],
        borders: [
          { side: 1, color: "land" },
          { side: 3, color: "land" },
          { side: 4, color: "land" },
          { side: 6, color: "land" }
        ],
        labels: [
          { label: "K5", percent: 0.75 }
        ],
        hexes: ["M8"]
      },
      {
        color: "oxon",
        centerTowns: [
          { name: { name: "Chipping Norton" } }
        ],
        borders: [
          { side: 1, color: "land" },
          { side: 2, color: "land" },
          { side: 4, color: "land" }
        ],
        labels: [
          { label: "O2", percent: 0.75 }
        ],
        hexes: ["E8"]
      },
      {
        color: "oxon",
        centerTowns: [
          { name: { name: "Witney" } }
        ],
        borders: [
          { side: 4, color: "water" },
          { side: 5, color: "water" },
          { side: 6, color: "water" }
        ],
        labels: [
          { label: "O6", percent: 0.75 }
        ],
        hexes: ["H9"]
      },
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Lambourne" } }
        ],
        borders: [
          { side: 1, color: "land" },
          { side: 2, color: "land" },
          { side: 3, color: "land" },
          { side: 4, color: "land" },
          { side: 6, color: "land" }
        ],
        labels: [
          { label: "K4", percent: 0.75 }
        ],
        hexes: ["L9"]
      },
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Wantage" } }
        ],
        borders: [
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        labels: [
          { label: "K3", percent: 0.75 }
        ],
        hexes: ["K10"]
      },
      {
        color: "oxon",
        centerTowns: [
          { name: { name: "Blenheim" } }
        ],
        borders: [
          { side: 1, color: "land" },
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        labels: [
          { label: "O4", percent: 0.75 }
        ],
        hexes: ["F11"]
      },
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Newbury" } }
        ],
        labels: [
          { label: "K6", percent: 0.75 }
        ],
        borders: [
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["N11"]
      },
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Didcot" } }
        ],
        labels: [
          { label: "K1", percent: 0.75 }
        ],
        borders: [
          { side: 3, color: "water" }
        ],
        hexes: ["J13"]
      },
      {
        color: "oxon",
        centerTowns: [
          { name : { name: "Banbury" } }
        ],
        labels: [
          { label: "O1", percent: 0.75 }
        ],
        borders: [
          { side: 1, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["C12"]
      },
     {
        color: "oxon",
        centerTowns: [
          { name: { name: "Bicester" } }
        ],
        labels: [
          { label: "O5", percent: 0.75 }
        ],
        borders: [
          { side: 1, color: "land" }
        ],
        hexes: ["F15"]
      },
      {
        color: "oxon",
        centerTowns: [
          { name: { name: "Watlington" } }
        ],
         borders: [
          { side: 4, color: "land" },
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        labels: [
          { label: "O8", percent: 0.75 }
        ],
        hexes: ["J17"]
      },
      {
        color: "bucks",
        centerTowns: [
          { name: { name: "Princes Risborough" } }
        ],
        borders: [
          { side: 4, color: "land" },
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        labels: [
          { label: "B5", percent: 0.75 }
        ],
        hexes: ["I20"]
      },
      {
        color: "bucks",
        centerTowns: [
          { name: { name: "Buckingham" } }
        ],
        borders: [
          { side: 3, color: "land" },
          { side: 4, color: "land" }
        ],
        labels: [
          { label: "B1", percent: 0.75 }
        ],
        hexes: ["D17"]
      },
      {
        color: "bucks",
        centerTowns: [
          { name: { name: "Aylesbury" } }
        ],
        labels: [
          { label: "B3", percent: 0.75 }
        ],
        borders: [
          { side: 1, color: "land" },
          { side: 3, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["G20"]
      },
      {
        color: "berks",
        centerTowns: [
          { name : { name: "Reading" } }
        ],
        labels: [
          { label: "K7", percent: 0.75 }
        ],
        borders: [
          { side: 3, color: "water" }
        ],
        hexes: ["M18"]
      },
      {
        color: "bucks",
        centerTowns: [
          { name: { name: "Marlow" } }
        ],
        labels: [
          { label: "B8", percent: 0.75 }
        ],
        borders: [
          { side: 2, color: "land" },
          { side: 3, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["K22"]
      },
      {
        color: "bucks",
        centerTowns: [
          { name: { name: "Bletchley" } }
        ],
        labels: [
          { label: "B2", percent: 0.75 }
        ],
        hexes: ["D21"]
      },
      {
        color: "bucks",
        centerTowns: [
          { name: { name: "High Wycombe" } }
        ],
        labels: [
          { label: "B6", percent: 0.75 }
        ],
        borders: [
          { side: 2, color: "land" },
          { side: 3, color: "land" },
          { side: 4, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["J23"]
      },
      {
        color: "bucks",
        centerTowns: [
          { name: { name: "Cheddington" } }
        ],
        labels: [
          { label: "B4", percent: 0.75 }
        ],
        borders: [
          { side: 3, color: "land" },
          { side: 4, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["G24"]
      },
      {
        color: "bucks",
        centerTowns: [
          { name: { name: "Amersham" } }
        ],
        labels: [
          { label: "B7", percent: 0.75 }
        ],
        borders: [
          { side: 1, color: "land" },
          { side: 3, color: "land" },
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["J25"]
      },
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Bracknell" } }
        ],
        labels: [
          { label: "K8", percent: 0.75 }
        ],
        borders: [
          { side: 3, color: "land" },
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["N23"]
      },
// -------------------------------------------------
// Towns
// -------------------------------------------------
      {
        color: "oxon",
        centerTowns: [
          { name: { name: "Andoversford" } }
        ],
        borders: [
          { side: 3, color: "land" }
        ],
        hexes: ["F3"]
      },
      {
        color: "oxon",
        centerTowns: [
          { name: { name: "Cirencester" } }
        ],
        borders: [
          { side: 4, color: "water" }
        ],
        hexes: ["I4"]
      },
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Faringdon" } }
        ],
        borders: [
          { side: 2, color: "water"},
          { side: 3, color: "water"}
        ],
        hexes: ["J7"]
      },
      {
        color: "oxon",
        centerTowns: [
          { name: { name: "Carterton" } }
        ],
        borders: [
          { side: 1, color: "land" },
          { side: 2, color: "land" },
          { side: 3, color: "land" },
          { side: 5, color: "water" }
        ],
        hexes: ["H7"]
      },
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Hungerford" } }
        ],
        borders: [
          { side: 3, color: "land" },
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["N9"]
      },
      {
        color: "oxon",
        centerTowns: [
          { name: { name: "Charlbury" } }
        ],
        borders: [
          { side: 3, color: "land" },
          { side: 4, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["F9"]
      },
      {
        color: "oxon",
        centerTowns: [
          {
            name: { name: "Yarnton" }
          }
        ],
        borders: [
          { side: 2, color: "land" },
          { side: 6, color: "water" }
        ],
        hexes: ["G12"]
      },
      {
        color: "oxon",
        centerTowns: [
          { name: { name: "Shipton-on-Cherwell" } }
        ],
        borders: [
          { side: 3, color: "land" },
          { side: 4, color: "land" }
        ],
        hexes: ["F13"]
      },
      {
        color: "oxon",
        centerTowns: [
          { name: { name: "Islip" } }
        ],
        borders: [
          { side: 4, color: "water" },
          { side: 5, color: "land" }
        ],
        hexes: ["G14"]
      },
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Abingdon" } }
        ],
        borders: [
          { side: 1, color: "water" },
          { side: 2, color: "land" },
          { side: 4, color: "water" }
        ],
        hexes: ["I12"]
      },
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Compton" } }
        ],
        borders: [
          { side: 1, color: "land" },
          { side: 3, color: "land" },
          { side: 4, color: "land" },
          { side: 5, color: "land" }
        ],
        hexes: ["L13"]
      },
      {
        color: "oxon",
        centerTowns: [
          { name: { name: "King's Sutton" } }
        ],
        borders: [
          { side: 3, color: "land" },
          { side: 4, color: "land" }
        ],
        hexes: ["D13"]
      },
      {
        color: "bucks",
        centerTowns: [
          { name: { name: "Brackley" } }
        ],
        borders: [
          { side: 3, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["C14"]
      },
      {
        color: "oxon",
        centerTowns: [
          { name: { name: "Wheatley" } }
        ],
         borders: [
          { side: 1, color: "land" },
          { side: 2, color: "land" },
          { side: 3, color: "land" },
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["H15"]
      },
      {
        color: "oxon",
        centerTowns: [
          { name: { name: "Culham" } }
        ],
        borders: [
          { side: 3, color: "land" },
          { side: 1, color: "water" },
          { side: 4, color: "water" },
          { side: 5, color: "water" },
          { side: 6, color: "water" }
         ],
        hexes: ["I14"]
      },
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Wallingford" } }
        ],
        borders: [
          { side: 2, color: "water" },
          { side: 5, color: "land" }
        ],
        hexes: ["J15"]
      },
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Goring" } }
        ],
         borders: [
          { side: 1, color: "land" },
          { side: 3, color: "land" },
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["L15"]
      },
      {
        color: "oxon",
        centerTowns: [
          { name: { name: "Henley-upon-Thames" } }
        ],
         borders: [
          { side: 1, color: "land" },
          { side: 2, color: "land" },
          { side: 6, color: "water" }
        ],
        hexes: ["L19"]
      },
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Twyford" } }
        ],
        borders: [
          { side: 4, color: "land" },
          { side: 5, color: "water" }
        ],
        hexes: ["M20"]
      },
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Wokingham" } }
        ],
        borders: [
          { side: 2, color: "water" },
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["N21"]
      },
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Windsor" } }
        ],
        borders: [
          { side: 2, color: "water" },
          { side: 1, color: "land" },
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["M24"]
      },
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Staines" } }
        ],
         borders: [
          { side: 2, color: "water" }
        ],
       hexes: ["M26"]
      },
      {
        color: "bucks",
        centerTowns: [
          { name: { name: "Slough" } }
        ],
         borders: [
          { side: 2, color: "land" },
          { side: 3, color: "land" },
          { side: 5, color: "water" }
        ],
       hexes: ["L25"]
      },
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Maidenhead" } }
        ],
        borders: [
          { side: 3, color: "land" },
          { side: 5, color: "water" }
        ],
        hexes: ["L23"]
      },
      {
        color: "bucks",
        centerTowns: [
          { name: { name: "Beaconsfield" } }
        ],
        borders: [
          { side: 3, color: "land" },
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["K24"]
      },
      {
        color: "bucks",
        centerTowns: [
          { name: { name: "Gerrard's Cross" } }
        ],
        borders: [
          { side: 3, color: "water" },
          { side: 2, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["K26"]
      },
      {
        color: "bucks",
        centerTowns: [
          { name: { name: "Tring" } }
        ],
        borders: [
          { side: 1, color: "land" },
          { side: 3, color: "land" },
          { side: 4, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["H25"]
      },
      {
        color: "bucks",
        centerTowns: [
          { name: { name: "Watford" } }
        ],
        borders: [
          { side: 6, color: "water" }
        ],
        hexes: ["J27"]
      },
      {
        color: "bucks",
        centerTowns: [
          { name: { name: "Wendover" } }
        ],
        borders: [
          { side: 1, color: "land" },
          { side: 3, color: "land" },
          { side: 4, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["H23"]
      },
      {
        color: "oxon",
        centerTowns: [
          { name: { name: "Thame" } }
        ],
        borders: [
          { side: 3, color: "land" }
        ],
        hexes: ["H19"]
      },
      {
        color: "oxon",
        centerTowns: [
          { name: { name: "Chinor" } }
        ],
        borders: [
          { side: 1, color: "land" },
          { side: 5, color: "land" }
        ],
        hexes: ["I18"]
      },
      {
        color: "bucks",
        centerTowns: [
          { name: { name: "Leighton Buzzard" } }
        ],
        borders: [
          { side: 4, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["E22"]
      },
      {
        color: "bucks",
        centerTowns: [
          { name: { name: "Verney Junction" } }
        ],
        hexes: ["E18"]
      },
// -------------------------------------------------
// Distance
// -------------------------------------------------
      {
        color: "bucks",
        terrain: [{ type: "track", cost: "£40" }],
        hexes: ["B19"]
      },
      {
        color: "bucks",
        terrain: [{ type: "track", cost: "£40" }],
        hexes: ["C22"]
      },
      {
        color: "oxon",
        terrain: [{ type: "track", cost: "£40" }],
        borders: [
          { side: 4, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["D5"]
      },
      {
        color: "berks",
        terrain: [{ type: "track", cost: "£40" }],
        hexes: ["L3"]
      },
      {
        color: "berks",
        terrain: [{ type: "track", cost: "£40" }],
        hexes: ["K4"]
      },
      {
        color: "berks",
        terrain: [{ type: "track", cost: "£40" }],
        borders: [
          { side: 3, color: "land"}
        ],
        hexes: ["N5"]
      },
      {
        color: "berks",
        terrain: [{ type: "track", cost: "£40" }],
        hexes: ["O4"]
      },
// -------------------------------------------------
// Terrain
// -------------------------------------------------
// 1 land
      {
        color: "bucks",
        borders: [
          { side: 1, color: "land" }
        ],
        hexes: ["D15"]
      },
      {
        color: "bucks",
        borders: [
          { side: 1, color: "land" }
        ],
        hexes: ["D19"]
      },
      {
        color: "berks",
        hexes: ["N17"]
      },
      {
        color: "bucks",
        borders: [
          { side: 4, color: "land" }
        ],
        hexes: ["F17"]
      },
      {
        color: "berks",
        borders: [
          { side: 5, color: "land" }
        ],
        hexes: ["N19"]
      },
      {
        color: "oxon",
        borders: [
          { side: 6, color: "land" }
        ],
        hexes: ["B11"]
      },
// 2 lands
      {
        color: "berks",
        borders: [
          { side: 1, color: "land" },
          { side: 4, color: "land" }
        ],
        hexes: ["M22"]
      },
      {
        color: "bucks",
        borders: [
          { side: 1, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["C18"]
      },
      {
        color: "oxon",
        borders: [
          { side: 1, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["E14"]
      },
      {
        color: "berks",
        borders: [
          { side: 2, color: "land" },
          { side: 3, color: "land" }
        ],
        hexes: ["L21"]
      },
      {
        color: "berks",
        borders: [
          { side: 2, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["N13", "N25"]
      },
      {
        color: "bucks",
        borders: [
          { side: 2, color: "land" },
          { side: 4, color: "land" }
        ],
        hexes: ["C16"]
      },
      {
        color: "oxon",
        borders: [
          { side: 2, color: "land" },
          { side: 4, color: "land" }
        ],
        hexes: ["E12"]
      },
      {
        color: "oxon",
        borders: [
          { side: 3, color: "land" },
          { side: 4, color: "land" }
        ],
        hexes: ["G4", "H5"]
      },
      {
        color: "bucks",
        borders: [
          { side: 4, color: "land" }
        ],
        hexes: ["B13"]
      },
      {
        color: "berks",
        borders: [
          { side: 4, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["K12"]
      },
      {
        color: "bucks",
        borders: [
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["E20"]
      },
      {
        color: "oxon",
        borders: [
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["F7"]
      },
      {
        color: "berks",
        borders: [
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["K8"]
      },
// 3 lands
      {
        color: "berks",
        borders: [
          { side: 1, color: "land" },
          { side: 2, color: "land" },
          { side: 3, color: "land" }
        ],
        hexes: ["M14"]
      },
      {
        color: "berks",
        borders: [
          { side: 1, color: "land" },
          { side: 4, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["K14"]
      },
      {
        color: "oxon",
        borders: [
          { side: 1, color: "land" },
          { side: 3, color: "land" },
          { side: 4, color: "land" }
        ],
        hexes: ["E6"]
      },
      {
        color: "bucks",
        borders: [
          { side: 1, color: "land" },
          { side: 3, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["I26"]
      },
      {
        color: "oxon",
        borders: [
          { side: 1, color: "water" },
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["G16"]
      },
      {
        color: "berks",
        borders: [
          { side: 2, color: "land" },
          { side: 3, color: "land" }
        ],
        hexes: ["M16", "N7"]
      },
      {
        color: "bucks",
        borders: [
          { side: 2, color: "land" },
          { side: 3, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["G22"]
      },
      {
        color: "oxon",
        borders: [
          { side: 2, color: "land" },
          { side: 3, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["H17"]
      },
      {
        color: "bucks",
        borders: [
          { side: 3, color: "land" },
          { side: 4, color: "land" },
          { side: 5, color: "land" }
        ],
        hexes: ["H21"]
      },
      {
        color: "bucks",
        borders: [
          { side: 3, color: "land" },
          { side: 4, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["G18"]
      },
      {
        color: "berks",
        borders: [
          { side: 3, color: "land" },
          { side: 4, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["L7"]
      },
// 4 lands
      {
        color: "oxon",
        borders: [
          { side: 2, color: "land" },
          { side: 3, color: "land" },
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["D11"]
      },
      {
        color: "oxon",
        borders: [
          { side: 2, color: "land" },
          { side: 3, color: "land" },
          { side: 4, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["G8"]
      },
      {
        color: "berks",
        borders: [
          { side: 2, color: "land" },
          { side: 3, color: "land" },
          { side: 4, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["L17"]
      },
      {
        color: "bucks",
        borders: [
          { side: 1, color: "land" },
          { side: 3, color: "land" },
          { side: 4, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["F19", "F23", "I24"]
      },
      {
        color: "berks",
        borders: [
          { side: 1, color: "land" },
          { side: 3, color: "land" },
          { side: 4, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["M10"]
      },
      {
        color: "oxon",
        borders: [
          { side: 1, color: "land" },
          { side: 3, color: "land" },
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["G6"]
      },
      {
        color: "berks",
        borders: [
          { side: 1, color: "land" },
          { side: 2, color: "land" },
          { side: 4, color: "land" },
          { side: 5, color: "land" }
        ],
        hexes: ["M12"]
      },
      {
        color: "oxon",
        borders: [
          { side: 1, color: "land" },
          { side: 2, color: "land" },
          { side: 3, color: "land" },
          { side: 5, color: "land" }
        ],
        hexes: ["D9"]
      },
      {
        color: "bucks",
        borders: [
          { side: 1, color: "land" },
          { side: 2, color: "land" },
          { side: 3, color: "land" },
          { side: 5, color: "land" }
        ],
        hexes: ["K20"]
      },
      {
        color: "oxon",
        borders: [
          { side: 1, color: "land" },
          { side: 2, color: "land" },
          { side: 3, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["E10"]
      },
// 5 lands
      {
        color: "bucks",
        borders: [
          { side: 1, color: "land" },
          { side: 2, color: "land" },
          { side: 3, color: "land" },
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["J21"]
      },
// 6 lands
      {
        color: "oxon",
        terrain: [
          { type: "mountain", cost: "" }
        ],
        borders: [
          { side: 1, color: "land" },
          { side: 2, color: "land" },
          { side: 3, color: "land" },
          { side: 4, color: "land" },
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["C8", "C10", "D7", "E4", "J19", "K16", "K18"]
      },
      {
        color: "bucks",
        terrain: [
          { type: "mountain", cost: "" }
        ],
        borders: [
          { side: 1, color: "land" },
          { side: 2, color: "land" },
          { side: 3, color: "land" },
          { side: 4, color: "land" },
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["B15", "E24", "F21", "F25", "G26", "H27", "I22"]
      },
      {
        color: "berks",
        terrain: [
          { type: "mountain", cost: "" }
        ],
        borders: [
          { side: 1, color: "land" },
          { side: 2, color: "land" },
          { side: 3, color: "land" },
          { side: 4, color: "land" },
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["L11", "M6", "O8", "O10", "O12", "O20", "O22", "O24"]
      },
// 1 river
      {
        color: "berks",
        borders: [
          { side: 2,  color: "water" }
        ],
        hexes: ["J11"]
      },
// 2 rivers
      {
        color: "berks",
        borders: [
          { side: 2, color: "water" },
          { side: 3, color: "water" }
        ],
        hexes: ["J9"]
      },
// 6 rivers
      {
        color: "berks",
        terrain: [
          { type: "river", cost: "" }
        ],
        borders: [
          { side: 1,  color: "water" },
          { side: 2,  color: "water" },
          { side: 3,  color: "water" },
          { side: 4,  color: "water" },
          { side: 5,  color: "water" },
          { side: 6,  color: "water" }
        ],
        hexes: ["I8", "I10"]
      },
// Varied
      {
        color: "oxon",
        borders: [
          { side: 1, color: "land" },
          { side: 3, color: "land" },
          { side: 5, color: "water" }
        ],
        hexes: ["G10"]
      },
      {
        color: "berks",
        terrain: [
          { type: "river", angle: 120, percent: 0.35, cost: "" },
          { type: "mountain", angle: 300, percent: 0.35, cost: "" }
        ],
        borders: [
          { side: 6,  color: "water" },
          { side: 1,  color: "water" },
          { side: 2,  color: "water" },
          { side: 3,  color: "water" },
          { side: 4,  color: "land" },
          { side: 5,  color: "land" }
        ],
        hexes: ["H11"]
      },
      {
        color: "oxon",
        borders: [
          { side: 1,  color: "water" },
          { side: 2,  color: "land" },
          { side: 3,  color: "land" },
          { side: 4,  color: "land" }
        ],
        hexes: ["I16"]
      },
      {
        color: "berks",
        borders: [
          { side: 3,  color: "water" }
        ],
        hexes: ["J5"]
      },
// Nothing
      {
        color: "gray",
        hexes: ["B9", "B17", "C6", "D23", "L5", "N15", "O6", "O14", "O18"]
      },
      {
        color: "bucks",
        hexes: ["C20", "E16"]
      }
    ]
  }
};

export default game;