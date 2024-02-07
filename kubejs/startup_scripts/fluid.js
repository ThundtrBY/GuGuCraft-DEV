StartupEvents.registry('fluid', e => {
    
    
    // Basic "thick" (looks like lava) fluid with red tint
    e.create('molten_twilight_crystal') // ('') contains the fluid id
      .noBucket()
      .thickTexture(0x99FF99) // () conatins the hex code, prefixed by 0x, of the color of the fluid
      .displayName('熔融暮色精华') //in  game name of fluid
    e.create('resin')
      .noBucket()
      .flowingTexture('kubejs:block/fluid/resin_flow')
      .stillTexture('kubejs:block/fluid/resin_flow')
      .displayName('树脂')
    e.create('molten_redstone')
      .noBucket()
      .thickTexture(0xFF0000)
      .displayName('熔融红石') 
})