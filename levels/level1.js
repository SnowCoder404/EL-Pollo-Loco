let level1;
/**
 * Initializes the level by creating a new Level instance with specified entities.
 */
function initLevel() {
    level1 = new Level(
        [
            new Chicken(chickenImages),
            new Chicken(chickenImages),
            new Chicken(chickenImages),
            new Chicken(chickenSmallImages),
            new Chicken(chickenSmallImages),
            new Chicken(chickenSmallImages),
            new Endboss()
        ],
        [
            new Cloud()
        ],
        [
            new Background(airImage, -719),
            new Background(backgroundImages[3], -719),
            new Background(backgroundImages[4], -719),
            new Background(backgroundImages[5], -719), 
            new Background(airImage, 0),
            new Background(backgroundImages[0], 0),
            new Background(backgroundImages[1], 0),
            new Background(backgroundImages[2], 0),
            new Background(airImage, 719),
            new Background(backgroundImages[3], 719),
            new Background(backgroundImages[4], 719),
            new Background(backgroundImages[5], 719),
            new Background(airImage, 719*2),
            new Background(backgroundImages[0], 719*2),
            new Background(backgroundImages[1], 719*2),
            new Background(backgroundImages[2], 719*2), 
            new Background(airImage, 719*3),
            new Background(backgroundImages[3], 719*3),
            new Background(backgroundImages[4], 719*3),
            new Background(backgroundImages[5], 719*3), 
            new Background(airImage, 719*4),
            new Background(backgroundImages[0], 719*4),
            new Background(backgroundImages[1], 719*4),
            new Background(backgroundImages[2], 719*4), 
        ])
}