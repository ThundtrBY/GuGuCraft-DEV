ServerEvents.recipes(event =>{
    event.remove({output: 'createaddition:electric_motor'})
    event.remove({output: 'createaddition:alternator'})
    event.remove({output: 'createaddition:redstone_relay'})
    event.remove({output: 'createaddition:barbed_wire'})
    event.remove({output: 'createaddition:portable_energy_interface'})
    event.remove({output: 'createaddition:biomass'})
    event.remove({output: 'createaddition:biomass_pellet'})
    event.remove({output: 'createaddition:electrum_amulet'})
    event.remove({output: 'createaddition:electrum_ingot'})
    event.remove({output: 'createaddition:electrum_sheet'})
    event.remove({output: 'createaddition:electrum_wire'})
    event.remove({output: 'createaddition:electrum_spool'})
    event.remove({output: 'createaddition:electrum_rod'})
    event.remove({id: 'createaddition:compacting/seed_oil'})
    event.remove({id: 'createaddition:mixing/bioethanol'})
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": true,
        "key": {
          "A": {
            "item": "create:brass_sheet"
          },
          "B": {
            "tag": "forge:rods/iron"
          },
          "C": {
            "item": "createaddition:capacitor"
          },
          "D": {
            "item": "createaddition:copper_spool"
          },
          "E": {
            "item": "create:shaft"
          },
          "F": {
            "item": "create:electron_tube"
          },
          "G": {
            "item": "kubejs:sealed_mechanism"
          },
        },
        "pattern": [
          "   E   ",
          "  AEA  ",
          " AFDFA ",
          "AGDBDGA",
          "AGFDFGA",
          " AACAA ",
        ],
        "result": {
          "item": "createaddition:alternator"
        }
      })
})