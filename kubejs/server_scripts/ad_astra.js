ServerEvents.recipes(event => {
  event.remove({output:'ad_astra:netherite_space_helmet'})
  event.remove({output:'ad_astra:netherite_space_suit'})
  event.remove({output:'ad_astra:netherite_space_pants'})
  event.remove({output:'ad_astra:netherite_space_boots'})
  event.custom({
    "type": "minecraft:smithing_transform",
    "addition": {
      "item": "minecraft:netherite_ingot"
    },
    "base": {
      "item": "ad_astra:space_helmet"
    },
    "result": {
      "item": "ad_astra:netherite_space_helmet"
    },
    "template": {
      "item": "minecraft:netherite_upgrade_smithing_template"
    }
  })
  event.custom({
    "type": "minecraft:smithing_transform",
    "addition": {
      "item": "minecraft:netherite_ingot"
    },
    "base": {
      "item": "ad_astra:space_suit"
    },
    "result": {
      "item": "ad_astra:netherite_space_suit"
    },
    "template": {
      "item": "minecraft:netherite_upgrade_smithing_template"
    }
  })
  event.custom({
    "type": "minecraft:smithing_transform",
    "addition": {
      "item": "minecraft:netherite_ingot"
    },
    "base": {
      "item": "ad_astra:space_pants"
    },
    "result": {
      "item": "ad_astra:netherite_space_pants"
    },
    "template": {
      "item": "minecraft:netherite_upgrade_smithing_template"
    }
  })
  event.custom({
    "type": "minecraft:smithing_transform",
    "addition": {
      "item": "minecraft:netherite_ingot"
    },
    "base": {
      "item": "ad_astra:space_boots"
    },
    "result": {
      "item": "ad_astra:netherite_space_boots"
    },
    "template": {
      "item": "minecraft:netherite_upgrade_smithing_template"
    }
  })
  event.shaped(
    Item.of('ad_astra:steel_block', 1), // arg 1: output
    [ 
      'AAA', 
      'AAA', // arg 2: the shape (array of strings)
      'AAA'  
    ],
    {
      A: 'ad_astra:steel_ingot',
    }
  )
  event.shaped(
    Item.of('ad_astra:desh_block', 1),
    [ 
      'AAA', 
      'AAA',
      'AAA'  
    ],
    {
      A: 'ad_astra:desh_ingot',
    }
  )
  event.shaped(
    Item.of('ad_astra:engine_fan', 1), 
    [ 
      ' A ', 
      'ABA', 
      ' A '  
    ],
    {
      A: '#forge:rods/iron',
      B: 'ad_astra:steel_plate'
    }
  )
  event.shaped(
    Item.of('ad_astra:oxygen_tank', 1),
    [ 
      ' AC', 
      'ABA',
      'AA '  
    ],
    {
      A: 'ad_astra:steel_plate',
      B: 'create:netherite_backtank',
      C: 'create:shaft'
    }
  )
  event.shaped(
    Item.of('ad_astra:oxygen_gear', 1),
    [ 
      ' C ', 
      'ABA',
      'ABA'  
    ],
    {
      A: 'ad_astra:steel_plate',
      B: 'create:sturdy_sheet',
      C: 'minecraft:redstone'
    }
  )
  event.shaped(
    Item.of('ad_astra:desh_block', 1),
    [ 
      'AAA', 
      'AAA',
      'AAA'  
    ],
    {
      A: 'ad_astra:desh_ingot',
    }
  )
  event.shaped(
    Item.of('ad_astra:oxygen_loader', 1),
    [ 
      'ABA', 
      'ECE',
      'ADA'  
    ],
    {
      A: 'ad_astra:steel_plate',
      B: 'ad_astra:engine_fan',
      C: 'minecraft:lightning_rod',
      D: 'minecraft:redstone_block',
      E: 'ad_astra:oxygen_tank',
    }
  )
  event.shaped(
    Item.of('ad_astra:oxygen_distributor', 1),
    [ 
      'BBB', 
      'ECE',
      'ADA'  
    ],
    {
      A: 'ad_astra:desh_plate',
      B: 'ad_astra:engine_fan',
      C: 'ad_astra:oxygen_loader',
      D: 'ad_astra:oxygen_gear',
      E: 'ad_astra:oxygen_tank',
    }
  )
  event.custom({
    "type": "create:mixing",
    "heatRequirement": "superheated",
    "ingredients": [
      {
        "item": "minecraft:iron_ingot"
      },
      {
        "tag": "minecraft:coals"
      }
    ],
    "results": [
      {
        "amount": 1,
        "item": "ad_astra:steel_ingot"
      }
    ]
  })
  event.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": false,
    "key": {
      "A": {
        "item": "ad_astra:steel_block"
      },
      "N": {
        "item": "ad_astra:rocket_nose_cone"
      },
      "S": {
        "item": "guguaddons:twilight_mechanism"
      },
      "T": {
        "tag": "create:seats"
      },
      "F": {
        "item": "ad_astra:rocket_fin"
      },
      "P": {
        "item": "ad_astra:steel_tank"
      },
      "E": {
        "item": "ad_astra:steel_engine"
      }
    },
    "pattern": [
      "  N  ",
      " AAA ",
      " ASA ",
      " ATA ",
      " AAA ",
      "APPPA",
      "FAAAF",
      "F E F"
    ],
    "result": {
      "count": 1,
      "item": "ad_astra:tier_1_rocket"
    }
  })
  event.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": false,
    "key": {
      "A": {
        "item": "ad_astra:steel_ingot"
      },
      "P": {
        "item": "ad_astra:steel_plate"
      },
      "S": {
        "item": "ad_astra:steel_block"
      }
    },
    "pattern": [
      "AAAAA",
      "APPPA",
      "APSPA",
      "APPPA",
      "AAAAA"
    ],
    "result": {
      "count": 1,
      "item": "ad_astra:launch_pad"
    }
  })
  event.custom({
    "type": "create:compacting",
    "heatRequirement": "superheated",
    "ingredients": [
      {
        "item": "guguaddons:biomass_pellet"
      },
      {
        "item": "guguaddons:biomass_pellet"
      },
      {
        "item": "guguaddons:biomass_pellet"
      },
      {
        "item": "guguaddons:biomass_pellet"
      },
      {
        "item": "guguaddons:biomass_pellet"
      },
      {
        "item": "guguaddons:biomass_pellet"
      },
      {
        "item": "guguaddons:biomass_pellet"
      },
      {
        "item": "guguaddons:biomass_pellet"
      },
      {
        "item": "guguaddons:biomass_pellet"
      },
      {
        "amount": 900,
        "fluid": "minecraft:water",
        "nbt": {}
      }
    ],
    "results": [
      {
        "amount": 250,
        "fluid": "ad_astra:oil",
        "nbt": {}
      }
    ]
  })
  event.custom({
    "type": "create:mixing",
    "heatRequirement": "heated",
    "ingredients": [
      {
        "item": "create:propeller"
      },
      {
        "amount": 250,
        "fluid": "ad_astra:oil"
      }
    ],
    "results": [
      {
        "amount": 125,
        "fluid": "ad_astra:fuel"
      },
      {
        "item": "create:propeller"
      }
    ]
  })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "ad_astra:steel_block"
    },
    "loops": 10,
    "results": [
      {
        "chance": 95.0,
        "item": "ad_astra:engine_frame"
      },
      {
        "chance": 5.0,
        "item": "ad_astra:steel_plate"
      }
    ],
    "sequence": [
      {
        "type": "create:cutting",
        "ingredients": [
          {
            "item": "guguaddons:incomplete_engine_frame"
          }
        ],
        "processingTime": 100,
        "results": [
          {
            "item": "guguaddons:incomplete_engine_frame"
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "guguaddons:incomplete_engine_frame"
          },
          {
            "amount": 250,
            "fluid": "minecraft:water",
            "nbt": {}
          }
        ],
        "results": [
          {
            "item": "guguaddons:incomplete_engine_frame"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "guguaddons:incomplete_engine_frame"
          },
          {
            "item": "ad_astra:steel_plate"
          }
        ],
        "results": [
          {
            "item": "guguaddons:incomplete_engine_frame"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "guguaddons:incomplete_engine_frame"
          },
          {
            "tag": "forge:rods/iron"
          }
        ],
        "results": [
          {
            "item": "guguaddons:incomplete_engine_frame"
          }
        ]
      }
    ],
    "transitionalItem": {
      "item": "guguaddons:incomplete_engine_frame"
    }
  })
  event.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": false,
    "key": {
      "A": {
        "item": "ad_astra:steel_plate"
      }
    },
    "pattern": [
      "  A  ",
      " AAA ",
      "AA AA",
      "A   A",
    ],
    "result": {
      "count": 2,
      "item": "ad_astra:rocket_fin"
    }
  })
  event.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": false,
    "key": {
      "A": {
        "item": "ad_astra:steel_plate"
      },
      "T": {
        "item": "create:fluid_tank"
      },
      "R": {
        "tag": "forge:rods/iron"
      }
    },
    "pattern": [
      "  R  ",
      " AAA ",
      " ATA ",
      " AAA ",
    ],
    "result": {
      "count": 1,
      "item": "ad_astra:steel_tank"
    }
  })
  event.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": false,
    "key": {
      "A": {
        "item": "ad_astra:steel_ingot"
      },
      "L": {
        "item": "minecraft:lightning_rod"
      }
    },
    "pattern": [
      "  L  ",
      " AAA ",
      "AAAAA",
      "AAAAA",
    ],
    "result": {
      "count": 1,
      "item": "ad_astra:rocket_nose_cone"
    }
  })
  event.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": false,
    "key": {
      "A": {
        "item": "ad_astra:steel_block"
      },
      "E": {
        "item": "ad_astra:engine_frame"
      },
      "F": {
        "item": "ad_astra:engine_fan"
      }
    },
    "pattern": [
      " AAA ",
      " AAA ",
      "AAEAA",
      "AFFFA",
      "A   A",
    ],
    "result": {
      "count": 1,
      "item": "ad_astra:steel_engine"
    }
  })
  event.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": false,
    "key": {
      "A": {
        "item": "ad_astra:desh_block"
      },
      "N": {
        "item": "ad_astra:rocket_nose_cone"
      },
      "R": {
        "item": "kubejs:reinforced_glass"
      },
      "S": {
        "item": "kubejs:sturdy_mechanism"
      },
      "T": {
        "tag": "create:seats"
      },
      "F": {
        "item": "ad_astra:rocket_fin"
      },
      "P": {
        "item": "ad_astra:desh_tank"
      },
      "E": {
        "item": "ad_astra:desh_engine"
      }
    },
    "pattern": [
      "  N  ",
      " AAA ",
      " ARA ",
      " ASA ",
      " ATA ",
      " AAA ",
      "APPPA",
      "FAAAF",
      "F E F"
    ],
    "result": {
      "count": 1,
      "item": "ad_astra:tier_2_rocket"
    }
  })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "ad_astra:steel_engine"
    },
    "loops": 5,
    "results": [
      {
        "item": "ad_astra:desh_engine"
      }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_desh_engine"
          },
          {
            "item": "ad_astra:desh_plate"
          }
        ],
        "results": [
          {
            "item": "kubejs:incomplete_desh_engine"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_desh_engine"
          },
          {
            "item": "ad_astra:desh_plate"
          }
        ],
        "results": [
          {
            "item": "kubejs:incomplete_desh_engine"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_desh_engine"
          },
          {
            "item": "ad_astra:desh_plate"
          }
        ],
        "results": [
          {
            "item": "kubejs:incomplete_desh_engine"
          }
        ]
      }
    ],
    "transitionalItem": {
      "item": "kubejs:incomplete_desh_engine"
    }
  })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "ad_astra:steel_tank"
    },
    "loops": 2,
    "results": [
      {
        "item": "ad_astra:desh_tank"
      }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_desh_tank"
          },
          {
            "item": "ad_astra:desh_plate"
          }
        ],
        "results": [
          {
            "item": "kubejs:incomplete_desh_tank"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_desh_tank"
          },
          {
            "item": "ad_astra:desh_plate"
          }
        ],
        "results": [
          {
            "item": "kubejs:incomplete_desh_tank"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_desh_tank"
          },
          {
            "item": "ad_astra:desh_plate"
          }
        ],
        "results": [
          {
            "item": "kubejs:incomplete_desh_tank"
          }
        ]
      }
    ],
    "transitionalItem": {
      "item": "kubejs:incomplete_desh_tank"
    }
  })
})