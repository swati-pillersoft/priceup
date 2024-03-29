var refpaceDatePicker = $("#refpaceDatePicker")
  .datepicker({
    autoclose: true,
    format: "dd MM yyyy",
    endDate: new Date(),
    enableOnReadonly: false,
  })
  .datepicker("setDate", "now");

$("#monthpaceDatePicker")
  .datepicker({
    autoclose: true,
    // format: "M, dd yyyy",
    // endDate: new Date(),
    format: "MM/yyyy",
    startView: "months",
    minViewMode: "months",
    enableOnReadonly: false,
  })
  .datepicker("setDate", "now");

$("#refpacePrevDate").click(function () {
  $currentDate = $("#refpaceDatePicker").data("datepicker").viewDate;
  $momentCurrent = moment($currentDate);
  $prevDate = moment(
    $("#refpaceDatePicker").data("datepicker").viewDate
  ).subtract(1, "days");
  $("#refpaceDatePicker").datepicker("update", $prevDate.format("DD MMM yyyy"));
});

$("#refpaceNextDate").click(function () {
  $currentDate = $("#refpaceDatePicker").data("datepicker").viewDate;
  $momentCurrent = moment($currentDate);
  // console.log($momentCurrent.isSame());
  if ($momentCurrent.isBefore(moment(), "day")) {
    $nextDate = moment($("#refpaceDatePicker").data("datepicker").viewDate).add(
      1,
      "days"
    );
    // console.log($nextDate.format("DD MMM yyyy"));
    $("#refpaceDatePicker").datepicker(
      "update",
      $nextDate.format("DD MMM yyyy")
    );
  }
});

$("#refpacePrevMonth").click(function () {
  $currentDate = $("#monthpaceDatePicker").data("datepicker").viewDate;
  // console.log($currentDate);

  $momentCurrentMonth = moment($currentDate);
  // console.log($momentCurrentMonth);
  $prevMonth = moment($currentDate).subtract(1, "months");
  $("#monthpaceDatePicker").datepicker(
    "update",
    $prevMonth.format("MMMM/yyyy")
  );
});

$("#refpaceNextMonth").click(function () {
  $currentDate = $("#monthpaceDatePicker").data("datepicker").viewDate;
  // console.log($currentDate);
  // if (moment($currentDate).isBefore(moment(), "months")) {
  //   $nextDate = moment($currentDate).add(1, "months");
  //   // console.log($nextDate.format("DD MMM yyyy"));
  //   $("#monthpaceDatePicker").datepicker(
  //     "update",
  //     $nextDate.format("MMMM/yyyy")
  //   );
  // }

  $nextDate = moment($currentDate).add(1, "months");
  // console.log($nextDate.format("DD MMM yyyy"));
  $("#monthpaceDatePicker").datepicker("update", $nextDate.format("MMMM/yyyy"));
});

