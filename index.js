const fs = require("fs");
const { createCanvas, loadImage, Canvas } = require("canvas");
const console = require("console");
const Foldername = 'sampleFolder';
const original = './images/' + Foldername + '/';
const Length = 1024;
const width = 1024;



fs.readdir(original, (err, files) => {
    files.forEach(file => {
        drawLayer;
        drawLayer(file, file, original);
        console.log(file);
    });
});

const saveLayer = (_canvas, _edition, folder) => {
    console.log('writing image');
    fs.writeFileSync(`${folder}${_edition}`, _canvas.toBuffer("image/png"));

};

const drawLayer = async (_edition, kk, folder) => {
    const tempcanvas = createCanvas(Length, width);
    const tempctx = tempcanvas.getContext("2d");

    const image = await loadImage(`${folder}${kk}`);
    tempctx.drawImage(
        image,
        0,
        0,
        Length,
        width
    );
    saveLayer(tempcanvas, _edition, folder);
};








