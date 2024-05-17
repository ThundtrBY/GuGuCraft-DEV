ServerEvents.recipes(e => {
    let transmatrix = 'kubejs:incomplete_matrix'
    e.remove({output:'ae2:matter_cannon'})
    e.shaped(
        Item.of('ae2:mysterious_cube', 1),
        [ 
          'EAE', 
          'BFD',
          'ECE'  
        ],
        {
          A: 'ae2:calculation_processor_press',
          B: 'ae2:engineering_processor_press',
          C: 'ae2:silicon_press',
          D: 'ae2:logic_processor_press',
          E: 'ae2:smooth_sky_stone_block',
          F: 'ae2:fluix_block'
        }
    )
    e.recipes.create.sequenced_assembly([
		Item.of('kubejs:computation_matrix')
	], 'ae2:printed_silicon', [ 
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_0',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_1',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_2',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_3',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_4',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_5',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_6',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_7',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_8',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_9',144)])
	]).transitionalItem(transmatrix).loops(3)
  for (var i = 0; i < 10; i++)
    e.recipes.create.emptying(Fluid.of(`kubejs:number_${i}`,144),`kubejs:${i}`)
})