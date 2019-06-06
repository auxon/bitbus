const fs = require('fs')
const es = require('event-stream')
const crawl = function(stream, path, cb) {
  let fileStream = fs.createWriteStream(path + "/mempool.json")
  let str = stream.pipe(fileStream)
  str.on('close', function() {
    console.log("mempool crawl finished")
    fileStream.close()
    let log = "MEMPOOL FINISHED " + Date.now() + "\n"
    console.log(log)
    fs.appendFileSync(path + "/log.txt", log);
    cb();
  })
}
module.exports = {
  crawl: crawl
}