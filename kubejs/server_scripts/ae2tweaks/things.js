ServerEvents.recipes(e => {
    let transmatrix = 'kubejs:incomplete_matrix'
    e.remove({output:'ae2:matter_cannon'})
    e.remove({output:'ae2:sky_dust'})
    e.remove({output:'ae2:silicon'})
    e.shaped('kubejs:cast', [
            'AA ', 
            'AA '
        ], {
                A: 'minecraft:copper_ingot', 
        }
    )
    let cast = ['kubejs:plus_cast', 'kubejs:minus_cast', 'kubejs:multiply_cast', 'kubejs:divide_cast', 'kubejs:three_cast', 'kubejs:eight_cast']
    cast.forEach(i => {
        e.stonecutting(i, 'kubejs:cast')
    })
    //e.stonecutting('kubejs:plus_cast', 'kubejs:cast')
    //e.stonecutting('kubejs:minus_cast', 'kubejs:cast')
    //e.stonecutting('kubejs:multiply_cast', 'kubejs:cast')
    //e.stonecutting('kubejs:devide_cast', 'kubejs:cast')
    //e.stonecutting('kubejs:three_cast', 'kubejs:cast')
    //e.stonecutting('kubejs:eight_cast', 'kubejs:cast')
    e.recipes.create.crushing(['ae2:sky_stone_block', Item.of('ae2:sky_dust').withChance(0.5)], 'ae2:sky_stone_block').processingTime(200)
    e.recipes.create.sequenced_assembly([
		Item.of('kubejs:incomplete_matrix')
	], 'ae2:printed_silicon', [ 
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
})