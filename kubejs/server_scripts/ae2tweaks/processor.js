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
    e.recipes.create.sequenced_assembly([
		Item.of('ae2:engineering_processor').withChance(95.0), // this is the item that will appear in JEI as the result,the rest of items will be part of the scrap
	], 'ae2:printed_silicon', [ // 'ae2:printed_silicon' is the input
		// the transitional item set by `transitionalItem(transengineering)` is the item used during the intermediate stages of the assembly
		e.recipes.createDeploying(transengineering, [transengineering, 'ae2:printed_engineering_processor']),
        // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
        e.recipes.createFilling(transengineering, [transengineering, Fluid.of('kubejs:molten_redstone',144)])
	]).transitionalItem(transengineering).loops(3)
    e.recipes.create.sequenced_assembly([
		Item.of('ae2:calculation_processor')
	], 'ae2:printed_silicon', [ 
		e.recipes.createDeploying(transcalculation, [transcalculation, 'ae2:printed_calculation_processor']),
        e.recipes.createFilling(transcalculation, [transcalculation, Fluid.of('kubejs:molten_redstone',144)])
	]).transitionalItem(transcalculation).loops(3)
    e.recipes.create.sequenced_assembly([
		Item.of('ae2:logic_processor')
	], 'ae2:printed_silicon', [ 
		e.recipes.createDeploying(translogic, [translogic, 'ae2:printed_logic_processor']),
        e.recipes.createFilling(translogic, [translogic, Fluid.of('kubejs:molten_redstone',144)])
	]).transitionalItem(translogic).loops(3)
})