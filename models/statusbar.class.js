class Statusbar extends MovableObject {
    width = 200;
    heigth = 100;
    x = 0;
    constructor(imgPath, y) {
        super().loadImage(imgPath);
        this.y = y;
    }
}