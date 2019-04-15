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
    extraMinors: 0,
    currency: "GBP"
  },

  ipo: false,

  tokens: ["Round"],

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
      abbrec: "MR",
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
      abbrec: "GCR",
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
      abbrec: "SWR",
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
      abbrec: "MetR",
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
      abbrec: "CR",
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
      abbrec: "LNWR",
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
      abbrec: "A",
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
      abbrec: "B",
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
      abbrec: "C",
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
      abbrec: "D",
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
      abbrec: "E",
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
      abbrec: "F",
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
      abbrec: "G",
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
      abbrec: "H",
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
      abbrec: "I",
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
      abbrec: "J",
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
      abbrec: "K",
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
      abbrec: "L",
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
      name: "Gloucester and Cheltenham",
      abbrev: "1",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Cheltenham",
      abbrev: "2",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Western",
      abbrev: "3",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "East Gloucestershire",
      abbrev: "4",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Bourton-on-the-Water",
      abbrev: "5",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Marlborough",
      abbrev: "6",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Chipping Norton",
      abbrev: "7",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Witney",
      abbrev: "8",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Lambourne Valley",
      abbrev: "9",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Wantage Tramway",
      abbrev: "10",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Woodstock",
      abbrev: "11",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Didcot, Newbury and Southampton",
      abbrev: "12",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Abingdon",
      abbrev: "13",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Quarry Tramway",
      abbrev: "14",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Bicester Military",
      abbrev: "15",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Wallingford and Watlington",
      abbrev: "16",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Chinor and Princes Risborough",
      abbrev: "17",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Buckinghamshire",
      abbrev: "18",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Aylesbury and Buckingham",
      abbrev: "19",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Reading, Guilford and Reigate Railway",
      abbrev: "20",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Great Marlow",
      abbrev: "21",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "London and Birmingham",
      abbrev: "22",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Wycombe",
      abbrev: "23",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Aylesbury",
      abbrev: "24",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Chesham",
      abbrev: "25",
      tokens: ["Free"],
      color: "yellow"
    },
    {
      name: "Wokingham and Staines",
      abbrev: "26",
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
        hexes: ["L1"]
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
          { side: 4 }
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
        color: "plain",
        labels: [
          { label: "O", percent: 0.75 }
        ],
        cities: [
          {
            name : { name: "Oxford" }
          }
        ],
        borders: [
          { side: 1, color: "water" },
          { side: 4, color: "mountain" }
        ],
        hexes: ["H13"]
      },
