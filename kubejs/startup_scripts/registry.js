// priority: 0
ItemEvents.toolTierRegistry (event =>{
  event.add('tool', tier =>{
    tier.uses = 250
    tier.repairIngredient = '#forge:ingots/iron'
  })
})
StartupEvents.registry('item', e =>{
  e.create('test').displayName('test')//示例
  e.create('primogem').displayName('原石').food(food =>{
    food
        .hunger(6)
        .saturation(160)
  })
  e.create('rubber').displayName('橡胶')
  e.create('cured_rubber').displayName('硫化橡胶')
  e.create('2x_steel_plate').displayName('钢重板')
  e.create('incomplete_desh_engine').displayName('戴斯引擎(半成品)')
  e.create('incomplete_desh_tank').displayName('戴斯燃料储罐(半成品)')
  e.create('raw_sheldonite').displayName('粗铂')
  e.create('platinum_ingot').displayName('铂锭')
  e.create('platinum_nugget').displayName('铂粒')
  e.create('platinum_dust').displayName('铂粉')
  e.create('incomplete_assembly').displayName('材料封包(半成品)')
  e.create('platinum_assembly').displayName('材料封包(铂金)')
  e.create('twilight_crystal').displayName('暮光水晶')
  e.create('lamp_of_cinders_alt').displayName('休眠的余烬之灯').unstackable()
  e.create('iron_saw', 'sword').tier('tool').displayName('铁锯').unstackable()
  e.create('screwdriver', 'sword').tier('tool').displayName('螺丝刀').unstackable()
  e.create('incomplete_kinetic_mechanism').displayName('动力构件(半成品)')
  e.create('kinetic_mechanism').displayName('动力构件')
  e.create('incomplete_sturdy_mechanism').displayName('坚固构件(半成品)')
  e.create('sturdy_mechanism').displayName('坚固构件')
  e.create('incomplete_sealed_mechanism').displayName('密封构件(半成品)')
  e.create('sealed_mechanism').displayName('密封构件')
  e.create('infernal_mechanism').displayName('炼狱构件')
  e.create('abstruse_mechanism').displayName('末影构件')
  e.create('integrational_mechanism').displayName('集成构件')
  e.create('calculation_mechanism').displayName('运算构件')
})
StartupEvents.registry('block', e =>{
  e.create('sheldonite_ore'). displayName('铂矿石').soundType('nether_ore').requiresTool(true).tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
  e.create('andesite_machine'). displayName('安山机械装置').notSolid().renderType('solid')
  e.create('brass_machine'). displayName('黄铜机械装置').soundType('lantern').notSolid().renderType('translucent')
  e.create('supercritical_machine').displayName('超临界机械装置').notSolid().renderType('cutout').hardness(3.0)
  e.create('train_machine').displayName('列车机械装置').soundType('lantern').notSolid().renderType('cutout').hardness(3.0)
  e.create('reinforced_glass').displayName('高密度防爆玻璃').soundType('glass').notSolid().renderType('cutout').resistance(1200).hardness(20.0).tagBlock("mineable/pickaxe")
  e.create('incomplete_reinforced_glass').displayName('高密度防爆玻璃(半成品)').soundType('glass').notSolid().renderType('cutout')
})