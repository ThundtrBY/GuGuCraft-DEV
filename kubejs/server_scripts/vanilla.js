ServerEvents.recipes(e => {
  e.recipes.create.crushing([Item.of('2x prismarine_shard').withChance(0.75),Item.of('prismarine_shard').withChance(0.25),Item.of('prismarine_shard').withChance(0.1),Item.of('prismarine_crystals').withChance(0.05)], 'prismarine').processingTime(40)
})