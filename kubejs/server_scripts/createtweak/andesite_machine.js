ServerEvents.recipes(event => {
event.shaped(
Item.of('kubejs:iron_saw', 1),
  [ 
    '  A', 
    ' A ',
    'B  '
  ],
  {
    A: 'create:iron_sheet',  
    B: 'minecraft:stick'
  }
)
event.shaped(
Item.of('kubejs:screwdriver', 1),
  [ 
    '  A', 
    ' A ',
    'B  '
  ],
  {
    A: '#forge:rods/iron',  
    B: 'minecraft:stick'
  }
)
event.shaped(
Item.of('kubejs:andesite_machine', 1),
  [ 
    'AAA', 
    'ABA',
    'AAA'
  ],
  {
    A: 'kubejs:kinetic_mechanism',  
    B: 'create:andesite_casing'
  })
event.stonecutting('8x create:andesite_funnel', 'kubejs:andesite_machine')
event.stonecutting('8x create:andesite_tunnel', 'kubejs:andesite_machine')
event.stonecutting('6x create:gearbox', 'kubejs:andesite_machine')
event.stonecutting('4x create:clutch', 'kubejs:andesite_machine')
event.stonecutting('4x create:gearshift', 'kubejs:andesite_machine')
event.stonecutting('8x create:encased_chain_drive', 'kubejs:andesite_machine')
})