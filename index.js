const createServer = require("./server");
const { PORT } = require("./config");

function startServer() {
  const app = createServer();
  return app.listen(PORT, async () => {
    try {
      console.info(`Server is listening on port ${PORT}`);
    } catch (err) {
      console.error("Cannot start server", err);
      process.exit(1);
    }
  });
}

startServer();
