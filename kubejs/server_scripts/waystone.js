ServerEvents.recipes(event => {
event.remove({output: 'waystones:return_scroll'})
event.remove({output: 'waystones:bound_scroll'})
event.remove({output: 'waystones:warp_scroll'})
event.remove({output: 'waystones:warp_stone'})
event.remove({output: 'waystones:warp_dust'})
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "guguaddons:twilight_mechanism"
  },
  "loops": 2,
  "results": [
    {
      "chance": 98.0,
      "item": "waystones:warp_stone"
    },
    {
      "chance": 2.0,
      "item": "minecraft:diamond"
    }
  ],
  "sequence": [
    {
      "type": "create:cutting",
      "ingredients": [
        {
          "item": "guguaddons:incomplete_warp_stone"
        }
      ],
      "processingTime": 100,
      "results": [
        {
          "item": "guguaddons:incomplete_warp_stone"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "guguaddons:incomplete_warp_stone"
        },
        {
          "amount": 1000,
          "fluid": "guguaddons:portal_matter",
          "nbt": {}
        }
      ],
      "results": [
        {
          "item": "guguaddons:incomplete_warp_stone"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "guguaddons:incomplete_warp_stone"
        },
        {
          "item": "minecraft:amethyst_shard"
        }
      ],
      "results": [
        {
          "item": "guguaddons:incomplete_warp_stone"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "guguaddons:incomplete_warp_stone"
        },
        {
          "item": "minecraft:emerald"
        }
      ],
      "results": [
        {
          "item": "guguaddons:incomplete_warp_stone"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "guguaddons:incomplete_warp_stone"
  }
})
event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "waystones:warp_stone"
    }
  ],
  "processingTime": 1000,
  "results": [
    {
      "item": "waystones:warp_dust"
    }
  ]
})
})