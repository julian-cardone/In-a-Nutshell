const mongoose = require("mongoose");
const { mongoURI: db } = require("../config/keys.js");
const User = require("../models/User");
const Event = require("../models/Event");
const Task = require("../models/Task")
const bcrypt = require("bcryptjs");
const { faker } = require("@faker-js/faker");




const NUM_SEED_USERS = 10;
const NUM_SEED_EVENTS = 10;
const NUM_SEED_TASKS = 10;

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
const bool = faker.random.boolean


for(let i = 0; i < NUM_SEED_EVENTS; i++) {
  eventsArr.push(
    new Event ({
      title: `event #${i}`,
      description: faker.lorem.paragraph(3),
      startDate: "2050-10-21",
      completionDate: "2052-10-21",
      status: faker.datatype.boolean()
    })
  )
}

tasksArr = [];

for(let i = 0; i < NUM_SEED_TASKS; i++) {
  tasksArr.push(
    new Task ({
      title: `task #${i}`,
      description: faker.lorem.paragraph(3),
      status: faker.datatype.boolean()
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
  console.log("Resetting db and seeding users, events and tasks...");

  User.collection.drop()
                 .then(() => Event.collection.drop())
                 .then(() => Task.collection.drop())
                 .then(() => User.insertMany(users))
                 .then(() => Event.insertMany(eventsArr))
                 .then(() => Task.insertMany(tasksArr))
                 .then(() => {
                   console.log("Done!");
                   mongoose.disconnect();
                 })
                 .catch(err => {
                   console.error(err.stack);
                   process.exit(1);
                 });
}
