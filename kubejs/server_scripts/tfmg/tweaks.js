ServerEvents.recipes(e => {
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
})