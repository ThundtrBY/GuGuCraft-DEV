ServerEvents.recipes(e => {
    e.shaped(
        Item.of('ae2:mysterious_cube', 1),
        [ 
          'EAE', 
          'BFD',
          'ECE'  
        ],
        {
          A: 'ae2:calculation_processor_press',
          B: 'ae2:engineering_processor_press',
          C: 'ae2:silicon_press',
          D: 'ae2:logic_processor_press',
          E: 'ae2:smooth_sky_stone_block',
          F: 'ae2:fluix_block'
        }
      )
})