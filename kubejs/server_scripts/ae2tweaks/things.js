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
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:molten_redstone',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:molten_redstone',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:molten_redstone',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:molten_redstone',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:molten_redstone',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:molten_redstone',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:molten_redstone',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:molten_redstone',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:molten_redstone',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:molten_redstone',144)])
	]).transitionalItem(transmatrix).loops(3)
})