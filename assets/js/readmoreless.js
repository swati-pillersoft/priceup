$(".read-more").click(function () {
  $(this).parent().find(".hidden-text").slideToggle();
  $(this).text() === "Read more"
    ? $(this).text("Read less")
    : $(this).text("Read more");
});
