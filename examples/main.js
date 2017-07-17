'use strict';

var app = new PIXI.Application(1280, 720, {});
document.body.appendChild(app.view);

var imageToFilter = PIXI.Sprite.fromImage('website_sharing.jpg');
imageToFilter.width = 1100;
imageToFilter.height = (imageToFilter.width * 9) / 16;
imageToFilter.x = 90;
imageToFilter.y = 50.625;

app.stage.addChild(imageToFilter);

app.ticker.add(function() {
    app.renderer.render(imageToFilter);
})

window._imageToFilter = imageToFilter;
