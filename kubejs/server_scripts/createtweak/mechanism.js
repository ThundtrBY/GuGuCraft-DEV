ServerEvents.recipes(event =>{
    event.remove({output:'create_dd:calculation_mechanism'})
// Kinetic
    event.shaped(
        Item.of('kubejs:kinetic_mechanism', 1),
          [ 
            'AC ', 
            'DB ',
            '   '
          ],
          {
            A: 'kubejs:iron_saw',  
            B: '#minecraft:logs',
            C: 'create:cogwheel',
            D: 'create:andesite_alloy'
          }
        ).damageIngredient('kubejs:iron_saw')
        event.custom({
          "type": "create:sequenced_assembly",
          "ingredient": {
            "tag": "minecraft:wooden_slabs"
          },
          "loops": 1,
          "results": [
            {
              "item": "kubejs:kinetic_mechanism"
            }
          ],
          "sequence": [
            {
              "type": "create:deploying",
              "ingredients": [
                {
                  "item": "kubejs:incomplete_kinetic_mechanism"
                },
                {
                  "item": "kubejs:iron_saw"
                }
              ],
              "results": [
                {
                  "item": "kubejs:incomplete_kinetic_mechanism"
                }
              ]
            },
            {
              "type": "create:deploying",
              "ingredients": [
                {
                  "item": "kubejs:incomplete_kinetic_mechanism"
                },
                {
                  "item": "create:andesite_alloy"
                }
              ],
              "results": [
                {
                  "item": "kubejs:incomplete_kinetic_mechanism"
                }
              ]
            },
            {
              "type": "create:deploying",
              "ingredients": [
                {
                  "item": "kubejs:incomplete_kinetic_mechanism"
                },
                {
                  "item": "create:andesite_alloy"
                }
              ],
              "results": [
                {
                  "item": "kubejs:incomplete_kinetic_mechanism"
                }
              ]
            }
          ],
          "transitionalItem": {
            "item": "kubejs:incomplete_kinetic_mechanism"
          }
    }).damageIngredient('kubejs:iron_saw')
// Sturdy
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
          "item": "kubejs:kinetic_mechanism"
        },
        "loops": 1,
        "results": [
          {
            "item": "kubejs:sturdy_mechanism"
          }
        ],
        "sequence": [
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "kubejs:incomplete_sturdy_mechanism"
              },
              {
                "item": "kubejs:platinum_assembly"
              }
            ],
            "results": [
              {
                "item": "kubejs:incomplete_sturdy_mechanism"
              }
            ]
          },
		  {
            "type": "create:cutting",
            "ingredients": [
              {
                "item": "kubejs:incomplete_sturdy_mechanism"
              }
            ],
            "processingTime": 400,
            "results": [
              {
                "item": "kubejs:incomplete_sturdy_mechanism"
              }
            ]
          },
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "kubejs:incomplete_sturdy_mechanism"
              },
              {
                "item": "ad_astra:desh_plate"
              }
            ],
            "results": [
              {
                "item": "kubejs:incomplete_sturdy_mechanism"
              }
            ]
          },
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "kubejs:incomplete_sturdy_mechanism"
              },
              {
                "tag": "kubejs:tools_screwdriver"
              }
            ],
            "results": [
              {
                "item": "kubejs:incomplete_sturdy_mechanism"
              }
            ]
          }
        ],
        "transitionalItem": {
          "item": "kubejs:incomplete_sturdy_mechanism"
        }
  }).damageIngredient('kubejs:tools_screwdriver')
//Twilight
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "create:precision_mechanism"
    },
    "loops": 1,
    "results": [
      {
        "chance": 100.0,
        "item": "guguaddons:twilight_mechanism"
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
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "guguaddons:unfinished_twilight_mechanism"
          },
          {
            "item": "guguaddons:twilight_gem"
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
            "item": "create:cogwheel"
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
            "item": "create:electron_tube"
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
let cal = 'create_dd:incomplete_calculation_mechanism'
event.recipes.create.sequenced_assembly([
  Item.of('create_dd:calculation_mechanism')
], 'create:precision_mechanism', [ 
      event.recipes.createDeploying(cal,[cal,'ae2:printed_silicon']),
      event.recipes.createDeploying(cal,[cal,'ae2:printed_silicon']),
      event.recipes.createDeploying(cal,[cal,'#kubejs:tools_screwdriver'])
]).transitionalItem(cal).loops(1)
})