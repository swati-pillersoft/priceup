$("#serviceDeadline").datepicker({
  autoclose: true,
  format: "M, dd yyyy",
});

$("#js-tdata .visible-value").click(function () {
  $(this).parent().toggleClass("active");
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$("#js-tdata .ok-btn").each(function (i, el) {
  $(this).click(function (e) {
    e.preventDefault();
    $userInput = $(this).prev();
    // console.log($userInput);
    $userInputValue = $userInput[0].value;
    $visibleValueEl = $(this).parent().prev();
    $emptyTd = $(this).parent().parent();
    // console.log($emptyTd);
    // $visibleValueEl = $emptyTd.find($(".visible-value"));
    // console.log($visibleValueEl);
    if ($userInputValue.length > 0) {
      $visibleValueEl.text($userInputValue);
      $emptyTd.toggleClass("active");
    } else {
      $emptyTd.toggleClass("active");
      $visibleValueEl.text("Empty");
    }
  });
});

$("#js-tdata .cancel-btn").each(function (i, el) {
  $(this).click(function (e) {
    e.preventDefault();
    $emptyTd = $(this).parent().parent();
    $emptyTd.toggleClass("active");
  });
});

$("#api").change(function () {
  if ($(this).prop("checked") == true) {
    $(".api-token-col").show();
  } else {
    $(".api-token-col").hide();
  }
});
