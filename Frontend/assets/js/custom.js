//url="https://ocr-api.enbinary.com/"
url = "http://192.168.1.38:81/"; //enter your backend url here

//function to check internet connection
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/todos/1",
    headers: {},
  }).done(function (data) {
    console.log("Works");
  });
});

$(document).ready(function () {
  $("#Submit").submit(function (e) {
    e.preventDefault();

    $("#btnSubmit").attr("disabled", true);

    return true;
  });
});

//Function to upload image to backend
function uploader() {
  var file = $("#UnprocessedImage").prop("files");
  // return;
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  async function Main() {
    const file = document.querySelector("#UnprocessedImage").files[0];
    ajaxCall("users", await toBase64(file));
  }

  Main();
}
//Function to download file from backend
function ajaxCall(urlEndPoint, data) {
  $.ajax({
    type: "POST",
    url: url + urlEndPoint,
    headers: {},
    dataType: "json",
    data: JSON.stringify({
      data: data,
    }),
    processData: false,
    contentType: "application/json",
  }).done(function (data) {
    //console.log(data);
    download(data.data, "yourfile.docx");
    //console.log(1)
  });
}
//Function to porcess download
function download(url, filename) {
  fetch(url).then(function (t) {
    return t.blob().then((b) => {
      var a = document.createElement("a");
      a.href = URL.createObjectURL(b);
      a.setAttribute("download", filename);
      a.click();
    });
  });

  $("#btnSubmit").attr("enabled", true);
}
