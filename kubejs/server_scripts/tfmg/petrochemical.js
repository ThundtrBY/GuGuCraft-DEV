ServerEvents.recipes(e => {
    e.remove({id: 'tfmg:fractional_distillation/crude_oil'})
    e.remove({id: 'tfmg:fractional_distillation/crude_oil_sus'})
    e.remove({id: 'tfmg:distillation/heavy_oil'})
    e.remove({id: 'tfmg:distillation/naphtha'})
    e.remove({id: 'tfmg:mixing/liquid_plastic_from_ethylene'})
    e.remove({id: 'tfmg:mixing/liquid_plastic_from_propylene'})
//Distillation recipe
    e.custom({
        "type": "tfmg:advanced_distillation",
        "ingredients": [
      
          {
            "fluid": "tfmg:crude_oil_fluid",
            "nbt": {},
            "amount": 100
          }
        ],
        "results": [
          {
            "fluid": "kubejs:sulfur_heavy_oil",
            "amount": 10
          },
          {
            "fluid": "kubejs:sulfur_light_oil",
            "amount": 50
          },
          {
            "fluid": "kubejs:sulfur_naphtha",
            "amount": 100
          },
          {
            "fluid": "kubejs:sulfur_petroleum_gas",
            "amount": 60
          }
        ]
      })
    e.custom({
        "type": "tfmg:distillation",
        "ingredients": [
      
          {
            "fluid": "kubejs:naphtha",
            "amount": 1000
          }
        ],
        "results": [
          {
            "fluid": "tfmg:lubrication_oil",
            "amount": 200
          },
          {
            "fluid": "tfmg:propylene",
            "amount": 300
          },
          {
            "fluid": "tfmg:ethylene",
            "amount": 500
          },
          {
            "item": "minecraft:air"
      
          },
          {
            "item": "minecraft:air"
      
          }
        ]
      })
//Desulfurization recipe
    e.recipes.create.mixing([Fluid.of('kubejs:heavy_oil',1000), 'tfmg:sulfur_dust', 'kubejs:universal_catalyst'], [Fluid.of('kubejs:sulfur_heavy_oil',1000), 'kubejs:universal_catalyst']).heated()
    e.recipes.create.mixing([Fluid.of('kubejs:light_oil',1000), 'tfmg:sulfur_dust', 'kubejs:universal_catalyst'], [Fluid.of('kubejs:sulfur_light_oil',1000), 'kubejs:universal_catalyst']).heated()
    e.recipes.create.mixing([Fluid.of('kubejs:naphtha',1000), 'tfmg:sulfur_dust', 'kubejs:universal_catalyst'], [Fluid.of('kubejs:sulfur_naphtha',1000), 'kubejs:universal_catalyst']).heated()
    e.recipes.create.mixing([Fluid.of('kubejs:petroleum_gas',1000), 'tfmg:sulfur_dust', 'kubejs:universal_catalyst'], [Fluid.of('kubejs:sulfur_petroleum_gas',1000), 'kubejs:universal_catalyst']).heated()
//Rocket fuel mixing recipe
    e.recipes.create.mixing(Fluid.of('ad_astra:fuel',600),[Fluid.of('kubejs:heavy_oil',100),Fluid.of('kubejs:light_oil',500)])
//Liquid plastic recipe
    e.recipes.create.mixing(Fluid.of('tfmg:liquid_plastic',1000),[Fluid.of('tfmg:ethylene',1000),Fluid.of('tfmg:propylene',600)])
})