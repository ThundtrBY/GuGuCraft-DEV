ServerEvents.recipes(e => {
    let transmatrix = 'kubejs:incomplete_matrix'
    e.remove({output:'ae2:matter_cannon'})
    e.remove({output:'ae2:sky_dust'})
    e.remove({output:'ae2:silicon'})
    e.stonecutting('kubejs:cast', 'minecraft:copper_ingot')
    let cast = ['kubejs:plus_cast', 'kubejs:minus_cast', 'kubejs:multiply_cast', 'kubejs:divide_cast', 'kubejs:three_cast', 'kubejs:eight_cast']
    let cast_flow = ['kubejs:plus_cast_flow', 'kubejs:minus_cast_flow', 'kubejs:multiply_cast_flow', 'kubejs:divide_cast_flow', 'kubejs:three_cast_flow', 'kubejs:eight_cast_flow']
    cast.forEach(i => {
        e.stonecutting(i, 'kubejs:cast')
    })
    e.recipes.create.mixing([Fluid.of('kubejs:matrix',50),Fluid.water(10)],'kubejs:calculation_mechanism').superheated()
    e.recipes.create.filling('kubejs:plus_cast_flow',[Fluid.of('kubejs:matrix',100),'kubejs:plus_cast'])
    e.recipes.create.filling('kubejs:minus_cast_flow',[Fluid.of('kubejs:matrix',100),'kubejs:minus_cast'])
    e.recipes.create.filling('kubejs:multiply_cast_flow',[Fluid.of('kubejs:matrix',100),'kubejs:multiply_cast'])
    e.recipes.create.filling('kubejs:divide_cast_flow',[Fluid.of('kubejs:matrix',100),'kubejs:divide_cast'])
    e.recipes.create.filling('kubejs:three_cast_flow',[Fluid.of('kubejs:matrix',100),'kubejs:three_cast'])
    e.recipes.create.filling('kubejs:eight_cast_flow',[Fluid.of('kubejs:matrix',100),'kubejs:eight_cast'])
    e.recipes.create.splashing(['kubejs:plus','kubejs:plus_cast'],'kubejs:plus_cast_flow')
    e.recipes.create.splashing(['kubejs:minus','kubejs:minus_cast'],'kubejs:minus_cast_flow')
    e.recipes.create.splashing(['kubejs:multiply','kubejs:multiply_cast'],'kubejs:multiply_cast_flow')
    e.recipes.create.splashing(['kubejs:divide','kubejs:divide_cast'],'kubejs:divide_cast_flow')
    e.recipes.create.splashing(['kubejs:3','kubejs:three_cast'],'kubejs:three_cast_flow')
    e.recipes.create.splashing(['kubejs:8','kubejs:eight_cast'],'kubejs:eight_cast_flow')
    e.recipes.create.crushing(['ae2:sky_stone_block', Item.of('ae2:sky_dust').withChance(0.5)], 'ae2:sky_stone_block').processingTime(200)
    e.recipes.create.sequenced_assembly([
		Item.of('kubejs:incomplete_matrix')
	], 'tfmg:plastic_sheet', [ 
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_0',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_1',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_2',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_3',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_4',144)])
	]).transitionalItem(transmatrix).loops(3)
    e.recipes.create.sequenced_assembly([
		Item.of('kubejs:computation_matrix')
	], 'kubejs:incomplete_matrix', [ 
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_5',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_6',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_7',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_8',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_9',144)])
	]).transitionalItem(transmatrix).loops(3)
    for (var i = 0; i < 10; i++)
      e.recipes.create.emptying(Fluid.of(`kubejs:number_${i}`,144),`kubejs:${i}`)
    e.recipes.create.mixing(Fluid.of('kubejs:fine_sand',100),'minecraft:sand').heated()
    e.recipes.create.mixing('kubejs:sand_ball',[Fluid.of('kubejs:fine_sand',1000),Fluid.water(100)])
})