// charts
var paceChart1C3 = c3.generate({
  bindto: "#paceChart1C3",
  data: {
    x: "x",
    columns: [
      [
        "x",
        "2021-10-01",
        "2021-10-02",
        "2021-10-03",
        "2021-10-04",
        "2021-10-05",
        "2021-10-06",
        "2021-10-07",
        "2021-10-08",
        "2021-10-09",
        "2021-10-10",
        "2021-10-11",
        "2021-10-12",
        "2021-10-13",
        "2021-10-14",
        "2021-10-15",
        "2021-10-16",
        "2021-10-17",
        "2021-10-18",
        "2021-10-19",
        "2021-10-20",
        "2021-10-21",
        "2021-10-22",
        "2021-10-23",
        "2021-10-24",
        "2021-10-25",
        "2021-10-26",
        "2021-10-27",
        "2021-10-28",
        "2021-10-29",
        "2021-10-30",
        "2021-10-31",
        "2021-11-01",
        "2021-11-02",
        "2021-11-03",
        "2021-11-04",
        "2021-11-05",
        "2021-11-06",
        "2021-11-07",
        "2021-11-08",
        "2021-11-09",
        "2021-11-10",
        "2021-11-11",
        "2021-11-12",
        "2021-11-13",
        "2021-11-14",
        "2021-11-15",
        "2021-11-16",
        "2021-11-17",
        "2021-11-18",
        "2021-11-19",
        "2021-11-20",
        "2021-11-21",
        "2021-11-22",
        "2021-11-23",
        "2021-11-24",
        "2021-11-25",
        "2021-11-26",
        "2021-11-27",
        "2021-11-28",
        "2021-11-29",
        "2021-11-30",
        "2021-12-01",
        "2021-12-02",
        "2021-12-03",
        "2021-12-04",
        "2021-12-05",
        "2021-12-06",
        "2021-12-07",
        "2021-12-08",
        "2021-12-09",
        "2021-12-10",
        "2021-12-11",
        "2021-12-12",
        "2021-12-13",
        "2021-12-14",
        "2021-12-15",
        "2021-12-16",
        "2021-12-17",
        "2021-12-18",
        "2021-12-19",
        "2021-12-20",
        "2021-12-21",
        "2021-12-22",
        "2021-12-23",
        "2021-12-24",
        "2021-12-25",
        "2021-12-26",
        "2021-12-27",
        "2021-12-28",
        "2021-12-29",
        "2021-12-30",
        "2021-12-31",
        "2022-01-01",
        "2022-01-02",
        "2022-01-03",
        "2022-01-04",
        "2022-01-05",
        "2022-01-06",
        "2022-01-07",
        "2022-01-08",
        "2022-01-09",
        "2022-01-10",
        "2022-01-11",
        "2022-01-12",
        "2022-01-13",
        "2022-01-14",
        "2022-01-15",
        "2022-01-16",
        "2022-01-17",
        "2022-01-18",
        "2022-01-19",
        "2022-01-20",
        "2022-01-21",
        "2022-01-22",
        "2022-01-23",
        "2022-01-24",
        "2022-01-25",
        "2022-01-26",
        "2022-01-27",
        "2022-01-28",
        "2022-01-29",
        "2022-01-30",
        "2022-02-01",
        "2022-02-02",
        "2022-02-03",
        "2022-02-04",
        "2022-02-05",
        "2022-02-06",
        "2022-02-07",
        "2022-02-08",
        "2022-02-09",
        "2022-02-10",
        "2022-02-11",
        "2022-02-12",
        "2022-02-13",
        "2022-02-14",
        "2022-02-15",
        "2022-02-16",
        "2022-02-17",
        "2022-02-18",
        "2022-02-19",
        "2022-02-20",
        "2022-02-21",
        "2022-02-22",
        "2022-02-23",
        "2022-02-24",
        "2022-02-25",
        "2022-02-26",
        "2022-02-27",
        "2022-02-28",
        "2022-03-01",
        "2022-03-02",
        "2022-03-03",
        "2022-03-04",
        "2022-03-05",
        "2022-03-06",
        "2022-03-07",
        "2022-03-08",
        "2022-03-09",
        "2022-03-10",
        "2022-03-11",
        "2022-03-12",
        "2022-03-13",
        "2022-03-14",
        "2022-03-15",
        "2022-03-16",
        "2022-03-17",
        "2022-03-18",
        "2022-03-19",
        "2022-03-20",
        "2022-03-21",
        "2022-03-22",
        "2022-03-23",
        "2022-03-24",
        "2022-03-25",
        "2022-03-26",
        "2022-03-27",
        "2022-03-28",
        "2022-03-29",
        "2022-03-30",
        "2022-03-31",
        "2022-04-01",
        "2022-04-02",
        "2022-04-03",
        "2022-04-04",
        "2022-04-05",
        "2022-04-06",
        "2022-04-07",
        "2022-04-08",
        "2022-04-09",
        "2022-04-10",
        "2022-04-11",
        "2022-04-12",
        "2022-04-13",
        "2022-04-14",
        "2022-04-15",
        "2022-04-16",
        "2022-04-17",
        "2022-04-18",
        "2022-04-19",
        "2022-04-20",
        "2022-04-21",
        "2022-04-22",
        "2022-04-23",
        "2022-04-24",
        "2022-04-25",
        "2022-04-26",
        "2022-04-27",
        "2022-04-28",
        "2022-04-29",
        "2022-04-30",
        "2022-05-01",
        "2022-05-02",
        "2022-05-03",
        "2022-05-04",
        "2022-05-05",
        "2022-05-06",
        "2022-05-07",
        "2022-05-08",
        "2022-05-09",
        "2022-05-10",
        "2022-05-11",
        "2022-05-12",
        "2022-05-13",
        "2022-05-14",
        "2022-05-15",
        "2022-05-16",
        "2022-05-17",
        "2022-05-18",
        "2022-05-19",
        "2022-05-20",
        "2022-05-21",
        "2022-05-22",
        "2022-05-23",
        "2022-05-24",
        "2022-05-25",
        "2022-05-26",
        "2022-05-27",
        "2022-05-28",
        "2022-05-29",
        "2022-05-30",
        "2022-05-31",
        "2022-06-01",
        "2022-06-02",
        "2022-06-03",
        "2022-06-04",
        "2022-06-05",
        "2022-06-06",
        "2022-06-07",
        "2022-06-08",
        "2022-06-09",
        "2022-06-10",
        "2022-06-11",
        "2022-06-12",
        "2022-06-13",
        "2022-06-14",
        "2022-06-15",
        "2022-06-16",
        "2022-06-17",
        "2022-06-18",
        "2022-06-19",
        "2022-06-20",
        "2022-06-21",
        "2022-06-22",
        "2022-06-23",
        "2022-06-24",
        "2022-06-25",
        "2022-06-26",
        "2022-06-27",
        "2022-06-28",
        "2022-06-29",
        "2022-06-30",
      ],

      [
        "Revenue Pace",
        0,
        5.33,
        6.55,
        6.56,
        7.59,
        8.7,
        8.95,
        9.33,
        10.67,
        15,
        16.33,
        18.67,
        30,
        35.33,
        35.67,
        36.03,
        40.33,
        42.67,
        45.76,
        47.96,
        49.02,
        50.12,
        52.33,
        55.54,
        57.98,
        58.33,
        59.67,
        60.9,
        61.98,
        62.23,
        65.67,
        80.98,
        90.67,
        95.02,
        99.56,
        102.78,
        110.98,
        115.02,
        120.54,
        122.98,
        124.12,
        126.67,
        127,
        128.33,
        130.67,
        132.78,
        133.89,
        133.98,
        134.12,
        135.23,
        136.67,
        140.89,
        142.03,
        143.37,
        144.02,
        144.33,
        144.67,
        144.82,
        146.99,
        148.27,
        149.02,
        150.33,
        152.47,
        155.65,
        157.33,
        179.67,
        180,
        180.33,
        181.67,
        185.8,
        185.89,
        186.98,
        187,
        187.33,
        188.67,
        190,
        192.33,
        195.67,
        197,
        185.33,
        184.67,
        184,
        183.33,
        183.22,
        182.03,
        181.45,
        180.97,
        180.12,
        175.33,
        174.67,
        173.89,
        170.99,
        165.67,
        156.78,
        154.33,
        153.67,
        153,
        152.33,
        151.67,
        151,
        148.33,
        146.67,
        146,
        145.33,
        144.67,
        144,
        143.33,
        142.67,
        142,
        141.33,
        140.67,
        135,
        130.21,
        128.92,
        127.99,
        126.85,
        125.91,
        125,
        124.33,
        121.67,
        121,
        120.33,
        119.67,
        119,
        120.33,
        120.67,
        121,
        122.33,
        122.67,
        123,
        123.33,
        124.67,
        125,
        126.33,
        126.67,
        127,
        127.33,
        128.67,
        129,
        130.33,
        135.67,
        137,
        138.33,
        138.67,
        139,
        140.33,
        142.43,
        143.68,
        144.89,
        145.24,
        150.26,
        152.78,
        153.63,
        154,
        160.33,
        162.67,
        163,
        164.33,
        165.67,
        168,
        170.33,
        175.65,
        176.89,
        180.99,
        182.52,
        185.94,
        187.8,
        190.95,
        192,
        195.15,
        199.37,
        200.85,
        210.98,
        215.67,
        218,
        220.33,
        221.67,
        224,
        230.33,
        235.67,
        240,
        243.33,
        244.67,
        245,
        248.33,
        250.67,
        251,
        252.33,
        254.67,
        256.02,
        258.33,
        260.67,
        265.95,
        267.02,
        269.61,
        270.03,
        272.31,
        273.78,
        275,
        276.43,
        278.77,
        280,
        282.33,
        283.67,
        284,
        285.33,
        286.67,
        290,
        291.33,
        292.67,
        295,
        297,
        298.23,
        300.45,
        310.9,
        312.22,
        313.12,
        315.11,
        318.09,
        320.99,
        322.01,
        323.04,
        334.01,
        340.99,
        345.09,
        350.19,
        355.74,
        360.74,
        362.74,
        365.84,
        366.9,
        370.1,
        372.9,
        373.45,
        375.15,
        376.67,
        378.12,
        380.98,
        382.29,
        390.13,
        392.13,
        393.73,
        394.8,
        396.24,
        398.14,
        400.24,
        402.69,
        410.9,
        411.12,
        412.67,
        413.12,
        413.45,
        414.19,
        415.22,
        416.57,
        415.91,
        418.01,
        420.46,
        421.73,
        422.13,
        423.21,
        424.43,
        425.56,
        430.96,
        435.99,
        440.23,
        445.42,
        450.45,
        448.67,
        440.78,
        430.93,
        445.23,
      ],
    ],
    types: {
      "Revenue Pace": "line",
    },
    colors: {
      "Revenue Pace": "#a7e9ef",
    },
  },
  axis: {
    x: {
      type: "timeseries",

      tick: {
        count: 272,
        format: "%m/%d",
      },
    },
    y: {
      tick: {
        format: function (d) {
          return "€ " + d;
        },
        //                format: function (d) { return "$" + d; }
      },
    },
  },
  point: {
    show: false,
  },
});
// const paceChart1Ctx = document.getElementById("paceChart1").getContext("2d");
// const paceChart1 = new Chart(paceChart1Ctx, {
//   type: "line",
//   data: {
//     labels: [
//       "01/04",
//       "05/04",
//       "09/04",
//       "13/04",
//       "17/04",
//       "21/04",
//       "25/04",
//       "29/04",
//     ],
//     datasets: [
//       {
//         label: "Year 2022",
//         backgroundColor: "#A7E9EF",
//         borderDash: [5],
//         lineTension: 0.6,
//         borderColor: "#A7E9EF",
//         fill: false,
//         data: [180000, 190000, 200000, 210000, 250000, 300000, 400000, 550000],
//         pointRadius: 0,
//       },
//       {
//         label: "Year 2021",
//         backgroundColor: "#ECD717",
//         borderDash: [5],
//         lineTension: 0.6,
//         borderColor: "#ECD717",
//         fill: false,
//         data: [260000, 230000, 210000, 200000, 300000, 350000, 400000, 650000],
//         pointRadius: 0,
//       },

