ServerEvents.recipes(e => {
    e.recipes.create.mechanical_crafting('ae2:controller', [
      'PMPMP',
      'MFCFM',
      'PCICP',
      'MFCFM',
      'PMPMP'
    ], {
      C: 'kubejs:calculation_mechanism',
      F: 'ae2:fluix_block',
      M: 'ae2:smooth_sky_stone_block',
      P: 'tfmg:plastic_sheet',
      I: 'kubejs:integrational_mechanism'
    })
  })