// -------------------------------------------------
// Minor cities
// -------------------------------------------------
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Swindon" } }
        ],
        labels: [
          { label: "3", percent: 0.75 }
        ],
        hexes: ["K6"]
      },
      {
        color: "plain",
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
          { label: "4", percent: 0.75 }
        ],
        hexes: ["I6"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Bourton-on-the-Water" } }
        ],
        borders: [
          { side: 2, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        labels: [
          { label: "5", percent: 0.75 }
        ],
        hexes: ["F5"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Marlborough" } }
        ],
        borders: [
          { side: 1, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        labels: [
          { label: "6", percent: 0.75 }
        ],
        hexes: ["M8"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Chipping Norton" } }
        ],
        borders: [
          { side: 1, color: "mountain" },
          { side: 2, color: "mountain" },
          { side: 4, color: "mountain" }
        ],
        labels: [
          { label: "7", percent: 0.75 }
        ],
        hexes: ["E8"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Witney" } }
        ],
        borders: [
          { side: 4, color: "water" },
          { side: 5, color: "water" },
          { side: 6, color: "water" }
        ],
        labels: [
          { label: "8", percent: 0.75 }
        ],
        hexes: ["H9"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Lambourne" } }
        ],
        borders: [
          { side: 1, color: "mountain" },
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        labels: [
          { label: "9", percent: 0.75 }
        ],
        hexes: ["L9"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Wantage" } }
        ],
        borders: [
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        labels: [
          { label: "10", percent: 0.75 }
        ],
        hexes: ["K10"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Blenheim" } }
        ],
        borders: [
          { side: 1, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        labels: [
          { label: "11", percent: 0.75 }
        ],
        hexes: ["F11"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Newbury" } }
        ],
        labels: [
          { label: "12", percent: 0.75 }
        ],
        borders: [
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["N11"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Didcot" } }
        ],
        labels: [
          { label: "13", percent: 0.75 }
        ],
        borders: [
          { side: 3, color: "water" }
        ],
        hexes: ["J13"]
      },
      {
        color: "plain",
        centerTowns: [
          { name : { name: "Banbury" } }
        ],
        labels: [
          { label: "14", percent: 0.75 }
        ],
        borders: [
          { side: 1, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["C12"]
      },
     {
        color: "plain",
        centerTowns: [
          { name: { name: "Bicester" } }
        ],
        labels: [
          { label: "15", percent: 0.75 }
        ],
        borders: [
          { side: 1, color: "mountain" }
        ],
        hexes: ["F15"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Watlington" } }
        ],
         borders: [
          { side: 2, color: "water" },
          { side: 4, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        labels: [
          { label: "16", percent: 0.75 }
        ],
        hexes: ["J17"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Princes Risborough" } }
        ],
        borders: [
          { side: 4, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        labels: [
          { label: "17", percent: 0.75 }
        ],
        hexes: ["I20"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Buckingham" } }
        ],
        borders: [
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" }
        ],
        labels: [
          { label: "18", percent: 0.75 }
        ],
        hexes: ["D17"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Aylesbury" } }
        ],
        labels: [
          { label: "19", percent: 0.75 }
        ],
        borders: [
          { side: 1, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["G20"]
      },
      {
        color: "plain",
        labels: [
          { label: "20", percent: 0.75 }
        ],
        centerTowns: [
          { name : { name: "Reading" } }
        ],
        borders: [
          { side: 3, color: "water" }
        ],
        hexes: ["M18"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Marlow" } }
        ],
        labels: [
          { label: "21", percent: 0.75 }
        ],
        borders: [
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["K22"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Bletchley" } }
        ],
        labels: [
          { label: "22", percent: 0.75 }
        ],
        hexes: ["D21"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "High Wycombe" } }
        ],
        labels: [
          { label: "23", percent: 0.75 }
        ],
        borders: [
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["J23"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Cheddington" } }
        ],
        labels: [
          { label: "24", percent: 0.75 }
        ],
        borders: [
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["G24"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Amersham" } }
        ],
        labels: [
          { label: "25", percent: 0.75 }
        ],
        borders: [
          { side: 1, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["J25"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Bracknell" } }
        ],
        labels: [
          { label: "26", percent: 0.75 }
        ],
        borders: [
          { side: 3, color: "mountain" }
        ],
        hexes: ["N23"]
      },
// -------------------------------------------------
// Towns
// -------------------------------------------------
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Andoversford" } }
        ],
        borders: [
          { side: 3, color: "mountain" }
        ],
        hexes: ["F3"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Cirencester" } }
        ],
        borders: [
          { side: 4, color: "water" }
        ],
        hexes: ["I4"]
      },
      {
        color: "plain",
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
        color: "plain",
        centerTowns: [
          { name: { name: "Carterton" } }
        ],
        borders: [
          { side: 1, color: "mountain" },
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 5, color: "water" }
        ],
        hexes: ["H7"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Hungerford" } }
        ],
        borders: [
          { side: 3, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["N9"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Charlbury" } }
        ],
        borders: [
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["F9"]
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
        hexes: ["G12"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Shipton-on-Cherwell" } }
        ],
        borders: [
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" }
        ],
        hexes: ["F13"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Islip" } }
        ],
        borders: [
          { side: 4, color: "mountain" },
          { side: 5, color: "mountain" }
        ],
        hexes: ["G14"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Abingdon" } }
        ],
        borders: [
          { side: 1, color: "water" },
          { side: 2, color: "water" },
          { side: 4, color: "water" }
        ],
        hexes: ["I12"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Compton" } }
        ],
        borders: [
          { side: 1, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 5, color: "mountain" }
        ],
        hexes: ["L13"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "King's Sutton" } }
        ],
        borders: [
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" }
        ],
        hexes: ["D13"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Brackley" } }
        ],
        borders: [
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["C14"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Wheatley" } }
        ],
         borders: [
          { side: 1, color: "mountain" },
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["H15"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Culham" } }
        ],
        borders: [
          { side: 3, color: "mountain" },
          { side: 1, color: "water" },
          { side: 5, color: "water" },
          { side: 6, color: "water" }
         ],
        hexes: ["I14"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Wallingford" } }
        ],
        borders: [
          { side: 2, color: "water" },
          { side: 3, color: "water" },
          { side: 5, color: "mountain" }
        ],
        hexes: ["J15"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Goring" } }
        ],
         borders: [
          { side: 1, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["L15"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Henley-upon-Thames" } }
        ],
         borders: [
          { side: 1, color: "mountain" },
          { side: 2, color: "mountain" },
          { side: 6, color: "water" }
        ],
        hexes: ["L19"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Twyford" } }
        ],
        hexes: ["M20"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Wokingham" } }
        ],
        hexes: ["N21"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Windsor" } }
        ],
        borders: [
          { side: 2, color: "water" },
          { side: 1, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["M24"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Staines" } }
        ],
         borders: [
          { side: 2, color: "water" }
        ],
       hexes: ["M26"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Slough" } }
        ],
         borders: [
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 5, color: "water" }
        ],
       hexes: ["L25"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Maidenhead" } }
        ],
        borders: [
          { side: 3, color: "mountain" },
          { side: 5, color: "water" }
        ],
        hexes: ["L23"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Beaconsfield" } }
        ],
        borders: [
          { side: 3, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["K24"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Gerrard's Cross" } }
        ],
        borders: [
          { side: 3, color: "water" },
          { side: 2, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["K26"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Tring" } }
        ],
        borders: [
          { side: 1, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["H25"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Watford" } }
        ],
        borders: [
          { side: 6, color: "water" }
        ],
        hexes: ["J27"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Wendover" } }
        ],
        borders: [
          { side: 1, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["H23"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Thame" } }
        ],
        borders: [
          { side: 3, color: "mountain" }
        ],
        hexes: ["H19"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Chinor" } }
        ],
        borders: [
          { side: 1, color: "mountain" },
          { side: 5, color: "mountain" }
        ],
        hexes: ["I18"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Leighton Buzzard" } }
        ],
        borders: [
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["E22"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Verney Junction" } }
        ],
        hexes: ["E18"]
      },
// -------------------------------------------------
// Distance
// -------------------------------------------------
      {
        color: "plain",
        terrain: [{ type: "track", cost: "£40" }],
        hexes: ["B19"]
      },
      {
        color: "plain",
        terrain: [{ type: "track", cost: "£40" }],
        hexes: ["C22"]
      },
      {
        color: "plain",
        terrain: [{ type: "track", cost: "£40" }],
        borders: [
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["D5"]
      },
      {
        color: "plain",
        terrain: [{ type: "track", cost: "£40" }],
        hexes: ["L3"]
      },
      {
        color: "plain",
        terrain: [{ type: "track", cost: "£40" }],
        borders: [
          { side: 3, color: "mountain"}
        ],
        hexes: ["K4"]
      },
      {
        color: "plain",
        terrain: [{ type: "track", cost: "£40" }],
        borders: [
          { side: 3, color: "mountain"}
        ],
        hexes: ["N5"]
      },
      {
        color: "plain",
        terrain: [{ type: "track", cost: "£40" }],
        hexes: ["O4"]
      },
// -------------------------------------------------
// Terrain
// -------------------------------------------------
// 1 mountain
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" }
        ],
        hexes: ["D15", "D19"]
      },
      {
        color: "plain",
        borders: [
          { side: 2, color: "mountain" }
        ],
        hexes: ["N17", "N25"]
      },
      {
        color: "plain",
        borders: [
          { side: 4, color: "mountain" }
        ],
        hexes: ["F17", "M22"]
      },
      {
        color: "plain",
        borders: [
          { side: 5, color: "mountain" }
        ],
        hexes: ["B13"]
      },
      {
        color: "plain",
        borders: [
          { side: 6, color: "mountain" }
        ],
        hexes: []
      },
// 2 mountains
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["C18", "E14"]
      },
      {
        color: "plain",
        borders: [
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" }
        ],
        hexes: ["L21"]
      },
      {
        color: "plain",
        borders: [
          { side: 2, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["N13"]
      },
      {
        color: "plain",
        borders: [
          { side: 2, color: "mountain" },
          { side: 4, color: "mountain" }
        ],
        hexes: ["C16", "E12"]
      },
      {
        color: "plain",
        borders: [
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" }
        ],
        hexes: ["G4", "H5"]
      },
      {
        color: "plain",
        borders: [
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["K12"]
      },
      {
        color: "plain",
        borders: [
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["E20", "F7", "K8"]
      },
// 3 mountains
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" }
        ],
        hexes: ["M14"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["K14"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" }
        ],
        hexes: ["E6"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["I26"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["G16"]
      },
      {
        color: "plain",
        borders: [
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 5, color: "mountain" }
        ],
        hexes: ["M16", "N7"]
      },
      {
        color: "plain",
        borders: [
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["G22"]
      },
      {
        color: "plain",
        borders: [
          { side: 2, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 5, color: "black" }
        ],
        hexes: []
      },
      {
        color: "plain",
        borders: [
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 5, color: "mountain" }
        ],
        hexes: ["H21"]
      },
      {
        color: "plain",
        borders: [
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["G18", "L7"]
      },
// 4 mountains
      {
        color: "plain",
        borders: [
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["D11"]
      },
      {
        color: "plain",
        borders: [
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["G8", "L17"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["F19", "F23", "I24", "M10"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["G6"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 2, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 5, color: "mountain" }
        ],
        hexes: ["M12"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 5, color: "mountain" }
        ],
        hexes: ["D9", "K20"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["E10"]
      },
// 5 mountains
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["J21"]
      },
// 6 mountains
      {
        color: "plain",
        terrain: [
          { type: "mountain", cost: "" }
        ],
        borders: [
          { side: 1, color: "mountain" },
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: [
          "B15",
          "C8", "C10",
          "D7",
          "E4", "E24",
          "F21", "F25",
          "G26",
          "H27",
          "I22",
          "J19",
          "K16", "K18",
          "L11",
          "M6",
          "O8", "O10", "O12", "O20", "O22", "O24"
        ]
      },
// 1 river
      {
        color: "plain",
        borders: [
          { side: 2,  color: "water" }
        ],
        hexes: ["J11"]
      },
// 1 river
      {
        color: "plain",
        borders: [
          { side: 2, color: "water" },
          { side: 3, color: "water" }
        ],
        hexes: ["J9"]
      },
// 6 rivers
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
        hexes: ["H11", "I10"]
      },
      {
        color: "plain",
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
        hexes: ["I8"]
      },
// Varied
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 5, color: "water" }
        ],
        hexes: ["G10"]
      },
      {
        color: "plain",
        borders: [
          { side: 2,  color: "mountain" },
          { side: 3,  color: "mountain" },
          { side: 6,  color: "mountain" }
        ],
        hexes: ["H17"]
      },
      {
        color: "plain",
        borders: [
          { side: 2,  color: "mountain" },
          { side: 3,  color: "mountain" },
          { side: 4,  color: "mountain" },
          { side: 5,  color: "water" },
          { side: 6,  color: "water" }
        ],
        hexes: ["I16"]
      },
      {
        color: "plain",
        borders: [
          { side: 6,  color: "mountain" },
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
        color: "plain",
        hexes: [
          "B11",
          "C20",
          "E16",
          "N19"
        ]
      },
    ]
  }
};

export default game;