//       {
//         label: "Year 2020",
//         backgroundColor: "#CC5252",
//         borderDash: [5],
//         lineTension: 0.6,
//         borderColor: "#CC5252",
//         fill: false,
//         data: [120000, 150000, 130000, 125000, 120000, 130000, 200000, 500000],
//         pointRadius: 0,
//       },
//     ],
//   },
//   options: {
//     responsive: true,

//     legend: {
//       display: true,
//       position: "bottom",
//     },
//     scales: {
//       xAxes: [
//         {
//           display: true,
//           scaleLabel: {
//             display: true,
//             labelString: "Date",
//           },
//           gridLines: {
//             // display: false,
//             drawOnChartArea: false,
//           },
//         },
//       ],
//       yAxes: [
//         {
//           display: true,
//           gridLines: {
//             // display: false,
//             drawOnChartArea: false,
//           },
//           ticks: {
//             // Include a dollar sign in the ticks
//             callback: function (value, index, ticks) {
//               return "€ " + value;
//             },
//           },
//         },
//       ],
//     },
//   },
// });

// pace chart 3
var paceChart3C3 = c3.generate({
  bindto: "#paceChart3C3",
  data: {
    x: "x",
    columns: [
      [
        "x",
        "2021-10-01",
        "2021-10-02",
        "2021-10-03",
        "2021-10-04",
        "2021-10-05",
        "2021-10-06",
        "2021-10-07",
        "2021-10-08",
        "2021-10-09",
        "2021-10-10",
        "2021-10-11",
        "2021-10-12",
        "2021-10-13",
        "2021-10-14",
        "2021-10-15",
        "2021-10-16",
        "2021-10-17",
        "2021-10-18",
        "2021-10-19",
        "2021-10-20",
        "2021-10-21",
        "2021-10-22",
        "2021-10-23",
        "2021-10-24",
        "2021-10-25",
        "2021-10-26",
        "2021-10-27",
        "2021-10-28",
        "2021-10-29",
        "2021-10-30",
        "2021-10-31",
        "2021-11-01",
        "2021-11-02",
        "2021-11-03",
        "2021-11-04",
        "2021-11-05",
        "2021-11-06",
        "2021-11-07",
        "2021-11-08",
        "2021-11-09",
        "2021-11-10",
        "2021-11-11",
        "2021-11-12",
        "2021-11-13",
        "2021-11-14",
        "2021-11-15",
        "2021-11-16",
        "2021-11-17",
        "2021-11-18",
        "2021-11-19",
        "2021-11-20",
        "2021-11-21",
        "2021-11-22",
        "2021-11-23",
        "2021-11-24",
        "2021-11-25",
        "2021-11-26",
        "2021-11-27",
        "2021-11-28",
        "2021-11-29",
        "2021-11-30",
        "2021-12-01",
        "2021-12-02",
        "2021-12-03",
        "2021-12-04",
        "2021-12-05",
        "2021-12-06",
        "2021-12-07",
        "2021-12-08",
        "2021-12-09",
        "2021-12-10",
        "2021-12-11",
        "2021-12-12",
        "2021-12-13",
        "2021-12-14",
        "2021-12-15",
        "2021-12-16",
        "2021-12-17",
        "2021-12-18",
        "2021-12-19",
        "2021-12-20",
        "2021-12-21",
        "2021-12-22",
        "2021-12-23",
        "2021-12-24",
        "2021-12-25",
        "2021-12-26",
        "2021-12-27",
        "2021-12-28",
        "2021-12-29",
        "2021-12-30",
        "2021-12-31",
        "2022-01-01",
        "2022-01-02",
        "2022-01-03",
        "2022-01-04",
        "2022-01-05",
        "2022-01-06",
        "2022-01-07",
        "2022-01-08",
        "2022-01-09",
        "2022-01-10",
        "2022-01-11",
        "2022-01-12",
        "2022-01-13",
        "2022-01-14",
        "2022-01-15",
        "2022-01-16",
        "2022-01-17",
        "2022-01-18",
        "2022-01-19",
        "2022-01-20",
        "2022-01-21",
        "2022-01-22",
        "2022-01-23",
        "2022-01-24",
        "2022-01-25",
        "2022-01-26",
        "2022-01-27",
        "2022-01-28",
        "2022-01-29",
        "2022-01-30",
        "2022-02-01",
        "2022-02-02",
        "2022-02-03",
        "2022-02-04",
        "2022-02-05",
        "2022-02-06",
        "2022-02-07",
        "2022-02-08",
        "2022-02-09",
        "2022-02-10",
        "2022-02-11",
        "2022-02-12",
        "2022-02-13",
        "2022-02-14",
        "2022-02-15",
        "2022-02-16",
        "2022-02-17",
        "2022-02-18",
        "2022-02-19",
        "2022-02-20",
        "2022-02-21",
        "2022-02-22",
        "2022-02-23",
        "2022-02-24",
        "2022-02-25",
        "2022-02-26",
        "2022-02-27",
        "2022-02-28",
        "2022-03-01",
        "2022-03-02",
        "2022-03-03",
        "2022-03-04",
        "2022-03-05",
        "2022-03-06",
        "2022-03-07",
        "2022-03-08",
        "2022-03-09",
        "2022-03-10",
        "2022-03-11",
        "2022-03-12",
        "2022-03-13",
        "2022-03-14",
        "2022-03-15",
        "2022-03-16",
        "2022-03-17",
        "2022-03-18",
        "2022-03-19",
        "2022-03-20",
        "2022-03-21",
        "2022-03-22",
        "2022-03-23",
        "2022-03-24",
        "2022-03-25",
        "2022-03-26",
        "2022-03-27",
        "2022-03-28",
        "2022-03-29",
        "2022-03-30",
        "2022-03-31",
        "2022-04-01",
        "2022-04-02",
        "2022-04-03",
        "2022-04-04",
        "2022-04-05",
        "2022-04-06",
        "2022-04-07",
        "2022-04-08",
        "2022-04-09",
        "2022-04-10",
        "2022-04-11",
        "2022-04-12",
        "2022-04-13",
        "2022-04-14",
        "2022-04-15",
        "2022-04-16",
        "2022-04-17",
        "2022-04-18",
        "2022-04-19",
        "2022-04-20",
        "2022-04-21",
        "2022-04-22",
        "2022-04-23",
        "2022-04-24",
        "2022-04-25",
        "2022-04-26",
        "2022-04-27",
        "2022-04-28",
        "2022-04-29",
        "2022-04-30",
        "2022-05-01",
        "2022-05-02",
        "2022-05-03",
        "2022-05-04",
        "2022-05-05",
        "2022-05-06",
        "2022-05-07",
        "2022-05-08",
        "2022-05-09",
        "2022-05-10",
        "2022-05-11",
        "2022-05-12",
        "2022-05-13",
        "2022-05-14",
        "2022-05-15",
        "2022-05-16",
        "2022-05-17",
        "2022-05-18",
        "2022-05-19",
        "2022-05-20",
        "2022-05-21",
        "2022-05-22",
        "2022-05-23",
        "2022-05-24",
        "2022-05-25",
        "2022-05-26",
        "2022-05-27",
        "2022-05-28",
        "2022-05-29",
        "2022-05-30",
        "2022-05-31",
        "2022-06-01",
        "2022-06-02",
        "2022-06-03",
        "2022-06-04",
        "2022-06-05",
        "2022-06-06",
        "2022-06-07",
        "2022-06-08",
        "2022-06-09",
        "2022-06-10",
        "2022-06-11",
        "2022-06-12",
        "2022-06-13",
        "2022-06-14",
        "2022-06-15",
        "2022-06-16",
        "2022-06-17",
        "2022-06-18",
        "2022-06-19",
        "2022-06-20",
        "2022-06-21",
        "2022-06-22",
        "2022-06-23",
        "2022-06-24",
        "2022-06-25",
        "2022-06-26",
        "2022-06-27",
        "2022-06-28",
        "2022-06-29",
        "2022-06-30",
      ],

      [
        "RNS Pace",
        0,
        5.33,
        6.55,
        6.56,
        7.59,
        8.7,
        8.95,
        9.33,
        10.67,
        15,
        16.33,
        18.67,
        30,
        35.33,
        35.67,
        36.03,
        40.33,
        42.67,
        45.76,
        47.96,
        49.02,
        50.12,
        52.33,
        55.54,
        57.98,
        58.33,
        59.67,
        60.9,
        61.98,
        62.23,
        65.67,
        80.98,
        90.67,
        95.02,
        99.56,
        102.78,
        110.98,
        115.02,
        120.54,
        122.98,
        124.12,
        126.67,
        127,
        128.33,
        130.67,
        132.78,
        133.89,
        133.98,
        134.12,
        135.23,
        136.67,
        140.89,
        142.03,
        143.37,
        144.02,
        144.33,
        144.67,
        144.82,
        146.99,
        148.27,
        149.02,
        150.33,
        152.47,
        155.65,
        157.33,
        179.67,
        180,
        180.33,
        181.67,
        185.8,
        185.89,
        186.98,
        187,
        187.33,
        188.67,
        190,
        192.33,
        195.67,
        197,
        185.33,
        184.67,
        184,
        183.33,
        183.22,
        182.03,
        181.45,
        180.97,
        180.12,
        175.33,
        174.67,
        173.89,
        170.99,
        165.67,
        156.78,
        154.33,
        153.67,
        153,
        152.33,
        151.67,
        151,
        148.33,
        146.67,
        146,
        145.33,
        144.67,
        144,
        143.33,
        142.67,
        142,
        141.33,
        140.67,
        135,
        130.21,
        128.92,
        127.99,
        126.85,
        125.91,
        125,
        124.33,
        121.67,
        121,
        120.33,
        119.67,
        119,
        120.33,
        120.67,
        121,
        122.33,
        122.67,
        123,
        123.33,
        124.67,
        125,
        126.33,
        126.67,
        127,
        127.33,
        128.67,
        129,
        130.33,
        135.67,
        137,
        138.33,
        138.67,
        139,
        140.33,
        142.43,
        143.68,
        144.89,
        145.24,
        150.26,
        152.78,
        153.63,
        154,
        160.33,
        162.67,
        163,
        164.33,
        165.67,
        168,
        170.33,
        175.65,
        176.89,
        180.99,
        182.52,
        185.94,
        187.8,
        190.95,
        192,
        195.15,
        199.37,
        200.85,
        210.98,
        215.67,
        218,
        220.33,
        221.67,
        224,
        230.33,
        235.67,
        240,
        243.33,
        244.67,
        245,
        248.33,
        250.67,
        251,
        252.33,
        254.67,
        256.02,
        258.33,
        260.67,
        265.95,
        267.02,
        269.61,
        270.03,
        272.31,
        273.78,
        275,
        276.43,
        278.77,
        280,
        282.33,
        283.67,
        284,
        285.33,
        286.67,
        290,
        291.33,
        292.67,
        295,
        297,
        298.23,
        300.45,
        310.9,
        312.22,
        313.12,
        315.11,
        318.09,
        320.99,
        322.01,
        323.04,
        334.01,
        340.99,
        345.09,
        350.19,
        355.74,
        360.74,
        362.74,
        365.84,
        366.9,
        370.1,
        372.9,
        373.45,
        375.15,
        376.67,
        378.12,
        380.98,
        382.29,
        390.13,
        392.13,
        393.73,
        394.8,
        396.24,
        398.14,
        400.24,
        402.69,
        410.9,
        411.12,
        412.67,
        413.12,
        413.45,
        414.19,
        415.22,
        416.57,
        415.91,
        418.01,
        420.46,
        421.73,
        422.13,
        423.21,
        424.43,
        425.56,
        430.96,
        435.99,
        440.23,
        445.42,
        450.45,
        448.67,
        440.78,
        430.93,
        445.23,
      ],
    ],
    types: {
      "RNS Pace": "line",
    },
    colors: {
      "RNS Pace": "#a7e9ef",
    },
  },
  axis: {
    x: {
      type: "timeseries",

      tick: {
        count: 272,
        format: "%m/%d",
      },
    },
    y: {
      tick: {
        format: function (d) {
          return "€ " + d;
        },
        //                format: function (d) { return "$" + d; }
      },
    },
  },
  point: {
    show: false,
  },
});
// const paceChart3Ctx = document.getElementById("paceChart3").getContext("2d");
// const paceChart3 = new Chart(paceChart3Ctx, {
//   type: "line",
//   data: {
//     labels: [
//       "01/04",
//       "05/04",
//       "09/04",
//       "13/04",
//       "17/04",
//       "21/04",
//       "25/04",
//       "29/04",
//     ],
//     datasets: [
//       {
//         label: "Year 2022",
//         backgroundColor: "#A7E9EF",
//         borderDash: [5],
//         lineTension: 0.6,
//         borderColor: "#A7E9EF",
//         fill: false,
//         data: [0.15, 0.2, 0.25, 0.3, 0.33, 0.35, 0.55, 0.9],
//         pointRadius: 0,
//       },
//       {
//         label: "Year 2021",
//         backgroundColor: "#ECD717",
//         borderDash: [5],
//         lineTension: 0.6,
//         borderColor: "#ECD717",
//         fill: false,
//         data: [0.32, 0.25, 0.2, 0.19, 0.1, 0.3, 0.5, 1.1],
//         pointRadius: 0,
//       },

