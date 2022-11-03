const connection = require('../config/connection');
const { User, Video } = require('../models');
const { getRandomName, getRandomVideos } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Video.deleteMany({});
  await User.deleteMany({});

  const users = [];
  const videos = getRandomVideos(10);

  for (let i = 0; i < 20; i++) {
    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];

    users.push({
      first,
      last,
      age: Math.floor(Math.random() * (99 - 18 + 1) + 18),
    });
  }

  // DEBUG:
  // - Model.collection.insertMany does not persist subdocument objectIds to database
  // - It performs bulk inserts so it does not validate individual document schema
  // await User.collection.insertMany(users);
  // await Video.collection.insertMany(videos);

  //// - To persist subdoc object ids and perform validation against schema
  //// - option 1: use Model.insertMany instead of Model.collection.insertMany
  await User.insertMany(users);
  await Video.insertMany(videos);
  //// - option 2: use Model.create
  // await User.create(users);
  // await Video.create(videos);

  // loop through the saved videos, for each video we need to generate a video response and insert the video responses
  console.table(users);
  console.table(videos);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
