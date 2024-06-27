ServerEvents.recipes(e =>{
    let removalitem = [
        'ae2:item_cell_housing',
        'ae2:blank_pattern',
        'ae2:memory_card',
        'ae2:basic_card',
        'ae2:advanced_card',
        'ae2:cell_component_1k',
        'ae2:cell_component_16k',
        'ae2:cell_component_64k',
        'ae2:cell_component_256k',
        'ae2:wireless_receiver',
        'ae2:wireless_booster',
        'ae2:condenser',
        'ae2:vibration_chamber',
        'ae2:molecular_assembler',
        'ae2:drive',
        'ae2:crafting_unit',
        'ae2:growth_accelerator',
        'ae2:energy_acceptor',
        'ae2:io_port',
        'ae2:cell_workbench',
        'ae2:crystal_resonance_generator',
        'ae2:charger',
        'ae2:quantum_ring'
    ]
    let removalid = [
        'ae2:network/cells/item_storage_cell_1k',
        'ae2:network/cells/item_storage_cell_4k',
        'ae2:network/cells/item_storage_cell_16k',
        'ae2:network/cells/item_storage_cell_64k',
        'ae2:network/cells/item_storage_cell_256k',
        'ae2:network/blocks/interfaces_interface',
        'ae2:network/blocks/pattern_providers_interface',
    ]
    removalitem.forEach(i =>{
        e.remove({output:`${i}`})
    })
    removalid.forEach(i =>{
        e.remove({id:`${i}`})
    })
    Ingredient.of('/.*paint_ball/').itemIds.forEach(i =>{
        e.remove({output:`${i}`})
    })
    e.shaped(
        'ae2:item_cell_housing',
        [
          'ABA',
          'B B',
          'CCC'
        ],
        {
          A: 'ae2:quartz_glass',
          B: 'minecraft:redstone',
          C: 'create:andesite_alloy'
        }
    )
    e.shaped(
        Item.of('ae2:blank_pattern', 2),
        [
          'ABA',
          'BDB',
          'CCC'
        ],
        {
          A: 'ae2:quartz_glass',
          B: 'minecraft:redstone',
          C: 'create:brass_sheet',
          D: '#forge:gems/certus_quartz'
        }
    )
    e.shaped(
        'ae2:memory_card',
        [
          '   ',
          'ABB',
          'CDC'
        ],
        {
          A: 'ae2:calculation_processor',
          B: 'create:andesite_alloy',
          C: 'minecraft:gold_ingot',
          D: 'minecraft:redstone'
        }
    )
    e.shaped(
        'ae2:basic_card',
        [
          'CB ',
          'DAB',
          'CB '
        ],
        {
          A: 'ae2:calculation_processor',
          B: 'create:andesite_alloy',
          C: 'minecraft:gold_ingot',
          D: 'minecraft:redstone'
        }
    )
    e.shaped(
        'ae2:advanced_card',
        [
          'CB ',
          'DAB',
          'CB '
        ],
        {
          A: 'ae2:calculation_processor',
          B: 'create:andesite_alloy',
          C: 'minecraft:diamond',
          D: 'minecraft:redstone'
        }
    )
    e.shaped(
        'ae2:cell_component_1k',
        [
          'CBC',
          'BAB',
          'CBC'
        ],
        {
          A: 'ae2:logic_processor',
          B: '#forge:gems/certus_quartz',
          C: 'create:brass_sheet'
        }
    )
    e.shaped(
        'ae2:cell_component_16k',
        [
          'CDC',
          'BAB',
          'CBC'
        ],
        {
          A: 'kubejs:computation_matrix',
          B: 'ae2:cell_component_4k',
          C: 'minecraft:glowstone_dust',
          D: 'ae2:calculation_processor'
        }
    )
    e.shaped(
        'ae2:cell_component_64k',
        [
          'CDC',
          'BAB',
          'CBC'
        ],
        {
          A: 'kubejs:computation_matrix',
          B: 'ae2:cell_component_16k',
          C: 'ae2:sky_dust',
          D: 'ae2:calculation_processor'
        }
    )
    e.shaped(
        'ae2:cell_component_256k',
        [
          'CDC',
          'BAB',
          'CBC'
        ],
        {
          A: 'kubejs:computation_matrix',
          B: 'ae2:cell_component_64k',
          C: 'ae2:ender_dust',
          D: 'ae2:calculation_processor'
        }
    )
    e.shaped(
        'ae2:item_storage_cell_1k',
        [
          'DBD',
          'BAB',
          'CCC'
        ],
        {
          A: 'ae2:cell_component_1k',
          B: 'minecraft:redstone',
          C: 'create:andesite_alloy',
          D: 'ae2:quartz_glass'
        }
    )
    e.shaped(
        'ae2:item_storage_cell_4k',
        [
          'DBD',
          'BAB',
          'CCC'
        ],
        {
          A: 'ae2:cell_component_4k',
          B: 'minecraft:redstone',
          C: 'create:andesite_alloy',
          D: 'ae2:quartz_glass'
        }
    )
    e.shaped(
        'ae2:item_storage_cell_16k',
        [
          'DBD',
          'BAB',
          'CCC'
        ],
        {
          A: 'ae2:cell_component_16k',
          B: 'minecraft:redstone',
          C: 'create:andesite_alloy',
          D: 'ae2:quartz_glass'
        }
    )
    e.shaped(
        'ae2:item_storage_cell_64k',
        [
          'DBD',
          'BAB',
          'CCC'
        ],
        {
          A: 'ae2:cell_component_64k',
          B: 'minecraft:redstone',
          C: 'create:andesite_alloy',
          D: 'ae2:quartz_glass'
        }
    )
    e.shaped(
        'ae2:item_storage_cell_256k',
        [
          'DBD',
          'BAB',
          'CCC'
        ],
        {
          A: 'ae2:cell_component_256k',
          B: 'minecraft:redstone',
          C: 'create:andesite_alloy',
          D: 'ae2:quartz_glass'
        }
    )
    e.shaped(
        'ae2:wireless_receiver',
        [
          ' C ',
          'BAB',
          ' B '
        ],
        {
          A: 'ae2:quartz_fiber',
          B: 'create:andesite_alloy',
          C: 'ae2:fluix_pearl'
        }
    )
    e.shaped(
        Item.of('ae2:wireless_booster',2),
        [
          '   ',
          'CAD',
          'BBB'
        ],
        {
          A: '#forge:gems/certus_quartz',
          B: 'create:andesite_alloy',
          C: 'ae2:fluix_dust',
          D: 'ae2:ender_dust'
        }
    )
    e.shaped(
        'ae2:drive',
        [
          'BAB',
          'C C',
          'BAB'
        ],
        {
          A: 'ae2:engineering_processor',
          B: 'create:brass_sheet',
          C: 'ae2:fluix_glass_cable'
        }
    )
    e.shaped(
        'ae2:interface',
        [
          'BAB',
          'C D',
          'BAB'
        ],
        {
          A: '#forge:glass',
          B: 'create:brass_sheet',
          C: 'ae2:annihilation_core',
          D: 'ae2:formation_core'
        }
    )
    e.shaped(
        'ae2:pattern_provider',
        [
          'BAB',
          'C D',
          'BAB'
        ],
        {
          A: 'minecraft:crafting_table',
          B: 'create:brass_sheet',
          C: 'ae2:annihilation_core',
          D: 'ae2:formation_core'
        }
    )
    e.shaped(
        'ae2:molecular_assembler',
        [
          'BAB',
          'CED',
          'BAB'
        ],
        {
          A: 'ae2:quartz_glass',
          B: 'create:brass_sheet',
          C: 'ae2:annihilation_core',
          D: 'ae2:formation_core',
          E: 'minecraft:crafting_table'
        }
    )
    e.shaped(
        'ae2:crafting_unit',
        [
          'BAB',
          'CDC',
          'BAB'
        ],
        {
          A: 'ae2:calculation_processor',
          B: 'create:brass_sheet',
          C: 'ae2:fluix_glass_cable',
          D: 'ae2:logic_processor'
        }
    )
    e.shaped(
        'ae2:growth_accelerator',
        [
          'BAB',
          'CDC',
          'BAB'
        ],
        {
          A: 'ae2:fluix_glass_cable',
          B: 'create:brass_sheet',
          C: 'ae2:quartz_glass',
          D: 'ae2:fluix_block'
        }
    )
    e.shaped(
        'ae2:energy_acceptor',
        [
          'BAB',
          'ACA',
          'BAB'
        ],
        {
          A: 'ae2:quartz_glass',
          B: 'create:andesite_alloy',
          C: 'minecraft:copper_ingot'
        }
    )
    e.shaped(
        'ae2:io_port',
        [
          'AAA',
          'BCB',
          'DED'
        ],
        {
          A: '#forge:glass',
          B: 'ae2:drive',
          C: 'ae2:fluix_glass_cable',
          D: 'create:brass_sheet',
          E: 'ae2:logic_processor'
        }
    )
    e.shaped(
        'ae2:cell_workbench',
        [
          'BAB',
          'CDC',
          'CCC'
        ],
        {
          A: 'ae2:calculation_processor',
          B: 'create:polished_rose_quartz',
          C: 'create:andesite_alloy',
          D: '#balm:wooden_chests'
        }
    )
    e.shaped(
        'ae2:charger',
        [
          'ABA',
          'A  ',
          'ABA'
        ],
        {
          A: 'create:andesite_alloy',
          B: 'minecraft:copper_ingot'
        }
    )
    e.shaped(
        'ae2:quantum_ring',
        [
          'BAB',
          'CDE',
          'BAB'
        ],
        {
          A: 'ae2:logic_processor',
          B: 'create:brass_sheet',
          C: 'ae2:engineering_processor',
          D: 'ae2:energy_cell',
          E: '#ae2:smart_dense_cable'
        }
    )
})