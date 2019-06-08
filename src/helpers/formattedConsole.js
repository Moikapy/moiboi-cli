const showItems = items => {
  items.forEach(item => {
    console.log(item)
  })

  console.log(`Total: ${items.length} 😎`)
}

export default showItems