const path = require("path")
const fs = require("fs")
const argv = require("minimist")(process.argv.slice(2))._[0]
const mdPath = path.join(__dirname, `${argv}.md`)

let fileArr = []
let flag = false
fs.readFileSync(mdPath, "utf8").split("\n").forEach(line => {
  if (line.startsWith("#")) {
    if(flag == true) {
      line = '\n---\n\n' + line
    }
    flag = true
  }
  fileArr.push(line)
}
)

fs.writeFileSync(mdPath, fileArr.join('\n'))
