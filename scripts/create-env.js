const fs = require('fs')

fs.writeFileSync('./.env', `API_KEY=${process.env.API_KEY}\n`)
fs.writeFileSync('./.env', `ICON_URL=${process.env.ICON_URL}\n`)
fs.writeFileSync('./.env', `URL=${process.env.URL}\n`)