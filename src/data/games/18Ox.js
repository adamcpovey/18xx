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
      name: "Lambourne",
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
      name: "Ironstone Quarry Tramway",
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
      name: "Wallingord and Watlington",
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
      name: "Regate",
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
      name: "Windsor",
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
        { value: 200, label: 200, arrow: "down" },
        220,
        240,
        260,
        280,
        310,
        { value: 360, label: 360, legend: 1 }
      ],
      [
        { value: 65, label: 65, arrow: "down" },
        75,
        85,
        100,
        115,
        120,
        130,
        145,
        160,
        175,
        195,
        215,
        235,
        260,
        285,
        { value: 310, label: 310, arrow: "up" }
      ],
      [
        { value: 55, label: 55, arrow: "down" },
        65,
        75,
        85,
        { value: 100, label: 100, par: true },
        105,
        115,
        125,
        140,
        155,
        170,
        185,
        205,
        225,
        245,
        { value: 265, label: 265, arrow: "up" }
      ],
      [
        { value: 50, label: 50, arrow: "down" },
        55,
        65,
        75,
        { value: 85, label: 85, par: true },
        90,
        95,
        105,
        115,
        130,
        145,
        160,
        175,
        195,
        215,
        { value: 240, label: 240, arrow: "up" }
      ],
      [
        { value: 45, label: 45, arrow: "down" },
        50,
        55,
        65,
        { value: 75, label: 75, par: true },
        80,
        85,
        95,
        105,
        115,
        130,
        145,
        160,
        175,
        195,
        { value: 215, label: 215, arrow: "up" }
      ],
      [
        { value: 40, label: 40, legend: 0, arrow: "down" },
        45,
        50,
        55,
        { value: 65, label: 65, par: true },
        70,
        75,
        80,
        90,
        100,
        110,
        125,
        140,
        { value: 155, label: 155, arrow: "up" },
        null,
        null
      ],
      [
        { value: 35, label: 35, legend: 0, arrow: "down" },
        { value: 40, label: 40, legend: 0 },
        45,
        50,
        { value: 55, label: 55, par: true },
        60,
        65,
        70,
        80,
        90,
        100,
        { value: 110, label: 110, arrow: "up" },
        null,
        null,
        null,
        null
      ],
      [
        { value: 30, label: 30, legend: 0, arrow: "down" },
        { value: 35, label: 35, legend: 0 },
        { value: 40, label: 40, legend: 0 },
        45,
        { value: 50, label: 50, par: true, color:"yellow" },
        55,
        60,
        65,
        70,
        { value: 80, label: 80, arrow: "up" },
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        { value: 25, label: 25, legend: 0, arrow: "down" },
        { value: 30, label: 30, legend: 0 },
        { value: 35, label: 35, legend: 0 },
        { value: 40, label: 40, legend: 0 },
        45,
        50,
        55,
        60,
        { value: 65, label: 65, arrow: "up" },
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
        { value: 20, label: 20, legend: 0, arrow: "down" },
        { value: 25, label: 25, legend: 0 },
        { value: 30, label: 30, legend: 0 },
        { value: 35, label: 35, legend: 0 },
        { value: 40, label: 40, legend: 0 },
        { value: 45, label: 45, legend: 0 },
        { value: 50, label: 50, legend: 0 },
        { value: 55, label: 55, legend: 0, arrow: "up" },
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
        { value: 15, label: 15, legend: 0, arrow: "down" },
        { value: 20, label: 20, legend: 0 },
        { value: 25, label: 25, legend: 0 },
        { value: 30, label: 30, legend: 0 },
        { value: 35, label: 35, legend: 0 },
        { value: 40, label: 40, legend: 0 },
        { value: 45, label: 45, legend: 0, arrow: "up" },
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
        { value: 10, label: 10, legend: 0, arrow: "down" },
        { value: 15, label: 15, legend: 0 },
        { value: 20, label: 20, legend: 0 },
        { value: 25, label: 25, legend: 0 },
        { value: 30, label: 30, legend: 0 },
        { value: 35, label: 35, legend: 0, arrow: "up" },
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
        hexes: ["C34"]
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
        labels: [
          { label: "C", angle: 0, percent: 0.8 }
        ],
        hexes: ["O8"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: { name: "BASINGSTOKE" },
          revenues: [
            { color: "yellow", cost: "10" },
            { color: "green", cost: "20" },
            { color: "brown", cost: "30" },
            { color: "gray", cost: "40" },
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
        labels: [
          { label: "B", angle: 180, percent: 0.8 }
        ],
        hexes: ["L37"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: { name: "Euston"},
          revenues: []
        },
        offBoardTrack: [
          { side: 1 },
          { side: 2 },
        ],
        hexes: ["J37"]
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
        hexes: ["K36"]
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
        ],
        hexes: ["L35"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: { name: "Waterloo"},
          revenues: []
        },
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
          { side: 1, color: "water" }
        ],
        hexes: ["H21"]
      },
      {
        color: "plain",
        labels: [
          { label: "H", percent: 0.75 }
        ],
        cities: [
          {
            name : { name: "Gloucester" }
          }
        ],
        borders: [
          { side: 2, color: "water" }
        ],
        hexes: ["F5"]
      },
      {
        color: "plain",
        labels: [
          { label: "H", percent: 0.75 }
        ],
        cities: [
          {
            name : { name: "Banbury" }
          }
        ],
        borders: [
          { side: 1, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["C20"]
      },
      {
        color: "plain",
        labels: [
          { label: "H", percent: 0.75 }
        ],
        cities: [
          {
            name : { name: "Reading" }
          }
        ],
        borders: [
          { side: 3, color: "water" }
        ],
        hexes: ["M26"]
      },
// -------------------------------------------------
// Minor cities
// -------------------------------------------------
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Cheltenham" } }
        ],
        labels: [
          { label: "1", percent: 0.75 }
        ],
         borders: [
          { side: 3, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
       hexes: ["F7"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Cirencester" } }
        ],
        labels: [
          { label: "2", percent: 0.75 }
        ],
        borders: [
          { side: 2, color: "mountain" }
        ],
        hexes: ["I8"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Swindon" } }
        ],
        labels: [
          { label: "3", percent: 0.75 }
        ],
        borders: [
          { side: 2, color: "water" }
        ],
        hexes: ["K12"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Fairford" } }
        ],
        borders: [
          { side: 3, color: "mountain" },
          { side: 5, color: "water" },
          { side: 6, color: "water" }
        ],
        labels: [
          { label: "4", percent: 0.75 }
        ],
        hexes: ["I12"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Bourton-on-the-Water" } }
        ],
        borders: [
          { side: 6, color: "mountain" }
        ],
        labels: [
          { label: "5", percent: 0.75 }
        ],
        hexes: ["F13"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Marlborough" } }
        ],
        borders: [
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        labels: [
          { label: "6", percent: 0.75 }
        ],
        hexes: ["M14"]
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
        hexes: ["E16"]
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
        hexes: ["H17"]
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
        hexes: ["L17"]
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
        hexes: ["K18"]
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
        hexes: ["F19"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Newbury" } }
        ],
        labels: [
          { label: "12", percent: 0.75 }
        ],
        hexes: ["N19"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Abingdon" } }
        ],
        labels: [
          { label: "13", percent: 0.75 }
        ],
        borders: [
          { side: 1, color: "water" },
          { side: 2, color: "water" },
          { side: 4, color: "water" }
        ],
        hexes: ["I20"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Brackley" } }
        ],
        labels: [
          { label: "14", percent: 0.75 }
        ],
        borders: [
          { side: 2, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["C22"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Bicester" } }
        ],
        borders: [
          { side: 1, color: "mountain" }
        ],
        labels: [
          { label: "15", percent: 0.75 }
        ],
        hexes: ["F23"]
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
        labels: [
          { label: "16", percent: 0.75 }
        ],
        hexes: ["J23"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Chinor" } }
        ],
        borders: [
          { side: 1, color: "water" },
          { side: 5, color: "mountain" }
        ],
        labels: [
          { label: "17", percent: 0.75 }
        ],
        hexes: ["I26"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Buckingham" } }
        ],
        labels: [
          { label: "18", percent: 0.75 }
        ],
        hexes: ["D27"]
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
        hexes: ["G28"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Twyford" } }
        ],
        labels: [
          { label: "20", percent: 0.75 }
        ],
        hexes: ["M28"]
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
        hexes: ["K30"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Bletchley" } }
        ],
        labels: [
          { label: "22", percent: 0.75 }
        ],
        borders: [
          { side: 4, color: "mountain" }
        ],
        hexes: ["D31"]
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
        hexes: ["J31"]
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
        hexes: ["G32"]
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
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["I32"]
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
        labels: [
          { label: "26", percent: 0.75 }
        ],
        hexes: ["M32"]
      },
// -------------------------------------------------
// Towns
// -------------------------------------------------
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Stroud" } }
        ],
        borders: [
          { side: 1, color: "black" },
          { side: 2, color: "black" },
          { side: 5, color: "mountain" }
        ],
        hexes: ["H3"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Tetbury" } }
        ],
        borders: [
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 6, color: "black" }
        ],
        hexes: ["I4"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Andoversford" } }
        ],
        borders: [
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["F9"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Minety" } }
        ],
        borders: [
          { side: 3, color: "water" },
          { side: 4, color: "water" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["J9"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Moreton-in-the-Marsh" } }
        ],
        borders: [
          { side: 1, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["D13"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Highworth" } }
        ],
        borders: [
          { side: 1, color: "water"},
          { side: 2, color: "water"},
          { side: 3, color: "water"}
        ],
        hexes: ["J13"]
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
        hexes: ["H15"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Faringdon" } }
        ],
        borders: [
          { side: 2, color: "water" },
          { side: 3, color: "water" }
        ],
        hexes: ["J15"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Hungerford" } }
        ],
        borders: [
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["M16"]
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
        hexes: ["F17"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Hanborough" } }
        ],
        borders: [
          { side: 1, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 5, color: "water"}
        ],
        hexes: ["G18"]
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
        hexes: ["G20"]
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
        hexes: ["F21"]
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
        hexes: ["G22"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Didcot" } }
        ],
        borders: [
          { side: 3, color: "water" }
        ],
        hexes: ["J21"]
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
        hexes: ["L21"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Hermitage" } }
        ],
        borders: [
          { side: 1, color: "mountain" },
          { side: 2, color: "mountain" },
          { side: 4, color: "mountain" }
        ],
        hexes: ["M20"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Thatcham" } }
        ],
        borders: [
          { side: 3, color: "mountain" }
        ],
        hexes: ["N21"]
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
        hexes: ["D21"]
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
        hexes: ["H23"]
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
        hexes: ["I22"]
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
        hexes: ["J25"]
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
        hexes: ["L23"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Pangbourne" } }
        ],
         borders: [
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["L25"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Theale" } }
        ],
         borders: [
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" }
        ],
        hexes: ["M24"]
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
        hexes: ["L27"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Wokingham" } }
        ],
        hexes: ["N29"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Bracknell" } }
        ],
        borders: [
          { side: 3, color: "mountain" }
        ],
        hexes: ["N31"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Chertsey" } }
        ],
        borders: [
          { side: 2, color: "mountain" }
        ],
        hexes: ["N33"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Staines" } }
        ],
         borders: [
          { side: 2, color: "water" }
        ],
       hexes: ["M34"]
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
       hexes: ["L33"]
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
        hexes: ["L31"]
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
        hexes: ["K32"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Gerrard's Cross" } }
        ],
        borders: [
          { side: 2, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["K34"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Rickmansworth" } }
        ],
        hexes: ["J35"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Watford" } }
        ],
        borders: [
          { side: 1, color: "mountain" }
        ],
        hexes: ["I36"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Hemel Hempstead" } }
        ],
        borders: [
          { side: 2, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["H35"]
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
          { side: 5, color: "mountain" }
        ],
        hexes: ["H31"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Thame" } }
        ],
        borders: [
          { side: 3, color: "mountain" }
        ],
        hexes: ["H27"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Princes Risborough" } }
        ],
        borders: [
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["I28"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Great Missenden" } }
        ],
        borders: [
          { side: 1, color: "mountain" },
          { side: 2, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["I30"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Leighton Buzzard" } }
        ],
        borders: [
          { side: 3, color: "mountain" },
          { side: 5, color: "mountain" }
        ],
        hexes: ["E32"]
      },
      {
        color: "plain",
        centerTowns: [
          { name: { name: "Verney Junction" } }
        ],
        hexes: ["E28"]
      },
// -------------------------------------------------
// Distance
// -------------------------------------------------
      {
        color: "plain",
        terrain: [{ type: "track", cost: "£40" }],
        hexes: ["B27"]
      },
      {
        color: "plain",
        terrain: [{ type: "track", cost: "£40" }],
        borders: [ { side: 5, color: "mountain" } ],
        hexes: ["C32"]
      },
      {
        color: "plain",
        terrain: [{ type: "track", cost: "£40" }],
        borders: [ { side: 3, color: "water" } ],
        hexes: ["F3"]
      },
      {
        color: "plain",
        terrain: [{ type: "track", cost: "£40" }],
        hexes: ["G2"]
      },
      {
        color: "plain",
        terrain: [{ type: "track", cost: "£40" }],
        hexes: ["I2"]
      },
      {
        color: "plain",
        terrain: [{ type: "track", cost: "£40" }],
        hexes: ["J3"]
      },
      {
        color: "plain",
        terrain: [{ type: "track", cost: "£40" }],
        hexes: ["K6"]
      },
      {
        color: "plain",
        terrain: [{ type: "track", cost: "£40" }],
        hexes: ["K8"]
      },
      {
        color: "plain",
        terrain: [{ type: "track", cost: "£40" }],
        hexes: ["N11"]
      },
      {
        color: "plain",
        terrain: [{ type: "track", cost: "£40" }],
        hexes: ["O10"]
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
        hexes: ["C26", "D23", "N25"]
      },
      {
        color: "plain",
        borders: [
          { side: 3, color: "mountain" }
        ],
        hexes: ["I6"]
      },
      {
        color: "plain",
        borders: [
          { side: 4, color: "mountain" }
        ],
        hexes: ["F25"]
      },
      {
        color: "plain",
        borders: [
          { side: 5, color: "mountain" }
        ],
        hexes: ["B21", "K14", "M30"]
      },
      {
        color: "plain",
        borders: [
          { side: 6, color: "mountain" }
        ],
        hexes: ["E30"]
      },
// 2 mountains
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 3, color: "mountain" }
        ],
        hexes: ["N17"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 5, color: "mountain" }
        ],
        hexes: ["L13"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["E22"]
      },
      {
        color: "plain",
        borders: [
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" }
        ],
        hexes: ["L29"]
      },
      {
        color: "plain",
        borders: [
          { side: 2, color: "mountain" },
          { side: 4, color: "mountain" }
        ],
        hexes: ["C24", "E20", "N23"]
      },
      {
        color: "plain",
        borders: [
          { side: 2, color: "mountain" },
          { side: 5, color: "mountain" }
        ],
        hexes: ["M12"]
      },
      {
        color: "plain",
        borders: [
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["C12", "K20"]
      },
      {
        color: "plain",
        borders: [
          { side: 4, color: "mountain" },
          { side: 5, color: "mountain" }
        ],
        hexes: ["L11"]
      },
      {
        color: "plain",
        borders: [
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["F15", "K16"]
      },
// 3 mountains
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["C14", "F27", "F31", "K22"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" }
        ],
        hexes: ["E14", "H9"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["G24", "J33"]
      },
       {
        color: "plain",
        borders: [
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" }
        ],
        hexes: ["I34"]
      },
     {
        color: "plain",
        borders: [
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["G30"]
      },
      {
        color: "plain",
        borders: [
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 5, color: "mountain" }
        ],
        hexes: ["H29"]
      },
      {
        color: "plain",
        borders: [
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["G26"]
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
        hexes: ["D19", "F11"]
      },
      {
        color: "plain",
        borders: [
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["G16", "H5"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["G6", "G10", "H11", "M18"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["G14", "H33", "J29"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 5, color: "mountain" }
        ],
        hexes: ["D17", "K28"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["E18"]
      },
// 5 mountains
      {
        color: "plain",
        borders: [
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["L15"]
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
        hexes: ["D15", "H7"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 5, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["M22"]
      },
      {
        color: "plain",
        borders: [
          { side: 1, color: "mountain" },
          { side: 2, color: "mountain" },
          { side: 3, color: "mountain" },
          { side: 4, color: "mountain" },
          { side: 6, color: "mountain" }
        ],
        hexes: ["E12", "G8"]
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
          "B17", "B23", "B25",
          "C16", "C18",
          "D9", "D11", "D33",
          "E8", "E10",
          "F29", "F33",
          "G12", "G34",
          "H13",
          "J27",
          "K24", "K26",
          "N13", "N15",
          "L19"
        ]
      },
// 1 river
      {
        color: "plain",
        borders: [
          { side: 2,  color: "water" }
        ],
        hexes: ["J19"]
      },
      {
        color: "plain",
        borders: [
          { side: 3,  color: "water" }
        ],
        hexes: ["K10"]
      },
// 2 rivers
      {
        color: "plain",
        borders: [
          { side: 2,  color: "water" },
          { side: 3,  color: "water" }
        ],
        hexes: ["J17"]
      },
// 3 rivers
      {
        color: "plain",
        terrain: [
          { type: "river", cost: "" }
        ],
        borders: [
          { side: 4,  color: "water" },
          { side: 5,  color: "water" },
          { side: 6,  color: "water" }
        ],
        hexes: ["E4"]
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
        hexes: ["H19", "I18"]
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
        hexes: ["I16", "J11"]
      },
// Varied
      {
        color: "plain",
        borders: [
          { side: 1,  color: "water" },
          { side: 4,  color: "mountain" }
        ],
        hexes: ["E6"]
      },
      {
        color: "plain",
        borders: [
          { side: 2,  color: "mountain" },
          { side: 3,  color: "mountain" },
          { side: 6,  color: "mountain" }
        ],
        hexes: ["H25"]
      },
      {
        color: "plain",
        borders: [
          { side: 5,  color: "water" },
          { side: 6,  color: "water" },
          { side: 3,  color: "mountain" }
        ],
        hexes: ["I10"]
      },
      {
        color: "plain",
        borders: [
          { side: 4,  color: "water" },
          { side: 5,  color: "water" },
          { side: 6,  color: "water" },
          { side: 2,  color: "mountain" }
        ],
        hexes: ["I14"]
      },
      {
        color: "plain",
        borders: [
          { side: 1,  color: "black" },
          { side: 2,  color: "black" },
          { side: 4,  color: "mountain" },
          { side: 5,  color: "mountain" }
        ],
        hexes: ["G4"]
      },
      {
        color: "plain",
        borders: [
          { side: 2,  color: "mountain" },
          { side: 3,  color: "mountain" },
          { side: 4,  color: "water" },
          { side: 5,  color: "water" },
          { side: 6,  color: "water" }
        ],
        hexes: ["I24"]
      },
      {
        color: "black",
        hexes: ["J5"]
      },
      {
        color: "plain",
        borders: [
          { side: 5,  color: "black" },
          { side: 6,  color: "black" }
        ],
        hexes: ["J7"]
      },
// Nothing
      {
        color: "plain",
        hexes: [
          "B19",
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