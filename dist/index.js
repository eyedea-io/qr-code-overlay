"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jimp = require("jimp");
function generateOverlay(qrCodeURL, phrase, logoURL) {
    var images = [qrCodeURL, logoURL];
    var jimps = [];
    images.map(function (image) { return jimps.push(jimp.read(image)); });
    Promise.all(jimps)
        .then(function (data) {
        return Promise.all(jimps);
    })
        .then(function (data) {
        new jimp(data[0].bitmap.width + 120, data[0].bitmap.height + 120, "#FFF", function (err, image) {
            if (err)
                throw err;
            image.composite(data[0], 60, 60);
            data[1].resize(40, jimp.AUTO);
            image.composite(data[1], 10, 270);
            jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(function (font) {
                if (err)
                    throw err;
                image.print(font, 0, 0, {
                    text: phrase,
                    alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
                    alignmentY: jimp.VERTICAL_ALIGN_BOTTOM
                }, image.bitmap.width, image.bitmap.height - 10);
                image.write("test.png");
            });
        });
    });
}
exports.generateOverlay = generateOverlay;
generateOverlay("http://brcwebdesigns.com/wp-content/uploads/2013/02/qr-cardon-insurance.png", "lalalalal", "https://image.flaticon.com/icons/png/512/12/12237.png");
