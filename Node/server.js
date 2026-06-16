const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/" && req.method == "GET") {
    res.write(JSON.stringify(getData()));
    res.end();
  }
  if (req.url == "/" && req.method == "POST") {
    const user = req.body;
    let data = getData();
    data.users.push(user);
    saveData(data);

    res.end("Added Successfully");
  }
});

const fs = require("fs");

function getData() {
  const data = fs.readFileSync("./db.json", "utf8");
  return JSON.parse(data);
}

function saveData(data) {
  fs.writeFileSync("./db.json", JSON.stringify(data), "utf8");
}

server.listen(3000, () => {
  console.log("server listening on http://localhost:3000");
});
