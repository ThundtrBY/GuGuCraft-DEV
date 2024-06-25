ServerEvents.recipes(e => {
    // removal
    e.remove({output:'ae2:printed_calculation_processor'})
    e.remove({output:'ae2:printed_engineering_processor'})
    e.remove({output:'ae2:printed_logic_processor'})
    e.remove({output:'ae2:printed_silicon'})
    e.remove({output:'ae2:engineering_processor'})
    e.remove({output:'ae2:calculation_processor'})
    e.remove({output:'ae2:logic_processor'})
    // new recipe
    let transengineering = 'kubejs:incomplete_engineering_processor' // making a variable to store the transitional item makes the code more readable
    let transcalculation = 'kubejs:incomplete_calculation_processor'
    let translogic = 'kubejs:incomplete_logic_processor'
    let transprintedsilicon = 'kubejs:incomplete_printed_silicon'
    let transprintedengineering = 'kubejs:incomplete_printed_engineering_processor'
    let transprintedcalculation = 'kubejs:incomplete_printed_calculation_processor'
    let transprintedlogic = 'kubejs:incomplete_printed_logic_processor'
    //processor
    e.recipes.create.sequenced_assembly([
		Item.of('ae2:engineering_processor').withChance(95.0), // this is the item that will appear in JEI as the result,the rest of items will be part of the scrap
	], 'ae2:printed_silicon', [ // 'ae2:printed_silicon' is the input
		// the transitional item set by `transitionalItem(transengineering)` is the item used during the intermediate stages of the assembly
		e.recipes.createDeploying(transengineering, [transengineering, 'ae2:printed_engineering_processor']),
        // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
        e.recipes.createFilling(transengineering, [transengineering, Fluid.of('kubejs:molten_redstone',144)])
	]).transitionalItem(transengineering).loops(1)
    e.recipes.create.sequenced_assembly([
		Item.of('ae2:calculation_processor')
	], 'ae2:printed_silicon', [ 
		e.recipes.createDeploying(transcalculation, [transcalculation, 'ae2:printed_calculation_processor']),
        e.recipes.createFilling(transcalculation, [transcalculation, Fluid.of('kubejs:molten_redstone',144)])
	]).transitionalItem(transcalculation).loops(1)
    e.recipes.create.sequenced_assembly([
		Item.of('ae2:logic_processor')
	], 'ae2:printed_silicon', [ 
		e.recipes.createDeploying(translogic, [translogic, 'ae2:printed_logic_processor']),
        e.recipes.createFilling(translogic, [translogic, Fluid.of('kubejs:molten_redstone',144)])
	]).transitionalItem(translogic).loops(1)
//printed processor
  e.recipes.create.sequenced_assembly([
		Item.of('ae2:printed_silicon')
	], 'ae2:silicon', [ 
		e.recipes.createCutting(transprintedsilicon, transprintedsilicon),
        e.recipes.createDeploying(transprintedsilicon, [transprintedsilicon, 'ae2:silicon_press']).keepHeldItem(),
            e.recipes.createPressing(transprintedsilicon, transprintedsilicon)
	]).transitionalItem(transprintedsilicon).loops(1)
  e.recipes.create.sequenced_assembly([
		Item.of('ae2:printed_engineering_processor').withCount(9)
	], 'minecraft:diamond_block', [ 
		e.recipes.createCutting(transprintedengineering, transprintedengineering),
        e.recipes.createDeploying(transprintedengineering, [transprintedengineering, 'ae2:engineering_processor_press']).keepHeldItem(),
            e.recipes.createPressing(transprintedengineering, transprintedengineering)
	]).transitionalItem(transprintedengineering).loops(3)
  e.recipes.create.sequenced_assembly([
		Item.of('ae2:printed_calculation_processor').withCount(4)
	], 'ae2:quartz_block', [ 
		e.recipes.createCutting(transprintedcalculation, transprintedcalculation),
        e.recipes.createDeploying(transprintedcalculation, [transprintedcalculation, 'ae2:calculation_processor_press']).keepHeldItem(),
            e.recipes.createPressing(transprintedcalculation, transprintedcalculation)
	]).transitionalItem(transprintedcalculation).loops(2)
  e.recipes.create.sequenced_assembly([
		Item.of('ae2:printed_logic_processor').withCount(9)
	], 'minecraft:gold_block', [ 
		e.recipes.createCutting(transprintedlogic, transprintedlogic),
        e.recipes.createDeploying(transprintedlogic, [transprintedlogic, 'ae2:logic_processor_press']).keepHeldItem(),
            e.recipes.createPressing(transprintedlogic, transprintedlogic)
	]).transitionalItem(transprintedlogic).loops(3)
})