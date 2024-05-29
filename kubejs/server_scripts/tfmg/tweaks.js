ServerEvents.recipes(e => {
    let transcoke = 'kubejs:incomplete_coke_chunk'
    e.remove({ id: 'tfmg:compacting/plastic_molding' })
    e.custom({
        "type":"lychee:item_inside",
        "item_in": { 
            "item": "minecraft:ice" 
        },
        "block_in": { 
            "blocks": ["tfmg:liquid_plastic"] 
        },
        "post":  [{  
            "type": "drop_item",
            "item": "tfmg:plastic_sheet"
        },
        {
            "type": "place",
            "block": "minecraft:air"
        }
      ]
    })
    e.recipes.create.sequenced_assembly([
		Item.of('kubejs:coke_chunk')
	], 'tfmg:coal_coke', [ 
        e.recipes.createFilling(transcoke, [transcoke, Fluid.water(100)]),
        e.recipes.createCutting(transcoke,transcoke)
	]).transitionalItem(transcoke).loops(1)
})