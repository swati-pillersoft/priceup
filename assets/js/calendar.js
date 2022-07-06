var calendarEl = document.getElementById("calendar");
var calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: "dayGridMonth",
  // themeSystem: "bootstrap",
  dayHeaderFormat: { weekday: "long" },
  headerToolbar: {
    left: "today",
    center: "title",
    right: "prev,next",
    // right: "addEventButton",
  },

  buttonText: {
    today: "Today",
  },
  // handleWindowResize: false,
  // customButtons: {
  //   addEventButton: {
  //     text: "Add events",
  //     click: function () {
  //       var dateStr = prompt("Enter a date in YYYY-MM-DD format");
  //       var date = new Date(dateStr + "T00:00:00"); // will be in local time

  //       if (!isNaN(date.valueOf())) {
  //         // valid?
  //         calendar.addEvent({
  //           title: "dynamic event",
  //           start: date,
  //           allDay: true,
  //         });
  //         alert("Your event has been created.");
  //       } else {
  //         alert("Invalid date.");
  //       }
  //     },
  //   },
  // },

  // eventMouseEnter: function (mouseEnterInfo) {
  //   if (mouseEnterInfo.event._def.extendedProps.tip) {
  //     $(mouseEnterInfo.el).tooltip({
  //       html: true,
  //       customClass: "calendar-tooltip mt-2 d-inline-block",
  //       // trigger: 'manual'
  //       title: mouseEnterInfo.event._def.extendedProps.tip,
  //       placement: "top",
  //     });
  //   }
  // },
  eventContent: function ({ event }) {
    let tip = event._def.extendedProps.tip;
    return {
      html: `${
        event.extendedProps.eventCategory?.toLowerCase() == "public-holiday"
          ? `<span class='fas fa-square publicHoliday' onclick='openRateShopperDetail()'></span>`
          : ""
      }<p class='mb-0 ${tip && "eventWithTooltip"}' ${
        tip && `data-toggle="tooltip" data-html="true" data-title="${tip}"`
      }>${event.title}</p>`,
    };
  },
  events: [
    {
      title: "$144",
      rrule: {
        freq: "daily",
        dtstart: "2012-02-01",
      },
      color: "#E8F0F1",
      exdate: ["2022-07-01", "2022-07-05", "2022-07-25", "2022-07-14"], // will also accept a single string
    },
    {
      title: "9% vs Current",
      rrule: {
        freq: "daily",
        dtstart: "2012-02-01",
      },
      color: "#E8F0F1",
      exdate: ["2022-07-01", "2022-07-05", "2022-07-25", "2022-07-14"], // will also accept a single string
    },
    {
      title: "9% vs Current",
      start: "2022-07-01",
      end: "2022-07-01",
      color: "#1E6970",
      textColor: "#ffffff",
      tip: "Current Price: $144 </br> Suggested Price: $153 </br> Competitive Price: $156 <br/> <a href='#' id='triggerPricePage' class='btn btn-light'>I want Details</a>",
    },
    {
      title: "$144",
      start: "2022-07-01",
      end: "2022-07-01",
      color: "#1E6970",
      textColor: "#ffffff",
      tip: "Current Price: $144 </br> Suggested Price: $153 </br> Competitive Price: $156 <br/> <a href='#' id='triggerPricePage' class='btn btn-light'>I want Details</a>",
    },
    {
      title: "$144",
      start: "2022-07-05",
      end: "2022-07-05",
      color: "#1E6970",
      textColor: "#ffffff",
      tip: "Current Price: $144 </br> Suggested Price: $153 </br> Competitive Price: $156 <br/> <a href='#' id='triggerPricePage' class='btn btn-light'>I want Details</a>",
    },
    {
      title: "9% vs Current",
      start: "2022-07-05",
      end: "2022-07-05",
      color: "#1E6970",
      textColor: "#ffffff",
      tip: "Current Price: $144 </br> Suggested Price: $153 </br> Competitive Price: $156 <br/> <a href='#' id='triggerPricePage' class='btn btn-light'>I want Details</a>",
    },

    {
      title: "$144",
      start: "2022-07-14",
      end: "2022-07-14",
      color: "#CC5252",
      textColor: "#ffffff",
      tip: "Current Price: $144 </br> Suggested Price: $153 </br> Competitive Price: $156 <br/> <a href='#' id='triggerPricePage' class='btn btn-light'>I want Details</a>",
      extendedProps: {
        eventCategory: "public-holiday",
      },
    },
    {
      title: "9% vs Current",
      start: "2022-07-14",
      end: "2022-07-14",
      color: "#CC5252",
      textColor: "#ffffff",
      tip: "Current Price: $144 </br> Suggested Price: $153 </br> Competitive Price: $156 <br/> <a href='#' id='triggerPricePage' class='btn btn-light'>I want Details</a>",
    },

    {
      title: "$144",
      start: "2022-07-25",
      end: "2022-07-25",
      color: "#CC5252",
      textColor: "#ffffff",
      tip: "Current Price: $144 </br> Suggested Price: $153 </br> Competitive Price: $156 <br/> <a href='#' id='triggerPricePage' class='btn btn-light'>I want Details</a>",
    },
    {
      title: "9% vs Current",
      start: "2022-07-25",
      end: "2022-07-25",
      color: "#CC5252",
      textColor: "#ffffff",
      tip: "Current Price: $144 </br> Suggested Price: $153 </br> Competitive Price: $156 <br/> <a href='#' id='triggerPricePage' class='btn btn-light'>I want Details</a>",
    },
  ],

  eventTextColor: "#000000",
});

calendar.render();

$('[data-toggle="tooltip"]').tooltip({
  trigger: "click",
  customClass: "calendar-tooltip mt-2 d-inline-block",
});

$('a[href="#v-pills-calendar"]').on("shown.bs.tab", function (e) {
  calendar.updateSize();
  $('[data-toggle="tooltip"]').tooltip({
    trigger: "click",
    customClass: "calendar-tooltip mt-2 d-inline-block",
  });
  $(".eventWithTooltip").on("inserted.bs.tooltip", function () {
    $("#triggerPricePage").click(function () {
      $(".nav-pills a[href='#v-pills-price']").tab("show");
    });
  });

  var hasToolTip = $(".eventWithTooltip");
  $("body").on("click", function (e) {
    var $parent = $(e.target).closest(".eventWithTooltip");
    if ($parent.length) {
      hasToolTip.not($parent).tooltip("hide");
    } else {
      hasToolTip.tooltip("hide");
    }
  });
});

function openRateShopperDetail() {
  $('a[href="#v-pills-rateshopper"]').tab("show");
  showRateShopperDetails();
}
