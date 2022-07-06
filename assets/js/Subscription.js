$(document).ready(function () {
  $("#addSubscriptionBtn").click(function () {
    $(".subscription-wrapper").fadeOut({
      duration: 800,
      complete: function () {
        $(".subscription-plans-wrapper").fadeIn(800);
      },
    });
  });

  $("#changePlanBtn").click(function () {
    $(".update-subscription-wrapper").fadeOut({
      duration: 800,
      complete: function () {
        $(".subscription-plans-wrapper").fadeIn(800);
      },
    });
  });

  $("#goToUpgradeScreen").click(function () {
    $(".subscription-wrapper").fadeOut({
      duration: 800,
      complete: function () {
        $(".update-subscription-wrapper").fadeIn(800);
      },
    });
  });

  $("#goToUpgradeScreenFromPlan").click(function () {
    $(".subscription-plans-wrapper").fadeOut({
      duration: 800,
      complete: function () {
        $(".update-subscription-wrapper").fadeIn(800);
      },
    });
  });

  $("#goToUpgradeScreenFromInvoice").click(function () {
    $(".invoice-card").fadeOut({
      duration: 800,
      complete: function () {
        $(".update-subscription-wrapper").fadeIn(800);
      },
    });
  });

  $("#backToSubMain").click(function () {
    $(".update-subscription-wrapper").fadeOut({
      duration: 800,
      complete: function () {
        $(".subscription-wrapper").fadeIn(800);
      },
    });
  });

  $("#backToSubMainFromPlan").click(function () {
    $(".subscription-plans-wrapper").fadeOut({
      duration: 800,
      complete: function () {
        $(".subscription-wrapper").fadeIn(800);
      },
    });
  });
  $("#backToSubMainFromInvoice").click(function () {
    $(".invoice-card").fadeOut({
      duration: 800,
      complete: function () {
        $(".subscription-wrapper").fadeIn(800);
      },
    });
  });
  $("#invoice-list").click(function () {
    $(".subscription-wrapper").fadeOut({
      duration: 800,
      complete: function () {
        $(".invoice-card").fadeIn(800);
      },
    });
  });
});
