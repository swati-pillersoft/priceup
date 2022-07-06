var refDatePicker = $("#refrateshopperDatePicker")
  .datepicker({
    autoclose: true,
    format: "dd MM yyyy",
    endDate: new Date(),
    enableOnReadonly: false,
  })
  .datepicker("setDate", "now");

$("#monthrateshopperDatePicker")
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

$("#refrateshopperPrevDate").click(function () {
  $currentDate = $("#refrateshopperDatePicker").data("datepicker").viewDate;
  $momentCurrent = moment($currentDate);
  $prevDate = moment(
    $("#refrateshopperDatePicker").data("datepicker").viewDate
  ).subtract(1, "days");
  $("#refrateshopperDatePicker").datepicker(
    "update",
    $prevDate.format("DD MMM yyyy")
  );
});

$("#refrateshopperNextDate").click(function () {
  $currentDate = $("#refrateshopperDatePicker").data("datepicker").viewDate;
  $momentCurrent = moment($currentDate);
  // console.log($momentCurrent.isSame());
  if ($momentCurrent.isBefore(moment(), "day")) {
    $nextDate = moment(
      $("#refrateshopperDatePicker").data("datepicker").viewDate
    ).add(1, "days");
    // console.log($nextDate.format("DD MMM yyyy"));
    $("#refrateshopperDatePicker").datepicker(
      "update",
      $nextDate.format("DD MMM yyyy")
    );
  }
});

$("#refrateshopperPrevMonth").click(function () {
  // console.log($("#monthDatePicker").data("datepicker"));
  $currentDate = $("#monthrateshopperDatePicker").data("datepicker").viewDate;
  // console.log($currentDate);

  $momentCurrentMonth = moment($currentDate);
  // console.log($momentCurrentMonth);
  $prevMonth = moment($currentDate).subtract(1, "months");
  $("#monthrateshopperDatePicker").datepicker(
    "update",
    $prevMonth.format("MMMM/yyyy")
  );
});

$("#refrateshopperNextMonth").click(function () {
  // console.log($("#monthDatePicker").data("datepicker"));
  $currentDate = $("#monthrateshopperDatePicker").data("datepicker").viewDate;
  // console.log($currentDate);
  if (moment($currentDate).isBefore(moment(), "months")) {
    $nextDate = moment($currentDate).add(1, "months");
    // console.log($nextDate.format("DD MMM yyyy"));
    $("#monthrateshopperDatePicker").datepicker(
      "update",
      $nextDate.format("MMMM/yyyy")
    );
  }
});

