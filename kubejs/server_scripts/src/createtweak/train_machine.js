ServerEvents.tags('item', event =>{
  event.add('kubejs:kuayue_blocks','kubejs:train_machine')
  Ingredient.of('/kuayue.*/').itemIds.forEach(i =>{
    event.add('kubejs:kuayue_blocks',i)
  })
})
ServerEvents.recipes(event => {
function cut(result) {
event.stonecutting(result,'kubejs:train_machine')
}
event.remove({mod: 'kuayue'})
cut('64x kuayue:standard_track')
event.custom({
  "type": "chipped:mason_table",
  "tags": ["kubejs:kuayue_blocks"]
})
//Ingredient.of('/kuayue.*/').itemIds.forEach(i => {
//cut('64x '+i)
//})
event.recipes.create.item_application("kubejs:train_machine",["create:railway_casing","kubejs:iron_saw"]).damageIngredient("kubejs:iron_saw")
//event.custom({
//    "type": "create:item_application",
//    "ingredients": [
//      {
//        "item": "create:railway_casing"
//      },
//      {
//        "item": "kubejs:iron_saw"
//      }
//    ],
//    "results": [
//      {
//        "item": "kubejs:train_machine"
//      }
//    ]
//  }).damageIngredient('kubejs:iron_saw')
})