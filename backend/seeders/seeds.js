const mongoose = require("mongoose");
const { mongoURI: db } = require("../config/keys.js");
const User = require("../models/User");
const Event = require("../models/Event");
const bcrypt = require("bcryptjs");
const { faker } = require("@faker-js/faker");
const { events } = require("../models/Event");

const NUM_SEED_USERS = 5;
const NUM_SEED_EVENTS = 5;

const users = [];

users.push(
  new User({
    firstName: "Demo",
    lastName: "Lition",
    username: "demo-users",
    email: "demo-user@appacademy.io",
    hashedPassword: bcrypt.hashSync("starwars", 10),
  })
);

for (let i = 1; i < NUM_SEED_USERS; i++) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  users.push({
    firstName: firstName,
    lastName: lastName,
    username: faker.internet.userName(firstName, lastName),
    email: faker.internet.email(firstName, lastName),
    hashedPassword: bcrypt.hashSync(faker.internet.password(), 10),
  });
}


const eventsArr = [];

for(let i = 0; i < NUM_SEED_EVENTS; i++) {
  eventsArr.push(
    new Event ({
      title: `event #${i}`,
      description: faker.lorem.paragraph(3),
      startDate: "2050-10-21",
      completionDate: "2052-10-21",
      status: faker.boolean
    })
  )
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
    insertSeeds();
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });

const insertSeeds = () => {
  console.log("Resetting db and seeding users and tweets...");

  User.collection.drop()
                 .then(() => Event.collection.drop())
                 .then(() => User.insertMany(users))
                 .then(() => Event.insertMany(eventsArr))
                 .then(() => {
                   console.log("Done!");
                   mongoose.disconnect();
                 })
                 .catch(err => {
                   console.error(err.stack);
                   process.exit(1);
                 });
}
