StartupEvents.registry('fluid', e => {
  let colors = [0xCBE827, 0xAEE827, 0x68E827, 0x27E86E, 0x27E8B1, 0x27DEE8, 0x27B5E8, 0x2798E8, 0x2778E8, 0x2748E8]
  for (var i = 0; i < 10; i++)
    e.create('number_' + i)
      .displayName(`Liquified Logic (${i})`)
      .stillTexture('kubejs:block/fluid/number_still')
      .flowingTexture('kubejs:block/fluid/number_flow')
      .color(colors[i])
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
  e.create('sulfur_light_oil')
    .noBucket()
    .thinTexture(0xFFFF00)
    .displayName('含硫轻燃油')
  e.create('sulfur_heavy_oil')
    .thinTexture(0xFFFACD)
    .displayName('含硫重燃油')
  e.create('sulfur_naphtha')
    .thinTexture(0xFFD700)
    .displayName('含硫石脑油')
  e.create('sulfur_petroleum_gas')
    .thinTexture(0xF8F8FF)
    .displayName('含硫炼油气')
  e.create('light_oil')
    .thinTexture(0xFFFF00)
    .displayName('轻燃油')
  e.create('heavy_oil')
    .thinTexture(0xFFFACD)
    .displayName('重燃油')
  e.create('naphtha')
    .thinTexture(0xFFD700)
    .displayName('石脑油')
  e.create('petroleum_gas')
    .thinTexture(0xF8F8FF)
    .displayName('炼油气')
  e.create('matrix')
    .displayName('计算矩阵')
    .stillTexture('kubejs:block/fluid/matrix_still')
    .flowingTexture('kubejs:block/fluid/matrix_flow')
    .bucketColor(colors[0])
})