$(document).ready(function () {
  var rateshopperChartMain = c3.generate({
    bindto: "#rateshopperChartMain",
    data: {
      x: "x",
      columns: [
        [
          "x",
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
        ],
        [
          "Market Demand",
          700,
          320,
          550,
          110,
          460,
          550,
          370,
          680,
          290,
          510,
          310,
          600,
          455,
          450,
          170,
          150,
          120,
          190,
          130,
          170,
          160,
          190,
          580,
          560,
          540,
          620,
          180,
          500,
          460,
          770,
        ],
        [
          "Median Comp Rate",
          300,
          200,
          100,
          400,
          150,
          250,
          550,
          450,
          210,
          310,
          710,
          150,
          310,
          100,
          250,
          290,
          500,
          450,
          340,
          450,
          130,
          330,
          450,
          430,
          490,
          500,
          550,
          350,
          230,
          300,
        ],
        [
          "Your Rates",
          50,
          20,
          10,
          40,
          15,
          25,
          75,
          55,
          340,
          250,
          150,
          80,
          40,
          240,
          340,
          550,
          120,
          280,
          350,
          440,
          500,
          260,
          370,
          500,
          150,
          470,
          490,
          550,
          340,
          490,
        ],
        [
          "Hotel Conchiglia",
          90,
          30,
          40,
          120,
          150,
          25,
          190,
          30,
          40,
          50,
          60,
          90,
          80,
          190,
          110,
          120,
          130,
          140,
          500,
          300,
          65,
          78,
          90,
          350,
          470,
          480,
          490,
          40,
          120,
          500,
        ],
        ["Hotel Quirinale", 240, 110, 60, 90, 15, 200, 490, 40],
        [
          "Hotel Tiempo",
          200,
          50,
          80,
          140,
          115,
          40,
          490,
          550,
          340,
          490,
          250,
          150,
          80,
          40,
          240,
          340,
          550,
          120,
          280,
          350,
          440,
          500,
          260,
          370,
          500,
          150,
          470,
          490,
          550,
          340,
        ],
      ],
      axes: {
        "Median Comp Rate": "y",
        "Your Rates": "y2",
      },
      types: {
        "Market Demand": "bar",
        "Median Comp Rate": "line",
        "Your Rates": "line",
      },
      colors: {
        "Market Demand": "#A7E9EF",
        "Median Comp Rate": "#ECD717",
        "Your Rates": "#1E6970",
        "Hotel Conchiglia": "#F9D4AE",
        "Hotel Quirinale": "#18EC3D",
        "Hotel Tiempo": "#CC5252",
      },
    },
    point: {
      show: false,
    },
    axis: {
      x: {
        height: 60,
        type: "timeseries",
        tick: {
          format: function (x) {
            return `${moment(x).format("DD/MM")}`;
            // if (moment(x).format("DD") % 2 !== 0) {
            // }
          },
        },
      },
      y: {
        tick: {
          format: d3.format("$,"),
        },
      },
      y2: {
        label: { text: "Market Demand", position: "outer-middle" },
        show: true,
        tick: {
          format: function (d) {
            return d + "%";
          },
        },
      },
    },
    // legend: {
    //   show: false,
    // },
  });
  $($(".c3-legend-item-Hotel-Conchiglia")[0]).tooltip({
    title: "Standard room, 2 guests",
  });
  $($(".c3-legend-item-Hotel-Quirinale")[0]).tooltip({
    title: "Standard room, 2 guests",
  });
  $($(".c3-legend-item-Hotel-Tiempo")[0]).tooltip({
    title: "Standard room, 2 guests",
  });

  // function toggle(id) {
  //   chart.toggle(id);
  // }

  // d3.select("#rateshopperChartMain")
  //   .insert("div", ".chart")
  //   .attr("class", "legend")
  //   .selectAll("span")
  //   .data([
  //     "Market Demand",
  //     "Median Comp Rate",
  //     "Your Rates",
  //     "Hotel Conchiglia",
  //     "Hotel Quirinale",
  //     "Hotel Tiempo",
  //   ])
  //   .enter()
  //   .append("span")
  //   .attr("data-id", function (id) {
  //     return id;
  //   })
  //   .html(function (id) {
  //     return id;
  //   })
  //   .each(function (id) {
  //     d3.select(this).style("background-color", chart.color(id));
  //   })
  //   .on("mouseover", function (id) {
  //     chart.focus(id);
  //   })
  //   .on("mouseout", function (id) {
  //     chart.revert();
  //   })
  //   .on("click", function (id) {
  //     chart.toggle(id);
  //   });

  var rateshopperChartCalendarDetail = c3.generate({
    bindto: "#rateshopperChartCalendarDetail",
    data: {
      x: "x",
      columns: [
        [
          "x",
          "30",
          "28",
          "26",
          "24",
          "22",
          "20",
          "18",
          "16",
          "14",
          "12",
          "10",
          "8",
          "6",
          "4",
          "2",
          "0",
        ],
        [
          "Your Rates",
          400,
          320,
          500,
          500,
          500,
          650,
          770,
          700,
          450,
          400,
          400,
          400,
          400,
          450,
          500,
          500,
        ],
        [
          "Hotel Conchiglia",
          null,
          null,
          null,
          null,
          null,
          null,
          550,
          450,
          210,
          310,
          500,
          350,
          310,
          250,
          250,
          290,
        ],
        [
          "Hotel Quirinale",
          50,
          40,
          40,
          30,
          65,
          85,
          70,
          70,
          340,
          250,
          200,
          300,
          300,
          240,
          540,
          550,
        ],
        [
          "Hotel Tiempo",
          90,
          50,
          40,
          120,
          120,
          130,
          140,
          150,
          140,
          200,
          60,
          70,
          80,
          120,
          110,
          120,
        ],
        [
          "Grand Hotel Santa Lucia",
          240,
          240,
          240,
          240,
          300,
          200,
          200,
          210,
          220,
          220,
          230,
          250,
          240,
          230,
          250,
          250,
        ],
      ],
      colors: {
        // "Median Comp Rate": "#ECD717",
        "Your Rates": "#1E6970",
        "Hotel Conchiglia": "#F9D4AE",
        "Hotel Quirinale": "#18EC3D",
        "Hotel Tiempo": "#CC5252",
        "Grand Hotel Santa Lucia": "#ECD717",
      },
    },
    point: {
      show: false,
    },
    axis: {
      x: {
        type: "category",
        height: 50,
        label: {
          text: "Lead Time",
          position: "outer-center",
        },
        categories: [
          "30",
          "28",
          "26",
          "24",
          "22",
          "20",
          "18",
          "16",
          "14",
          "12",
          "10",
          "8",
          "6",
          "4",
          "2",
          "0",
        ],
        tick: {
          values: [
            "30",
            "28",
            "26",
            "24",
            "22",
            "20",
            "18",
            "16",
            "14",
            "12",
            "10",
            "8",
            "6",
            "4",
            "2",
            "0",
          ],
          centered: true,
        },
      },
      y: {
        tick: {
          format: d3.format("$,"),
        },
      },
    },
  });
  $($(".c3-legend-item-Hotel-Conchiglia")[1]).tooltip({
    title: "Standard room, 2 guests",
  });
  $($(".c3-legend-item-Hotel-Quirinale")[1]).tooltip({
    title: "Standard room, 2 guests",
  });
  $($(".c3-legend-item-Hotel-Tiempo")[1]).tooltip({
    title: "Standard room, 2 guests",
  });
  $($(".c3-legend-item-Grand-Hotel-Santa-Lucia")[0]).tooltip({
    title: "Standard room, 2 guests",
  });
  $('a[data-toggle="tab"]').on("shown.bs.tab", function () {
    window.dispatchEvent(new Event("resize"));

    setTimeout(() => {
      rateshopperChartMain.resize();
    }, 1);
  });
});

