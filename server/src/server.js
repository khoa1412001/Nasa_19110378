const http = require("http");
const request = require("supertest");

const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");
const { mongoConnect } = require("./services/mongo");
const { loadLaunchData } = require("./models/launches.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();

// function startTest() {
//   //testcase 1
//   request(app)
//     .get("/planets")
//     .expect("Content-Type", /json/)
//     .expect(200)
//     .end(function (err, res) {
//       if (err) console.log(err.message);
//     });
//   //testcase 2
//   request(app)
//     .get("/launches")
//     .expect("Content-Type", /json/)
//     .expect(200)
//     .end(function (err, res) {
//       if (err) console.log(err.message);
//     });
//   //testcase 3
//   request(app)
//     .post("/launches")
//     .send({
//       mission: "Testcase",
//       rocket: "Rocket 101",
//       launchDate: "01/13/2023",
//       target: "Kepler 60 b",
//     })
//     .expect("Content-Type", /json/)
//     .expect(201)
//     .end(function (err, res) {
//       if (err) console.log(err.message);
//     });
//   //test case 4
//   request(app)
//     .delete("/launches/100")
//     .expect("Content-Type", /json/)
//     .expect(200)
//     .end(function (err, res) {
//       if (err) console.log(err.message);
//     });
//   //test case 5
//   request(app)
//     .delete("/launches/105")
//     .expect("Content-Type", /json/)
//     .expect(404)
//     .end(function (err, res) {
//       if (err) console.log(err.message);
//     });
//   //test case 6
//   request(app)
//     .post("/launches")
//     .send({
//       mission: "Testcase",
//       rocket: "Rocket 101",
//       target: "Kepler 60 b",
//     })
//     .expect("Content-Type", /json/)
//     .expect(400)
//     .end(function (err, res) {
//       if (err) console.log(err.message);
//     });
//   //testcase 7
//   request(app)
//     .get("/planets/1")
//     .expect("Content-Type", /json/)
//     .expect(400)
//     .end(function (err, res) {
//       if (err) console.log(err.message);
//     });
//   //testcase 8
//   request(app)
//     .get("/launches/1")
//     .expect("Content-Type", /json/)
//     .expect(400)
//     .end(function (err, res) {
//       if (err) console.log(err.message);
//     });
// }
