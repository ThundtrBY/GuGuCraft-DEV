ServerEvents.recipes(event =>{
  event.remove({id: 'tfmg:industrial_blasting/steel'})
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": [
      {
        "item": "minecraft:glass"
      }
    ],
    "loops": 100,
    "results": [
      {
        "item": "kubejs:reinforced_glass"
      }
    ],
    "sequence": [
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "kubejs:incomplete_reinforced_glass"
          }
        ],
        "results": [
          {
            "item": "kubejs:incomplete_reinforced_glass"
          }
        ]
      }
    ],
    "transitionalItem": {
          "item": "kubejs:incomplete_reinforced_glass"
        }
  })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
          "tag": "forge:paper"
        },
        "loops": 5,
        "results": [
          {
            "item": "kubejs:platinum_assembly"
          }
        ],
        "sequence": [
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "kubejs:incomplete_assembly"
              },
              {
                "item": "kubejs:platinum_ingot"
              }
            ],
            "results": [
              {
                "item": "kubejs:incomplete_assembly"
              }
            ]
          },
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "kubejs:incomplete_assembly"
              },
              {
                "item": "kubejs:platinum_ingot"
              }
            ],
            "results": [
              {
                "item": "kubejs:incomplete_assembly"
              }
            ]
          },
          {
            "type": "create:pressing",
            "ingredients": [
              {
                "item": "kubejs:incomplete_assembly"
              }
            ],
            "results": [
              {
                "item": "kubejs:incomplete_assembly"
              }
            ]
          }
        ],
        "transitionalItem": {
          "item": "kubejs:incomplete_assembly"
        }
  })
  event.custom({
    "type": "create:compacting",
    "heatRequirement": "superheated",
    "ingredients": [
      {
        "item": "minecraft:moss_block"
      },
      {
        "amount": 100,
        "fluid": "ad_astra:oil",
        "nbt": {}
      }
    ],
    "results": [
      {
        "item": "kubejs:rubber",
      }
    ]
  })
  event.smelting('kubejs:cured_rubber','kubejs:rubber')
  event.custom({
    "type": "tfmg:industrial_blasting",
    "ingredients": [
      {
        "count": 1,
        "item": "tfmg:blasting_mixture"
      }
    ],
    "processingTime": 200,
    "results": [
      {
        "fluid": "tfmg:molten_steel",
        "amount": 144
      },
      {
        "fluid": "tfmg:molten_slag",
        "amount": 72
      }
  
    ]
  })
  event.recipes.create.mixing(['ad_astra:steel_ingot', 'tfmg:ingot_mold'], [Fluid.of('tfmg:molten_steel',144), 'tfmg:ingot_mold']).superheated()
  BlockCrafting.addMultiblockStructure(MultiblockStructureFileBuilder.create("kubejs:universal_catalyst")
    .file("structures/ucatalyst.nbt")
    .center(Blocks.AMETHYST_BLOCK)
    .craftingItem("kubejs:integrational_mechanism")
    .resultItem("kubejs:universal_catalyst")
    .build()
  )
})