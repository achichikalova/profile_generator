const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable? ', (name) => {
  rl.question('What\'s an activity you like doing?? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (snackTime) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (power) => {
              console.log(`Hi, my name is ${name}. I love ${activity} and listen the ${music} during ${activity}. Also, love to eat ${food} on ${snackTime}. My favorite sport is ${sport}. I have the superpower! I can ${power}!`);
              rl.close();
            })
          })
        })
      })
    })
  })
});