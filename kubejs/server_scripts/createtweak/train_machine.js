ServerEvents.recipes(event => {
function cut(result) {
event.stonecutting(result,'kubejs:train_machine')
}
event.remove({ id: 'create:crushing/obsidian' })
Ingredient.of('/kuayue.*/').itemIds.forEach(i => {
cut('64x '+i)
})
cut('64x create:track')
event.custom({
    "type": "create:crushing",
    "ingredients": [
      {
        "item": "minecraft:obsidian"
      }
    ],
    "processingTime": 500,
    "results": [
      {
        "chance": 0.25,
        "item": "create:powdered_obsidian"
      },
      {
        "item": "minecraft:obsidian"
      }
    ]
  })
event.custom({
    "type": "create:item_application",
    "ingredients": [
      {
        "item": "create:railway_casing"
      },
      {
        "item": "kubejs:iron_saw"
      }
    ],
    "results": [
      {
        "item": "kubejs:train_machine"
      }
    ]
  }).damageIngredient('kubejs:iron_saw')
})