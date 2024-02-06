//backpackreciperemoval
ServerEvents.recipes(event => {
event.remove({output: 'sophisticatedbackpacks:iron_backpack'})
event.remove({output: 'sophisticatedbackpacks:gold_backpack'})
event.remove({output: 'sophisticatedbackpacks:diamond_backpack'})
event.remove({output: 'sophisticatedbackpacks:netherite_backpack'})
})
//ironbackpack
ServerEvents.recipes(event => {
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "sophisticatedbackpacks:backpack"
  },
  "loops": 4,
  "results": [
    {
      "chance": 100.0,
      "item": "sophisticatedbackpacks:iron_backpack"
    },
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "guguaddons:unfinished_backpack"
        },
        {
          "item": "create:iron_sheet"
        }
      ],
      "results": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "guguaddons:unfinished_backpack"
        },
        {
          "item": "create:iron_sheet"
        }
      ],
      "results": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "guguaddons:unfinished_backpack"
        },
        {
          "tag": "forge:ingots/iron"
        }
      ],
      "results": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "guguaddons:unfinished_backpack"
        },
        {
          "amount": 1000,
          "fluid": "minecraft:water",
          "nbt": {}
        }
      ],
      "results": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ],
      "results": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ]
    },
  ],
  "transitionalItem": {
    "item": "guguaddons:unfinished_backpack"
  }
 })
})
//goldbackpack
ServerEvents.recipes(event => {
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "sophisticatedbackpacks:iron_backpack"
  },
  "loops": 6,
  "results": [
    {
      "chance": 100.0,
      "item": "sophisticatedbackpacks:gold_backpack"
    },
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "guguaddons:unfinished_backpack"
        },
        {
          "item": "create:golden_sheet"
        }
      ],
      "results": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "guguaddons:unfinished_backpack"
        },
        {
          "item": "create:golden_sheet"
        }
      ],
      "results": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "guguaddons:unfinished_backpack"
        },
        {
          "tag": "forge:ingots/gold"
        }
      ],
      "results": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "guguaddons:unfinished_backpack"
        },
        {
          "amount": 1000,
          "fluid": "minecraft:water",
          "nbt": {}
        }
      ],
      "results": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ],
      "results": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ]
    },
  ],
  "transitionalItem": {
    "item": "guguaddons:unfinished_backpack"
  }
})})
//diamondbackpack
ServerEvents.recipes(event => {
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "sophisticatedbackpacks:gold_backpack"
  },
  "loops": 2,
  "results": [
    {
      "chance": 994.0,
      "item": "sophisticatedbackpacks:diamond_backpack"
    },
    {
      "chance": 6.0,
      "item": "sophisticatedbackpacks:gold_backpack"
    },
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "guguaddons:unfinished_backpack"
        },
        {
          "item": "minecraft:diamond"
        }
      ],
      "results": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "guguaddons:unfinished_backpack"
        },
        {
          "item": "minecraft:diamond"
        }
      ],
      "results": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "guguaddons:unfinished_backpack"
        },
        {
          "item": "minecraft:diamond"
        }
      ],
      "results": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "guguaddons:unfinished_backpack"
        },
        {
          "amount": 1000,
          "fluid": "minecraft:water",
          "nbt": {}
        }
      ],
      "results": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ]
    },
    {
      "type": "create:cutting",
      "ingredients": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ],
      "processingTime": 20,
      "results": [
        {
      "item": "guguaddons:unfinished_backpack"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ],
      "results": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ]
    },
  ],
  "transitionalItem": {
    "item": "guguaddons:unfinished_backpack"
  }
})})
//netheritebackpack
ServerEvents.recipes(event => {
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "sophisticatedbackpacks:diamond_backpack"
  },
  "loops": 1,
  "results": [
    {
      "chance": 994.0,
      "item": "sophisticatedbackpacks:netherite_backpack"
    },
    {
      "chance": 6.0,
      "item": "sophisticatedbackpacks:diamond_backpack"
    }
  ],
  "sequence": [
      {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "guguaddons:unfinished_backpack"
        },
        {
          "item": "minecraft:netherite_upgrade_smithing_template"
        }
      ],
      "results": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "guguaddons:unfinished_backpack"
        },
        {
          "item": "minecraft:netherite_ingot"
        }
      ],
      "results": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "guguaddons:unfinished_backpack"
        },
        {
          "item": "create:golden_sheet"
        }
      ],
      "results": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "guguaddons:unfinished_backpack"
        },
        {
          "amount": 1000,
          "fluid": "minecraft:lava",
          "nbt": {}
        }
      ],
      "results": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ],
      "results": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ],
      "results": [
        {
          "item": "guguaddons:unfinished_backpack"
        }
      ]
    },
  ],
  "transitionalItem": {
    "item": "guguaddons:unfinished_backpack"
  }
})})