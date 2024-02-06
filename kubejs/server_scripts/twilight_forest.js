
ServerEvents.recipes(event => {
  event.remove({ mod: 'ad_astra', type: 'minecraft:crafting_shaped'})
  event.remove({ mod: 'ad_astra', type: 'minecraft:crafting_shapeless'})
  event.remove({ type: 'ad_astra:nasa_workbench'})
  event.remove({ type: 'ad_astra:compressing'})
  event.remove({ type: 'ad_astra:fuel_conversion'})
  event.remove({output: 'ad_astra:steel_ingot'})
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "minecraft:diamond"
    },
    "loops": 1,
    "results": [
      {
        "chance": 100.0,
        "item": "guguaddons:twilight_gem"
      },
    ],
    "sequence": [
      {
        "type": "create:cutting",
        "ingredients": [
          {
            "item": "guguaddons:unfinished_twilight_mechanism"
          }
        ],
        "processingTime": 20,
        "results": [
          {
        "item": "guguaddons:unfinished_twilight_mechanism"
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "guguaddons:unfinished_twilight_mechanism"
          },
          {
            "amount": 1000,
            "fluid": "guguaddons:portal_matter",
            "nbt": {}
          }
        ],
        "results": [
          {
            "item": "guguaddons:unfinished_twilight_mechanism"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "guguaddons:unfinished_twilight_mechanism"
          },
          {
            "item": "create:golden_sheet"
          }
        ],
        "results": [
          {
            "item": "guguaddons:unfinished_twilight_mechanism"
          }
        ]
      }
    ],
    "transitionalItem": {
      "item": "guguaddons:unfinished_twilight_mechanism"
    }
  })
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      {
        "item": "minecraft:ender_pearl"
      }
    ],
    "processingTime": 100,
    "results": [
      {
        "item": "guguaddons:ender_dust"
      }
    ]
  })
  event.custom({
    "type": "create:mixing",
    "heatRequirement": "superheated",
    "ingredients": [
      {
        "item": "guguaddons:ender_dust"
      },
      {
        "amount": 1000,
        "fluid": "minecraft:water"
      }
    ],
    "results": [
      {
        "amount": 500,
        "fluid": "guguaddons:portal_matter"
      }
    ]
  })
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      {
        "item": "minecraft:sugar_cane"
      }
    ],
    "processingTime": 80,
    "results": [
      {
        "item": "guguaddons:biomass"
      },
      {
        "chance": 0.25,
        "item": "guguaddons:biomass"
      }
    ]
  })
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      {
        "item": "twilightforest:fiddlehead"
      }
    ],
    "processingTime": 20,
    "results": [
      {
        "item": "guguaddons:biomass",
        "count": 10
      }
    ]
  })
  event.custom({
    "type": "create:compacting",
    "ingredients": [
      {
        "item": "guguaddons:biomass"
      },
      {
        "item": "guguaddons:biomass"
      },
      {
        "item": "guguaddons:biomass"
      }
    ],
    "results": [
      {
        "item": "guguaddons:biomass_pellet"
      },
      {
        "amount": 100,
        "fluid": "minecraft:water",
        "nbt": {}
      }
    ]
  })
  event.custom({
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "twilightforest:fiddlehead"
          },
          {
            "tag": "farmersdelight:tools/knives"
          }
        ],
        "results": [
          {
            "item": "guguaddons:fiddlehead_fern",
            "count": 2
          }
        ]
  }).keepIngredient('kubejs:iron_saw').damageIngredient('kubejs:iron_saw')
  event.custom({
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "twilightforest:lamp_of_cinders"
      }
    ],
    "results": [
      {
        "item": "kubejs:lamp_of_cinders_alt"
      },
      {
        "amount": 250,
        "fluid": "kubejs:molten_twilight_crystal"
      }
    ]
  })
  event.custom({
    "type": "minecraft:campfire_cooking",
    "cookingtime": 600,
    "experience": 0.0,
    "ingredient": {
      "item": "kubejs:lamp_of_cinders_alt"
    },
    "result": "twilightforest:lamp_of_cinders"
  })
  event.custom({
    "type": "create:mixing",
    "heatRequirement": "superheated",
    "ingredients": [
      {
        "item": "twilightforest:naga_scale"
      },
      {
        "item": "twilightforest:steeleaf_ingot"
      },
      {
        "item": "twilightforest:knightmetal_ingot"
      },
      {
        "item": "twilightforest:fiery_blood"
      }
    ],
    "results": [
      {
        "amount": 100,
        "fluid": "kubejs:molten_twilight_crystal"
      }
    ]
  })
  event.custom({
    "type": "minecraft:campfire_cooking",
    "cookingtime": 200,
    "experience": 0.0,
    "ingredient": {
      "item": "guguaddons:fiddlehead_fern"
    },
    "result": "twilightforest:fiddlehead"
  })
})