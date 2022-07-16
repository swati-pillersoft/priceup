// reservationTable.buttons()
//   .container()
//   .appendTo($(".col-sm-6:eq(0)", reservationTable.table().container()));

$(document).ready(function () {
  var reservationTable = $("#reservationTable").DataTable({
    language: {
      paginate: {
        previous: "&lt;",
        next: "&gt;",
      },
    },
    // scrollX: true,
    ordering: false,
    lengthChange: false,
    // dom: "Bfrtip",
    buttons: [
      {
        text: "<span class='fas fa-plus'></span>",
        action: function (e, dt, node, config) {
          console.log("Add button clicked");
        },
      },
      {
        text: "<span class='fas fa-print'></span>",
        extend: "print",
      },
      {
        text: "<span class='fas fa-file-excel'></span>",
        extend: "excel",
      },
      {
        text: "<span class='fas fa-sync'></span>",
        action: function (e, dt, node, config) {
          // dt.ajax.reload();
          console.log("reload button clicked");
        },
      },
    ],
    // info: false,
  });
  reservationTable
    .buttons()
    .container()
    .appendTo(".reservation-tableheader .tableheader-left");
  $("#reservationTable_filter input")
    .appendTo(".reservation-tableheader .tableheader-right")
    .prop("placeholder", "Search");

  var totalReservationRecords = reservationTable.page.info().recordsTotal;
  $("#reservationTable_info").html("Total: " + totalReservationRecords);

  var rategroupTable = $("#rategroupTable").DataTable({
    language: {
      paginate: {
        previous: "&lt;",
        next: "&gt;",
      },
    },
    scrollX: true,
    ordering: false,
    searching: false,
    // paging: false,
    // lengthChange: true,
  });
  $("#reservationModal").on("shown.bs.modal", function (e) {
    $(".modal-backdrop").addClass("reservation-backdrop");
  });

  if (window.jQuery().datetimepicker) {
    $("#checkindate").datetimepicker({
      // Formats
      // follow MomentJS docs: https://momentjs.com/docs/#/displaying/format/
      format: "DD/MM/YYYY hh:mm A",

      // Your Icons
      // as Bootstrap 4 is not using Glyphicons anymore
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: "fa fa-chevron-left",
        next: "fa fa-chevron-right",
        today: "fa fa-check",
        clear: "fa fa-trash",
        close: "fa fa-times",
      },
      sideBySide: true,
      defaultDate: moment(),
    });

    $("#checkoutdate").datetimepicker({
      // Formats
      // follow MomentJS docs: https://momentjs.com/docs/#/displaying/format/
      format: "DD/MM/YYYY hh:mm A",

      // Your Icons
      // as Bootstrap 4 is not using Glyphicons anymore
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: "fa fa-chevron-left",
        next: "fa fa-chevron-right",
        today: "fa fa-check",
        clear: "fa fa-trash",
        close: "fa fa-times",
      },
      sideBySide: true,
      defaultDate: moment(),
    });

    $("#roomcalendarcheckindate").datetimepicker({
      format: "YYYY-MM-DD hh:mm A",

      // Your Icons
      // as Bootstrap 4 is not using Glyphicons anymore
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: "fa fa-chevron-left",
        next: "fa fa-chevron-right",
        today: "fa fa-check",
        clear: "fa fa-trash",
        close: "fa fa-times",
      },
      sideBySide: true,
      // defaultDate: moment(),
    });

    $("#roomcalendarcheckoutdate").datetimepicker({
      format: "YYYY-MM-DD hh:mm A",

      // Your Icons
      // as Bootstrap 4 is not using Glyphicons anymore
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: "fa fa-chevron-left",
        next: "fa fa-chevron-right",
        today: "fa fa-check",
        clear: "fa fa-trash",
        close: "fa fa-times",
      },
      sideBySide: true,
      // defaultDate: moment(),
    });
  }
  var reportRevenueChartCtx = document
    .getElementById("reportRevenueChart")
    .getContext("2d");
  var reportRevenueChart = new Chart(reportRevenueChartCtx, {
    type: "bar",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Classic",
          backgroundColor: "#EB8D8D",
          data: [17, 14, 15, 14, 16.2, 13.5, 14.8, 17.2, 18.1, 15.4, 12.5, 14],
        },
        {
          label: "Standard",
          backgroundColor: "#A7E9EF",
          data: [19, 13.5, 14, 15, 12, 15, 18, 12.2, 13.5, 14.4, 16.4, 17.3],
        },
        {
          label: "Superior",
          backgroundColor: "#76C684",
          data: [15.8, 15, 12, 13.2, 16.2, 17, 12.7, 14, 12, 15.5, 14, 15],
        },
      ],
    },
    options: {
      tooltips: {
        displayColors: true,
        callbacks: {
          mode: "x",
        },
      },
      scales: {
        xAxes: [
          {
            stacked: true,
            gridLines: {
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            stacked: true,
            gridLines: {
              drawOnChartArea: false,
            },
            ticks: {
              callback: function (value, index, values) {
                return value + " K";
              },
            },
            type: "linear",
          },
        ],
      },
      responsive: true,
      maintainAspectRatio: true,
      legend: { position: "bottom" },
    },
  });
  var lengthOfStayChartCtx = document
    .getElementById("lengthOfStayChart")
    .getContext("2d");
  var lengthOfStayChart = new Chart(lengthOfStayChartCtx, {
    type: "line",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Length of stay",
          fill: true,
          backgroundColor: "#1E6970",
          data: [3.8, 4.7, 3.8, 3, 3.7, 4, 3.9, 2.2, 2.9, 3.8, 4.2, 3],
          pointBackgroundColor: "#A7E9EF",
          pointRadius: 5,
          lineTension: 0,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            stacked: true,
            gridLines: {
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            stacked: true,
            gridLines: {
              drawOnChartArea: false,
            },
            type: "linear",
            scaleLabel: {
              display: true,
              labelString: "Length of stay",
            },
          },
        ],
      },
      responsive: true,
      maintainAspectRatio: true,
    },
  });
  var bookingLeadTimeChart = c3.generate({
    bindto: "#bookingLeadTimeChart",
    data: {
      x: "x",
      columns: [
        [
          "x",
          "30",
          "29",
          "28",
          "27",
          "26",
          "25",
          "24",
          "23",
          "22",
          "21",
          "20",
          "19",
          "18",
          "17",
          "16",
          "15",
          "14",
          "13",
          "12",
          "11",
          "10",
          "9",
          "8",
          "7",
          "6",
          "5",
          "4",
          "3",
          "2",
          "1",
          "0",
        ],
        [
          "Booked rates",
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
          "No. of Reservations",
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
      ],
      axes: {
        "Booked rates": "y",
        "No. of Reservations": "y2",
      },
      types: {
        "Booked rates": "bar",
        "No. of Reservations": "line",
      },
      colors: {
        "Booked rates": "#51ADB5",
        "No. of Reservations": "#CC5252",
      },
    },
    bar: {
      width: {
        ratio: 0.4, // this makes bar width 50% of length between ticks
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
          text: "Lead Time (In weeks)",
          position: "outer-center",
        },
        categories: [
          "30",
          "29",
          "28",
          "27",
          "26",
          "25",
          "24",
          "23",
          "22",
          "21",
          "20",
          "19",
          "18",
          "17",
          "16",
          "15",
          "14",
          "13",
          "12",
          "11",
          "10",
          "9",
          "8",
          "7",
          "6",
          "5",
          "4",
          "3",
          "2",
          "1",
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
      y2: {
        label: { text: "No. of Reservations", position: "outer-middle" },
        show: true,
      },
    },
    // legend: {
    //   show: false,
    // },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var pmsRoomCalendarEl = document.getElementById("pmsRoomCalendar");

  var pmsRoomCalendar = new FullCalendar.Calendar(pmsRoomCalendarEl, {
    headerToolbar: {
      left: "datepickerBtn",
      center: "title",
      right: "prev,next",
    },
    customButtons: {
      datepickerBtn: {
        text: "custom!",
        click: function () {
          alert("clicked the custom button!");
        },
      },
    },
    initialView: "resourceTimelineMonth",
    slotLabelContent: function ({ date }) {
      return {
        html: `<span class='d-block'><span class='d-block'>${moment(
          date
        ).format("dddd")}</span><span>${moment(date).format(
          "DD"
        )}</span></span>`,
      };
    },
    viewDidMount: function (arg) {
      $(
        `<div class='position-relative'><input
        type="text"
        id="pmsRoomCalendarDatepicker" class='form-control my-2'
      /><img src='./assets/img/icon-date.png' class='pmsratecalendardatepickericon' /></div>`
      ).insertAfter($(".fc-datepickerBtn-button"));
      $("#pmsRoomCalendarDatepicker")
        .datepicker({
          format: "mm/dd/yyyy",
          autoclose: true,
        })
        .datepicker("setDate", "now")
        .on("changeDate", function (e) {
          let date = e.date;
          pmsRoomCalendar.gotoDate(date);
        });
    },
    dateClick: function (dateClickInfo) {
      let jsInfo = dateClickInfo.jsEvent;
      if (jsInfo.srcElement.className.includes("pmsroomcalendarevent")) {
        return;
      } else {
        $("#pmsRoomCalendarAddReservationModal").modal("show");
      }
    },
    eventClick: function () {
      // alert("hi");
      $("#pmsRoomCalendarEditReservationModal").modal("show");
    },
    eventContent: function ({ event }) {
      return {
        html: `<span class='pmsroomcalendarevent ${event.extendedProps.color}'><img src='./assets/img/info-icon.svg' class='info-icon' />${event.extendedProps.guestName} ${event.extendedProps.adults}+${event.extendedProps.children}</span>`,
      };
    },
    aspectRatio: 2.5,
    eventDisplay: "background",
    editable: true,
    events: [
      {
        resourceId: "101",
        start: "2022-07-01",
        end: "2022-07-03",
        extendedProps: {
          guestName: "Mario Rossi",
          color: "available",
          adults: "2",
          children: "2",
        },
      },
      {
        resourceId: "101",
        start: "2022-07-04",
        end: "2022-07-06",
        extendedProps: {
          guestName: "Mario Rossi",
          color: "arrivals",
          adults: "2",
          children: "1",
        },
      },
      {
        resourceId: "101",
        start: "2022-07-08",
        end: "2022-07-10",
        extendedProps: {
          guestName: "Mario Rossel",
          color: "pickup",
          adults: "1",
          children: "2",
        },
      },
      {
        resourceId: "102",
        start: "2022-07-01",
        end: "2022-07-02",
        extendedProps: {
          guestName: "Mario Rossel",
          color: "arrivals",
          adults: "2",
          children: "2",
        },
      },
      {
        resourceId: "102",
        start: "2022-07-03",
        end: "2022-07-06",
        extendedProps: {
          guestName: "Mario Rossi",
          color: "available",
          adults: "2",
          children: "1",
        },
      },
      {
        resourceId: "102",
        start: "2022-07-07",
        end: "2022-07-09",
        extendedProps: {
          guestName: "Andrew Rossi",
          color: "pickup",
          adults: "2",
          children: "2",
        },
      },
      {
        resourceId: "103",
        start: "2022-07-01",
        end: "2022-07-04",
        extendedProps: {
          guestName: "Andrew Rossi",
          color: "pickup",
          adults: "2",
          children: "2",
        },
      },
      {
        resourceId: "103",
        start: "2022-07-05",
        end: "2022-07-10",
        extendedProps: {
          guestName: "Mario Rossi",
          color: "arrivals",
          adults: "2",
          children: "2",
        },
      },
      {
        resourceId: "104",
        start: "2022-07-01",
        end: "2022-07-03",
        extendedProps: {
          guestName: "Mario Rossi",
          color: "arrivals",
          adults: "2",
          children: "2",
        },
      },
      {
        resourceId: "104",
        start: "2022-07-03",
        end: "2022-07-07",
        extendedProps: {
          guestName: "Mario Rossi",
          color: "available",
          adults: "2",
          children: "1",
        },
      },
      {
        resourceId: "104",
        start: "2022-07-08",
        end: "2022-07-09",
        extendedProps: {
          guestName: "Mario Rossi",
          color: "pickup",
          adults: "2",
          children: "1",
        },
      },
      {
        resourceId: "105",
        start: "2022-07-01",
        end: "2022-07-08",
        extendedProps: {
          guestName: "Mario Rossi",
          color: "pickup",
          adults: "2",
          children: "2",
        },
      },
      {
        resourceId: "106",
        start: "2022-07-01",
        end: "2022-07-07",
        extendedProps: {
          guestName: "Mario Rossel",
          color: "available",
          adults: "2",
          children: "2",
        },
      },
      {
        resourceId: "106",
        start: "2022-07-08",
        end: "2022-07-09",
        extendedProps: {
          guestName: "Mario Rossel",
          color: "arrivals",
          adults: "2",
          children: "2",
        },
      },
      {
        resourceId: "107",
        start: "2022-07-01",
        end: "2022-07-03",
        extendedProps: {
          guestName: "Mario Rossel",
          color: "arrivals",
          adults: "2",
          children: "2",
        },
      },
      {
        resourceId: "107",
        start: "2022-07-05",
        end: "2022-07-09",
        extendedProps: {
          guestName: "Mario Rossi",
          color: "pickup",
          adults: "2",
          children: "2",
        },
      },
    ],

    resourcesInitiallyExpanded: true,
    expandRows: true,
    resourceAreaColumns: [
      {
        field: "Room",
        headerContent: "Room No.",
      },
      {
        field: "Roomtype",
        headerContent: "Room Type",
        cellClassNames: "roomtype-col",
      },
    ],

    resources: [
      { id: "101", Room: "101", Roomtype: "Deluxe" },
      { id: "102", Room: "102", Roomtype: "Standard" },
      { id: "103", Room: "103", Roomtype: "Family" },
      { id: "104", Room: "104", Roomtype: "Deluxe" },
      { id: "105", Room: "105", Roomtype: "Standard" },
      { id: "106", Room: "106", Roomtype: "Family" },
      { id: "107", Room: "107", Roomtype: "Deluxe" },
    ],
  });

  pmsRoomCalendar.render();

  // $("#createNewReservationBtn").click(function (e) {
  //   let newGuestInfo = Object.fromEntries(
  //     new FormData(
  //       document.querySelector("#pmsRoomCalendarAddReservationModal form")
  //     )
  //   );
  //   console.log(newGuestInfo);
  //   console.log(newGuestInfo.roomcalendarcheckindate.split(" ")[0]);
  //   pmsRoomCalendar.addEvent({
  //     resourceId: `${newGuestInfo.roomno}`,
  //     title: `${newGuestInfo.guestname}`,
  //     start: `${newGuestInfo.roomcalendarcheckindate.split(" ")[0]}`,
  //     end: `${newGuestInfo.roomcalendarcheckoutdate.split(" ")[0]}`,
  //     extendedProps: {
  //       guestName: "Mario Rossi",
  //       color: "pickup",
  //       adults: "2",
  //       children: "2",
  //     },
  //   });
  // });
});
