const game = {
  tokens: ["Round"],
  companies: [
    {
      name: "Pennsylvania",
      abbrev: "PRR",
      tokens: ["Free", "$40", "$100", "$100", "$100"],
      color: "rgb(50,118,63)",
      shares: [{
        quantity: 1,
        label: "President Share",
        percent: 20,
        shares: 2
      },{
        quantity: 8,
        percent: 10,
        shares: 1
      }]
    },
    {
      name: "New York Central",
      abbrev: "NYC",
      tokens: ["Free", "$40", "$100", "$100", "$100"],
      color: "rgb(0,0,0)",
      shares: [{
        quantity: 1,
        label: "President Share",
        percent: 20,
        shares: 2
      },{
        quantity: 8,
        percent: 10,
        shares: 1
      }]
    },
    {
      name: "Canadian Pacific",
      abbrev: "CPR",
      tokens: ["Free", "$40", "$100", "$100", "$100"],
      color: "rgb(209,35,42)",
      shares: [{
        quantity: 1,
        label: "President Share",
        percent: 20,
        shares: 2
      },{
        quantity: 8,
        percent: 10,
        shares: 1
      }]
    },
    {
      name: "Baltimore & Ohio",
      abbrev: "B&O",
      tokens: ["Free", "$40", "$100", "$100"],
      color: "rgb(2,90,170)",
      shares: [{
        quantity: 1,
        label: "President Share",
        percent: 20,
        shares: 2
      },{
        quantity: 8,
        percent: 10,
        shares: 1
      }]
    },
    {
      name: "Chesapeake & Ohio",
      abbrev: "C&O",
      tokens: ["Free", "$40", "$100", "$100"],
      color: "rgb(141,215,248)",
      shares: [{
        quantity: 1,
        label: "President Share",
        percent: 20,
        shares: 2
      },{
        quantity: 8,
        percent: 10,
        shares: 1
      }]
    },
    {
      name: "Erie",
      abbrev: "Erie",
      tokens: ["Free", "$40", "$100", "$100"],
      color: "rgb(255,230,0)",
      shares: [{
        quantity: 1,
        label: "President Share",
        percent: 20,
        shares: 2
      },{
        quantity: 8,
        percent: 10,
        shares: 1
      }]
    },
    {
      name: "New York, New Haven & Hartford",
      abbrev: "NYNH",
      tokens: ["Free", "$40", "$100"],
      color: "rgb(245,129,33)",
      shares: [{
        quantity: 1,
        label: "President Share",
        percent: 20,
        shares: 2
      },{
        quantity: 8,
        percent: 10,
        shares: 1
      }]
    },
    {
      name: "Boston & Maine",
      abbrev: "B&M",
      tokens: ["Free", "$40", "$100"],
      color: "rgb(96,23,44)",
      shares: [{
        quantity: 1,
        label: "President Share",
        percent: 20,
        shares: 2
      },{
        quantity: 8,
        percent: 10,
        shares: 1
      }]
    }
  ],

  trains: [
    {
      name: "2",
      quantity: 6,
      price: "$80",
      color: "yellow",
      info: [{
        color: "green",
        note: "Rusted by 4"
      }]
    },
    {
      name: "3",
      quantity: 5,
      price: "$180",
      color: "green",
      info: [{
        color: "brown",
        note: "Rusted by 6"
      }]
    },
    {
      name: "4",
      quantity: 4,
      price: "$300",
      color: "green",
      info: [{
        color: "brown",
        note: "Rusted by D"
      }]
    },
    {
      name: "5",
      quantity: 3,
      price: "$450",
      color: "brown",
      info: [{
        color: "yellow",
        note: "Permanent"
      }]
    },
    {
      name: "6",
      quantity: 2,
      price: "$630",
      color: "brown",
      info: [{
        color: "yellow",
        note: "Permanent"
      }]
    },
    {
      name: "D",
      quantity: 6,
      price: "$800 / $1000",
      color: "brown",
      info: [{
        color: "yellow",
        note: "Permanent"
      }]
    }
  ],

  privates: [
    {
      name: "Schuylkill Valley",
      price: "$20",
      revenue: "$5",
      description: ""
    },
    {
      name: "Champlain & St.Lawrence",
      price: "$40",
      revenue: "$10",
      description:
        "A Corporation owning the Champlain & St. Lawrence may lay a tile on the C&SL’s hexagon even if this hexagon is not connected to the Corporation’s Railhead. This free tile placement is in addition to the Corporation’s normal tile placement – for this turn only the Corporation may play two tiles. The tile played on the C&SL hexagon does not have to connect to any existing adjacent track."
    },
    {
      name: "Delaware & Hudson",
      price: "$70",
      revenue: "$15",
      description:
        "A Corporation owning the Delaware & Hudson may establish a Railhead on the D&H’s hexagon by laying a station tile and a token. The station does NOT have to be connected to the remainder of the Corporation’s route. The tile layed is the owning Railroad’s one tile placement per turn. Placing the token is not required, but if placed in a future turn, it must be paid for. Removal of the mountain costs $120 as usual but there is no charge for laying the token. (Other Corporations may lay a tile here subject to the ordinary rules.)"
    },
    {
      name: "Mohawk & Hudson",
      price: "$110",
      revenue: "$20",
      description:
        "A player owning the Mohawk & Hudson may exchange it for a 10% share of NYC provided he does not already hold 60% of the NYC stock and there is NYC stock available in the Bank or the Pool. The exchange may be made during the player’s turn of a Stock Round or between the turns of other players or Railroads in either Stock or Operating Rounds. This action closes the M&H."
    },
    {
      name: "Camden & Amboy",
      price: "$160",
      revenue: "$25",
      description:
        "The initial purchaser of the Camden and Amboy immediately receives a 10% share of PRR stock without further payment. This action does NOT close the Camden & Amboy. The PRR Corporation will not be running at this point, but the stock may be retained or sold subject to the ordinary rules of the game (see 8.1, last paragraph)."
    },
    {
      name: "Baltimore & Ohio",
      price: "$220",
      revenue: "$30",
      description:
        "The owner of the Baltimore & Ohio Private Company immediately receives the President’s Certificate of the B&O Railroad without further payment (see 8.1). The B&O Private Company may NOT be sold to any Corporation, and does not change hands if the owning player loses the Presidency of the B&O. When the B&O Corporation purchases its first train the Private Company is closed down."
    }
  ],

  phases: [{
    name: "2",
    limit: "4",
    number: "6",
    tiles: "yellow"
  },{
    name: "3",
    limit: "4",
    number: "5",
    tiles: "green",
    notes: "Private companies can be bought"
  },{
    name: "4",
    rust: "2",
    limit: "3",
    number: "4",
    tiles: "green"
  },{
    name: "5",
    limit: "2",
    number: "3",
    tiles: "brown",
    notes: "Private companies close"
  },{
    name: "6",
    limit: "2",
    number: "2",
    rust: "3",
    tiles: "brown",
    notes: "D Trains available for purchase"
  },{
    name: "D",
    limit: "2",
    number: "6",
    rust: "4",
    tiles: "brown"
  }],

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
  }
};

export default game;
