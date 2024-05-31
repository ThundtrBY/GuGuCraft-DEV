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
  e.create('incomplete_engineering_processor').displayName('工程处理器(半成品)')
  e.create('incomplete_calculation_processor').displayName('运算处理器(半成品)')
  e.create('incomplete_logic_processor').displayName('逻辑处理器(半成品)')
  e.create('incomplete_printed_silicon').displayName('硅板(半成品)')
  e.create('incomplete_printed_engineering_processor').displayName('工程电路板(半成品)')
  e.create('incomplete_printed_calculation_processor').displayName('运算电路板(半成品)')
  e.create('incomplete_printed_logic_processor').displayName('逻辑电路板(半成品)')
  e.create('universal_catalyst').displayName('通用催化剂')
  e.create('0').displayName("0")
  e.create('1').displayName("1")
  e.create('2').displayName("2")
  e.create('3').displayName("3")
  e.create('4').displayName("4")
  e.create('5').displayName("5")
  e.create('6').displayName("6")
  e.create('7').displayName("7")
  e.create('8').displayName("8")
  e.create('9').displayName("9")
  e.create('plus').displayName("+")
  e.create('minus').displayName("-")
  e.create('multiply').displayName("x")
  e.create('divide').displayName("÷")
  e.create('computation_matrix').displayName('计算矩阵')
  e.create('incomplete_matrix').displayName('计算矩阵（半成品）')
  e.create('missingno').displayName('错误')
  e.create('sand_ball').displayName('沙子球')
  e.create('silicon_compound').displayName('硅化合物')
  e.create('cast').displayName('空白铸模')
  e.create('plus_cast').displayName('铸模(+)')
  e.create('minus_cast').displayName('铸模(-)')
  e.create('multiply_cast').displayName('铸模(x)')
  e.create('divide_cast').displayName('铸模(÷)')
  e.create('three_cast').displayName('铸模(3)')
  e.create('eight_cast').displayName('铸模(8)')
  e.create('plus_cast_flow').displayName('未冷却的铸模(+)')
  e.create('minus_cast_flow').displayName('未冷却的铸模(-)')
  e.create('multiply_cast_flow').displayName('未冷却的铸模(x)')
  e.create('divide_cast_flow').displayName('未冷却的铸模(÷)')
  e.create('three_cast_flow').displayName('未冷却的铸模(3)')
  e.create('eight_cast_flow').displayName('未冷却的铸模(8)')
  e.create('rough_sand').displayName('沙子碎块')
  e.create('purified_sand').displayName('纯净沙子')
  e.create('coke_chunk').displayName('焦煤碎块')
  e.create('incomplete_coke_chunk').displayName('焦煤碎块(半成品)')
})
StartupEvents.registry('block', e =>{
  e.create('sheldonite_ore'). displayName('铂矿石').soundType('nether_ore').requiresTool(true).tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
  e.create('andesite_machine'). displayName('安山机械装置').notSolid().renderType('solid')
  e.create('brass_machine'). displayName('黄铜机械装置').soundType('lantern').notSolid().renderType('translucent')
  e.create('supercritical_machine').displayName('超临界机械装置').notSolid().renderType('cutout').hardness(3.0)
  e.create('train_machine').displayName('列车机械装置').soundType('lantern').notSolid().renderType('cutout').hardness(3.0)
  e.create('reinforced_glass').displayName('高密度防爆玻璃').soundType('glass').notSolid().renderType('cutout').resistance(1200).hardness(20.0).tagBlock("mineable/pickaxe")
  e.create('incomplete_reinforced_glass').displayName('高密度防爆玻璃(半成品)').soundType('glass').notSolid().renderType('cutout')
  e.create('ingot_mold').displayName('锭铸模').soundType('lantern').notSolid().renderType('cutout').box(5, 0, 3, 11, 4, 13, true)
  e.create('molten_steel_ingot_mold').displayName('熔融钢铸模').soundType('lantern').notSolid().renderType('cutout').box(5, 0, 3, 11, 4, 13, true)
})