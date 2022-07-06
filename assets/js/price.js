document.addEventListener("DOMContentLoaded", function () {
  // var rateShopperCalendar;
  var calendarEl = document.getElementById("priceCalendar");
  var priceCalendar = new FullCalendar.Calendar(calendarEl, {
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
    expandRows: true,
    slotLabelFormat: [{ day: "numeric", weekday: "short", month: "short" }],
    editable: false,
    resourceAreaHeaderContent: "Category",
    slotLabelContent: (args) => {
      return {
        html: `<p class="header-day">${moment(args.date).format(
          "ddd"
        )}</p><p class="header-date">${moment(args.date).format(
          "MM/DD/YYYY"
        )}</p>`,
      };
    },
    resources: `${window.location.origin}/assets/js/priceResources.json`,
    aspectRatio: 2.5,
    events: [
      {
        resourceId: "b",
        title: "4",
        daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
        textColor: "#000",
        display: "background",
        backgroundColor: "#EB8D8D",
      },
      {
        resourceId: "c",
        title: "$260.00",
        daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
        textColor: "#000",
        display: "background",
        backgroundColor: "#EB8D8D",
      },
      {
        resourceId: "d",
        title: "$70.00",
        daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
        textColor: "#000",
        display: "background",
        backgroundColor: "#FCD4D4",
      },
      {
        resourceId: "e",
        title: "$13.00",
        daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
        textColor: "#000",
        display: "background",
        backgroundColor: "#FCD4D4",
      },
      {
        resourceId: "f",
        title: "20%",
        daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
        textColor: "#000",
        display: "background",
        backgroundColor: "#76C684",
      },
      {
        resourceId: "g",
        title: "$100.00",
        daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
        textColor: "#000",
        display: "background",
        backgroundColor: "#9FE2AB",
      },
      {
        resourceId: "h",
        title: "$99.00",
        daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
        textColor: "#000",
        display: "background",
        backgroundColor: "#9FE2AB",
      },
      {
        resourceId: "i",
        title: "$101.00",
        daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
        textColor: "#000",
        display: "background",
        backgroundColor: "#9FE2AB",
      },
    ],
  });
  priceCalendar.render();

  // $("#toggleTableView").click(function () {
  //   $("#toggleChartView").removeClass("active");
  //   $(this).addClass("active");
  //   $("#rateshopperChartView").hide();
  //   $("#priceCalendarView").show();
  //   priceCalendar.updateSize();
  // });

  // $("#toggleChartView").click(function () {
  //   $("#toggleTableView").removeClass("active");
  //   $(this).addClass("active");
  //   $("#priceCalendarView").hide();
  //   $("#priceCalendarDetailView").hide();
  //   $("#rateshopperChartView").show();
  // });
});
