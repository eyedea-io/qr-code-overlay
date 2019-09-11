"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('canvas'), createCanvas = _a.createCanvas, loadImage = _a.loadImage;
function generateOverlay(qrCodeURL, label, logoURL) {
    var canvas;
    var ctx;
    loadImage(qrCodeURL).then(function (image) {
        canvas = createCanvas(image.width + 120, image.height + 120); // TODO: parameter : padding
        ctx = canvas.getContext('2d');
        ctx.drawImage(image, 60, 60); // padding/2
        ctx.font = '18px Arial'; // TODO: parameter
        ctx.textAlign = "center";
        ctx.fillText(label, canvas.width / 2, 100 + image.height);
        logoURL && loadImage(logoURL).then(function (img) {
            ctx.drawImage(img, 10, image.height + 65, 45, 45); // TODO: parameter
        });
    });
    var stream = canvas.createPDFStream({
        title: { label: label }
    });
    return stream;
}
exports.generateOverlay = generateOverlay;
