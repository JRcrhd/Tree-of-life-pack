ClientEvents.lang("en_us", treeoflife => {
  const mekItems = ['clump', 'crystal', 'dirty_dust', 'shard']
  global.mekStackAdditions.forEach(entry => {
    treeoflife.add(`slurry.kubejs.clean_${entry.material}`, snakeCaseToUpperCase(`clean_${entry.material}_slurry`))
    treeoflife.add(`slurry.kubejs.dirty_${entry.material}`, snakeCaseToUpperCase(`dirty_${entry.material}_slurry`))
    mekItems.forEach(type => {
      treeoflife.add(`item.kubejs.${type}_${entry.material}`, snakeCaseToUpperCase(`${entry.material}_${type}`))
    })
    if (entry.makeDust) {
      treeoflife.add(`item.kubejs.dust_${entry.material}`, snakeCaseToUpperCase(`${entry.material}_dust`))
    }
  })
})

function snakeCaseToUpperCase(input) {
  return String(input)
    .split("_")
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(" ");
}