ServerEvents.recipes(e => {
    e.remove({output:'ae2:controller'})
    e.recipes.create.mechanical_crafting('ae2:controller', [
      'PMPMP',
      'MFEFM',
      'PCICP',
      'MFEFM',
      'PMPMP'
    ], {
      C: 'create_dd:calculation_mechanism',
      E: 'ae2:engineering_processor',
      F: 'ae2:fluix_block',
      M: 'ae2:smooth_sky_stone_block',
      P: 'tfmg:plastic_sheet',
      I: 'kubejs:computation_matrix'
    })
  })