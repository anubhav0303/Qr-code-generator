
let imgBox = document.getElementById("imgBox");
let QRimg = document.getElementById("QRimg");
let qrtxt = document.getElementById("qrtxt");

function generateQR() {
    if (qrtxt.value.length > 0) {
        QRimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrtxt.value);
        imgBox.classList.add("show-img");
    } 
    else {
        // alert("Please Enter the Value");
        qrtxt.classList.add("error");
    setTimeout(function () {
      qrtxt.classList.remove("error");
    }, 500);
}
}