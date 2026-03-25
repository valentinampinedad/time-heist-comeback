namespace SpriteKind {
    export const priciple = SpriteKind.create()
    export const principlenemy = SpriteKind.create()
    export const goal = SpriteKind.create()
    export const badtile = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . 
        . . . . . . . . . . 
        . f f f f f f f . . 
        f 6 1 1 6 1 6 f f . 
        f 6 6 6 6 6 6 6 6 f 
        f 6 6 6 6 6 8 8 8 f 
        f 8 8 8 8 8 8 f f . 
        . f f f f f f f . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        `, personaje, 50, 0)
    music.pewPew.play()
})
function level_3 () {
    personaje.say("2004 ¡A correr!", 2000)
    for (let value of tiles.getTilesByType(assets.tile`tile13`)) {
        meta = sprites.create(img`
            ................
            ................
            ..ffffff........
            ffdd22df7717....
            fd5e244665557fff
            f446e22245515ddf
            2269962ff45115ff
            .666666ddf4455f.
            .fd66ddddddffff.
            fdddddd77dd1dddf
            fddddd7dd7dd1ddf
            fdddd7ddddddd1df
            fedd7777777dd1df
            feddd7ddddddd1df
            fedd7777777dd1df
            feedd7dddddddddf
            .feedd7dd7ddddf.
            .feeedd77dddddf.
            ..ffeeddddddff..
            ....ffffffff....
            `, SpriteKind.goal)
        tiles.placeOnTile(meta, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile10`)) {
        myEnemy = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 6 f f . . 
            . . . . . . . . . 6 6 6 f f f . 
            . . . . . . . 6 6 6 9 6 6 f f . 
            . . . . . . 6 6 9 9 6 6 6 6 6 . 
            . . . . . 8 6 6 6 6 6 6 6 6 . . 
            . . . . 8 8 6 6 6 6 6 6 6 6 . . 
            . . . 8 8 6 6 6 6 6 6 6 6 . . . 
            . . . 8 8 8 6 6 6 6 6 6 6 . . . 
            . . . 8 8 8 8 6 6 6 6 6 . . . . 
            . . . f 8 8 8 8 8 8 8 . . . . . 
            . . f f 8 8 8 8 8 8 f f f . . . 
            . f f f f f 8 8 8 f f f f f . . 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        myEnemy,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 6 f f . . 
            . . . . . . . . . 6 6 6 f f f . 
            . . . . . . . 6 6 6 9 6 6 f f . 
            . . . . . . 6 6 9 9 6 6 6 6 6 . 
            . . . . . 8 6 6 6 6 6 6 6 6 . . 
            . . . . 8 8 6 6 6 6 6 6 6 6 . . 
            . . . 8 8 6 6 6 6 6 6 6 6 . . . 
            . . . 8 8 8 6 6 6 6 6 6 6 . . . 
            . . . 8 8 8 8 6 6 6 6 6 . . . . 
            . . . f 8 8 8 8 8 8 8 . . . . . 
            . . f f 8 8 8 8 8 8 f f f . . . 
            . f f f f f 8 8 8 f f f f f . . 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 6 f f . . . . . 
            . . . . . . . 6 6 f f f . . . . 
            . . . . . . . 6 6 6 6 6 . . . . 
            . . . . . . 6 6 6 6 9 6 . . . . 
            . . . . . 6 6 6 6 9 6 6 . . . . 
            . . . . . 6 6 6 6 9 6 6 6 . . . 
            . . . . 6 6 6 6 6 6 6 6 6 . . . 
            . . . . 6 6 6 6 6 6 6 6 6 . . . 
            . . . . 8 6 6 6 6 6 6 6 6 . . . 
            . . . . 8 6 6 6 6 6 6 6 6 . . . 
            . . . . 8 8 6 6 6 6 6 8 . . . . 
            . . f f 8 8 8 6 6 8 8 f f . . . 
            . f f f f f 8 8 8 f f f f f . . 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 6 f f f 6 . . . . . . 
            . . . . . 6 6 6 6 6 . . . . . . 
            . . . . 6 6 6 6 9 6 6 . . . . . 
            . . . . 6 6 6 6 6 9 6 . . . . . 
            . . . . 6 6 6 6 6 9 6 . . . . . 
            . . . . 6 6 6 6 6 6 6 . . . . . 
            . . . 8 6 6 6 6 6 6 6 8 . . . . 
            . . . 8 8 6 6 6 6 6 8 8 . . . . 
            . . . 8 8 6 6 6 6 6 8 8 . . . . 
            . . . 8 8 8 6 6 6 8 8 8 . . . . 
            . . f f 8 8 8 6 8 8 8 f f . . . 
            . f f f f f 8 8 8 f f f f f . . 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f 6 . . . . . . . . 
            . . . . f f f 6 6 . . . . . . . 
            . . . . 6 6 6 6 6 . . . . . . . 
            . . . . 6 9 6 6 6 6 . . . . . . 
            . . . . 6 6 9 6 6 6 6 . . . . . 
            . . . 6 6 6 9 6 6 6 6 . . . . . 
            . . . 6 6 6 6 6 6 6 6 6 . . . . 
            . . . 6 6 6 6 6 6 6 6 6 . . . . 
            . . . 6 6 6 6 6 6 6 6 8 . . . . 
            . . . 6 6 6 6 6 6 6 6 8 . . . . 
            . . . . 8 6 6 6 6 6 8 8 . . . . 
            . . . f f 8 8 6 6 8 8 8 f f . . 
            . . f f f f f 8 8 8 f f f f f . 
            . . f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f 6 . . . . . . . . . . . 
            . f f f 6 6 6 . . . . . . . . . 
            . f f 6 6 9 6 6 6 . . . . . . . 
            . 6 6 6 6 6 9 9 6 6 . . . . . . 
            . . 6 6 6 6 6 6 6 6 8 . . . . . 
            . . 6 6 6 6 6 6 6 6 8 8 . . . . 
            . . . 6 6 6 6 6 6 6 6 8 8 . . . 
            . . . 6 6 6 6 6 6 6 8 8 8 . . . 
            . . . . 6 6 6 6 6 8 8 8 8 . . . 
            . . . . . 8 8 8 8 8 8 8 f . . . 
            . . . f f f 8 8 8 8 8 8 f f . . 
            . . f f f f f 8 8 8 f f f f f . 
            . . f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f 6 . . . . . . . . 
            . . . . f f f 6 6 . . . . . . . 
            . . . . 6 6 6 6 6 . . . . . . . 
            . . . . 6 9 6 6 6 6 . . . . . . 
            . . . . 6 6 9 6 6 6 6 . . . . . 
            . . . 6 6 6 9 6 6 6 6 . . . . . 
            . . . 6 6 6 6 6 6 6 6 6 . . . . 
            . . . 6 6 6 6 6 6 6 6 6 . . . . 
            . . . 6 6 6 6 6 6 6 6 8 . . . . 
            . . . 6 6 6 6 6 6 6 6 8 . . . . 
            . . . . 8 6 6 6 6 6 8 8 . . . . 
            . . . f f 8 8 6 6 8 8 8 f f . . 
            . . f f f f f 8 8 8 f f f f f . 
            . . f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 6 f f f 6 . . . . . . 
            . . . . . 6 6 6 6 6 . . . . . . 
            . . . . 6 6 6 6 9 6 6 . . . . . 
            . . . . 6 6 6 6 6 9 6 . . . . . 
            . . . . 6 6 6 6 6 9 6 . . . . . 
            . . . . 6 6 6 6 6 6 6 . . . . . 
            . . . 8 6 6 6 6 6 6 6 8 . . . . 
            . . . 8 8 6 6 6 6 6 8 8 . . . . 
            . . . 8 8 6 6 6 6 6 8 8 . . . . 
            . . . 8 8 8 6 6 6 8 8 8 . . . . 
            . . f f 8 8 8 6 8 8 8 f f . . . 
            . f f f f f 8 8 8 f f f f f . . 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 6 f f . . . . . 
            . . . . . . . 6 6 f f f . . . . 
            . . . . . . . 6 6 6 6 6 . . . . 
            . . . . . . 6 6 6 6 9 6 . . . . 
            . . . . . 6 6 6 6 9 6 6 . . . . 
            . . . . . 6 6 6 6 9 6 6 6 . . . 
            . . . . 6 6 6 6 6 6 6 6 6 . . . 
            . . . . 6 6 6 6 6 6 6 6 6 . . . 
            . . . . 8 6 6 6 6 6 6 6 6 . . . 
            . . . . 8 6 6 6 6 6 6 6 6 . . . 
            . . . . 8 8 6 6 6 6 6 8 . . . . 
            . . f f 8 8 8 6 6 8 8 f f . . . 
            . f f f f f 8 8 8 f f f f f . . 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 6 f f . . 
            . . . . . . . . . 6 6 6 f f f . 
            . . . . . . . 6 6 6 9 6 6 f f . 
            . . . . . . 6 6 9 9 6 6 6 6 6 . 
            . . . . . 8 6 6 6 6 6 6 6 6 . . 
            . . . . 8 8 6 6 6 6 6 6 6 6 . . 
            . . . 8 8 6 6 6 6 6 6 6 6 . . . 
            . . . 8 8 8 6 6 6 6 6 6 6 . . . 
            . . . 8 8 8 8 6 6 6 6 6 . . . . 
            . . . f 8 8 8 8 8 8 8 . . . . . 
            . . f f 8 8 8 8 8 8 f f f . . . 
            . f f f f f 8 8 8 f f f f f . . 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
        tiles.placeOnTile(myEnemy, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        myEnemy.ay = 300
    }
    for (let value of tiles.getTilesByType(assets.tile`tile72`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            5 5 . . . . . . . . . . . . . . 
            5 5 5 . . . . . . . . . . . . . 
            5 4 5 5 5 5 5 5 . . . . . . . . 
            5 4 4 4 5 5 5 5 5 5 5 . . . . . 
            5 5 5 4 5 5 5 5 5 5 5 5 5 . . . 
            5 5 5 5 5 5 5 5 5 4 4 5 5 5 5 . 
            4 4 4 4 4 4 4 5 5 5 4 4 5 5 5 5 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile72`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile73`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            5 . . . . . . . . . . . . . . . 
            5 5 5 . . . . . . . . . . . . . 
            5 5 5 5 5 . . . . . . . . . . . 
            4 4 5 5 5 5 5 5 . . . . . . 5 5 
            5 5 4 5 5 5 5 5 5 5 5 5 5 5 4 4 
            5 5 4 5 5 5 5 5 5 5 5 5 4 4 4 5 
            5 5 5 5 4 4 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 4 4 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile73`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile74`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            5 . . . . . . . . . . . . . . . 
            5 . . . . . . . . . . . . . . . 
            5 . . . . . . . . . . . . . . . 
            4 5 . . . . . . 5 5 5 5 5 . . . 
            5 5 5 . . . . 5 5 5 5 5 5 5 5 5 
            5 5 5 5 . 5 5 5 5 5 5 5 4 4 4 4 
            5 4 5 5 5 5 5 5 5 5 5 4 4 5 5 5 
            5 5 4 5 5 5 5 4 4 4 4 5 5 5 5 5 
            5 5 4 4 5 5 4 4 5 5 5 5 5 5 5 5 
            5 5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 4 4 4 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 4 4 4 5 5 
            4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 4 4 5 5 5 4 4 4 5 5 5 5 5 5 5 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile74`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile75`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 5 5 5 
            . . . . . . . . . . . 5 5 5 5 5 
            . . . . . . . . . 5 5 4 4 4 4 5 
            . . . . . . . 5 5 5 5 5 5 5 5 5 
            . . . . . 5 5 4 4 5 5 5 5 5 5 5 
            5 5 5 5 5 5 4 4 5 5 4 4 4 4 4 4 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile75`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile76`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 5 
            . . . . . . . . . . . . . . 5 5 
            . . . . . . . . . . . . . 5 5 4 
            . . . . . . . . . . . . 5 5 5 5 
            5 5 5 5 5 5 . . . . . 5 5 4 4 5 
            5 5 4 5 5 5 5 5 5 5 5 5 4 4 5 5 
            5 5 5 4 4 5 5 5 5 5 5 4 4 5 5 5 
            5 5 5 5 4 5 5 4 4 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 4 4 4 4 5 5 5 5 5 5 5 5 4 5 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile76`)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (personaje.vy == 0) {
        personaje.vy = -130
        animation.runImageAnimation(
        personaje,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . f f f f 6 6 6 6 6 . . . . . 
            . f f f f 6 6 f f f f 6 . . . . 
            . f f f 6 6 f f f f f f f . . . 
            . f f 6 f f f f f f f f f . . . 
            . f 8 6 1 f f f f f f f f . . . 
            . f 8 6 6 f 6 9 9 1 1 f f . . . 
            . f 8 8 8 f 6 9 9 9 9 f . . . . 
            . f f f f f f f f f f f . . . . 
            . . f f f f f f f f f . . . . . 
            . . . f f 8 f f 4 5 f . . . . . 
            . . . f f 8 f f 4 4 f . . . . . 
            . . f f f 1 f f f f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . f f f 6 6 6 6 6 6 . . . . . 
            . f f f 6 6 f f f f 6 . . . . . 
            . f f 6 6 f f f f f f f . . . . 
            . f 6 f f f f f f f f f . . . . 
            . 8 6 1 f f f f f f f f . . . . 
            . 8 6 6 f 6 9 9 1 1 f f . . . . 
            . 8 8 8 f 6 9 9 9 9 f f . . . . 
            . f f f f f f f f f f f . . . . 
            . . f f f f f f f f f . . . . . 
            . . . f 8 f f 4 5 f f . . . . . 
            . . . f 8 f f 4 4 f f . . . . . 
            . . f f d f f f f f f . . . . . 
            . . f f f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . f f 6 6 6 6 6 6 f . . . . . 
            . f f 6 6 f f f f f 6 . . . . . 
            . f 6 6 f f f f f f f 6 . . . . 
            . 6 f f f f f f f f f f . . . . 
            . 6 1 f f f f f f f f f . . . . 
            . 6 6 f 6 9 9 1 1 f f f . . . . 
            . 8 8 f 6 9 9 9 9 f f f . . . . 
            . f f f f f f f f f f f . . . . 
            . . f f f f f f f f . . . . . . 
            . . . 8 f f 4 5 f f . . . . . . 
            . . 8 d f f 4 4 f f . . . . . . 
            . . . f f f f f f f f . . . . . 
            . . f f f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . f 6 6 6 6 6 6 6 f . . . . . 
            . f 6 6 f f f f f f 6 . . . . . 
            . 6 6 f f f f f f f f 6 . . . . 
            . f f f f f f f f f f f . . . . 
            . 1 f f f f f f f f f 8 . . . . 
            . 6 f f 6 9 9 1 1 f f 8 . . . . 
            . 8 f f 6 9 9 9 9 f f 8 . . . . 
            . f f f f f f f f f f f . . . . 
            . . f f f f f f f f . . . . . . 
            . . . 8 f 4 5 f f f 8 . . . . . 
            . . . 8 f 4 4 f f f 8 . . . . . 
            . . . f f f f f f f f . . . . . 
            . . . f f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . f 6 6 6 6 6 6 f f . . . . . 
            . f 6 6 f f f f f 6 f . . . . . 
            . 6 6 f f f f f f f 6 f . . . . 
            . f f f f f f f f f f 6 . . . . 
            . f f f f f f f f f 8 6 . . . . 
            . f f 6 9 9 1 1 f f 8 6 . . . . 
            . f f 6 9 9 9 9 f f 8 8 . . . . 
            . f f f f f f f f f f f . . . . 
            . . f f f f f f f f . . . . . . 
            . . . . 4 5 f f f 8 . . . . . . 
            . . . . 4 4 f f f 8 . . . . . . 
            . . . f f f f f f d f . . . . . 
            . . . f f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . 6 6 6 6 6 6 f f f . . . . . 
            . 6 6 f f f f 6 6 f f . . . . . 
            . 6 f f f f f f 6 6 f f . . . . 
            . f f f f f f f f f 6 f . . . . 
            . f f f f f f f f 8 6 1 . . . . 
            . f 6 9 9 1 1 f f 8 6 6 . . . . 
            . f 6 9 9 9 9 f f 8 8 8 . . . . 
            . f f f f f f f f f f f . . . . 
            . . f f f f f f f f . . . . . . 
            . . . . 5 f f f 8 f . . . . . . 
            . . . . 4 f f f 8 f . . . . . . 
            . . . f f f f f d f f . . . . . 
            . . . f f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . 6 6 6 6 6 f f f f . . . . . 
            . 6 f f f f 6 6 f f f . . . . . 
            . f f f f f f 6 6 f f f . . . . 
            . f f f f f f f f 6 f f . . . . 
            . f f f f f f f 8 6 1 f . . . . 
            . 6 9 9 1 1 f f 8 6 6 f . . . . 
            . 6 9 9 9 9 f f 8 8 8 f . . . . 
            . f f f f f f f f f f f . . . . 
            . . f f f f f f f f . . . . . . 
            . . . . f f f 8 f f . . . . . . 
            . . . . f f f 8 f f . . . . . . 
            . . . f f f f d f f f . . . . . 
            . . . f f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . 6 6 6 6 6 f f f f f . . . . . 
            . f f f f 6 6 f f f f . . . . . 
            . f f f f f 6 6 f f f f . . . . 
            . f f f f f f f 6 f f f . . . . 
            . f f f f f f 8 6 1 f f . . . . 
            . 6 9 1 1 f f 8 6 6 f f . . . . 
            . 6 9 9 9 f f 8 8 8 f f . . . . 
            . f f f f f f f f f f f . . . . 
            . . f f f f f f f f . . . . . . 
            . . . . f f 8 f f f . . . . . . 
            . . . . f f 8 f f f . . . . . . 
            . . . f f f d f f f f . . . . . 
            . . . f f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . 6 6 6 6 f f f f f f . . . . . 
            . f f f 6 6 f f f f f . . . . . 
            . f f f f 6 6 f f f f f . . . . 
            . f f f f f f 6 f f f f . . . . 
            . f f f f f 8 6 1 f f f . . . . 
            . 9 1 1 f f 8 6 6 f f f . . . . 
            . 9 9 9 f f 8 8 8 f f f . . . . 
            . f f f f f f f f f f f . . . . 
            . . f f f f f f f f . . . . . . 
            . . . . f 8 f f f f 8 . . . . . 
            . . . . f 8 f f f f 8 . . . . . 
            . . . f f d f f f f f . . . . . 
            . . . f f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . 6 6 6 f f f f f f f . . . . . 
            . f f 6 6 f f f f f f . . . . . 
            . f f f 6 6 f f f f f f . . . . 
            . f f f f f 6 f f f f f . . . . 
            . f f f f 8 6 1 f f f f . . . . 
            . 1 f f f 8 6 6 f f f f . . . . 
            . 9 f f f 8 8 8 f f f f . . . . 
            . f f f f f f f f f f f . . . . 
            . . f f f f f f f f . . . . . . 
            . . . . 8 f f f f 8 . . . . . . 
            . . . . 8 f f f f f 8 . . . . . 
            . . . f d f f f f d f . . . . . 
            . . . f f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . 6 6 f f f f f f f f . . . . . 
            . f 6 6 f f f f f f f . . . . . 
            . f f 6 6 f f f f f f f . . . . 
            . f f f f 6 f f f f f f . . . . 
            . f f f 8 6 1 f f f f f . . . . 
            . f f f 8 6 6 f f f f f . . . . 
            . f f f 8 8 8 f f f f f . . . . 
            . f f f f f f f f f f f . . . . 
            . . f f f f f f f f . . . . . . 
            . . . . f f f f f 8 . . . . . . 
            . . . . f f f f f 8 . . . . . . 
            . . . f f f f f f d f . . . . . 
            . . . f f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . f f f f 6 6 6 6 6 . . . . . 
            . f f f f 6 6 f f f f 6 . . . . 
            . f f f 6 6 f f f f f f f . . . 
            . f f 6 f f f f f f f f f . . . 
            . f 8 6 1 f f f f f f f f . . . 
            . f 8 6 6 f 6 9 9 1 1 f f . . . 
            . f 8 8 8 f 6 9 9 9 9 f . . . . 
            . f f f f f f f f f f f . . . . 
            . . f f f f f f f f f . . . . . 
            . . . f f 8 f f 4 5 f . . . . . 
            . . . f f 8 f f 4 4 f . . . . . 
            . . f f f 1 f f f f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        60,
        false
        )
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    personaje,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . 6 6 6 6 6 f f f f . . 
        . . . . 6 f f f f 6 6 f f f f . 
        . . . f f f f f f f 6 6 f f f . 
        . . . f f f f f f f f f 6 f f . 
        . . . f f f f f f f f 1 6 8 f . 
        . . . f f 1 1 9 9 6 f 6 6 8 f . 
        . . . . f 9 9 9 9 6 f 8 8 8 f . 
        . . . . f f f f f f f f f f f . 
        . . . . . f f f f f f f f f . . 
        . . . . . . f 5 4 f 8 f f . . . 
        . . . . . . f 4 4 f 8 f f . . . 
        . . . . . f f f f f d f f f . . 
        . . . . . f f f f f f f f f . . 
        . . . . . . 8 8 . . 8 8 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . 6 6 6 6 6 f f f f . . 
        . . . . 6 f f f f 6 6 f f f f . 
        . . . f f f f f f f 6 6 f f f . 
        . . . f f f f f f f f f 6 f f . 
        . . . f f f f f f f f 1 6 8 f . 
        . . . f f 1 1 9 9 6 f 6 6 8 f . 
        . . . . f 9 9 9 9 6 f 8 8 8 f . 
        . . . . f f f f f f f f f f f . 
        . . . . . f f f f f f f f f . . 
        . . . . . . f 5 4 f 8 f f . . . 
        . . . . . . f 4 4 f 8 f f . . . 
        . . . . . f f f f f d f f f . . 
        . . . . 8 f f f f f f f f f . . 
        . . . . . 8 . . . 8 8 . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . 6 6 6 6 6 f f f f . . 
        . . . . 6 f f f f 6 6 f f f f . 
        . . . f f f f f f f 6 6 f f f . 
        . . . f f f f f f f f f 6 f f . 
        . . . f f f f f f f f 1 6 8 f . 
        . . . f f 1 1 9 9 6 f 6 6 8 f . 
        . . . . f 9 9 9 9 6 f 8 8 8 f . 
        . . . . f f f f f f f f f f f . 
        . . . . . f f f f f f f f f . . 
        . . . . . . f 5 4 f 8 f f . . . 
        . . . . . . f 4 4 f 8 f f . . . 
        . . . . . f f f f f d f f f . . 
        . . . . . f f f f f f f f f . . 
        . . . . . . 8 8 . . 8 8 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . 6 6 6 6 6 f f f f . . 
        . . . . 6 f f f f 6 6 f f f f . 
        . . . f f f f f f f 6 6 f f f . 
        . . . f f f f f f f f f 6 f f . 
        . . . f f f f f f f f 1 6 8 f . 
        . . . f f 1 1 9 9 6 f 6 6 8 f . 
        . . . . f 9 9 9 9 6 f 8 8 8 f . 
        . . . . f f f f f f f f f f f . 
        . . . . . f f f f f f f f f . . 
        . . . . . . f 5 4 f 8 f f . . . 
        . . . . . . f 4 4 f 8 f f . . . 
        . . . . . f f f f f d f f f . . 
        . . . . . f f f f f f f f f 8 . 
        . . . . . . 8 8 . . . . . 8 . . 
        `],
    200,
    false
    )
})
function level_2 () {
    personaje.say("1990 ¡Sigamos!", 2000)
    for (let value of tiles.getTilesByType(assets.tile`tile13`)) {
        meta = sprites.create(img`
            eeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeee
            e444444e2222222e
            e4fff44e2222222e
            efffff4e2222222e
            e4ddd44e2222552e
            e4ddd44e2225552e
            e11111ee222dd52e
            ef111fee222ddd2e
            efffffeeee11111e
            efffffeeeeefff4e
            efffffeeeeefff4e
            7fffff7777ffff47
            7fffff77777fff47
            7ff7ff77777fff47
            7ff7ff7777ffff47
            7ff7ff777fffff47
            7ff7ff777fffff47
            7777777777777777
            7777777777777777
            `, SpriteKind.goal)
        tiles.placeOnTile(meta, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile10`)) {
        myEnemy = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            . 8 8 8 8 8 8 8 8 5 5 5 8 8 8 . 
            . . 8 8 8 8 8 8 8 8 5 8 8 8 . . 
            . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 
            . 2 . f f f f f f f f f f f . . 
            . . 2 f 2 2 2 2 2 2 2 2 2 2 . . 
            . . . 2 2 2 2 2 f f f f f 2 . . 
            . . 2 f 2 2 2 2 2 2 2 2 2 2 . . 
            . . . f f f f f f f f f f f . . 
            . . . . f f f f f f f f f . . . 
            . . . . . f f e f f e 4 f . . . 
            . . . . . f f e f f e e f . . . 
            . . . . f f f d f f f f f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . . e e . . . e e . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        myEnemy,
        [img`
            . . . . . . . . . . . . . . . . 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            . 8 8 8 8 8 8 8 8 5 5 5 8 8 8 . 
            . . 8 8 8 8 8 8 8 8 5 8 8 8 . . 
            . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 
            . 2 . f f f f f f f f f f f . . 
            . . 2 f 2 2 2 2 2 2 2 2 2 2 . . 
            . . . 2 2 2 2 2 f f f f f 2 . . 
            . . 2 f 2 2 2 2 2 2 2 2 2 2 . . 
            . . . f f f f f f f f f f f . . 
            . . . . f f f f f f f f f . . . 
            . . . . . f f e f f e 4 f . . . 
            . . . . . f f e f f e e f . . . 
            . . . . f f f d f f f f f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . . e e . . . e e . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            . 8 8 8 8 8 8 8 8 5 5 5 8 8 8 . 
            . . 8 8 8 8 8 8 8 8 5 8 8 8 . . 
            . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 
            . . . f f f f f f f f f f f . . 
            . 2 2 f 2 2 2 2 2 2 2 2 2 2 . . 
            . . . 2 2 2 2 2 f f f f f 2 . . 
            . . 2 f 2 2 2 2 2 2 2 2 2 2 . . 
            . . . f f f f f f f f f f f . . 
            . . . . f f f f f f f f f . . . 
            . . . . . f f e f f e 4 f . . . 
            . . . . . f f e f f e e f . . . 
            . . . . f f f d f f f f f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . . . e e . . . e e . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            . 8 8 8 8 8 8 8 8 5 5 5 8 8 8 . 
            . . 8 8 8 8 8 8 8 8 5 8 8 8 . . 
            . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 
            . . . f f f f f f f f f f f . . 
            . . 2 f 2 2 2 2 2 2 2 2 2 2 . . 
            . 2 . 2 2 2 2 2 f f f f f 2 . . 
            . . . f 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 f f f f f f f f f f f . . 
            . . . . f f f f f f f f f . . . 
            . . . . . f f e f f e 4 f . . . 
            . . . . . f f e f f e e f . . . 
            . . . . f f f d f f f f f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . . . . e e . . . e e . 
            `,img`
            . . . . . . . . . . . . . . . . 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            . 8 8 8 8 8 8 8 8 5 5 5 8 8 8 . 
            . . 8 8 8 8 8 8 8 8 5 8 8 8 . . 
            . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 
            . . . f f f f f f f f f f f . . 
            . . 2 f 2 2 2 2 2 2 2 2 2 2 . . 
            . 2 . 2 2 2 2 2 f f f f f 2 . . 
            . . . f 2 2 2 2 2 2 2 2 2 2 . . 
            . 2 2 f f f f f f f f f f f . . 
            . . . . f f f f f f f f f . . . 
            . . . . . f f e f f e 4 f . . . 
            . . . . . f f e f f e e f . . . 
            . . . . f f f d f f f f f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . e e . . . e e . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            . 8 8 8 8 8 8 8 8 5 5 5 8 8 8 . 
            . . 8 8 8 8 8 8 8 8 5 8 8 8 . . 
            . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 
            . . . f f f f f f f f f f f . . 
            . 2 2 f 2 2 2 2 2 2 2 2 2 2 . . 
            . . . 2 2 2 2 2 f f f f f 2 . . 
            . . . f 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 f f f f f f f f f f f . . 
            . . . . f f f f f f f f f . . . 
            . . . . . f f e f f e 4 f . . . 
            . . . . . f f e f f e e f . . . 
            . . . . f f f d f f f f f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . e e . . . e e . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            . 8 8 8 8 8 8 8 8 5 5 5 8 8 8 . 
            . . 8 8 8 8 8 8 8 8 5 8 8 8 . . 
            . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 
            . 2 . f f f f f f f f f f f . . 
            . . 2 f 2 2 2 2 2 2 2 2 2 2 . . 
            . . . 2 2 2 2 2 f f f f f 2 . . 
            . . 2 f 2 2 2 2 2 2 2 2 2 2 . . 
            . . . f f f f f f f f f f f . . 
            . . . . f f f f f f f f f . . . 
            . . . . . f f e f f e 4 f . . . 
            . . . . . f f e f f e e f . . . 
            . . . . f f f d f f f f f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . . e e . . . e e . . . 
            `],
        200,
        true
        )
        tiles.placeOnTile(myEnemy, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        myEnemy.ay = 300
    }
    for (let value of tiles.getTilesByType(assets.tile`tile57`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            2 2 . . . . . . . . . . . . . . 
            5 2 2 2 . . . . . . . . . . . . 
            5 5 5 2 2 . . . . . . . . . . . 
            5 5 5 5 e e e e e e e . . . . . 
            3 3 3 3 2 2 3 e e e e e 6 6 . . 
            7 7 7 3 3 5 5 5 5 3 e e e e 6 6 
            6 6 6 7 8 8 8 8 8 5 5 5 5 5 3 c 
            6 6 6 6 7 7 7 8 8 8 8 8 8 3 3 3 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile57`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile58`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            7 7 . . . . . . . . . . . . . . 
            4 7 7 7 . . . . . . . . . . . 5 
            4 4 4 7 . . . . . . . . . . 5 5 
            e e 4 7 7 . . . . 3 3 3 5 5 5 5 
            e e e e 7 7 3 3 3 3 9 9 9 9 9 5 
            e e e e e 7 7 7 3 9 4 4 4 4 4 4 
            8 2 e e e e e 9 9 4 4 4 e e e e 
            8 8 2 2 9 9 9 9 4 4 e e e e e e 
            8 8 8 8 2 2 7 7 7 e e 7 7 7 7 7 
            a a 8 8 8 2 2 7 7 7 7 7 7 7 7 6 
            a a a 8 8 8 2 2 2 2 2 2 2 2 6 6 
            a a a a a a a a a a 4 4 4 6 6 6 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile58`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile59`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            5 . . . . . . . . . . . . . . . 
            5 5 5 . . . . . . . . . . . . . 
            5 5 5 5 5 . . . . . . . . . . . 
            5 5 5 5 5 5 5 . . . . . . . 3 3 
            4 4 4 4 4 5 5 5 3 3 3 3 3 3 3 3 
            e 4 4 4 8 8 8 8 3 3 3 3 3 3 4 4 
            e e e 8 8 8 8 3 b b 9 9 9 9 a a 
            7 7 e e b b b b b 9 9 a a a a 2 
            6 7 7 e e b b 9 9 9 a a a 2 2 2 
            6 6 7 7 7 e 9 9 a a a 2 2 2 2 2 
            6 6 6 6 7 7 7 7 7 2 2 2 2 2 2 2 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile59`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile60`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 3 3 3 . . . 
            . . . . . . . . 3 3 3 3 3 3 3 3 
            . . . . . . . . 3 3 3 3 3 3 3 3 
            3 3 3 . . 3 3 3 3 8 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 8 8 8 c a 3 3 3 
            4 4 4 3 3 3 3 8 8 e 7 6 a b b 3 
            a a 4 4 3 e e e e 7 7 6 9 9 9 b 
            2 a a 4 e e e 8 7 7 7 7 6 6 9 9 
            2 2 a 4 4 7 7 7 7 5 5 8 8 6 6 6 
            2 2 2 a a 7 5 5 5 5 5 5 8 8 8 8 
            2 2 2 2 2 2 2 2 2 5 5 5 5 5 8 8 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile60`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile61`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 . . . . 
            3 . . . . . . 2 2 2 2 2 2 2 2 . 
            3 3 5 5 2 2 2 2 4 4 4 5 2 2 2 2 
            3 3 3 5 5 5 4 4 4 4 3 3 5 5 5 5 
            3 3 3 5 5 5 4 e e 3 8 3 3 5 5 5 
            3 b 3 3 5 5 e e 2 8 8 8 8 3 3 5 
            b b b 3 3 5 5 2 8 8 7 7 7 7 3 3 
            9 9 b b 3 a a 8 8 7 7 6 6 6 7 7 
            6 6 9 9 3 3 a a a a 6 e e 6 6 6 
            8 8 8 9 9 3 e e e e e e e e 6 6 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile61`)
    }
}
function level_1 () {
    personaje.say("2005 ¡Vamos!", 2000)
    for (let value of tiles.getTilesByType(assets.tile`tile13`)) {
        meta = sprites.create(img`
            44eeeeeeeeeeeeee44...
            4eeeeeeeeeeeeeeee4...
            4eee5eeeeeeee5eee4e..
            44ee5eeeeeeee5ee44e..
            efff5555555555ffffe..
            .efffffffffffffffffe.
            .efffffffffffff9fffe.
            ..effffff1ffff919fffe
            ..e196ee196ee91968e6e
            .11999861998919919998
            19968999869199689919e
            68eeeeeee98968eeee96e
            4eeeeeeeeeeeeeeeeee8e
            4eeeeeeeeeeeeeeeeee4e
            44eeeeeeeeeeeeeeee44.
            `, SpriteKind.goal)
        tiles.placeOnTile(meta, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile10`)) {
        myEnemy = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f f f f f f f f . . . . 
            . . f f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . f 2 4 4 5 5 1 2 5 5 1 2 . . 
            . . f 2 4 4 4 5 5 2 4 5 5 2 . . 
            . . f f 2 2 2 2 2 2 2 2 2 . . . 
            . . f f f f f f f f f f f . . . 
            . . . f f f f f f f f f . . . . 
            . . . . f f 2 f f 4 5 f . . . . 
            . . . . f f 2 f f 4 4 f . . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . 2 2 . . . 2 2 . . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        myEnemy,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f f f f f f f f . . . . 
            . . f f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . f 2 4 4 5 5 1 2 5 5 1 2 . . 
            . . f 2 4 4 4 5 5 2 4 5 5 2 . . 
            . . f f 2 2 2 2 2 2 2 2 2 . . . 
            . . f f f f f f f f f f f . . . 
            . . . f f f f f f f f f . . . . 
            . . . . f f 2 f f 4 5 f . . . . 
            . . . . f f 2 f f 4 4 f . . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . 2 2 . . . 2 2 . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f f f f f f f f . . . . 
            . . f f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . f 2 4 4 5 5 1 2 5 5 1 2 . . 
            . . f 2 4 4 4 5 5 2 4 5 5 2 . . 
            . . f f 2 2 2 2 2 2 2 2 2 . . . 
            . . f f f f f f f f f f f . . . 
            . . . f f f f f f f f f . . . . 
            . . . . f f 2 f f 4 5 f . . . . 
            . . . . f f 2 f f 4 4 f . . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . . 2 2 . . . 2 2 . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f f f f f f f f . . . . 
            . . f f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . f 2 4 4 5 5 1 2 5 5 1 2 . . 
            . . f 2 4 4 4 5 5 2 4 5 5 2 . . 
            . . f f 2 2 2 2 2 2 2 2 2 . . . 
            . . f f f f f f f f f f f . . . 
            . . . f f f f f f f f f . . . . 
            . . . . f f 2 f f 4 5 f . . . . 
            . . . . f f 2 f f 4 4 f . . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . . . 2 2 . . . 2 . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f f f f f f f f . . . . 
            . . f f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . f 2 4 4 5 5 1 2 5 5 1 2 . . 
            . . f 2 4 4 4 5 5 2 4 5 5 2 . . 
            . . f f 2 2 2 2 2 2 2 2 2 . . . 
            . . f f f f f f f f f f f . . . 
            . . . f f f f f f f f f . . . . 
            . . . . f f 2 f f 4 5 f . . . . 
            . . . . f f 2 f f 4 4 f . . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . f f f f f f f f f f . . . 
            . . . 2 . . . . 2 2 . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f f f f f f f f . . . . 
            . . f f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . f 2 4 4 5 5 1 2 5 5 1 2 . . 
            . . f 2 4 4 4 5 5 2 4 5 5 2 . . 
            . . f f 2 2 2 2 2 2 2 2 2 . . . 
            . . f f f f f f f f f f f . . . 
            . . . f f f f f f f f f . . . . 
            . . . . f f 2 f f 4 5 f . . . . 
            . . . . f f 2 f f 4 4 f . . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . f f f f f f f f f f . . . 
            . . . 2 2 . . . . 2 2 . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f f f f f f f f . . . . 
            . . f f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . f 2 4 4 5 5 1 2 5 5 1 2 . . 
            . . f 2 4 4 4 5 5 2 4 5 5 2 . . 
            . . f f 2 2 2 2 2 2 2 2 2 . . . 
            . . f f f f f f f f f f f . . . 
            . . . f f f f f f f f f . . . . 
            . . . . f f 2 f f 4 5 f . . . . 
            . . . . f f 2 f f 4 4 f . . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . f f f f f f f f f f . . . 
            . . . . 2 2 . . . . 2 2 . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f f f f f f f f . . . . 
            . . f f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . f 2 4 4 5 5 1 2 5 5 1 2 . . 
            . . f 2 4 4 4 5 5 2 4 5 5 2 . . 
            . . f f 2 2 2 2 2 2 2 2 2 . . . 
            . . f f f f f f f f f f f . . . 
            . . . f f f f f f f f f . . . . 
            . . . . f f 2 f f 4 5 f . . . . 
            . . . . f f 2 f f 4 4 f . . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . 2 2 . . . 2 2 . . . . 
            `],
        200,
        true
        )
        tiles.placeOnTile(myEnemy, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        myEnemy.ay = 300
    }
    for (let value of tiles.getTilesByType(assets.tile`tile35`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            7 7 7 . . . . . . . . . . . . . 
            5 5 7 7 . . . . . . . . . . . . 
            7 5 5 7 7 7 7 7 7 7 7 7 7 . . . 
            7 7 7 7 7 7 5 5 5 5 5 5 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 5 5 5 5 5 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile35`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile36`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            7 . . . . . . . . . . . . . . . 
            7 7 7 7 7 . . . . . . . . . . . 
            7 5 5 5 7 7 7 . . . . . . . . . 
            7 7 7 5 5 5 7 7 7 7 . . . . . . 
            7 7 7 7 7 7 7 7 7 7 7 7 . . . . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile36`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile37`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 7 5 
            . . . . . . . . . . . . . . 7 5 
            . . . . . . . . . . . . . . 7 5 
            . . . . . . . . . . . . . 7 7 7 
            . . . . . . . . . . . . 7 7 7 7 
            . . . . . . . . . . 7 7 7 7 7 7 
            . . . . . . . . . 7 7 5 5 5 7 7 
            . . . . . . . . . 7 7 7 7 7 7 7 
            . . . . . . . . 7 7 7 7 7 7 7 7 
            . . . . . . . 7 7 7 7 7 7 7 7 7 
            . . . . 7 7 . 7 7 7 7 7 7 7 7 7 
            . . 7 7 7 5 7 7 7 7 7 7 7 7 7 7 
            . 7 7 7 7 5 5 5 5 7 7 7 7 7 7 7 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile37`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile38`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            7 . . . . . . . . . . . . . . . 
            7 7 7 7 7 7 . . . . . . . 7 7 7 
            7 5 5 5 7 7 . . . . 7 7 7 7 5 5 
            7 7 7 5 5 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 5 5 5 5 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 5 5 5 5 5 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile38`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile39`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            7 . . . . . . . . . . . . . . . 
            7 7 7 . . . . . . . . . . . . . 
            7 7 7 7 . . . . . . . . . . . . 
            7 5 7 7 7 . . . . . . . . . . . 
            7 5 5 7 7 7 7 7 7 7 7 7 7 . . . 
            7 7 5 5 5 5 5 5 7 7 7 7 7 7 . . 
            7 7 7 7 7 7 7 7 7 7 7 5 5 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 5 5 5 5 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 5 5 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 5 5 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 5 5 5 5 5 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile39`)
    }
}
function createlevel () {
    cleanlevel()
    info.setLife(3)
    info.setScore(0)
    if (level == 0) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777667777777777777777777777
            7777777777777777777777777777777777777777777777777777777667777777777777777777777777777777cc7777777777777777777777777777777777777777777776666777777777777667777777
            77777777777777777777777777777777777777777777177766777176667777777777776666c777777777776cccc777777777777777777777777777776666677777777666666cc7777777776666777777
            77777776777777777777777777777777c6666677777717766667717666777777777776666cc777777777766cccc77777777776677777777666777776666ccc7777777666966ccc777777776666677777
            7777776666777771776667777777777cc6666667777177666677717666777777777766696cc777777777796cccc7777777776666777777cc6677777666cccc7777777666966ccc777771776666677777
            7777776666767771766666777777777ccc666666777177666677717667777777177666696cc777777777796ccccc77777777666777777ccc6677777666cccc777777666696cccc777711766666677777
            777777766666777176666667777777cccc66666677717c666667777667777777177766696c77777777776996cccc77777777667777717ccc6677717796cccc777717669996cccc777717766666777777
            777711776666771176666667777177ccccc6666677717cc666677766677777771177669967777777777766966ccc777777776677777177cc6677717796cccc777717669666ccc7777117666666777777
            777771776667777777666667777177ccccc6666677717cc666666666677777777177699667777777771776996cc7777777776677777177cc6777717796cccc77771779966cccc7777177666667777777
            777771776667777777c66667777177cccc66666677717cc6666666696777777777179966c7777777771776696c7777777776667777117ccc6777117796cccc7777177666cccc77777177666667777777
            77777177666677777ccc6667777177cccc69666777717cc666666669677777777717666cc7777777771777996c7777777776667777777ccc6671177796ccc77777177766cccc77777177666667777777
            7777717766667777cccc6667777177cccc669667777177cc666666696c7777717117ccccc777777771177796c7777777776666677777cccc6677776696ccc777771177ccccc777777117766677777777
            77711777666666ccccccc677777177cccc669977777177cc666666966c777771117ccccccc77777111777966c77777717766666cccccccc66666666696ccc777777177ccccc777777717766677777777
            77717776666666ccccccc677777177ccccc66677771177cc666666966cc77777777cccccccc777777777996cc77777717766666cccccccc66666666996ccc7777771177cccc777777717766677777777
            777777766669666aaaaa6677777177aaaaaaaaa7777777aa6666669666a7777777aaaaaaaaa777777779966a7777777177666666aaaaaaa6666666996aaa77777777177aaaa777777717766677177777
            777777666666966aaaaa6777777177aaaaaaaaa777777aa66666669666aaaa77aaaaaaaaaaaa7777777666a77777777176666966aaaaaaaa669669966aaa77777777177aaaaa77777117666677117777
            7777776666669966aaaa6777777177aaaaaaaaaa77777aa666666669666aaaaaaaaaaaaaaaaaaa77776666a77777777176666966aaaaaaaa66966966aaaa77777777177aaaaa77771177666667711177
            7777666666666966aaaa6777777177aaaaaaaaaaaaaaaa6666666669666aaaaaaaaaaaaaaaaaaaaa6666aa777777777176666966aaaaaaaaa6999966aaaa77777777177aaaaaaaa77776666666777111
            aaa6666666666966aaaa77777771177aaaaaaaaaaaaaaa6666666669666aaaaaaaaaaaaaaaaaaaaaaaaaaa7777777771766669666aaaaaaaa666666aaaaa77777777177aaaaaaa666666666669777777
            aaa6666666666966aaaa77777771177aaaaaaaaaaaaaaa6966666669666aaaaaaaaaaaaaaaaaaaaaaaaaaa7777777711766669966aaaaaaaaaa666aaaaaa77777777177aaaaaaa666666666666966777
            aaa666666666696aaaaa77777111777aaaaaaaaaaaaaaa6966666669666aaaaaaaaaaaaaaaaaaaaaaaaaaa77777771177666669666aaaaaaaaaaaaaaaaaa7777777717aaaaaaaa666666666666966aaa
            aaaa66666669996aaaaa7777117777aaaaaaaaaaaaaaaa669666666966aaaaaaaaaaaaaaaaaaaaaaaaaaaa77771711777666669666aaaaaaaaaaaaaaaaaa7777777117aaaaaaaa66666666666696aaaa
            aaaa66699999666aaaaaa777777777aaaaaaaaaaaaaaaaa69966669666aaaaaaaaaaaaaaaaaaaaaaaaaaaaa7777111776666666966aaaaaaaaaaaaaaaaaaa77777117aaaaaaaaaa6666666666996aaaa
            aaaa6666666666aaaaaaaaa77777aaaaaaaaaaaaaaaaaaaa669999966aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa777777776666666966aaaaaaaaaaaaaaaaaaa77711177aaaaaaaaaa666666666996aaaaa
            aaaaa66666666aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa66666666aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa777777666666666966aaaaaaaaaaaaaaaaaaa77777777aaaaaaaaaa669666669966aaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa666666aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa77a6666666666966aaaaaaaaaaaaaaaaaaaa777777aaaaaaaaaaaa69996699666aaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa666666666696aaaaaaaaaaaaaaaaaaaaaa7777aaaaaaaaaaaaaa66999966aaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa69666666966aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa66666666aaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa6966666696aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb696666966bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66999966bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        tiles.setTilemap(tilemap`level1`)
    } else if (level == 1) {
        scene.setBackgroundImage(img`
            666999999661d9999999999661d91999999661d999999661d6666dddd1666727aeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccdd666ccccccccccccccccccccccccccccccccccccccccc
            666999999661d9999999999661d91999999661d999999661d66ddee7d166657eeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666999999661d9199999999661d99999999661d999999861dddee777d1666eeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666999999661d9199999999661d99999999661d99996668ddee77277d1666eeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666999999661d9199999999661d91999999661d996666ddee7277757d1666eeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666999999661d9199999999661d99999999661d6666ddee77777a77ed1666eeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccc1
            666999999661d9199999999661d99999999661d66ddee72757777eeed1666eeeeeeeecccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccc11
            666999999661d9999999999661d99999999861dddee777a7727eeeeed1666eeeeeecccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccc111
            666999999661d9999999999661d9999996668ddee72757777eeeeeeed1666eeeecccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccc1111
            666999999661d9199999999661d99996666ddee757a7277eeeeeeeeed1666eecccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccc11111
            666999999661d9999999999661d996666ddee77727777eeeeeeeeeeed1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccc111111
            66866666666666666666666666666666666666666666666666666666d166866666666666666666666666666666666666666666666666666666d166866666666666666666666666666666666666666666
            68666666666666666666666666666666666666666666666666666666d168666666666666666666666666666666666666666666666666666666d168666666666666666666666666666666666666666666
            86666666666666666666666666666666666666666666666666666666d186666666666666666666666666666666666666666666666666666666d186666666666666666666666666666666666666666666
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddd
            666999999661d99996666ddee75777277eeeeeeeeeeeeeeeecccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccc111111111111
            666999999661d996666ddee77a72777eeeeeeeeeeeeeeeecccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccc1111111111111
            666999999661d6666ddee72757777eeeeeeeeeeeeeeeecccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccc11111111111111
            666999999661d66ddee77777772eeeeeeeeeeeeeeeecccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccc1111111111111111
            666999999861dddee7277a777eeeeeeeeeeeeeeeecccccc999999999d166699999999999999999999999999999999999999999999999999999d166699999999999999999999999911111111111111111
            66699996668ddee77777277eeeeeeeeeeeeeeeecccccc99999999999d166699999999999999999999999999999999999999999999999999999d166699999999999999999999999991111111111111111
            666996666ddee57727777eeeeeeeeeeeeeeeeccccccc999999999999d166699999999999999999999999999999999999999999999999999999d166699999999999999999999999999999999999999999
            6666666ddee77777777eeeeeeeeeeeeeeeecccccccc9999999999999d166699999999999999999999999999999999999999999999999999999d166699999999999999999999999999999999999999999
            66666ddee77277a77eeeeeeeeeeeeeeeeccccccccc99999999999999d166699999999999999999999999999999999999999999999999999999d166699999999999999999999999999999999999999999
            666ddee77777727eeeeeeeeeeeeeeeecccccccccc666666666666666d166699999999999999999999999999999999999999999999999999999d166699999999999999999999999999999999999999999
            666ee777a7577eeeeeeeeeeeeeeeecccccccccccc666666666111116d166699999999999999999999999999999999999999999999999999999d166699999999999999999999999999999999999999999
            66627727777eeeeeeeeeeeeeeeecccccccccccccc666666666666666d166611119999999999999999999999999999999999999999999999999d166699999999999999999999999999999999999999999
            66677a777eeeeeeeeeeeeeeeeccccccccccccccc6666666666666666d166699991999966669996666999666699966669996666999666699966d166696666999666699966669996666999666699966669
            6667277eeeeeeeeeeeeeeeeccccccccccccccccc6666666666666666d166699999199966169996616999661699966169996616999661699966d166696616999661699966169996616999661699966169
            66677eeeeeeeeeeeeeeeecccccccccccccccccc66666666666666666d166699999199966169996616999661699966169996616999661699966d166696616999661699966169996616999661699966169
            666eeeeeeeeeeeeeeeeccccccccccccccccccc666666666666666666d166699999199966669996666999666699966669996666999666699966d166696666999666699966669996666999666699966669
            666eeeeeeeeeeeeeecccccccccccccccccccc6666666666666666666d166699989199966669996666999666699966669996666999666699966d166696666999666699966669996666999666699966669
            666eeeeeeeeeeeeccccccccccccccccccccc66666666666666666666d166699989199999999999999999999999999999999999999999999999d166699999999999999999999999999999999999999999
            666eeeeeeeeeecccccccccccccccccccccc666666666666666666666d166699989199999999999999999999999999999999999999999999999d166699999999999999999999999999999999999999999
            666eeeeeeeecccccccccccccccccccccc99999999999999999999999d166699999199999999999999999999999999999999999999999999999d166699999999999999999999999999999999999999999
            666eeeeeeccccccccccccccccccccccc999999999999999999999999d166699999199999999999999999999999999999999999999999999999d166699999999999999999999999999999999999999999
            666eeeecccccccccccccccccccccccc9999999999999999999999999d166699999199999999999999999999999999999999999999999999999d166699999999999999999999999999999999999999999
            666eeccccccccccccccccccccccccc99999999999999999999999999d166699999199999999999999999999999999999998888888888888899d166699999111111111111118888888999999999999999
            666cccccccccccccccccccccccccc999999999999999999999999999d166699991999999999999999999999999999999888888888888888888d166699999991111111111111188888889999999999999
            666cccccccccccccccccccccccccc999999999999999999999999999d166611119999999999988888888888888888888888888888888888888d166699999999991111111111111188888888888888888
            666cccccccccccccccccccccccccc999999999999999999999999999d166699999998888888811111111111111111111111111888888888888d166688999999999991111111111111888888111111111
            666ccccccccccccccccccccccccccc88888888888888888888888888d166688888881111111111111111111111111111111111111888888888d166688888999999999999111111111111888881111111
            666ccccccccccccccccc5ccccccccc11111111111111111111111111d166611111111111111111111111111111111111111111111111188888d166688888888899999999999111111111111888811111
            666cccccccccccccccc5ccccccccccc1111111111111111111111111d166611111111111111111111111111111111111111111111111111188d166688888888888899999999999111111111118888111
            666cccccccccccc8888888cccccccccc111111111111111111111111d166611111111111111111111111111111111111111111111111111111d166688888888888888899999999999111111111118881
            666ccccccccccc8fffffff8cccccccccc11111111111111111111111d166611111111111111111111111111111111111111111111111111111d166688888888888888888889999999999111111111188
            666cccccccccc8fffffffff8ccccccccccc111111111111111111111d166611111111111111111111111111111111111111111111111111111d166611118888888888888888889999999999911111111
            666ccccccccccffffffffffffcccccccccccc1111111111111111111d166611111111111111111111111111111111111111111111111111111d166611111118888888888888888889999999999911111
            666cccccccccc6ffffffffff6ccccc5ccccccccccccccccccccccc6.d1666cccccccccccccccccccccccccccccccccccccccccccccccccccc6d1666..6cccccccc888888888888888888999999999911
            666cccccccccc66ffffffff66cccc5ccccccccccccccccccccccc666d1666ccccccccccccccccccccccccccccccccccccccccccccccccccccfd1666.666cccccccccc888888888888888888999999999
            666cccccccccc66ffffffff66ccc5cccccccccccccccccccccccc6.6d1666cccccccccccccccccccccccccccccccccccccccccccccccccccffd1666.6.6cccccccccccccc88888888888888888999999
            666cccccccccc6ffffffffff6cc5cccccccccccccccccccccccccff6d1666cccccccccccccccccccccccccccccccccccccccccccccccccccffd1666.ff6ffccccccccccccccc88888888888888888899
            666cccccccccccffffffffffccfcccccccccccccccccccccccccfff6d1666cccccccccccccccccccccccccccccccccccccccccccccccccccffd1666fff6fffcccccccccccccccccc8888888888888888
            666ccccccccccc445444544cdfccccccccccccccccccccccccccffffd1666cccccccccccccccccccccccccccccccccccccccccccccccccccffd1666fffffffccccccccccccccccccccc8888888888888
            666cccccccccccc4555554ffccccccccccccccccccccccccccccffffd1666ccccccccccccccccccccccccccccccccccccccccccccccccccccfd1666fffffffccccccccccccccccccccccccc888888888
            666cccccccccccc45444544ccccccccccccccccccccccccccccccfffd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666fffffffcccccccccccccccccccccccccccc888888
            666cccccccccccffffffffffccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666fffffffcccccccccccccccccccccccccccccccc88
            666cccccccccccffffffffffccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cfffffccccccccccccccccccccccccccccccccccc
            666ccccccccccccc88ccc88cccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666cccccccccccccccccccccccccccccccccccccccccccccccccccccd1666ccccccccccccccccccccccccccccccccccccccccc
            66866666666666666666666666666666666666666666666666666666d166866666666666666666666666666666666666666666666666666666d166866666666666666666666666666666666666666666
            68666666666666666666666666666666666666666666666666666666d168666666666666666666666666666666666666666666666666666666d168666666666666666666666666666666666666666666
            86666666666666666666666666666666666666666666666666666666d186666666666666666666666666666666666666666666666666666666d186666666666666666666666666666666666666666666
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            `)
        tiles.setTilemap(tilemap`level2`)
    } else if (level == 2) {
        scene.setBackgroundImage(img`
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777555555555555555555555555555555555555555555555555555555555555777777775555555555555555555555555555555555555555555555555555555555557777777755555555555555555555
            7777776777777777777777777777777777777777777777777777777777777677777777777767777777777777777777777777777777777777777777777777777776777777777777677777777777777777
            7777776797779777977797779777977797779777977797779777977797779677777777777767977797779777977797779777977797779777977797779777977796777777777777679777977797779777
            7777776999799979997999799979997999799979997999799979997999799677777777777769997999799979997999799979997999799979997999799979997996777777777777699979997999799979
            7777776797779777977797779777977797779777977797779777977797779677777777777767977797779777977797779777977797779777977797779777977796777777777777679777977797779777
            7777776777777777777777777777777777777777777777777777777777777677777777777767777777777777777777777777777777777777777777777777777776777777777777677777777777777777
            7777776795555555555555555555555555555555555555555555555555579677777777777767955555555555555555555555555555555555555555555555555796777777777777679555555555555555
            777777699579997999799979997999799979997999799979997999799959967777777777776995ffffffffffffffffffffffffffffffffffffffffffffffff59967777777777776995ffffffffffffff
            777777679577977797779777977797779777977797779777977797779757967777777777776795ffffffffffffffffffffffffffffffffffffffffffffffff57967777777777776795ffffffffffffff
            777777677577777777777777777777777777777777777777777777777757767777777777776775ffffffffffffffffffffffffffffffffffffffffffffffff57767777777777776775ffffffffffffff
            777777679577977797779777977797779777977797779777977797779757967777777777776795ffffffffffffffffffffffffffffffffffffffffffffffff57967777777777776795ffffffffffffff
            777777699579997999799979997999799979997999799979997999799959967777777777776995ffffffffffffffffffffffffffffffffffffffffffffffff59967777777777776995ffffffffffffff
            777777679577977797779777977797779777977797779777977797779757967777777777776795ffffffffffffffffffffffffffffffffffffffffffffffff57967777777777776795ffffffffffffff
            777777677577777777777777777777777777777777777777777777777757767777777777776775ffffffffffffffffffffffffffffffffffffffffffffffff57767777777777776775ffffffffffffff
            777777679577977797779777977797779777977797779777977797779757967777777777776795ffffffffffffffffffffffffffffffffffffffffffffffff57967777777777776795ffffffffffffff
            777777699579997999799979997999799979997999799979997999799959967777777777776995ffffffffffffffffffffffffffffffffffffffffffffffff59967777777777776995ffffffffffffff
            777777679577977797779777977797779777977797779777977797779757967777777777776795ffffffffffffffffffffffffffffffffffffffffffffffff57967777777777776795ffffffffffffff
            777777677577777777777777777777777777777777777777777777777757767777777777776775ffffffffffffffffffffffffffffffffffffffffffffffff57767777777777776775ffffffffffffff
            777777679577977797779777977797779777977797779777977797779757967777777777776795ffffffffffffffffffffffffffffffffffffffffffffffff57967777777777776795ffffffffffffff
            777777699579997999799979997999799979997999799979997999799959967777777777776995ffffffffffffffffffffffffffffffffffffffffffffffff59967777777777776995ffffffffffffff
            777777679577977797779777977797779777977797779777977797779757967777777777776795fffffffffffffffffffffffeeeefffffffffffffffffffff57967777777777776795ffffffffffffff
            777777677577777777777777777777777777777777777777777777777757767777777777776775fffffffffffffffffeeeeefeeeefffffffffffffffffffff57767777777777776775ffffffffffffff
            777777679577977797779777977797779777977797779777977797779757967777777777776795fffffffffffffffffeeeeeeeeeeeffffffffffffffffffff57967777777777776795ffffffffffffee
            777777699579997999799979997999799979997999799979997999799959967777777777776995ffffffffffffffffeeeeeddddddeffffffffffffffffffff59967777777777776995ffffffffffffee
            777777679577977797779777977797779777977797779777977797779757967777777777776795ffffffffffffffffeeeeeddddddeffffffffffffffffffff57967777777777776795ffffffffffffed
            777777677577777777777777777777777777777777777777777777777757767777777777776775ffffffffffffffffeeeeedfdfddeffffffffffffffffffff57767777777777776775ffffffffffffed
            777777679577977797779777977797779777977797779777977797779757967777777777776795ffffffffffffffffeeeedeeeeddeffffffffffffffffffff57967777777777776795fffffffffffffd
            777777699579997999799979997999799979997999799979997999799959967777777777776995fffffffffffffffffeeedeffedeeffffffffffffffffffff59967777777777776995ffffffffffffff
            777777679577977797779777977797779777977797779777977797779757967777777777776795ffffffffffffffffeeeedeeeedeeeeffffffffffffffffff57967777777777776795fffffffffffff2
            777777677577777777777777777777777777777777777777777777777757767777777777776775fffffffffffffffeeeeeddeedeeeeeffffffffffffffffff57767777777777776775ffffffffffff22
            777777679577977797779777977797779777977797779777977797779757967777777777776795fffffffffffffffffeeeaaaaaeeeefffffffffffffffffff57967777777777776795ffffffffffff22
            777777699579997999799979997999799979997999799979997999799959967777777777776995fffffffffffffffffaaacccccccaffffffffffffffffffff59967777777777776995fffffffffff222
            777777679577977797779777977797779777977797779777977797779757967777777777776795ffffffffffffffffabaacccccccaaaffffffffffffffffff57967777777777776795fffffffffff222
            777777677577777777777777777777777777777777777777777777777757767777777777776775ffffffffffffffffaaaaccccccccaaafffffffffffffffff57767777777777776775fffffffffff22f
            777777679577977797779777977797779777977797779777977797779757967777777777776795ffffffffffffffffbbbbccccccccbbbfffffffffffffffff57967777777777776795fffffffffff22f
            777777699579997999799979997999799979997999799979997999799959967777777777776995ffffffffffffffffbbbbbcccccccbbbfffffffffffffffff59967777777777776995fffffffffff22f
            777777679577977797779777977797779777977797779777977797779757967777777777776795fffffffffffffffffbbbbcccccccbbbfffffffffffffffff57967777777777776795ffffffffffffef
            777777677577777777777777777777777777777777777777777777777757767777777777776775fffffffffffffffffbbbbcccccccbbbfffffffffffffffff57767777777777776775ffffffffffffef
            777777679577977797779777977797779777977797779777977797779757967777777777776795ffffffffffffffffffbbbaccccccbbbfffffffffffffffff57967777777777776795ffffffffffffef
            777777699579997999799979997999799979997999799979997999799959967777777777776995ffffffffffffffffffbbbaacccccaaafffffffffffffffff59967777777777776995ffffffffffffee
            777777679577977797779777977797779777977797779777977797779757967777777777776795fffffffffffffffffffaaaaaacccbbbfffffffffffffffff57967777777777776795ffffffffffffee
            777777677577777777777777777777777777777777777777777777777757767777777777776775fffffffffffffffffffaaabbbbccbbffffffffffffffffff57767777777777776775fffffffffffeee
            777777679577977797779777977797779777977797779777977797779757967777777777776795ffffffffffffffffffffccbbbbbaddffffffffffffffffff57967777777777776795ffffffffffeeee
            777777699579997999799979997999799979997999799979997999799959967777777777776995ffffffffffffffffffffccccbbbaddddffffffffffffffff59967777777777776995ffffffffffeeee
            777777679577977797779777977797779777977797779777977797779757967777777777776795ffffffffffffffffffffccccccbadddfffffffffffffffff57967777777777776795ffffffffffeeee
            777777677577777777777777777777777777777777777777777777777757767777777777776775ffffffffffffffffffffccccccccdddfffffffffffffffff57767777777777776775ffffffffffeeee
            777777679577977797779777977797779777977797779777977797779757967777777777776795ffffffffffffffffffffccccccccbfefffffffffffffffff57967777777777776795fffffffffeeeee
            777777699579997999799979997999799979997999799979997999799959967777777777776995ffffffffffffffffffffccccccccffefffffffffffffffff59967777777777776995fffffffffeeeee
            777777679577977797779777977797779777977797779777977797779757967777777777776795fffffffffffffffffffaaaaaaaaaffefffffffffffffffff57967777777777776795ffffffffeeeeee
            777777677577777777777777777777777777777777777777777777777757767777777777776775fffffffffffffffffffaaaaaaaaaffefffffffffffffffff57767777777777776775ddddddddeeeeee
            777777679577977797779777977797779777977797779777977797779757967777777777776795fffffffffffffffffffaaaaaaaaaafefffffffffffffffff57967777777777776795ddddddddeeeeee
            777777699579997999799979997999799979997999799979997999799959967777777777776995ffffffffffffffffffaaaaaaaaaaafefffffffffffffffff59967777777777776995dddddddeeeeeee
            777777679577977797779777977797779777977797779777977797779757967777777777776795ffffffffffffffffffaaaaaaaaaaafefffffffffffffffff57967777777777776795dddddddeeeeeee
            777777677577777777777777777777777777777777777777777777777757767777777777776775ffffffffffffffffffaaaaaaaaaaaaefffffffffffffffff57767777777777776775dddddddddddddd
            777777679577977797779777977797779777977797779777977797779757967777777777776795ffffffffffffffffffaaaaaaaaaaaaefffffffffffffffff57967777777777776795dddddddddddddd
            777777699579997999799979997999799979997999799979997999799959967777777777776995ffffffffffffffffffaaaaaaaaaaaaefffffffffffffffff59967777777777776995dddddddddddddd
            777777679577977797779777977797779777977797779777977797779757967777777777776795fffffffffffffffffffccccccccccfefffffffffffffffff57967777777777776795dddddddddddddd
            777777677577777777777777777777777777777777777777777777777757767777777777776775fffffffffffffffffffbbbbbbbbbbfefffffffffffffffff57767777777777776775dddddddddddddd
            777777679577977797779777977797779777977797779777977797779757967777777777776795fffffffffffffffffffbabbbbbbabfefffffffffffffffff57967777777777776795dddddddddddddd
            777777699579997999799979997999799979997999799979997999799959967777777777776995fffffffffffffffffffababbbbabafefffffffffffffffff59967777777777776995dddddddddddddd
            777777679577977797779777977797779777977797779777977797779757967777777777776795fffffffffffffffffffbbbaffabbbfefffffffffffffffff57967777777777776795dddddddddddddd
            777777677577777777777777777777777777777777777777777777777757767777777777776775fffffffffffffffffffbbbbffbbbbfefffffffffffffffff57767777777777776775dddddddddddddd
            777777679577977797779777977797779777977797779777977797779757967777777777776795fffffffffffffffffffbbbbffbbbbfefffffffffffffffff57967777777777776795dddddddddddddd
            777777699579997999799979997999799979997999799979997999799959967777777777776995fffffffffffffffffffaaaaffaaaafefffffffffffffffff59967777777777776995dddddddddddddd
            777777679577977797779777977797779777977797779777977797779757967777777777776795fffffffffffffffffffaaaaffaaaafefffffffffffffffff57967777777777776795dddddddddddddd
            7777776775555555555555555555555555555555555555555555555555577677777777777767755555555555555555555555555555555555555555555555555776777777777777677555555555555555
            7777776797779777977797779777977797779777977797779777977797779677777777777767977797779777977797779777977797779777977797779777977796777777777777679777977797779777
            7777776999799979995555555555555555555555555555555979997999799677777777777769997999799977555555555555555555555555555559799979997996777777777777699979997999755555
            777777679777977797555ffff5f5fffffffff5ff5fffff55577797779777967777777777776797779777977755f5ff5ffffffff5fff5ff5ffff557779777977796777777777777679777977797755ff5
            7777776777777777775555555555555555555555555555555777777777777677777777777767777777777777555555555555555555555555555557777777777776777777777777677777777777755555
            7777776797779777977797779777977797779777977797779777977797779677777777777767977797779777977797779777977797779777977797779777977796777777777777679777977797779777
            7777776999799979997999799979997999799979997999799979997999799677777777777769997999799979997999799979997999799979997999799979997996777777777777699979997999799979
            7777776797779777977797779777977797779777977797779777977797779677777777777767977797779777977797779777977797779777977797779777977796777777777777679777977797779777
            7777776777777777777777777777777777777777777777777777777777777677777777777767777777777777777777777777777777777777777777777777777776777777777777677777777777777777
            7777776797779777977797779777977797779777977797779777977797779677777777777767977797779777977797779777977797779777977797779777977796777777777777679777977797779777
            7777776999799979997999799979997999799979997999799979997999799677777777777769997999799979997999799979997999799979997999799979997996777777777777699979997999799979
            7777776797779777977797779777977797779777977797779777977797779677777777777767977797779777977797779777977797779777977797779777977796777777777777679777977797779777
            7777776777777777777777777777777777777777777777777777777777777677777777777767777777777777777777777777777777777777777777777777777776777777777777677777777777777777
            7777776797779777977797779777977797779777977797779777977797779677777777777767977797779777977797779777977797779777977797779777977796777777777777679777977797779777
            7777776999799979997999799979997999799979997999799979997999799677777777777769997999799979997999799979997999799979997999799979997996777777777777699979997999799979
            7777776797779777977797779777977797779777977797779777977797779677777777777767977797779777977797779777977797779777977797779777977796777777777777679777977797779777
            7777776777777777777777777777777777777777777777777777777777777677777777777767777777777777777777777777777777777777777777777777777776777777777777677777777777777777
            7777776797779777977797776666677797779777977797779777977797779677777777777767977797779777977766666777977797779777977797779777977796777777777777679777977797779777
            7777776699799979997996667777766999799979997999799979997999796677777777777766997999799979966677777669997999799979997999799979997966777777777777669979997999799666
            7777777766679777976667777777777666779777977666679777977796667777777777777777666797779766677777777776667797779776666797779777966677777777777777776667977797666777
            7777777777766666667777777777777777667777766777766667777667777777777777777777777666666677777777777777776677777667777666677776677777777777777777777776666666777777
            7777777777777777777777777777777777776666677777777776666777777777777777777777777777777777777777777777777766666777777777766667777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            `)
        tiles.setTilemap(tilemap`level3`)
    } else if (level == 3) {
        scene.setBackgroundImage(img`
            bbbddddddddbddddddddbddddddddb669999999999111bbbddddddddbddddddddbddddddddb669999999999111bbbddddddddbddddddddbddddddddb669999999999111bbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddb669999999999111bbbddddddddbddddddddbddddddddb669999999999111bbbddddddddbddddddddbddddddddb669999999999111bbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddb669999999999111bbbddddddddbddddddddbddddddddb669999999999111bbbddddd1ddbdddddd1dbdddddd1db669999999999111bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669999999999119bbbddddd1ddbdddddd1dbdddddd1db669999999999119bbbddddd1ddbddddddddbdddddd1db669999999999119bbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1db669999999999119bbbddddd1ddbddddddddbdddddd1db669999999999119bbbddddd1ddbddddddddbdddddd1db669999999999119bbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1db669999999991119bbbddddd1ddbddddddddbdddddd1db669999999991119bbbddddd1ddbdddddd1dbdddddd1db669999999991119bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669999999991199bbbddddd1ddbdddddd1dbdddddd1db669999999991199bbbddddd1ddbdddddd1dbdddddd1db669999999991199bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669999999991199bbbddddd1ddbdddddd1dbdddddd1db669999999991199bbbddddd1ddbdddddd1dbdddddd1db669999999991199bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669999999911199bbbddddd1ddbdddddd1dbdddddd1db669999999911199bbbddddd1ddbdddddd1dbdddddd1db669999999911199bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669999999911199bbbddddd1ddbdddddd1dbdddddd1db669999999911199bbbddddd1ddbdddddd1dbdddddd1db669999999911199bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669999999911999bbbddddd1ddbdddddd1dbdddddd1db669999999911999bbbddddd1ddbdddddd1dbdddddd1db669999999911999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669999999911999bbbddddd1ddbdddddd1dbdddddd1db669999999911999bbbddddd1ddbdddddd1dbdddddd1db669999999911999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669999999111999bbbddddd1ddbdddddd1dbdddddd1db669999999111999bbbddddd1ddbdddddd1dbdddddd1db669999999111999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669999999119999bbbddddd1ddbdddddd1dbdddddd1db669999999119999bbbddddd1ddbdddddd1dbdddddd1db669999999119999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669999999119999bbbddddd1ddbdddddd1dbdddddd1db669999999119999bbbddddd1ddbdddddd1dbdddddd1db669999999119999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669999991119999bbbddddd1ddbdddddd1dbdddddd1db669999991119999bbbddddd1ddbdddddd1dbdddddd1db669999991119999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669999991199999bbbddddd1ddbdddddd1dbdddddd1db669999991199999bbbddddd1ddbdddddd1dbdddddd1db669999991199999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669999991199999bbbddddd1ddbdddddd1dbdddddd1db669999991199999bbbddddd1ddbdddddd1dbdddddd1db669999991199999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669999991199999bbbddddd1ddbdddddd1dbdddddd1db669999991199999bbbddddd1ddbdddddd1dbdddddd1db669999991199999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669999911199999bbbddddd1ddbdddddd1dbdddddd1db669999911199999bbbddddd1ddbdddddd1dbdddddd1db669999911199999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669999911999999bbbddddd1ddbdddddd1dbdddddd1db669999911999999bbbddddd1ddbdddddd1dbdddddd1db669999911999999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669999911999999bbbddddd1ddbdddddd1dbdddddd1db669999911999999bbbddddd1ddbdddddd1dbdddddd1db669999911999999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669999111999999bbbddddd1ddbdddddd1dbdddddd1db669999111999999bbbddddd1ddbdddddd1dbdddddd1db669999111999999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669999111999999bbbddddd1ddbdddddd1dbdddddd1db669999111999999bbbddddd1ddbdddddd1dbdddddd1db669999111999999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669999119999999bbbddddd1ddbdddddd1dbdddddd1db669999119999999bbbddddd1ddbdddddd1dbdddddd1db669999119999999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669999119999999bbbddddd1ddbdddddd1dbdddddd1db669999119999999bbbddddd1ddbdddddd1dbdddddd1db669999119999999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669991119999999bbbddddd1ddbdddddd1dbdddddd1db669991119999999bbbddddd1ddbdddddd1dbdddddd1db669991119999999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669991199999999bbbddddd1ddbdddddd1dbdddddd1db669991199999999bbbddddd1ddbdddddd1dbdddddd1db669991199999999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669991199999999bbbddddd1ddbdddddd1dbdddddd1db669991199999999bbbddddd1ddbdddddd1dbdddddd1db669991199999999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669911199999999bbbddddd1ddbdddddd1dbdddddd1db669911199999999bbbddddd1ddbdddddd1dbdddddd1db669911199999999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669911199999999bbbddddd1ddbdddddd1dbdddddd1db669911199999999bbbddddd1ddbdddddd1dbdddddd1db669911199999999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669911999999999bbbddddd1ddbdddddd1dbdddddd1db669911999999999bbbddddd1ddbdddddd1dbdddddd1db669911999999999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669911999999999bbbddddd1ddbdddddd1dbdddddd1db669911999999999bbbddddd1ddbdddddd1dbdddddd1db669911999999999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669111999999999bbbddddd1ddbdddddd1dbdddddd1db669111999999999bbbddddd1ddbdddddd1dbdddddd1db669111999999999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669111999999999bbbddddd1ddbdddddd1dbdddddd1db669111999999999bbbddddd1ddbdddddd1dbdddddd1db669111999999999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db669119999999999bbbddddd1ddbdddddd1dbdddddd1db669119999999999bbbddddd1ddbdddddd1dbdddddd1db669119999999999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db661119999999999bbbddddd1ddbdddddd1dbdddddd1db661119999999999bbbddddd1ddbdddddd1dbdddddd1db661119999999999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db661119999999999bbbddddd1ddbdddddd1dbdddddd1db661119999999999bbbddddd1ddbdddddd1dbdddddd1db661119999999999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db661119999999999bbbddddd1ddbdddddd1dbdddddd1db661119999999999bbbddddd1ddbdddddd1dbdddddd1db661119999999999bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db666666666666666bbbddddd1ddbdddddd1dbdddddd1db666666666666666bbbddddd1ddbdddddd1dbdddddd1db666666666666666bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1db666666666666666bbbddddd1ddbdddddd1dbdddddd1db666666666666666bbbddddd1ddbdddddd1dbdddddd1db666666666666666bbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1dbcccccccccccccccbbbddddd1ddbdddddd1dbdddddd1dbcccccccccccccccbbbddddd1ddbdddddd1dbdddddd1dbcccccccccccccccbbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1dbdddddddddddddddbbbddddd1ddbdddddd1dbdddddd1dbdddddddddddddddbbbddddd1ddbdddddd1dbdddddd1dbdddddddddddddddbbbddddd1ddbdddddd1dbdddd
            bbbddddd1ddbdddddd1dbdddddd1dbdddddddddd1111dbbbddddd1ddbdddddd1dbdddddd1dbdddddddddd1111dbbbddddd1ddbddddddddbdddddd1dbddddddddddd111dbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbddddddddddddd1dbbbddddd1ddbddddddddbdddddd1dbddddddddddddd1dbbbddddd1ddbddddddddbdddddd1dbddddddddddddd1dbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbddddddddddddd1dbbbddddd1ddbddddddddbdddddd1dbddddddddddddd1dbbbddddd1ddbddddddddbdddddd1dbddddddddddddd1dbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbddddddddddddd1dbbbddddd1ddbddddddddbdddddd1dbddddddddddddd1dbbbddddd1ddbddddddddbdddddd1dbddddddddddddd1dbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbddddddddddddd1dbbbddddd1ddbddddddddbdddddd1dbddddddddddddd1dbbbddddd1ddbddddddddbdddddd1dbddddddddddddd1dbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbdddddddddddddddbbbddddd1ddbddddddddbdddddd1dbdddddddddddddddbbbddddd1ddbddddddddbddddddddbddddddddddddd1dbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbddddddddbdddddddddddddddbbbddddd1ddbddddddddbddddddddbdddddddddddddddbbbddddd1ddbddddddddbddddddddbdddddddddddddddbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbddddddddbdddddddddddddddbbbddddd1ddbddddddddbddddddddbdddddddddddddddbbbddddd1ddbddddddddbddddddddbdddddddddddddddbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbddddddddbdddddddddddddddbbbddddd1ddbddddddddbddddddddbdddddddddddddddbbbddddd1ddbddddddddbddddddddbdddddddddddddddbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbddddddddbdddddddddddddddbbbddddd1ddbddddddddbddddddddbdddddddddddddddbbbddddd1ddbddddddddbddddddddbdddddddddddddddbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbddddddddbdddddddddddddddbbbddddd1ddbddddddddbddddddddbdddddddddddddddbbbddddd1ddbddddddddbddddddddbdddddddddddddddbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbddddddddbddddcccffffddddbbbddddd1ddbddddddddbddddddddbddddcccffffddddbbbddddd1ddbddddddddbddddddddbddddcccffffddddbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbddddddddbddccccfffffffddbbbddddd1ddbddddddddbddddddddbddccccfffffffddbbbddddd1ddbddddddddbddddddddbddccccfffffffddbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbddddddddbdcccffffffffffdbbbddddd1ddbddddddddbddddddddbdcccffffffffffdbbbddddd1ddbddddddddbdddddd1dbdcccffffffffffdbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbdccfffffffffffdbbbddddd1ddbddddddddbdddddd1dbdccfffffffffffdbbbddddd1ddbddddddddbdddddd1dbdccfffffffffffdbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddd
            bbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddd1ddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbdddddd1dbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbddddddddbccfffffffffffffbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbcccccccccccccccbbbddddddddbddddddddbddddddddbcccccccccccccccbbbddddddddbddddddddbddddddddbcccccccccccccccbbbddddddddbddddddddbdddd
            bbbddddddddbddddddddbddddddddbcccccccccccccccbbbddddddddbddddddddbddddddddbcccccccccccccccbbbddddddddbddddddddbddddddddbcccccccccccccccbbbddddddddbddddddddbdddd
            `)
        tiles.setTilemap(tilemap`level4`)
    } else if (level == 4) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeee55555555555eeeeeeeeee5555555eee5555eeeeeeeeeee555ee55eeeeeeeee5555eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee55eeeeeeeeeee555eeeeeeeee55eeeeeeeee5555ee5555eeeeee
            eeeeee55eeeeeeee5eeeeeeee5eeeeeee5eee55eeeeeeeeeeeee5eee55eeeeeeeeee55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5eeeeeeeeeee55eeeeeeeeee55eeeeeeeeee55eeee55eeeeeee
            eeeeee55eeeeeeeee5eeeeee5eeeeeeeee5eee55eeeeeeeeeee5eeee55eeeeeeeeee55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5eeeeeeeeeee55eeeeeeeeee55eeeeeeeeee55eeee55eeeeeee
            eeeeee55eeeeeeeeee5eeee5eeeeeeeeeee5ee55eeeeeeeeeee5eee5555eeeeeeeee55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee55eeeeeeeeee55eeeeeeeee5555eeeeeeeee55eeee55eeeeeee
            eeeeee55eeeeeeeeee5eee55eeeeeeeeeee55ee55eeeeeeeee5eeee5e55eeeeeeeee55eeeeeeeeeeeeeeeeeeeeee5eeeeeeeeeeeeeeee55eeeeeeeee555eeeeeeeee5e55eeeeeeeee55eeee55eeeeeee
            eeeeee55eeeeeeeeee5ee55eeeeeeeeeeeee55ee55eeeeeee5eeeee5e55eeeeeeeee55eeeeeeeeeeeeeeeeeeeee555eeeeeeeeeeeeeee55eeeeeeeee555eeeeeeeee5e55eeeeeeeee55eeee55eeeeeee
            eeeeee55eeeeeeeeee5ee55eeeeeeeeeeeee55eee55eeeee5eeeee5eee55eeeeeeee55eeeeeeeeeeeeeeeeeeee5eee5eeeeeeeeeeeeee555eeeeeeee555eeeeeeee5eee55eeeeeeee55eeee55eeeeeee
            eeeeee55eeeeeeeeee5ee55eeeeeeeeeeeee55eeee55eee5eeeeee5eee55eeeeeeee55eeeeeeeeeeeeeeeee555eeeee555eeeeeeeeeee5e5eeeeeee5e55eeeeeeee5eee55eeeeeeee55eeee55eeeeeee
            eeeeee55eeeeeeeee5eee55eeeeeeeeeeeee55eeee55eee5eeeeee5eee55eeeeeeee55eeeeeeeeeeeeeeee5ee5eeeee5ee5eeeeeeeeee5e55eeeeee5e55eeeeeeee5eee55eeeeeeee55eeee55eeeeeee
            eeeeee55eeeeeeee5eeee55eeeeeeeeeeeee55eeeee55e5eeeeee5eeeee55eeeeeee55eeeeeeeeeeeeeee5eeee5eee5eeee5eeeeeeeee5e55eeeeee5e55eeeeeee5eeeee55eeeeeee55eeee55eeeeeee
            eeeeee5555555555eeeee55eeeeeeeeeeeee55eeeeee55eeeeeee5eeeee55eeeeeee55eeeeeeeeeeeeeee5eeee5eee5eeee5eeeeeeeee5ee5eeeee5ee55eeeeeee5eeeee55eeeeeee55eeee55eeeeeee
            eeeeee55ee555eeeeeeee55eeeeeeeeeeeee55eeeeee55eeeeeee5eeeee55eeeeeee55eeeeeeeeeeeeeee5eeeee5e5eeeee5eeeeeeeee5ee55eeee5ee55eeeeeee5eeeee55eeeeeee55eeee55eeeeeee
            eeeeee55eee555eeeeeee55eeeeeeeeeeeee55eeeeee55eeeeeee55555555eeeeeee55eeeeeeeeeeeeeeee5eeeee5eeeee5eeeeeeeeee5ee55eeee5ee55eeeeeee55555555eeeeeee55eeee55eeeeeee
            eeeeee55eeee55eeeeeee55eeeeeeeeeeeee55eeeeee55eeeeee5555555555eeeeee55eeeeeeeeeeeeeeeee5eeee5eeee5eeeeeeeeeee5eee55ee5eee55eeeeee5555555555eeeeee55eeee55eeeeeee
            eeeeee55eeee555eeeeee55eeeeeeeeeeeee55eeeeee55eeeeee5eeeeeee55eeeeee55eeeeee5eeeeeeeee5555555555555eeeeeeeeee5eee55ee5eee55eeeeee5eeeeeee55eeeeee55eeee55eeeeee5
            eeeeee55eeeee555eeeeee55eeeeeeeeeee55eeeeeee55eeeeee5eeeeeee55eeeeee55eeeeee5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5eee55ee5eee55eeeeee5eeeeeee55eeeeee55eeee55eeeeee5
            eeeeee55eeeeee55eeeeeee5eeeeeeeeeee5eeeeeeee55eeeee5eeeeeeeee55eeeee55eeeee55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5eeee555eeee55eeeee5eeeeeeeee55eeeee55eeee55eeeee55
            eeeeee55eeeeee555eeeeeee5eeeeeeeee5eeeeeeeee55eeeee5eeeeeeeee55eeeee55eeee555eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5eeee555eeee55eeeee5eeeeeeeee55eeeee55eeee55eeee555
            eeeeee55eeeeeee555eeeeeee5eeeeeee5eeeeeeeeee55eeeee5eeeeeeeee55eeeee55ee55555eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5eeee555eeee55eeeee5eeeeeeeee55eeeee55eeee55ee55555
            eeeeee55eeeeeeee555eeeeeee5555555eeeeeeeeee5555ee555eeeeeeeee5555ee5555555555eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee555eeee5eeee5555ee555eeeeeeeee5555ee5555ee5555555555
            eeeee5555eeeeeeee555eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6eeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6eeeeeeeeee6eeeeeeeeeee6eeeeeeeee7eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6eeeeeeeee6eeeeee5e6ee6eeeeeeee7eeeeee7eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee67eeeeeeeeeee6eeeeeeeeee6e77eee6eeee6e75eeee7eeeee7eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeee6eeeeeeeeeeeeee6e7eeeeeeeee6ee7eeeeee67eee6e5e6e7eee6e7eeee67eee6e7eeee7eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7eeeeeeeeeeeee5ee7
            eeeeeeeee77eeeeeeeeeeeeeeeeee6eeeeeeeee7eeee6e6e5eeeeeeee6ee5eeeeeee7eee777e777eee6e7ee6e67eee67eee7e7eee67eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5eeee7eeeeeeeee7e5e
            eeeeeeeee77eeeeeeeee56ee77eee6ee5eeeee7eeeee6e76eeeeeeee6eee7eeee76e7eeee6ee677eee6e7ee6e77eee67ee76ee7ee6e7eeeeeee7eeeeeeeeeeeeeeeeeeeeeeee67eeee7eeeeeeee7ee7e
            ee6eee6ee5eeeeeee7ee6eeee7ee6eeee6eeee7eeeee67ee6eeeee7e6eeee7eeee6ee7eee67e677eee67eee6ee7eee67eee6ee7ee6ee7eeeeee7eeeeeeeeeeeee5eeeee7eeeee6eee7ee7e7eeee7ee7e
            e76eee6ee7eeeeeee7ee6eeee7ee6eeee6eeee7eeeee67eee66ee7ee6eee7777767777777767767777677777777777777776ee7eee65e7e6eee5eeeee7eeee6e7e7eee76eeeee6eee77e7ee7eee7ee7e
            e76eee6ee7eeee6e7ee6eeeee7ee6eeee6eee7eeeee67eeeeee6eeee677777777677777777777777777775777777757777767777776777e6ee76eeee7e6eee6e7ee7ee76eeeee76ee7e757e77ee7ee7e
            f7f6ff6ff7fff6ff7f76ffffff76f7fff6fff7fffff67fff77777777677777757677777775777777777777777777777777757777776777f6ff76fff7f76fff6ff7f7ff56fffff7f6f7f7f77f77777f7f
            77767d67d7d776dd7d67dddd7776d7ddd6ddd7777776777777777777677777677677777777777777677777767777767777777777777677767d76dd7dd76ddd677777777777777777777777777777757d
            77776767777776777c6777cccc6cc7cc776777777767777777777577777777677777777767777767677777767777767777767777777677767776cc777777777777777776777777767777777577777777
            7777676757777677776777777767777777767777776777777667777777777767777777766777776766777776777776777776777777777777777777777767777677777776775777567777767777777777
            7757677777757677776777777777777777767775676777777677777777777767775777777777776577777766775776777777777775777777777777777767777657777776777777777777767777777777
            7777775777677777776777777777777777767777677775777777777777777757777777777777777677777777777756777776776777777757777757777777757677777776777776776777767777777767
            7777777777677777775777677777577775777777677777777777777677777777777777777777777677777777777777777777776777767777777777777776777777777776777776777777677777777767
            7776777776777777777777677777777777777777666777777777777677777777777767777777777677777777777777757777776777767777776777777777777777777767777776777777777767777767
            7777677766777777777777677777777777777777777777777777777767777777777777777777777777777777777777777777767777766777777775777777777677777767757776777777777667777677
            7777767777777777577777677777777777677777777777776777777777777777777777777776777777777777777777777777777777776677767777777777777677777777777776777777777677777677
            7777767777777777777776677775776777677775777777777777777777777777777777777767777777777777777777777777777777777777767777777577777677777767777777777777776677777677
            7777767777677777777777777777776777677777777777776777777777777777777777777777777777777777777677777777777777777777767777777777777777777777777777777777776677777777
            7777667777677777777777777777776777677777777777777777777777777777777777777677777777777777777767777777777777777777777777777777677777777777777777777777777767777677
            7777777777677777777777777777777777677777777777777777777777777777577777777677777777767777777767777777777777777777777777777777677777777777777777777777777677777777
            7777777777677777777777777777776777667777777777777757777777777777777777776777777777677777777767777777777677777777777777777776777777777777777777767777777677777777
            7777777777677777777777777777776777777777777777777777777777777777777777776777777777677777777757777777777677777777777777777777777777777777677777767777777777777777
            7777777777677777777777777777776777777777777777777777777777777777777777776777777777677777777777777777777777777777777677757776777777777777777777767777777677777777
            7777777777677777777776777777776777777777777777677777777777777777777777776777777777677777777777777777777777777777776777777777777777777777777777776777777677777777
            7777777777677777775776777777777677777777777777677777777777777777777777777777777777677777777777777777777777777777776777777777777777777777777777776777777677777777
            7777757777777777777777777777777677777777777777777777777777775777777777777777777777677777777777777777777777777777777777777777777777777777777777777777777677777777
            7777577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777677777777
            7777577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777677777777
            7777577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            `)
        tiles.setTilemap(tilemap`level5`)
    } else {
        game.over(true, effects.confetti)
    }
    llenar_nivel()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    personaje,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f . . . . . . . 
        . f f f f 6 6 6 6 6 . . . . . . 
        f f f f 6 6 f f f f 6 . . . . . 
        f f f 6 6 f f f f f f f . . . . 
        f f 6 f f f f f f f f f . . . . 
        f 8 6 1 f f f f f f f f . . . . 
        f 8 6 6 f 6 9 9 1 1 f f . . . . 
        f 8 8 8 f 6 9 9 9 9 f . . . . . 
        f f f f f f f f f f f . . . . . 
        . f f f f f f f f f . . . . . . 
        . . f f 8 f f 4 5 f . . . . . . 
        . . f f 8 f f 4 4 f . . . . . . 
        . f f f d f f f f f f . . . . . 
        . f f f f f f f f f f . . . . . 
        . . . . 8 8 . . 8 8 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f . . . . . . . 
        . f f f f 6 6 6 6 6 . . . . . . 
        f f f f 6 6 f f f f 6 . . . . . 
        f f f 6 6 f f f f f f f . . . . 
        f f 6 f f f f f f f f f . . . . 
        f 8 6 1 f f f f f f f f . . . . 
        f 8 6 6 f 6 9 9 1 1 f f . . . . 
        f 8 8 8 f 6 9 9 9 9 f . . . . . 
        f f f f f f f f f f f . . . . . 
        . f f f f f f f f f . . . . . . 
        . . f f 8 f f 4 5 f . . . . . . 
        . . f f 8 f f 4 4 f . . . . . . 
        . f f f d f f f f f f . . . . . 
        . f f f f f f f f f f 8 . . . . 
        . . . . 8 8 . . . . 8 . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f . . . . . . . 
        . f f f f 6 6 6 6 6 . . . . . . 
        f f f f 6 6 f f f f 6 . . . . . 
        f f f 6 6 f f f f f f f . . . . 
        f f 6 f f f f f f f f f . . . . 
        f 8 6 1 f f f f f f f f . . . . 
        f 8 6 6 f 6 9 9 1 1 f f . . . . 
        f 8 8 8 f 6 9 9 9 9 f . . . . . 
        f f f f f f f f f f f . . . . . 
        . f f f f f f f f f . . . . . . 
        . . f f 8 f f 4 5 f . . . . . . 
        . . f f 8 f f 4 4 f . . . . . . 
        . f f f d f f f f f f . . . . . 
        . f f f f f f f f f f . . . . . 
        . . . . 8 8 . . 8 8 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f . . . . . . . 
        . f f f f 6 6 6 6 6 . . . . . . 
        f f f f 6 6 f f f f 6 . . . . . 
        f f f 6 6 f f f f f f f . . . . 
        f f 6 f f f f f f f f f . . . . 
        f 8 6 1 f f f f f f f f . . . . 
        f 8 6 6 f 6 9 9 1 1 f f . . . . 
        f 8 8 8 f 6 9 9 9 9 f . . . . . 
        f f f f f f f f f f f . . . . . 
        . f f f f f f f f f . . . . . . 
        . . f f 8 f f 4 5 f . . . . . . 
        . . f f 8 f f 4 4 f . . . . . . 
        . f f f d f f f f f f . . . . . 
        8 f f f f f f f f f f . . . . . 
        . 8 . . . . . . 8 8 . . . . . . 
        `],
    300,
    false
    )
})
function cleanlevel () {
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.badtile)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.goal)) {
        value.destroy(effects.starField, 500)
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    personaje.say("¡Ouch!", 500)
    music.powerDown.play()
    info.changeLifeBy(-1)
    pause(2000)
})
function level_4 () {
    personaje.say("El final ¡1963!", 2000)
    for (let value of tiles.getTilesByType(assets.tile`tile13`)) {
        meta = sprites.create(img`
            ................
            ................
            24f444..........
            24f444..........
            227772..........
            867f76.....cbfbb
            867776.....cbfbb
            8f2228.....cfccc
            ed212d67f77edfdd
            ed212d67f77edfdd
            ef212e6f666efeee
            cb212b24f4467f77
            cb212b24f4467f77
            cf212c2f2226f666
            ed212dcbfbbedfdd
            ed212dcbfbbedfdd
            ef222ecfcccefeee
            867776edfdd24f44
            867276edfdd24f44
            8f7778efeee2f222
            `, SpriteKind.goal)
        tiles.placeOnTile(meta, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile10`)) {
        myEnemy = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . f f f f f f f f f f f f f f . 
            . . d d d d d d d d d d d d . . 
            . . f f f f f f f f f f f f . . 
            . . d d d d f f 1 f f 1 f d . . 
            . . d d d d d f f d f f d . . . 
            . . d d d d d d d d d d d . . . 
            . . . c c c c c c f c c . . . . 
            . . . . b b b b c f c b . . . . 
            . . . . b b b b b f b b . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . f f . . . f f . . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        myEnemy,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . f f f f f f f f f f f f f f . 
            . . d d d d d d d d d d d d . . 
            . . f f f f f f f f f f f f . . 
            . . d d d d f f 1 f f 1 f d . . 
            . . d d d d d f f d f f d . . . 
            . . d d d d d d d d d d d . . . 
            . . . c c c c c c f c c . . . . 
            . . . . b b b b c f c b . . . . 
            . . . . b b b b b f b b . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . f f . . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . f f f f f f f f f f f f f f . 
            . . d d d d d d d d d d d d . . 
            . . f f f f f f f f f f f f . . 
            . . d d d d f f 1 f f 1 f d . . 
            . . d d d d d f f d f f d . . . 
            . . d d d d d d d d d d d . . . 
            . . . c c c c c c f c c . . . . 
            . . . . b b b b c f c b . . . . 
            . . . . b b b b b f b b . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . . f f . . . f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . f f f f f f f f f f f f f f . 
            . . d d d d d d d d d d d d . . 
            . . f f f f f f f f f f f f . . 
            . . d d d d f f 1 f f 1 f d . . 
            . . d d d d d f f d f f d . . . 
            . . d d d d d d d d d d d . . . 
            . . . c c c c c c f c c . . . . 
            . . . . b b b b c f c b . . . . 
            . . . . b b b b b f b b . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . . . f f . . . f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . f f f f f f f f f f f f f f . 
            . . d d d d d d d d d d d d . . 
            . . f f f f f f f f f f f f . . 
            . . d d d d f f 1 f f 1 f d . . 
            . . d d d d d f f d f f d . . . 
            . . d d d d d d d d d d d . . . 
            . . . c c c c c c f c c . . . . 
            . . . . b b b b c f c b . . . . 
            . . . . b b b b b f b b . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . f f . . . f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . f f f f f f f f f f f f f f . 
            . . d d d d d d d d d d d d . . 
            . . f f f f f f f f f f f f . . 
            . . d d d d f f 1 f f 1 f d . . 
            . . d d d d d f f d f f d . . . 
            . . d d d d d d d d d d d . . . 
            . . . c c c c c c f c c . . . . 
            . . . . b b b b c f c b . . . . 
            . . . . b b b b b f b b . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . f f . . . f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . f f f f f f f f f f f f f f . 
            . . d d d d d d d d d d d d . . 
            . . f f f f f f f f f f f f . . 
            . . d d d d f f 1 f f 1 f d . . 
            . . d d d d d f f d f f d . . . 
            . . d d d d d d d d d d d . . . 
            . . . c c c c c c f c c . . . . 
            . . . . b b b b c f c b . . . . 
            . . . . b b b b b f b b . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f . . . . . 
            `],
        200,
        true
        )
        tiles.placeOnTile(myEnemy, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        myEnemy.ay = 300
    }
    for (let value of tiles.getTilesByType(assets.tile`tile84`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            8 8 8 . . . . . . . . . . . . . 
            6 6 6 8 8 . . . . . . . . . . . 
            9 9 6 6 8 8 8 . . . . . . . . . 
            6 9 9 9 6 6 8 8 8 8 8 8 . . . . 
            6 6 6 9 6 6 6 6 9 6 6 8 8 8 8 8 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile84`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile85`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            8 8 . . . . . . . . . . . . . . 
            6 8 8 8 8 . . . . . . . . . . . 
            6 6 6 6 8 8 . . . . . . . . . . 
            6 6 6 6 6 8 8 . . . . . . . . . 
            6 6 6 9 6 6 8 8 8 . . . . . . . 
            6 6 6 6 9 9 6 6 8 8 8 8 . . . . 
            6 6 6 6 6 9 9 6 6 6 6 6 8 8 8 8 
            6 6 6 6 6 6 9 9 6 6 6 6 9 6 6 6 
            6 6 9 9 9 6 6 6 6 6 6 6 9 9 9 9 
            6 6 6 6 6 9 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile85`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile86`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 8 8 
            . . . . . . . . . . . . . . 8 6 
            . . . . . . . . . . . . . 8 8 6 
            . . . . . . . . . . . . 8 8 6 6 
            . . . . . . . . . . . 8 8 6 6 6 
            . . . . . . . . . . 8 8 6 6 9 6 
            . . . . . . . . . . 8 6 9 9 9 6 
            . . . . . . . . . 8 6 6 6 6 6 6 
            . . . . . . . 8 8 6 6 6 6 6 6 6 
            . . . . . . 8 8 6 6 6 6 6 6 6 6 
            . . . . . 8 8 6 6 6 6 6 6 6 6 6 
            . . 8 8 8 8 6 6 6 9 9 9 9 6 6 6 
            8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile86`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile87`)) {
        badtilex = sprites.create(img`
            8 8 8 . . . . . . . . . . . . . 
            6 6 6 8 8 . . . . . . . . . . . 
            6 9 6 6 8 . . . . . . . . . . . 
            6 6 6 6 6 8 8 8 . . . . . . . . 
            6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 
            6 6 9 9 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 9 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 9 6 6 6 6 6 6 6 9 9 6 
            6 6 6 6 6 6 9 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 9 9 9 9 6 6 6 6 6 
            6 6 9 9 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 9 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 9 9 9 6 6 
            6 6 6 6 9 9 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 9 9 9 9 9 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile87`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile88`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . 8 
            . . . . . . . . . . . . . . 8 6 
            . . . . . . . . . . . . . 8 6 6 
            . . . . . . . . . . . . 8 8 6 6 
            . . . . . . . . . . . 8 8 6 9 6 
            . . . . . . . . . . 8 8 6 6 9 6 
            . . . . . . . . . . 8 6 6 9 6 6 
            . . . . . . . . . . 8 6 6 9 6 6 
            . . . . . . . . . 8 8 6 6 9 6 6 
            . . . . . . . . 8 8 6 6 9 9 6 6 
            . . . . . . . . 8 6 6 6 9 6 6 6 
            8 . . . . . 8 8 6 6 6 9 9 6 6 6 
            6 8 8 . . 8 8 6 6 6 6 9 6 6 6 6 
            6 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 
            6 9 9 6 6 6 6 6 6 6 9 9 6 6 6 6 
            6 6 9 9 9 9 9 6 6 6 6 9 9 6 6 6 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile88`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile89`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 8 8 8 
            . . . . . . . . . . 8 8 8 6 9 6 
            . . . . . . . 8 8 8 8 6 9 9 9 6 
            . 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile89`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile90`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 8 
            . . . . . . . . . . . . . . 8 8 
            . . . . . . . . . . . . . . 8 6 
            . . . . . . . . . . . . . 8 8 6 
            . . . . . . . 8 8 8 . . . 8 6 6 
            . . . . . 8 8 8 6 8 8 . 8 6 6 6 
            8 8 8 8 8 8 6 9 9 6 8 8 8 6 6 6 
            6 6 6 6 6 6 9 9 6 6 6 6 6 6 6 6 
            6 6 9 9 9 9 9 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 9 9 9 9 9 6 6 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile90`)
    }
}
function level_0 () {
    personaje.say("¡Hola!", 2000)
    for (let value of tiles.getTilesByType(assets.tile`tile13`)) {
        meta = sprites.create(img`
            ...8699.........
            ..88..99........
            ..88...6..86999.
            ...8...8888...6.
            ...8888888...88.
            .....886688888..
            ....88666688....
            ....86666668....
            ...8667667668...
            ..866677776668..
            ..866776677668..
            .86676766767668.
            8866767667666688
            8666677667669668
            8666667777666968
            8666667667766968
            8666667667676968
            8666767667676968
            8666677667766968
            8666667777669668
            .86666766769668.
            ..886666666688..
            ....88888888....
            `, SpriteKind.goal)
        tiles.placeOnTile(meta, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile10`)) {
        myEnemy = sprites.create(img`
            . . . . e e e e e e . . . . . . 
            . . . e 2 4 4 4 4 2 e . . . . . 
            . . e 4 4 4 4 4 4 4 4 e . . . . 
            . e 2 4 4 4 4 4 4 4 4 2 e . . . 
            . e 4 e 2 2 2 2 e 4 4 4 e . . . 
            . f 4 2 f 2 2 f 2 4 4 4 f . . . 
            . f 4 4 4 4 4 4 4 4 4 4 f . . . 
            . . f 4 4 4 4 2 e 4 4 2 f e . . 
            . . . f e e e e 4 4 2 f 4 4 e . 
            . . e 4 2 4 4 4 2 e f 4 4 4 4 e 
            . e 4 4 2 4 4 e f e 2 4 4 2 e e 
            e 1 1 1 1 4 2 f e e 2 2 2 e . . 
            f 1 1 1 1 1 2 2 e 2 2 2 2 f . . 
            f 2 1 1 1 1 1 2 2 2 2 2 e f . . 
            . f 2 1 1 1 1 1 1 2 2 2 f . . . 
            . . e e e e e e e e e f . . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        myEnemy,
        [img`
            . . . . e e e e e e . . . . . . 
            . . . e 2 4 4 4 4 2 e . . . . . 
            . . e 4 4 4 4 4 4 4 4 e . . . . 
            . e 2 4 4 4 4 4 4 4 4 2 e . . . 
            . e 4 e 2 2 2 2 e 4 4 4 e . . . 
            . f 4 2 f 2 2 f 2 4 4 4 f . . . 
            . f 4 4 4 4 4 4 4 4 4 4 f . . . 
            . . f 4 4 4 4 2 e 4 4 2 f e . . 
            . . . f e e e e 4 4 2 f 4 4 e . 
            . . e 4 2 4 4 4 2 e f 4 4 4 4 e 
            . e 4 4 2 4 4 e f e 2 4 4 2 e e 
            e 1 1 1 1 4 2 f e e 2 2 2 e . . 
            f 1 1 1 1 1 2 2 e 2 2 2 2 f . . 
            f 2 1 1 1 1 1 2 2 2 2 2 e f . . 
            . f 2 1 1 1 1 1 1 2 2 2 f . . . 
            . . e e e e e e e e e f . . . . 
            `,img`
            . . . . . e e e e e e e . . . . 
            . . . . e 2 4 4 4 4 4 2 e . . . 
            . . . e 4 e 2 2 2 2 e 4 2 e . . 
            . . e 2 4 2 f 2 2 f 2 4 4 e . . 
            . . e 4 4 4 4 4 4 4 4 4 4 e . . 
            . . f 4 2 1 f f 1 2 4 4 4 f . . 
            . . f 2 f 1 f f 1 f 4 4 4 f . . 
            . . . f f 2 2 2 2 f 4 4 2 f . . 
            . . e e f 2 2 2 2 4 4 2 f e . . 
            . e 4 4 4 4 4 4 4 4 e e 4 4 e . 
            e 4 1 1 1 4 4 4 4 f e 2 4 4 4 e 
            f 1 1 1 1 1 4 2 f e e 2 2 2 e e 
            f 1 1 1 1 1 1 2 2 e 2 2 2 e . . 
            f 2 1 1 1 1 1 2 2 2 2 2 2 e . . 
            . f 2 1 1 1 1 1 2 2 2 2 e . . . 
            . . f f e e e e e e e e . . . . 
            `,img`
            . . . . . . e e e e e e e . . . 
            . . . . . e f f 2 2 f f 4 e . . 
            . . . . e 4 2 2 2 2 2 2 4 2 e . 
            . . . e 4 4 4 4 4 4 4 4 4 4 e . 
            . . . e 4 2 1 f f 1 2 4 4 4 e . 
            . . . f 2 f 1 f f 1 f 4 4 4 f . 
            . . . f 2 f 2 2 2 2 f 4 4 4 f . 
            . . e e 2 f 2 2 2 2 f 4 4 2 f . 
            . e 4 4 4 4 2 2 2 2 4 4 f e . . 
            e 4 1 1 1 4 4 4 4 4 e e 4 4 e . 
            f 1 1 1 1 1 4 4 4 f e 2 4 4 4 e 
            f 1 1 1 1 1 1 2 f e e 2 2 2 e e 
            f 2 1 1 1 1 1 2 2 e 2 2 2 e . . 
            f 2 1 1 1 1 1 2 2 2 2 2 2 e . . 
            . f 2 1 1 1 1 2 2 2 2 2 e . . . 
            . . f f e e e e e e e e . . . . 
            `,img`
            . . . . . . e e e e e e e . . . 
            . . . . . e f f 2 2 f f 4 e . . 
            . . . . e 4 2 2 2 2 2 2 4 2 e . 
            . . . e 4 4 4 4 4 4 4 4 4 4 e . 
            . . . e 4 2 1 f f 1 2 4 4 4 e . 
            . . . f 2 f 1 f f 1 f 4 4 4 f . 
            . . . f 2 f 2 2 2 2 f 4 4 4 f . 
            . . e e 2 f 2 2 2 2 f 4 4 2 f . 
            . e 4 4 4 4 2 2 2 2 4 4 f e . . 
            e 4 1 1 1 4 4 4 4 4 e e 4 4 e . 
            f 1 1 1 1 1 4 4 4 f e 2 4 4 4 e 
            f 1 1 1 1 1 1 2 f e e 2 2 2 e e 
            f 2 1 1 1 1 1 2 2 e 2 2 2 e . . 
            f 2 1 1 1 1 1 2 2 2 2 2 2 e . . 
            . f 2 1 1 1 1 2 2 2 2 2 e . . . 
            . . f f e e e e e e e e . . . . 
            `,img`
            . . . . . e e e e e e e . . . . 
            . . . . e 2 4 4 4 4 4 2 e . . . 
            . . . e 4 e 2 2 2 2 e 4 2 e . . 
            . . e 2 4 2 f 2 2 f 2 4 4 e . . 
            . . e 4 4 4 4 4 4 4 4 4 4 e . . 
            . . f 4 2 1 f f 1 2 4 4 4 f . . 
            . . f 2 f 1 f f 1 f 4 4 4 f . . 
            . . . f f 2 2 2 2 f 4 4 2 f . . 
            . . e e f 2 2 2 2 4 4 2 f e . . 
            . e 4 4 4 4 4 4 4 4 e e 4 4 e . 
            e 4 1 1 1 4 4 4 4 f e 2 4 4 4 e 
            f 1 1 1 1 1 4 2 f e e 2 2 2 e e 
            f 1 1 1 1 1 1 2 2 e 2 2 2 e . . 
            f 2 1 1 1 1 1 2 2 2 2 2 2 e . . 
            . f 2 1 1 1 1 1 2 2 2 2 e . . . 
            . . f f e e e e e e e e . . . . 
            `,img`
            . . . . e e e e e e . . . . . . 
            . . . e 2 4 4 4 4 2 e . . . . . 
            . . e 4 4 4 4 4 4 4 4 e . . . . 
            . e 2 4 4 4 4 4 4 4 4 2 e . . . 
            . e 4 e 2 2 2 2 e 4 4 4 e . . . 
            . f 4 2 f 2 2 f 2 4 4 4 f . . . 
            . f 4 4 4 4 4 4 4 4 4 4 f . . . 
            . . f 4 4 4 4 2 e 4 4 2 f e . . 
            . . . f e e e e 4 4 2 f 4 4 e . 
            . . e 4 2 4 4 4 2 e f 4 4 4 4 e 
            . e 4 4 2 4 4 e f e 2 4 4 2 e e 
            e 1 1 1 1 4 2 f e e 2 2 2 e . . 
            f 1 1 1 1 1 2 2 e 2 2 2 2 f . . 
            f 2 1 1 1 1 1 2 2 2 2 2 e f . . 
            . f 2 1 1 1 1 1 1 2 2 2 f . . . 
            . . e e e e e e e e e f . . . . 
            `],
        200,
        true
        )
        tiles.placeOnTile(myEnemy, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        myEnemy.ay = 300
    }
    for (let value of tiles.getTilesByType(assets.tile`tile9`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 6 6 6 6 
            . . . . . . . . . . . 6 7 6 6 6 
            . . . . . . . . . . . 6 6 6 f 6 
            . . . . . . . . . . 6 6 6 6 6 6 
            6 6 6 6 6 6 6 . . 6 6 6 5 6 6 6 
            7 6 6 6 6 5 6 6 6 6 6 6 6 6 6 7 
            6 6 f 6 6 6 6 6 6 7 6 6 6 6 6 6 
            5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
            6 6 6 6 6 6 5 6 6 6 6 6 7 6 6 6 
            6 6 6 7 6 6 6 f 6 6 6 6 6 6 6 6 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile9`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile5`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . f 
            . . . . . . . . . . . . . . . f 
            . . . . . . . . . . . . 6 6 f f 
            . . . . . . . . . . . 6 7 6 f . 
            . . . . . . . . . . 6 6 6 6 f . 
            6 . . . . . . . 6 6 6 6 6 6 f . 
            6 6 6 . . . . 6 6 6 6 5 6 f f . 
            f 6 6 6 6 6 6 6 f 6 6 6 6 f . . 
            6 6 6 6 6 7 6 6 6 6 6 6 f f . . 
            6 7 6 5 6 6 6 6 6 6 6 f f . . . 
            6 6 6 6 6 6 6 6 6 6 5 f . . . . 
            5 6 6 6 6 6 f 6 6 f f f . . . . 
            6 6 6 6 5 6 6 6 f f . . . . . . 
            f 6 6 7 6 6 f f f . . . . . . . 
            6 6 f f f f f . . . . . . . . . 
            f f f . . . . . . . . . . . . . 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile5`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile16`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 6 6 
            . . . . . . . . . . 6 6 6 6 6 7 
            . . . . . . . . . 6 7 6 6 6 6 6 
            6 6 6 6 . . . . 6 6 6 6 6 5 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
            6 5 6 6 6 6 6 6 6 5 6 6 6 6 6 6 
            6 6 6 6 f 6 6 6 6 6 6 6 6 6 7 6 
            6 6 6 6 6 6 6 7 6 6 6 6 6 6 6 6 
            6 7 6 6 5 6 6 6 6 6 6 f 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 5 6 6 6 f 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 7 6 6 6 6 6 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile7`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            7 6 6 . . . . . . . . . . . . . 
            6 6 6 6 . . . . . . . . . . . . 
            6 6 6 6 6 6 . . . 6 6 6 6 6 6 6 
            6 6 5 6 6 6 6 6 6 6 6 7 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 5 6 6 
            6 6 6 6 6 f 6 6 6 5 6 6 6 6 f 6 
            f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 f 6 6 6 6 6 7 6 
            6 6 6 6 6 6 5 6 6 6 6 6 6 6 6 6 
            6 5 6 6 6 6 6 6 6 6 6 6 6 6 5 6 
            6 6 6 6 6 f 6 6 7 6 6 6 6 6 6 6 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile7`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile8`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            6 6 6 . . . . . . . . . . . . . 
            6 6 6 6 . . . . . . . . . . . . 
            5 6 6 6 6 6 6 . . 6 6 6 6 7 6 . 
            6 6 6 6 f 6 6 6 6 6 6 6 6 6 6 . 
            6 6 7 6 6 6 6 6 6 6 6 5 6 6 6 6 
            6 6 6 6 6 6 5 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 7 6 6 f 6 
            6 6 6 6 6 6 f 6 6 6 6 6 6 6 6 6 
            6 f 6 6 6 6 6 6 6 6 5 6 6 6 6 6 
            6 6 6 6 6 6 7 6 6 6 6 6 6 6 f 6 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile8`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile15`)) {
        badtilex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 6 
            . . . . . . . . . . . . . 6 6 6 
            . . . . . . . . . . . . 6 6 5 6 
            . . . . . . . . . . 6 6 6 6 6 6 
            . . . . . . . . . 6 6 6 6 6 f 6 
            . . . . . . . . . 6 7 6 6 6 6 6 
            . . . . . . . . 6 6 6 6 6 6 6 6 
            . . . . . . 6 6 6 f 6 6 5 6 6 6 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 7 6 
            6 6 5 6 6 6 6 7 6 6 6 6 6 6 6 6 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.badtile)
        tiles.placeOnTile(badtilex, value)
        tiles.setTileAt(value, assets.tile`tile15`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function (sprite, otherSprite) {
    level += 1
    info.changeScoreBy(1)
    pause(500)
    createlevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.magicWand.play()
    otherSprite.destroy(effects.ashes, 500)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.badtile, function (sprite, otherSprite) {
    personaje.say("Ahh", 500)
    music.wawawawaa.play()
    personaje.destroy(effects.disintegrate, 500)
    pause(500)
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    myEnemy.destroy()
    otherSprite.destroy(effects.ashes, 500)
})
function llenar_nivel () {
    personaje = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f f f 6 6 6 6 6 . . . . 
        . . f f f f 6 6 f f f f 6 . . . 
        . . f f f 6 6 f f f f f f f . . 
        . . f f 6 f f f f f f f f f . . 
        . . f 8 6 1 f f f f f f f f . . 
        . . f 8 6 6 f 6 9 9 1 1 f f . . 
        . . f 8 8 8 f 6 9 9 9 9 f . . . 
        . . f f f f f f f f f f f . . . 
        . . . f f f f f f f f f . . . . 
        . . . . f f 8 f f 4 5 f . . . . 
        . . . . f f 8 f f 4 4 f . . . . 
        . . . f f f d f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . 8 8 . . . 8 8 . . . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(personaje, assets.tile`tile23`)
    controller.moveSprite(personaje, 95, 0)
    personaje.ay = 300
    scene.cameraFollowSprite(personaje)
    for (let value of tiles.getTilesByType(assets.tile`tile23`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile11`)) {
        points = sprites.create(img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . 8 8 8 8 8 8 8 . . . . . 
            . . 8 6 9 8 1 8 1 1 8 . . . . 
            . 8 6 9 8 6 9 9 8 9 1 8 . . . 
            . 8 8 8 8 8 8 8 8 8 8 8 . . . 
            . . 8 6 8 6 9 9 8 1 8 . . . . 
            . . . 8 6 8 6 8 9 8 . . . . . 
            . . . . 8 6 8 6 8 . . . . . . 
            . . . . . 8 8 8 . . . . . . . 
            . . . . . . 8 . . . . . . . . 
            `, SpriteKind.Food)
        animation.runImageAnimation(
        points,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 8 8 8 8 8 8 8 . . . . . . . 
            . 8 6 9 8 1 8 1 1 8 . . . . . . 
            8 6 9 8 6 9 9 8 9 1 8 . . . . . 
            8 8 8 8 8 8 8 8 8 8 8 . . . . . 
            . 8 6 8 6 9 9 8 1 8 . . . . . . 
            . . 8 6 8 6 8 9 8 . . . . . . . 
            . . . 8 6 8 6 8 . . . . . . . . 
            . . . . 8 8 8 . . . . . . . . . 
            . . . . . 8 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 8 8 8 8 8 8 8 . . . . . . . 
            . 8 6 9 8 1 8 1 9 8 . . . . . . 
            8 6 9 8 9 9 9 8 1 9 8 . . . . . 
            8 8 8 8 8 8 8 8 8 8 8 . . . . . 
            . 8 6 8 9 9 9 8 9 8 . . . . . . 
            . . 8 6 8 9 8 9 8 . . . . . . . 
            . . . 8 6 8 9 8 . . . . . . . . 
            . . . . 8 8 8 . . . . . . . . . 
            . . . . . 8 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 8 8 8 8 8 8 8 . . . . . . . 
            . 8 9 9 8 1 8 9 9 8 . . . . . . 
            8 6 9 8 9 9 1 8 9 9 8 . . . . . 
            8 8 8 8 8 8 8 8 8 8 8 . . . . . 
            . 8 6 8 9 9 1 8 9 8 . . . . . . 
            . . 8 6 8 9 8 9 8 . . . . . . . 
            . . . 8 9 8 1 8 . . . . . . . . 
            . . . . 8 8 8 . . . . . . . . . 
            . . . . . 8 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 8 8 8 8 8 8 8 . . . . . . . 
            . 8 9 9 8 1 8 9 9 8 . . . . . . 
            8 6 9 8 9 1 9 8 9 6 8 . . . . . 
            8 8 8 8 8 8 8 8 8 8 8 . . . . . 
            . 8 6 8 9 1 9 8 6 8 . . . . . . 
            . . 8 9 8 1 8 9 8 . . . . . . . 
            . . . 8 9 8 9 8 . . . . . . . . 
            . . . . 8 8 8 . . . . . . . . . 
            . . . . . 8 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 8 8 8 8 8 8 8 . . . . . . . 
            . 8 9 9 8 1 8 9 6 8 . . . . . . 
            8 6 9 8 1 9 9 8 9 6 8 . . . . . 
            8 8 8 8 8 8 8 8 8 8 8 . . . . . 
            . 8 9 8 1 9 9 8 6 8 . . . . . . 
            . . 8 9 8 1 8 9 8 . . . . . . . 
            . . . 8 9 8 9 8 . . . . . . . . 
            . . . . 8 8 8 . . . . . . . . . 
            . . . . . 8 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 8 8 8 8 8 8 8 . . . . . . . 
            . 8 9 9 8 9 8 6 6 8 . . . . . . 
            8 9 9 8 1 9 9 8 9 6 8 . . . . . 
            8 8 8 8 8 8 8 8 8 8 8 . . . . . 
            . 8 9 8 1 9 9 8 6 8 . . . . . . 
            . . 8 9 8 9 8 6 8 . . . . . . . 
            . . . 8 9 8 9 8 . . . . . . . . 
            . . . . 8 8 8 . . . . . . . . . 
            . . . . . 8 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 8 8 8 8 8 8 8 . . . . . . . 
            . 8 9 1 8 1 8 9 6 8 . . . . . . 
            8 9 1 8 1 9 9 8 9 6 8 . . . . . 
            8 8 8 8 8 8 8 8 8 8 8 . . . . . 
            . 8 1 8 9 9 6 8 6 8 . . . . . . 
            . . 8 9 8 9 8 6 8 . . . . . . . 
            . . . 8 9 8 6 8 . . . . . . . . 
            . . . . 8 8 8 . . . . . . . . . 
            . . . . . 8 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 8 8 8 8 8 8 8 . . . . . . . 
            . 8 1 1 8 1 8 9 6 8 . . . . . . 
            8 1 9 8 9 9 6 8 9 6 8 . . . . . 
            8 8 8 8 8 8 8 8 8 8 8 . . . . . 
            . 8 1 8 9 9 6 8 6 8 . . . . . . 
            . . 8 9 8 6 8 6 8 . . . . . . . 
            . . . 8 6 8 6 8 . . . . . . . . 
            . . . . 8 8 8 . . . . . . . . . 
            . . . . . 8 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        300,
        true
        )
        tiles.placeOnTile(points, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    effects.blizzard.startScreenEffect(1000)
    if (level == 0) {
        level_0()
    } else if (level == 1) {
        level_1()
    } else if (level == 2) {
        level_2()
    } else if (level == 3) {
        level_3()
    } else if (level == 4) {
        level_4()
    } else {
    	
    }
}
let points: Sprite = null
let badtilex: Sprite = null
let myEnemy: Sprite = null
let meta: Sprite = null
let personaje: Sprite = null
let projectile: Sprite = null
let level = 0
info.setScore(0)
info.setLife(3)
level = 0
createlevel()
forever(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.vx = randint(-90, 90)
        if (value.vx == 0) {
            value.vx = -100
        }
    }
    pause(500)
})
