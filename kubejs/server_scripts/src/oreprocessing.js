ServerEvents.recipes(event =>{
    event.remove({id: 'create:crushing/moon_desh_ore'})
    event.remove({id: 'create:crushing/deepslate_desh_ore'})
    event.blasting('kubejs:platinum_ingot','kubejs:platinum_dust')
    event.blasting('kubejs:platinum_ingot','kubejs:raw_sheldonite')
    event.custom({"type": "create:crushing",
    "ingredients": [
      {
        "item": "kubejs:raw_sheldonite"
      }
    ],
    "results": [
      {
        "item": "create:crushed_raw_platinum",
        "count": 1
      },
      {
        "item": "kubejs:platinum_dust",
        "count": 1,
        "chance": 0.05
      },
      {
        "item": "create:experience_nugget",
        "count": 1,
        "chance": 0.75
      }
    ],
    "processingTime": 300
  })
  event.custom({
    "type": "create:splashing",
    "ingredients": [
      {
        "item": "create:crushed_raw_platinum"
      }
    ],
    "results": [
      {
        "count": 9,
        "item": "kubejs:platinum_nugget"
      },
      {
        "count": 3,
        "item": "kubejs:platinum_nugget",
        "chance": 0.15
      }
    ]
  })
  event.custom({"type": "create:crushing",
    "ingredients": [
      {
        "item": "ad_astra:moon_desh_ore"
      }
    ],
    "results": [
      {
        "item": "ad_astra:raw_desh",
        "count": 1
      },
      {
        "item": "ad_astra:raw_desh",
        "count": 1,
        "chance": 0.25
      },
      {
        "item": "kubejs:platinum_dust",
        "count": 1,
        "chance": 0.03
      },
      {
        "item": "create:experience_nugget",
        "count": 1,
        "chance": 0.75
      },
      {
        "item": "ad_astra:moon_cobblestone",
        "count": 1,
        "chance": 0.125
      }
    ],
    "processingTime": 300
  })
  event.custom({"type": "create:crushing",
    "ingredients": [
      {
        "item": "ad_astra:deepslate_desh_ore"
      }
    ],
    "results": [
      {
        "item": "ad_astra:raw_desh",
        "count": 1
      },
      {
        "item": "ad_astra:raw_desh",
        "count": 1,
        "chance": 0.25
      },
      {
        "item": "kubejs:platinum_dust",
        "count": 1,
        "chance": 0.05
      },
      {
        "item": "create:experience_nugget",
        "count": 1,
        "chance": 0.75
      },
      {
        "item": "minecraft:deepslate",
        "count": 1,
        "chance": 0.125
      }
    ],
    "processingTime": 300
  })
})