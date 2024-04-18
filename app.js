const { createReadStream } = require('fs')

const stream = createReadStream('./content/first.txt')

stream.on('data', (chunk) => {
  console.log(chunk.toString())
})