//       {
//         label: "Year 2020",
//         backgroundColor: "#CC5252",
//         borderDash: [5],
//         lineTension: 0.6,
//         borderColor: "#CC5252",
//         fill: false,
//         data: [0.05, 0.1, 0.08, 0.1, 0.09, 0.2, 0.4, 0.7],
//         pointRadius: 0,
//       },
//     ],
//   },
//   options: {
//     responsive: true,

//     legend: {
//       display: true,
//       position: "bottom",
//     },
//     scales: {
//       xAxes: [
//         {
//           display: true,
//           scaleLabel: {
//             display: true,
//             labelString: "Date",
//           },
//           gridLines: {
//             // display: false,
//             drawOnChartArea: false,
//           },
//         },
//       ],
//       yAxes: [
//         {
//           display: true,
//           gridLines: {
//             // display: false,
//             drawOnChartArea: false,
//           },
//         },
//       ],
//     },
//   },
// });

var paceChart2 = c3.generate({
  bindto: document.getElementById("paceChart2"),
  data: {
    columns: [
      ["Revenue Forecast", 1250],
      ["Budget", 12000 - 1250],
    ],
    colors: {
      "Revenue Forecast": "#1E6970",
      Budget: "#A7E9EF",
    },
    type: "donut",
    onmouseover: function (d, i) {
      let donutTitle = (d.ratio * 100).toFixed(2) + "%";
      $("#paceChart2 .c3-chart-arcs-title").text(donutTitle);
      console.log("onmouseover", (d.ratio * 100).toFixed(2) + "%");
    },
  },
  donut: {
    title: "10.4%",
  },
  axis: {
    y: {
      label: {
        text: "Revenue Forecast",
      },
    },
    x: {
      label: {
        text: "Budget",
      },
    },
  },
  legend: {
    hide: true,
  },
});

var paceChart4 = c3.generate({
  bindto: document.getElementById("paceChart4"),
  data: {
    columns: [
      ["Revenue Forecast", 1250],
      ["Budget", 12000 - 1250],
    ],
    colors: {
      "Revenue Forecast": "#1E6970",
      Budget: "#A7E9EF",
    },
    onmouseover: function (d, i) {
      let donutTitle = (d.ratio * 100).toFixed(2) + "%";
      $("#paceChart4 .c3-chart-arcs-title").text(donutTitle);
      console.log("onmouseover", (d.ratio * 100).toFixed(2) + "%");
    },
    type: "donut",
  },
  donut: {
    title: "10.4%",
  },
  axis: {
    y: {
      label: {
        text: "Revenue Forecast",
      },
    },
    x: {
      label: {
        text: "Budget",
      },
    },
  },
  legend: {
    hide: true,
  },
});
