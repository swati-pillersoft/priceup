$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this)
      .prev(".card-header")
      .find(".fa")
      .addClass("fa-minus")
      .removeClass("fa-plus");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-plus")
        .addClass("fa-minus");
    })
    .on("hide.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    });
});

$(document).ready(function () {
  // pickup-chart

  var refDatePicker = $("#refpickupDatePicker")
    .datepicker({
      autoclose: true,
      format: "dd MM yyyy",
      endDate: new Date(),
      enableOnReadonly: false,
    })
    .datepicker("setDate", "now");

  $("#monthpickupDatePicker")
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

  $("#refpickupPrevDate").click(function () {
    $currentDate = $("#refpickupDatePicker").data("datepicker").viewDate;
    $momentCurrent = moment($currentDate);
    $prevDate = moment(
      $("#refpickupDatePicker").data("datepicker").viewDate
    ).subtract(1, "days");
    $("#refpickupDatePicker").datepicker(
      "update",
      $prevDate.format("DD MMM yyyy")
    );
  });

  $("#refpickupNextDate").click(function () {
    $currentDate = $("#refpickupDatePicker").data("datepicker").viewDate;
    $momentCurrent = moment($currentDate);
    // console.log($momentCurrent.isSame());
    if ($momentCurrent.isBefore(moment(), "day")) {
      $nextDate = moment(
        $("#refpickupDatePicker").data("datepicker").viewDate
      ).add(1, "days");
      // console.log($nextDate.format("DD MMM yyyy"));
      $("#refpickupDatePicker").datepicker(
        "update",
        $nextDate.format("DD MMM yyyy")
      );
    }
  });

  $("#refpickupPrevMonth").click(function () {
    // console.log($("#monthDatePicker").data("datepicker"));
    $currentDate = $("#monthpickupDatePicker").data("datepicker").viewDate;
    // console.log($currentDate);

    $momentCurrentMonth = moment($currentDate);
    // console.log($momentCurrentMonth);
    $prevMonth = moment($currentDate).subtract(1, "months");
    $("#monthpickupDatePicker").datepicker(
      "update",
      $prevMonth.format("MMMM/yyyy")
    );
  });

  $("#refpickupNextMonth").click(function () {
    // console.log($("#monthDatePicker").data("datepicker"));
    // $currentDate = $("#monthpickupDatePicker").data("datepicker").viewDate;
    // // console.log($currentDate);
    // if (moment($currentDate).isBefore(moment(), "months")) {
    //   $nextDate = moment($currentDate).add(1, "months");
    //   // console.log($nextDate.format("DD MMM yyyy"));
    //   $("#monthpickupDatePicker").datepicker(
    //     "update",
    //     $nextDate.format("MMMM/yyyy")
    //   );
    // }

    $nextDate = moment($currentDate).add(1, "months");
    // console.log($nextDate.format("DD MMM yyyy"));
    $("#monthpickupDatePicker").datepicker(
      "update",
      $nextDate.format("MMMM/yyyy")
    );
  });

  const pickuppageCtx = document
    .getElementById("pickuppageChart")
    .getContext("2d");
  const pickuppageChart = new Chart(pickuppageCtx, {
    type: "line",
    data: {
      labels: [
        "01/04",
        "02/04",
        "03/04",
        "04/04",
        "05/04",
        "06/04",
        "07/04",
        "08/04",
        "09/04",
        "10/04",
        "11/04",
        "12/04",
        "13/04",
        "14/04",
        "15/04",
        "16/04",
        "17/04",
        "18/04",
        "19/04",
        "20/04",
        "21/04",
        "22/04",
        "23/04",
        "24/04",
        "25/04",
        "26/04",
        "27/04",
        "28/04",
        "29/04",
        "30/04",
      ],
      datasets: [
        {
          label: "Today",
          backgroundColor: "#51ADB5",
          // borderDash: [5],
          lineTension: 0.4,
          borderColor: "#51ADB5",
          fill: false,
          data: [
            0.31, 0.41, 0.55, 0.7, 0.62, 0.45, 0.3, 0.45, 0.55, 0.65, 0.55, 0.5,
            0.35, 0.21, 0.35, 0.45, 0.55, 0.62, 0.5, 0.34, 0.25, 0.32, 0.4, 0.5,
            0.48, 0.4, 0.35, 0.4, 0.5,
          ],
          order: 1,
          lineTension: 0.3,
          pointRadius: 2,
        },
        {
          label: "Yesterday",
          backgroundColor: "#A7E9EF",
          lineTension: 0.6,
          borderColor: "#A7E9EF",
          fill: false,
          data: [
            0.45, 0.35, 0.3, 0.2, 0.3, 0.35, 0.45, 0.32, 0.25, 0.35, 0.45, 0.6,
            0.65, 0.62, 0.45, 0.35, 0.2, 0.25, 0.45, 0.55, 0.35, 0.21, 0.33,
            0.21, 0.18, 0.15, 0.34, 0.5, 0.35,
          ],
          order: 2,
          lineTension: 0.3,
          pointRadius: 2,
        },
      ],
    },
    options: {
      responsive: true,

      legend: {
        display: false,
        position: "bottom",
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
            },
            gridLines: {
              // display: false,
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              // display: false,
              drawOnChartArea: false,
            },
            // ticks: {
            //   callback: function (value, index, values) {
            //     return "";
            //   },
            // },
          },
        ],
      },
    },
  });

  const last6Chart1Ctx = document
    .getElementById("last6Chart1")
    .getContext("2d");
  const last6Chart1 = new Chart(last6Chart1Ctx, {
    type: "line",
    data: {
      labels: [
        "01/04",
        "02/04",
        "03/04",
        "04/04",
        "05/04",
        "06/04",
        "07/04",
        "08/04",
        "09/04",
        "10/04",
        "11/04",
        "12/04",
        "13/04",
        "14/04",
        "15/04",
        "16/04",
        "17/04",
        "18/04",
        "19/04",
        "20/04",
        "21/04",
        "22/04",
        "23/04",
        "24/04",
        "25/04",
        "26/04",
        "27/04",
        "28/04",
        "29/04",
        "30/04",
      ],
      datasets: [
        {
          label: "Today",
          backgroundColor: "#51ADB5",
          // borderDash: [5],
          lineTension: 0.4,
          borderColor: "#51ADB5",
          fill: false,
          data: [
            0.31, 0.41, 0.55, 0.7, 0.62, 0.45, 0.3, 0.45, 0.55, 0.65, 0.55, 0.5,
            0.35, 0.21, 0.35, 0.45, 0.55, 0.62, 0.5, 0.34, 0.25, 0.32, 0.4, 0.5,
            0.48, 0.4, 0.35, 0.4, 0.5,
          ],
          order: 1,
          lineTension: 0.3,
          pointRadius: 2,
        },
        {
          label: "Yesterday",
          backgroundColor: "#A7E9EF",
          lineTension: 0.6,
          borderColor: "#A7E9EF",
          fill: false,
          data: [
            0.45, 0.35, 0.3, 0.2, 0.3, 0.35, 0.45, 0.32, 0.25, 0.35, 0.45, 0.6,
            0.65, 0.62, 0.45, 0.35, 0.2, 0.25, 0.45, 0.55, 0.35, 0.21, 0.33,
            0.21, 0.18, 0.15, 0.34, 0.5, 0.35,
          ],
          order: 2,
          lineTension: 0.3,
          pointRadius: 2,
        },
      ],
    },
    options: {
      responsive: true,

      legend: {
        display: false,
        position: "bottom",
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
            },
            gridLines: {
              // display: false,
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              // display: false,
              drawOnChartArea: false,
            },
            // ticks: {
            //   callback: function (value, index, values) {
            //     return "";
            //   },
            // },
          },
        ],
      },
    },
  });

  const last6Chart2Ctx = document
    .getElementById("last6Chart2")
    .getContext("2d");
  const last6Chart2 = new Chart(last6Chart2Ctx, {
    type: "line",
    data: {
      labels: [
        "01/04",
        "02/04",
        "03/04",
        "04/04",
        "05/04",
        "06/04",
        "07/04",
        "08/04",
        "09/04",
        "10/04",
        "11/04",
        "12/04",
        "13/04",
        "14/04",
        "15/04",
        "16/04",
        "17/04",
        "18/04",
        "19/04",
        "20/04",
        "21/04",
        "22/04",
        "23/04",
        "24/04",
        "25/04",
        "26/04",
        "27/04",
        "28/04",
        "29/04",
        "30/04",
      ],
      datasets: [
        {
          label: "Today",
          backgroundColor: "#51ADB5",
          // borderDash: [5],
          lineTension: 0.4,
          borderColor: "#51ADB5",
          fill: false,
          data: [
            0.31, 0.41, 0.55, 0.7, 0.62, 0.45, 0.3, 0.45, 0.55, 0.65, 0.55, 0.5,
            0.35, 0.21, 0.35, 0.45, 0.55, 0.62, 0.5, 0.34, 0.25, 0.32, 0.4, 0.5,
            0.48, 0.4, 0.35, 0.4, 0.5,
          ],
          order: 1,
          lineTension: 0.3,
          pointRadius: 2,
        },
        {
          label: "Yesterday",
          backgroundColor: "#A7E9EF",
          lineTension: 0.6,
          borderColor: "#A7E9EF",
          fill: false,
          data: [
            0.45, 0.35, 0.3, 0.2, 0.3, 0.35, 0.45, 0.32, 0.25, 0.35, 0.45, 0.6,
            0.65, 0.62, 0.45, 0.35, 0.2, 0.25, 0.45, 0.55, 0.35, 0.21, 0.33,
            0.21, 0.18, 0.15, 0.34, 0.5, 0.35,
          ],
          order: 2,
          lineTension: 0.3,
          pointRadius: 2,
        },
      ],
    },
    options: {
      responsive: true,

      legend: {
        display: false,
        position: "bottom",
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
            },
            gridLines: {
              // display: false,
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              // display: false,
              drawOnChartArea: false,
            },
            // ticks: {
            //   callback: function (value, index, values) {
            //     return "";
            //   },
            // },
          },
        ],
      },
    },
  });

  const last6Chart3Ctx = document
    .getElementById("last6Chart3")
    .getContext("2d");
  const last6Chart3 = new Chart(last6Chart3Ctx, {
    type: "line",
    data: {
      labels: [
        "01/04",
        "02/04",
        "03/04",
        "04/04",
        "05/04",
        "06/04",
        "07/04",
        "08/04",
        "09/04",
        "10/04",
        "11/04",
        "12/04",
        "13/04",
        "14/04",
        "15/04",
        "16/04",
        "17/04",
        "18/04",
        "19/04",
        "20/04",
        "21/04",
        "22/04",
        "23/04",
        "24/04",
        "25/04",
        "26/04",
        "27/04",
        "28/04",
        "29/04",
        "30/04",
      ],
      datasets: [
        {
          label: "Today",
          backgroundColor: "#51ADB5",
          // borderDash: [5],
          lineTension: 0.4,
          borderColor: "#51ADB5",
          fill: false,
          data: [
            0.31, 0.41, 0.55, 0.7, 0.62, 0.45, 0.3, 0.45, 0.55, 0.65, 0.55, 0.5,
            0.35, 0.21, 0.35, 0.45, 0.55, 0.62, 0.5, 0.34, 0.25, 0.32, 0.4, 0.5,
            0.48, 0.4, 0.35, 0.4, 0.5,
          ],
          order: 1,
          lineTension: 0.3,
          pointRadius: 2,
        },
        {
          label: "Yesterday",
          backgroundColor: "#A7E9EF",
          lineTension: 0.6,
          borderColor: "#A7E9EF",
          fill: false,
          data: [
            0.45, 0.35, 0.3, 0.2, 0.3, 0.35, 0.45, 0.32, 0.25, 0.35, 0.45, 0.6,
            0.65, 0.62, 0.45, 0.35, 0.2, 0.25, 0.45, 0.55, 0.35, 0.21, 0.33,
            0.21, 0.18, 0.15, 0.34, 0.5, 0.35,
          ],
          order: 2,
          lineTension: 0.3,
          pointRadius: 2,
        },
      ],
    },
    options: {
      responsive: true,

      legend: {
        display: false,
        position: "bottom",
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
            },
            gridLines: {
              // display: false,
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              // display: false,
              drawOnChartArea: false,
            },
            // ticks: {
            //   callback: function (value, index, values) {
            //     return "";
            //   },
            // },
          },
        ],
      },
    },
  });
  const last6Chart4Ctx = document
    .getElementById("last6Chart4")
    .getContext("2d");
  const last6Chart4 = new Chart(last6Chart4Ctx, {
    type: "line",
    data: {
      labels: [
        "01/04",
        "02/04",
        "03/04",
        "04/04",
        "05/04",
        "06/04",
        "07/04",
        "08/04",
        "09/04",
        "10/04",
        "11/04",
        "12/04",
        "13/04",
        "14/04",
        "15/04",
        "16/04",
        "17/04",
        "18/04",
        "19/04",
        "20/04",
        "21/04",
        "22/04",
        "23/04",
        "24/04",
        "25/04",
        "26/04",
        "27/04",
        "28/04",
        "29/04",
        "30/04",
      ],
      datasets: [
        {
          label: "Today",
          backgroundColor: "#51ADB5",
          // borderDash: [5],
          lineTension: 0.4,
          borderColor: "#51ADB5",
          fill: false,
          data: [
            0.31, 0.41, 0.55, 0.7, 0.62, 0.45, 0.3, 0.45, 0.55, 0.65, 0.55, 0.5,
            0.35, 0.21, 0.35, 0.45, 0.55, 0.62, 0.5, 0.34, 0.25, 0.32, 0.4, 0.5,
            0.48, 0.4, 0.35, 0.4, 0.5,
          ],
          order: 1,
          lineTension: 0.3,
          pointRadius: 2,
        },
        {
          label: "Yesterday",
          backgroundColor: "#A7E9EF",
          lineTension: 0.6,
          borderColor: "#A7E9EF",
          fill: false,
          data: [
            0.45, 0.35, 0.3, 0.2, 0.3, 0.35, 0.45, 0.32, 0.25, 0.35, 0.45, 0.6,
            0.65, 0.62, 0.45, 0.35, 0.2, 0.25, 0.45, 0.55, 0.35, 0.21, 0.33,
            0.21, 0.18, 0.15, 0.34, 0.5, 0.35,
          ],
          order: 2,
          lineTension: 0.3,
          pointRadius: 2,
        },
      ],
    },
    options: {
      responsive: true,

      legend: {
        display: false,
        position: "bottom",
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
            },
            gridLines: {
              // display: false,
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              // display: false,
              drawOnChartArea: false,
            },
            // ticks: {
            //   callback: function (value, index, values) {
            //     return "";
            //   },
            // },
          },
        ],
      },
    },
  });

  const last6Chart5Ctx = document
    .getElementById("last6Chart5")
    .getContext("2d");
  const last6Chart5 = new Chart(last6Chart5Ctx, {
    type: "line",
    data: {
      labels: [
        "01/04",
        "02/04",
        "03/04",
        "04/04",
        "05/04",
        "06/04",
        "07/04",
        "08/04",
        "09/04",
        "10/04",
        "11/04",
        "12/04",
        "13/04",
        "14/04",
        "15/04",
        "16/04",
        "17/04",
        "18/04",
        "19/04",
        "20/04",
        "21/04",
        "22/04",
        "23/04",
        "24/04",
        "25/04",
        "26/04",
        "27/04",
        "28/04",
        "29/04",
        "30/04",
      ],
      datasets: [
        {
          label: "Today",
          backgroundColor: "#51ADB5",
          // borderDash: [5],
          lineTension: 0.4,
          borderColor: "#51ADB5",
          fill: false,
          data: [
            0.31, 0.41, 0.55, 0.7, 0.62, 0.45, 0.3, 0.45, 0.55, 0.65, 0.55, 0.5,
            0.35, 0.21, 0.35, 0.45, 0.55, 0.62, 0.5, 0.34, 0.25, 0.32, 0.4, 0.5,
            0.48, 0.4, 0.35, 0.4, 0.5,
          ],
          order: 1,
          lineTension: 0.3,
          pointRadius: 2,
        },
        {
          label: "Yesterday",
          backgroundColor: "#A7E9EF",
          lineTension: 0.6,
          borderColor: "#A7E9EF",
          fill: false,
          data: [
            0.45, 0.35, 0.3, 0.2, 0.3, 0.35, 0.45, 0.32, 0.25, 0.35, 0.45, 0.6,
            0.65, 0.62, 0.45, 0.35, 0.2, 0.25, 0.45, 0.55, 0.35, 0.21, 0.33,
            0.21, 0.18, 0.15, 0.34, 0.5, 0.35,
          ],
          order: 2,
          lineTension: 0.3,
          pointRadius: 2,
        },
      ],
    },
    options: {
      responsive: true,

      legend: {
        display: false,
        position: "bottom",
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
            },
            gridLines: {
              // display: false,
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              // display: false,
              drawOnChartArea: false,
            },
            // ticks: {
            //   callback: function (value, index, values) {
            //     return "";
            //   },
            // },
          },
        ],
      },
    },
  });

  const last6Chart6Ctx = document
    .getElementById("last6Chart6")
    .getContext("2d");
  const last6Chart6 = new Chart(last6Chart6Ctx, {
    type: "line",
    data: {
      labels: [
        "01/04",
        "02/04",
        "03/04",
        "04/04",
        "05/04",
        "06/04",
        "07/04",
        "08/04",
        "09/04",
        "10/04",
        "11/04",
        "12/04",
        "13/04",
        "14/04",
        "15/04",
        "16/04",
        "17/04",
        "18/04",
        "19/04",
        "20/04",
        "21/04",
        "22/04",
        "23/04",
        "24/04",
        "25/04",
        "26/04",
        "27/04",
        "28/04",
        "29/04",
        "30/04",
      ],
      datasets: [
        {
          label: "Today",
          backgroundColor: "#51ADB5",
          // borderDash: [5],
          lineTension: 0.4,
          borderColor: "#51ADB5",
          fill: false,
          data: [
            0.31, 0.41, 0.55, 0.7, 0.62, 0.45, 0.3, 0.45, 0.55, 0.65, 0.55, 0.5,
            0.35, 0.21, 0.35, 0.45, 0.55, 0.62, 0.5, 0.34, 0.25, 0.32, 0.4, 0.5,
            0.48, 0.4, 0.35, 0.4, 0.5,
          ],
          order: 1,
          lineTension: 0.3,
          pointRadius: 2,
        },
        {
          label: "Yesterday",
          backgroundColor: "#A7E9EF",
          lineTension: 0.6,
          borderColor: "#A7E9EF",
          fill: false,
          data: [
            0.45, 0.35, 0.3, 0.2, 0.3, 0.35, 0.45, 0.32, 0.25, 0.35, 0.45, 0.6,
            0.65, 0.62, 0.45, 0.35, 0.2, 0.25, 0.45, 0.55, 0.35, 0.21, 0.33,
            0.21, 0.18, 0.15, 0.34, 0.5, 0.35,
          ],
          order: 2,
          lineTension: 0.3,
          pointRadius: 2,
        },
      ],
    },
    options: {
      responsive: true,

      legend: {
        display: false,
        position: "bottom",
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
            },
            gridLines: {
              // display: false,
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              // display: false,
              drawOnChartArea: false,
            },
            // ticks: {
            //   callback: function (value, index, values) {
            //     return "";
            //   },
            // },
          },
        ],
      },
    },
  });

  //last7chart1
  var last7chart1Ctx = document.getElementById("last7chart1").getContext("2d");
  const last7chart1 = new Chart(last7chart1Ctx, {
    type: "line",
    data: {
      labels: ["16/04", "15/04", "14/04", "13/04", "12/04", "11/04", "10/04"],
      datasets: [
        {
          label: "RNS",
          yAxisID: "A",
          backgroundColor: "#51ADB5",
          borderColor: "#A7E9EF",
          data: [20, 140, -80, 20, 80, 60, 20],
          fill: false,
          lineTension: 0,
        },
        {
          label: "Revenue",
          yAxisID: "A",
          backgroundColor: "#51ADB5",
          borderColor: "#1E6970",
          data: [50, 100, 180, 60, 20, 90, 120],
          fill: false,
          lineTension: 0,
        },
        {
          label: "none",
          yAxisID: "A",
          backgroundColor: "#51ADB5",
          borderColor: "#1E6970",
          data: [80, 20, 60, 160, 120, 190, 20],
          fill: false,
          lineTension: 0,
          borderDash: [10, 5],
        },
        {
          label: "none",
          yAxisID: "A",
          backgroundColor: "#51ADB5",
          borderColor: "#A7E9EF",
          data: [50, 40, 80, 120, 90, 60, 120],
          fill: false,
          lineTension: 0,
          borderDash: [10, 5],
        },
      ],
    },
    options: {
      legend: {
        display: false,
        position: "bottom",
        align: "middle",
      },
      // responsive: false
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: false,
              labelString: "Date",
            },
            gridLines: {
              drawOnChartArea: false,
            },
            gridLines: {
              zeroLineWidth: 3,
              zeroLineColor: "#2C292E",
            },
            position: "center",
          },
        ],
        yAxes: [
          {
            id: "A",
            type: "linear",
            position: "left",
            display: true,
            scaleLabel: {
              display: true,
              labelString: "RNS",
            },
            gridLines: {
              drawOnChartArea: false,
            },
          },
          {
            id: "B",
            type: "linear",
            position: "right",
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Revenue",
            },
            gridLines: {
              drawOnChartArea: false,
            },
            ticks: {
              beginAtZero: true,
              max: 1,
              min: 0,
            },
          },
        ],
      },
    },
  });
});

var last7chart2 = c3.generate({
  bindto: "#last7chart2",
  data: {
    columns: [
      ["Revenue", 300000],
      ["Budget", 824133 - 300000],
    ],
    colors: {
      Revenue: "#1E6970",
      Budget: "#E8F0F1",
    },
    type: "donut",
    onmouseover: function (d, i) {
      let donutTitle = (d.ratio * 100).toFixed(2) + "%";
      $("#last7chart2 .c3-chart-arcs-title").text(donutTitle);
      console.log("onmouseover", (d.ratio * 100).toFixed(2) + "%");
    },
  },
  donut: {
    title: "36.4%",
  },
  axis: {
    y: {
      label: {
        text: "Revenue",
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
