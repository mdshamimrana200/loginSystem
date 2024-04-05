const app = require("./app");
const { config } = require("./config/config");


const port = config.dev.port;

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
