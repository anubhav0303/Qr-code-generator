let imgBox = document.getElementById("imgBox");
let QRimg = document.getElementById("QRimg");
let qrtxt = document.getElementById("qrtxt");
let qrColor = document.getElementById("qrColor");
let qrSize = document.getElementById("qrSize");
let downloadBtn = document.getElementById("downloadBtn");

function generateQR() {
    if (qrtxt.value.length > 0) {
        let qrData = encodeURIComponent(qrtxt.value);
        let qrColorHex = qrColor.value.replace("#", ""); // Remove # for API
        let qrSizeValue = qrSize.value;

        QRimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSizeValue}x${qrSizeValue}&data=${qrData}&color=${qrColorHex}`;
        imgBox.classList.add("show-img");

        // Show download button
        downloadBtn.style.display = "block";
    } else {
        qrtxt.classList.add("error");
        setTimeout(() => qrtxt.classList.remove("error"), 500);
    }
}

function downloadQR() {
    let link = document.createElement("a");
    link.href = QRimg.src;
    link.download = "QRCode.png";
    link.click();
}
