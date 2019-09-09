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
    extraMinors: 2,
    currency: "GBP"
  },

  ipo: false,

  tokens: ["Round", "C.Village", "Mine +£10", "Bypass"],

  bank: "£8,000",

  players: [
    {
      number: 3,
      certLimit: 17,
      capital: "£400"
    },
    {
      number: 4,
      certLimit: 13,
      capital: "£300"
    },
    {
      number: 5,
      certLimit: 10,
      capital: "£250"
    }
  ],

  // Railway Companies
  companies: [
    {
      name: "Great Western Railway",
      abbrev: "GWR",
      tokens: ["£50", "£50", "£50", "£50"],
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
      name: "London and North Western Railway",
      abbrev: "LNWR",
      tokens: ["£50", "£50", "£50", "£50"],
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
      name: "Midland Railway",
      abbrev: "MR",
      tokens: ["£50", "£50", "£50", "£50"],
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
      name: "Great Central Railway",
      abbrev: "GCR",
      tokens: ["£50", "£50", "£50", "£50"],
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
      name: "South Wales Railway",
      abbrev: "SWR",
      tokens: ["£50", "£50", "£50", "£50"],
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
      name: "Metropolitan Railway",
      abbrev: "MetR",
      tokens: ["£50", "£50", "£50", "£50"],
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
      name: "Chiltern Railway",
      abbrev: "ChR",
      tokens: ["£50", "£50", "£50", "£50"],
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
      name: "London and South Western Railway",
      abbrev: "LSW",
      tokens: ["£50", "£50", "£50", "£50"],
      color: "orange",
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
  ],

  minorCompanies: [
    {
      name: "Western Railway",
      abbrev: "K2",
      tokens: [],
      color: "yellow"
    },
    {
      name: "East Gloucestershire Railway",
      abbrev: "O7",
      tokens: [],
      color: "yellow"
    },
    {
      name: "Bourton-on-the-Water Railway",
      abbrev: "O3",
      tokens: [],
      color: "yellow"
    },
    {
      name: "Marlborough Railway",
      abbrev: "K5",
      tokens: [],
      color: "yellow"
    },
    {
      name: "Chipping Norton Railway",
      abbrev: "O2",
      tokens: [],
      color: "yellow"
    },
    {
      name: "Witney Railway",
      abbrev: "O6",
      tokens: [],
      color: "yellow"
    },
    {
      name: "Lambourne Valley Railway",
      abbrev: "K4",
      tokens: [],
      color: "yellow"
    },
    {
      name: "Wantage Tramway",
      abbrev: "K3",
      tokens: [],
      color: "yellow"
    },
    {
      name: "Woodstock Railway",
      abbrev: "O4",
      tokens: [],
      color: "yellow"
    },
    {
      name: "Berks and Hants Railway",
      abbrev: "K6",
      tokens: [],
      color: "yellow"
    },
    {
      name: "Didcot, Newbury and Southampton Railway",
      abbrev: "K1",
      tokens: [],
      color: "yellow"
    },
    {
      name: "Ironstone Quarry Tramway",
      abbrev: "O1",
      tokens: [],
      color: "yellow"
    },
    {
      name: "Bicester Military Railway",
      abbrev: "O5",
      tokens: [],
      color: "yellow"
    },
    {
      name: "Wallingford and Watlington Railway",
      abbrev: "O8",
      tokens: [],
      color: "yellow"
    },
    {
      name: "Chinor and Princes Risborough Railway",
      abbrev: "B5",
      tokens: [],
      color: "yellow"
    },
    {
      name: "Buckinghamshire Railway",
      abbrev: "B1",
      tokens: [],
      color: "yellow"
    },
    {
      name: "Aylesbury and Buckingham Railway",
      abbrev: "B3",
      tokens: [],
      color: "yellow"
    },
    {
      name: "Reading, Guilford and Reigate Railway",
      abbrev: "K7",
      tokens: [],
      color: "yellow"
    },
    {
      name: "Great Marlow Railway",
      abbrev: "B8",
      tokens: [],
      color: "yellow"
    },
    {
      name: "London and Birmingham Railway",
      abbrev: "B2",
      tokens: [],
      color: "yellow"
    },
    {
      name: "Wycombe Railway",
      abbrev: "B6",
      tokens: [],
      color: "yellow"
    },
    {
      name: "Aylesbury Railway",
      abbrev: "B4",
      tokens: [],
      color: "yellow"
    },
    {
      name: "Chesham Railway",
      abbrev: "B7",
      tokens: [],
      color: "yellow"
    },
    {
      name: "Wokingham and Staines Railway",
      abbrev: "K8",
      tokens: [],
      color: "yellow"
    },
  ],

  trains: [
    {
      name: "L",
      quantity: 13,
      price: "£60",
      color: "yellow",
      info: [
        { note: "Upgrade for £60" },
        { color: "green", note: "Rusted by 4" }
      ]
    },
    {
      name: "2",
      quantity: 14,
      price: "£100",
      color: "yellow",
      info: [
        { color: "green", note: "Rusted by 4" }
      ]
    },
    {
      name: "3",
      quantity: 7,
      price: "£160",
      color: "green",
      info: [
        { color: "brown", note: "Rusted by 6" }
      ]
    },
    {
      name: "4",
      quantity: 4,
      price: "£300",
      color: "green",
      info: [
        { color: "gray", note: "Rusted by 7" }
      ]
    },
    {
      name: "5",
      quantity: 3,
      price: "£500",
      color: "brown",
      info: [
        { note: "Permanent" }
      ]
    },
    {
      name: "6",
      quantity: 2,
      price: "£600",
      color: "brown",
      info: [
        { note: "Permanent" }
      ]
    },
    {
      name: "7",
      quantity: 10,
      price: "£750",
      color: "gray",
      info: [
        { note: "Permanent" }
      ]
    },
    {
      name: "E",
      quantity: 10,
      price: "£1000",
      color: "gray",
      info: [
        { note: "Permanent. Does not use track." }
      ]
    }
  ],

  privates: [
    {
      name: "Swinford Toll Bridge",
      price: "£20",
      revenue: "£5",
      description: "Retire this company to receive a discount of £40 when you next build a bridge this turn."
    },
    {
      name: "Horspath Engineering",
      price: "£20",
      revenue: "£5",
      description: "Retire this company to receive a discount of £40 when you next build a cutting this turn."
    },
    {
      name: "Sonning Engineering",
      price: "£20",
      revenue: "£5",
      description: "Retire this company to receive a discount of £40 when you next build a cutting this turn."
    },
    {
      name: "Brunel Engineering",
      price: "£20",
      revenue: "£5",
      description: "Retire this company to take an additional Build Track action this round. (This may be before or after any other build actions.)"
    },
    {
      name: "Clark Engineering",
      price: "£20",
      revenue: "£5",
      description: "Retire this company to take an additional Build Track action this round. (This may be before or after any other build actions.)"
    },
    {
      name: "Cowley Engineering",
      price: "£40",
      revenue: "£10",
      description: "Retire this company to take an additional Upgrade Track action this round. (This may be before or after any other build actions.)"
    },
    {
      name: "Chester Village",
      price: "£50",
      revenue: "£10",
      description: "When acquired, place the Chester Village token on a vacant track segment to which you can trace a route on a hex that already contains a town. Chester Village earns £10/20/30/50 and counts as a town."
    },
    {
      name: "Merton St. Construction",
      price: "£40",
      revenue: "£10",
      description: "Retire this company to move a town to a vacant track segment on the same tile. You must be able to trace a route to both locations."
    },
    {
      name: "Beeching Accountancy",
      price: "£40",
      revenue: "£10",
      description: "Retire this company to remove a town from the map. You must be able to trace a route to the town. You may not select the home town of a Minor Company nor the Chester Village token."
    },
    {
      name: "Christ Church Engineering",
      price: "£50",
      revenue: "£0",
      description: "Retire this company to replace a basic city tile with an equivalent major city tile. This counts as your Upgrade Track action for the turn. Remove the Mine token, if present there."
    },
    {
      name: "Scott Engineering",
      price: "£50",
      revenue: "£0",
      description: "Retire this company to replace a basic city tile with an equivalent major city tile. This counts as your Upgrade Track action for the turn. Remove the Mine token, if present there."
    },
    {
      name: "Hudson Accountancy",
      price: "£40",
      revenue: "£10",
      description: "After calculating revenue, you may retire this company to add any multiple of £10 from your treasury to this turn’s revenue. (You may not add more cash than is available at that time.)"
    },
    {
      name: "Ironstone Mining Company",
      price: "£50",
      revenue: "£0",
      description: "When acquired, place the Mine token on a basic city to which you can trace a route. Your trains earn an additional £10 when stopping at the city with the Mine token."
    },
    {
      name: "Parkway Construction",
      price: "£40",
      revenue: "£10",
      description: "When acquired, place the Bypass token on a city. Your trains may ignore the city with the Bypass token when choosing a route. (It does not count as a stop and generates no revenue.)"
    },
    {
      name: "Swindon Works",
      price: "£40",
      revenue: "£10",
      description: "Company revenue of £0/20/40/60."
    },
    {
      name: "Park End Construction",
      price: "£40",
      revenue: "£10",
      description: "Retire this company to receive a discount of £50 when you next place a station token this turn."
    },
  ],

  phases: [
    {
      name: "3",
      limit: "4",
      number: "7",
      tiles: "green",
      notes: "Minor companies can merge into Majors"
    },
    {
      name: "4",
      rust: "L, 2",
      limit: "3",
      number: "4",
      tiles: "green"
    },
    {
      name: "5",
      limit: "3",
      number: "3",
      tiles: "brown",
      notes: "Majors may split shares"
    },
    {
      name: "6",
      limit: "2",
      number: "2",
      rust: "3",
      tiles: "brown",
      notes: "E-trains available"
    },
    {
      name: "7/E",
      limit: "1 or 2",
      number: "∞",
      rust: "4",
      tiles: "gray"
    }
  ],

  minorPhases: [
    {
      name: "1",
      limit: "2",
      number: "14",
      tiles: "yellow",
      notes: "Only start at £50"
    },
    {
      name: "2",
      limit: "2",
      number: "14",
      tiles: "yellow",
      notes: "May acquire Privates"
    },
    {
      name: "3",
      limit: "1",
      number: "7",
      tiles: "green",
      notes: "May merge or be incorporated"
    },
    {
      name: "4",
      rust: "L,2",
      limit: "1",
      number: "4",
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
      rust: "3",
      tiles: "brown",
      notes: "E-trains available"
    },
    {
      name: "7/E",
      limit: "0",
      number: "∞",
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
      name: "SR",
      color: "gray"
    },
    {
      name: "OR1",
      color: "yellow"
    },
    {
      name: "OR2",
      color: "yellow"
    },
  ],

  turns: [
    {
      name: "Stock Round",
      steps: [
        "Sell any number of shares",
        "Buy one certificate",
      ],
      ordered: true
    },
    {
      name: "Operating Round",
      steps: [
        "Buy or sell shares",
        "Acquire private companies",
        "Build or upgrade track",
        "Place one station token",
        "Run trains",
        "Pay or withhold dividends",
        "Buy trains",
        "Merge, incorporate, or split"
      ],
      ordered: true
    }
  ],

  stock: {
    type: "1Diag",
    movement: {
      up: ["Fully owned"],
      down: ["Shares in bank"],
      left: ["Withheld revenue"],
      right: ["Paid dividends"]
    },
    market: [
      { label: "0", legend: 0 },
      15,
      23,
      30,
      36,
      41,
      { label: 45, legend: 1 },
      { label: 48, legend: 1 },
      { label: 50, legend: 1 },
      { label: 53, legend: 1 },
      { label: 57, legend: 1 },
      { label: 62, legend: 1 },
      { label: 68, legend: 1 },
      { label: 75, legend: 1 },
      { label: 83, legend: 2 },
      { label: 92, legend: 2 },
      { label: 102, legend: 2 },
      { label: 113, legend: 2 },
      { label: 125, legend: 2 },
      { label: 140, legend: 2 },
      { label: 155, legend: 2 },
      170,
      185,
      200,
      220,
      240,
      260,
      280,
      300,
      325,
      350,
      375,
      400,
      430,
      460,
      490,
      520,
      560,
      600,
      640,
      680,
      780,
      830,
      880,
      940,
      { label: 1000, legend: 3 }
    ],
    legend: [
      {
        color: "black",
        description: "Close company",
        icon: "certificate"
      },
      {
        color: "yellow",
        description: "Initial price",
        icon: "money-bill-wave"
      },
      {
        color: "green",
        description: "Initial price from Phase 3",
        icon: "money-bill-wave"
      },
      {
        color: "water",
        description: "Game end",
        icon: "flag-checkered"
      }
    ]
  },

  tiles: {
    "5": 6,
    "6": 6,
    "57": 6,
    "7": 10,
    "8": 20,
    "9": 20,
    "14": 4,
    "15": 4,
    "619": 4,
    "80": 3,
    "81": 3,
    "82": 6,
    "83": 6,
    "H14": 1,
    "H15": 1,
    "H619": 1,
    "544": 3,
    "545": 3,
    "546": 3,
    "611": 4,
    "H611": 2,
    "455": 2,
    "H455": 1,
    "60": 2,
    "O1": 1,
    "O2": 1,
    "O3": 1,
    "O4": 1,
    "O5": 1,
    "O6": 1,
    "O7": 1,
    "O8": 1,
    "O9": 1,
    "O10": 1
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
            { color: "yellow", cost: "20" },
            { color: "green", cost: "30" },
            { color: "brown", cost: "40" },
            { color: "gray", cost: "50" }
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
              { label: "ChR", color: "cyan" }
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
            { color: "yellow", cost: "30" },
            { color: "green", cost: "40" },
            { color: "brown", cost: "40" },
            { color: "gray", cost: "50" }
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
            { color: "yellow", cost: "30" },
            { color: "green", cost: "40" },
            { color: "brown", cost: "40" },
            { color: "gray", cost: "50" },
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
            { color: "yellow", cost: "30" },
            { color: "green", cost: "40" },
            { color: "brown", cost: "40" },
            { color: "gray", cost: "50" },
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
            { color: "yellow", cost: "20" },
            { color: "green", cost: "30" },
            { color: "brown", cost: "40" },
            { color: "gray", cost: "50" },
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
            { color: "yellow", cost: "40" },
            { color: "green", cost: "50" },
            { color: "brown", cost: "60" },
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
            { color: "yellow", cost: "40" },
            { color: "green", cost: "50" },
            { color: "brown", cost: "60" },
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
            { color: "yellow", cost: "20" },
            { color: "green", cost: "30" },
            { color: "brown", cost: "40" },
            { color: "gray", cost: "50" },
          ]
        },
        offBoardTrack: [
          { side: 2 }
        ],
        border: [
          { side: 2, color: "black" }
        ],
        cities: [
          {
            angle: 0,
            percent: 0.8,
            companies: [
              { label: "LSWR", color: "orange" }
            ]
          }
        ],
        hexes: ["O16"]
      },
      {
        color: "offboard",
        labels : [
          { label: "L", angle: 120, percent: 0.75 }
        ],
        offBoardRevenue: {
          name: { name: "LONDON" },
          revenues: [
            { color: "yellow", cost: "30" },
            { color: "green", cost: "40" },
            { color: "brown", cost: "50" },
            { color: "gray", cost: "60" },
          ]
        },
        cities: [
          {
            angle: 300,
            percent: 0.8,
            companies: [
              { label: "GWR", color: "green" }
            ]
          },
          {
            angle: 240,
            percent: 0.8,
            companies: [
              { label: "GCR", color: "blue" }
            ]
          },
          {
            angle: 180,
            percent: 0.8,
            companies: [
              { label: "ChR", color: "cyan" }
            ]
          },
          {
            angle: 0,
            percent: 0.8,
            companies: [
              { label: "MetR", color: "purple" }
            ]
          }
        ],
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
          },
          {
            angle: 60,
            percent: 0.8,
            companies: [
              { label: "MetR", color: "purple" }
            ]
          },
          {
            angle: 300,
            percent: 0.8,
            companies: [
              { label: "LSWR", color: "orange" }
            ]
          },
        ],
        borders: [
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
          { side: 4, color: "land" }
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
          { side: 5, color: "water" }
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
          { side: 1, color: "water" }
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
          { side: 5, color: "water" },
          { side: 6, color: "water" }
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
          { side: 3, color: "land" }
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
          { side: 3, color: "land" }
        ],
        hexes: ["H7"]
      },
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Hungerford" } }
        ],
        borders: [
          { side: 3, color: "land" }
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
          { side: 3, color: "water" },
          { side: 4, color: "water" }
        ],
        hexes: ["F13"]
      },
      {
        color: "oxon",
        centerTowns: [
          { name: { name: "Islip" } }
        ],
        borders: [
          { side: 5, color: "land" }
        ],
        hexes: ["G14"]
      },
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Abingdon" } }
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
          { side: 6, color: "land" }
        ],
        hexes: ["H15"]
      },
      {
        color: "oxon",
        terrain: [ { type: "river", cost: "£30" } ],
         borders: [
          { side: 3, color: "land" },
        ],
        hexes: ["I14"]
      },
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Wallingford" } }
        ],
        borders: [
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
          { side: 4, color: "water" }
        ],
        hexes: ["L19"]
      },
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Wokingham" } }
        ],
        borders: [
          { side: 2, color: "land" }
        ],
        hexes: ["N21"]
      },
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Windsor" } }
        ],
        borders: [
          { side: 3, color: "water" },
          { side: 1, color: "land" },
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
        borders: [
          { side: 2, color: "land" },
          { side: 3, color: "land" },
          { side: 1, color: "water" },
          { side: 5, color: "water" },
          { side: 6, color: "water" }
        ],
       hexes: ["L25"]
      },
      {
        color: "berks",
        centerTowns: [
          { name: { name: "Maidenhead" } }
        ],
        borders: [
          { side: 2, color: "water" },
          { side: 3, color: "water" },
          { side: 4, color: "water" }
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
          { side: 6, color: "water" }
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
        hexes: ["B19", "C22"]
      },
      {
        color: "oxon",
        terrain: [{ type: "track", cost: "£40" }],
        hexes: ["D5"]
      },
      {
        color: "berks",
        terrain: [{ type: "track", cost: "£40" }],
        hexes: ["L3", "L5", "K4", "N5", "O4"]
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
        borders: [
          { side: 2, color: "land" }
        ],
        hexes: ["N7", "N15"]
      },
      {
        color: "bucks",
        borders: [
          { side: 4, color: "land" }
        ],
        hexes: ["C16", "F17"]
      },
      {
        color: "oxon",
        borders: [
          { side: 4, color: "land" }
        ],
        hexes: ["E6"]
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
        hexes: ["C18", "F23", "I26"]
      },
      {
        color: "oxon",
        borders: [
          { side: 1, color: "water" },
          { side: 6, color: "water" }
        ],
        hexes: ["E14"]
      },
      {
        color: "berks",
        borders: [
          { side: 2, color: "land" },
          { side: 3, color: "land" }
        ],
        hexes: ["N13"]
      },
      {
        color: "oxon",
        borders: [
          { side: 2, color: "land" },
          { side: 4, color: "water" }
        ],
        hexes: ["E12"]
      },
      {
        color: "oxon",
        borders: [
          { side: 3, color: "land" },
          { side: 5, color: "land" }
        ],
        hexes: ["D9"]
      },
      {
        color: "bucks",
        borders: [
          { side: 3, color: "land" },
          { side: 4, color: "land" }
        ],
        hexes: ["G18"]
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
        color: "berks",
        borders: [
          { side: 4, color: "land" },
          { side: 5, color: "land" }
        ],
        hexes: ["M20"]
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
        hexes: ["C10", "F7"]
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
        hexes: ["M16"]
      },
      {
        color: "berks",
        borders: [
          { side: 1, color: "land" },
          { side: 3, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["M10"]
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
        color: "bucks",
        borders: [
          { side: 2, color: "land" },
          { side: 3, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["G22"]
      },
      {
        color: "berks",
        borders: [
          { side: 2, color: "land" },
          { side: 4, color: "land" },
          { side: 5, color: "land" }
        ],
        hexes: ["M12"]
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
        color: "berks",
        borders: [
          { side: 3, color: "land" },
          { side: 4, color: "land" },
          { side: 5, color: "land" }
        ],
        hexes: ["M6"]
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
        color: "bucks",
        borders: [
          { side: 1, color: "land" },
          { side: 3, color: "land" },
          { side: 4, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["F19", "I24"]
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
      {
        color: "bucks",
        borders: [
          { side: 1, color: "land" },
          { side: 2, color: "land" },
          { side: 3, color: "land" },
          { side: 5, color: "water" }
        ],
        hexes: ["K20"]
      },
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
          { side: 2, color: "land" },
          { side: 3, color: "land" },
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["J21"]
      },
// 5 lands
      {
        color: "oxon",
        borders: [
          { side: 1, color: "land" },
          { side: 2, color: "land" },
          { side: 3, color: "land" },
          { side: 5, color: "land" },
          { side: 6, color: "land" }
        ],
        hexes: ["J19"]
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
        hexes: ["K16", "K18"]
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
        hexes: ["F21", "I22"]
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
        hexes: ["L11", "M14"]
      },
// rivers
      {
        color: "berks",
        borders: [
          { side: 2, color: "water" }
        ],
        hexes: ["J9"]
      },
      {
        color: "berks",
        borders: [
          { side: 1, color: "water" },
          { side: 2, color: "water" },
          { side: 3, color: "water" }
        ],
        hexes: ["L21"]
      },
      {
        color: "berks",
        terrain: [
          { type: "river", cost: "£30" }
        ],
        borders: [
          { side: 1,  color: "water" },
          { side: 2,  color: "water" }
        ],
        hexes: ["I10"]
      },
      {
        color: "oxon",
        terrain: [ { type: "river", cost: "£30" } ],
        borders: [
          { side: 4,  color: "water" },
          { side: 5,  color: "water" },
          { side: 6,  color: "water" }
        ],
        hexes: ["I8"]
      },
// Land and sea
      {
        color: "oxon",
        borders: [
          { side: 1, color: "land" },
          { side: 3, color: "land" },
          { side: 5, color: "water" }
        ],
        hexes: ["G10"]
      },
// Terrain costs
      {
        color: "oxon",
        terrain: [ { type: "river", cost: "£30" } ],
        borders: [
          { side: 6, color: "land" }
        ],
        hexes: ["G16"]
      },
      {
        color: "berks",
        terrain: [ { type: "river", cost: "£30" } ],
        hexes: ["N17"]
      },
      {
        color: "berks",
        terrain: [
          { type: "river", cost: "£60" }
        ],
        borders: [
          { side: 1,  color: "water" },
          { side: 2,  color: "water" },
          { side: 3,  color: "water" }
        ],
        hexes: ["H11"]
      },
      {
        color: "oxon",
        terrain: [ { type: "river", cost: "£30" } ],
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
        hexes: ["D7", "D23", "E4", "E24", "F25", "G26",
                "O6", "O8", "O10",
                "O12", "O14", "O18", "O20", "O22", "O24"]
      },
      {
        color: "oxon",
        hexes: ["B11", "H17"]
      },
      {
        color: "berks",
        hexes: ["J11", "N19", "N25"]
      },
      {
        color: "bucks",
        hexes: ["B13", "C20", "E16"]
      }
    ]
  }
};

export default game;