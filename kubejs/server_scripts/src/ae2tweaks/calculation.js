let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)

ServerEvents.recipes(e =>{
    let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let ops = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b, (a, b) => b == 0 ? 'error' : a / b]
    let opNames = ['plus', 'minus', 'multiply', 'divide']

	for (var a = 0; a < 10; a++) {
		for (var b = 0; b < 10; b++) {
			for (var op = 0; op < ops.length; op++) {

				let result = ops[op](a, b)
				var output;

				if (result == 'error')
					output = KJ('missingno')
				else if (result < 0)
					continue
				else if (result > 9)
					continue
				else if (result % 1 != 0)
					continue
				else
					output = KJ(nums[result])

                e.recipes.create.mechanical_crafting(output, [
                    'AOB'
                  ], {
                    A: KJ(nums[a]),
                    O: KJ(opNames[op]),
                    B: KJ(nums[b])
                  }).noMirror()

			}
		}
	}
})