function showRateShopperDetails() {
  $("#rateshopperChartView").fadeOut();
  $("#toggleChartView").removeClass("active");
  $("#rateshopperCalendarView").fadeOut({
    complete: function () {
      $("#toggleTableView").removeClass("active");
      $("#rateshopperCalendarDetailView").fadeIn();
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 500);
    },
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // var rateShopperCalendar;
  var calendarEl = document.getElementById("rateshopperCalendar");
  var rateShopperCalendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: "UTC",
    initialView: "resourceTimelineMonth",
    aspectRatio: 1.5,
    headerToolbar: {
      left: "today",
      center: "title",
      right: "prev,next",
    },
    buttonText: {
      today: "Today",
    },
    slotLabelContent: function ({ date }) {
      return {
        html: `<span onclick='showRateShopperDetails()' class='d-block'><span class='d-block'>${moment(
          date
        ).format("dddd")}</span><span>${moment(date).format(
          "MMM, DD"
        )}</span></span>`,
      };
    },
    expandRows: true,
    slotLabelFormat: [{ day: "numeric", weekday: "short", month: "short" }],
    editable: false,
    resourceAreaHeaderClassNames: "rateshopper-header-class",
    resourceAreaHeaderContent: "Hotels",
    resources: `${window.location.origin}/assets/js/rateshopper.json`,
    aspectRatio: 2.5,
    // eventClick: function (eventClickInfo) {
    //   showRateShopperDetails();
    // },
    eventContent: function ({ event }) {
      let eventTitle = event.title;
      let className =
        eventTitle > 100
          ? "text-success font-weight-bold"
          : eventTitle < 100
          ? "text-danger font-weight-bold"
          : "";
      return {
        html: `<span data-toggle="tooltip" title='${
          event.extendedProps.title
        }' class='d-block'><p class='rateShopperEventTitle ${className}'>$${
          event.title
        }.00</p>${
          event.extendedProps.myProperty
            ? event.extendedProps.myProperty
            : "&nbsp;"
        }</span>`,
      };
    },
    events: [
      {
        resourceId: "a",
        title: 100,
        daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
        backgroundColor: "#fff",
        textColor: "#000",
        extendedProps: {
          myProperty: "4/4",
          title: "Standard room, 2 guests",
        },
      },
      {
        resourceId: "b",
        title: 144,
        daysOfWeek: [0, 4],
        backgroundColor: "#fff",
        textColor: "#000",
        extendedProps: {
          title: "Standard room, 2 guests",
        },
      },
      {
        resourceId: "b",
        title: 100,
        daysOfWeek: [1, 2, 3, 5, 6],
        backgroundColor: "#fff",
        textColor: "#000",
        extendedProps: {
          title: "Standard room, 2 guests",
        },
      },
      {
        resourceId: "c",
        title: 98,
        daysOfWeek: [1, 2, 4, 5, 6],
        backgroundColor: "#fff",
        textColor: "#000",
        extendedProps: {
          myProperty: "<em class='fas fa-arrow-up text-success mr-2'></em>5.00",
          title: "Standard room, 2 guests",
        },
      },
      {
        resourceId: "c",
        title: 100,
        daysOfWeek: [0, 3],
        backgroundColor: "#fff",
        textColor: "#000",
        extendedProps: {
          title: "Standard room, 2 guests",
        },
      },
      {
        resourceId: "d",
        title: 100,
        daysOfWeek: [0, 1, 3, 4, 6],
        backgroundColor: "#fff",
        textColor: "#000",
        extendedProps: {
          title: "Standard room, 2 guests",
        },
      },
      {
        resourceId: "d",
        title: 59,
        daysOfWeek: [2],
        backgroundColor: "#fff",
        textColor: "#000",
        extendedProps: {
          title: "Standard room, 2 guests",
        },
      },
      {
        resourceId: "d",
        title: 122,
        daysOfWeek: [5],
        backgroundColor: "#fff",
        textColor: "#000",
        extendedProps: {
          title: "Standard room, 2 guests",
        },
      },
    ],
  });
  rateShopperCalendar.render();

  $("#toggleTableView").click(function () {
    $("#toggleChartView").removeClass("active");
    $(this).addClass("active");
    $("#rateshopperChartView").hide();
    $("#rateshopperCalendarDetailView").hide();
    $("#rateshopperCalendarView").show();
    $('[data-toggle="tooltip"]').tooltip();
    rateShopperCalendar.updateSize();
  });

  $("#toggleChartView").click(function () {
    $("#toggleTableView").removeClass("active");
    $(this).addClass("active");
    $("#rateshopperCalendarView").hide();
    $("#rateshopperCalendarDetailView").hide();
    $("#rateshopperChartView").show();
  });
});
