$("#uploadLicenseInput").on("change", function (e) {
  let fileName;
  if (this.files[0]) {
    fileName = this.files[0].name;
  }

  if (fileName) {
    $("#licensePreview").prop("src", URL.createObjectURL(e.target.files[0]));
  }
});

$("#uploadHotelLogoInput").on("change", function (e) {
  let fileName;
  if (this.files[0]) {
    fileName = this.files[0].name;
  }

  if (fileName) {
    $("#hotelLogoPreview").prop("src", URL.createObjectURL(e.target.files[0]));
  }
});
