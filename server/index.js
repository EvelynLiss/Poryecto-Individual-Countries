const server = require("./src/server");
const { conn } = require('./src/db.js');
const llenarDb = require('./llenarDB')

const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, async () => {
  await llenarDb()
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
