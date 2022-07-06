// sign up hotel logo/image file input

$(document).ready(function () {
  document
    .querySelectorAll(".license-input-label")
    .forEach(function (fileInput) {
      var licenseInputLabel = fileInput;
      var uploadLicenseInput = licenseInputLabel.querySelector(
        "#uploadLicenseInput"
      );
      var fileNameSpan = licenseInputLabel.querySelector(".file-name");

      uploadLicenseInput.addEventListener("change", function (e) {
        let fileName;
        if (this.files[0]) {
          fileName = this.files[0].name;
        }

        if (fileName) {
          fileNameSpan.innerHTML = fileName;
        }
      });
    });
  // $(".license-input-label").each(function () {});
});

// var licenseInputLabel = document.querySelector(".license-input-label");
// var uploadLicenseInput = licenseInputLabel.querySelector("#uploadLicenseInput");
// var fileNameSpan = licenseInputLabel.querySelector(".file-name");

// uploadLicenseInput.addEventListener("change", function (e) {
//   let fileName;
//   if (this.files[0]) {
//     fileName = this.files[0].name;
//   }

//   if (fileName) {
//     fileNameSpan.innerHTML = fileName;
//   }
// });

// sign up license copy file input

// var licenseInputLabel2 = document.querySelector(".license-input-label2");
// var uploadLicenseInput2 = licenseInputLabel2.querySelector(
//   "#uploadLicenseInput2"
// );
// var fileNameSpan2 = licenseInputLabel2.querySelector(".file-name2");

// uploadLicenseInput2.addEventListener("change", function (e) {
//   let fileName;
//   if (this.files[0]) {
//     fileName = this.files[0].name;
//   }

//   if (fileName) {
//     fileNameSpan2.innerHTML = fileName;
//   }
// });

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
