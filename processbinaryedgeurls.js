const path = require('path')
const fs = require('fs')

const JSON_DATA_PATH = process.argv[2]

if (!JSON_DATA_PATH) {
   console.error("Please input path to the binaryedge json file")
   return
}

let unprocessedData
try {
  unprocessedData = fs.readFileSync(JSON_DATA_PATH, 'utf8')
} catch (err) {
  console.error(`Error in opening file: ${err}`)
  return
}

unprocessedData = unprocessedData.replace(/\n/g, ',')
unprocessedData = unprocessedData.substring(0, unprocessedData.length - 1) // remove the last comma
const processedData = JSON.parse(`{"all":[${unprocessedData}]}`)
const urls = []

processedData.all.forEach((data) => {
    if (data?.result?.data?.response?.url) urls.push(data.result.data.response.url)
    else if (data?.target) urls.push(`${data.target.ip}:${data.target.port}`)
})

fs.writeFileSync(path.resolve(process.cwd(), `urls-${Date.now()}.txt`), urls.join('\n'))
