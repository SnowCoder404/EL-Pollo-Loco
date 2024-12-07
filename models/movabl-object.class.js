class MovableObject {
    x = 30;
    y = 300;
    heigth;
    width;
    img;
    imageCache = {};

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(images) {
        images.forEach(path => {
            const img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    } 

    moveInterval(minX) {
        setInterval(() => {
            if (this.x <= minX) {
                this.x = 300 + Math.random() * 500;    
            } else {
                this.x -= 0.15;
            }
        
        },1000 / 60);
    }
}