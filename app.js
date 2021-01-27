let my_secret = process.env.HYPIXEL_KEY;

let allEnvSecrets = {
  my_secret,
  something: "blah",
};

let logData = JSON.stringify(allEnvSecrets);

console.log(logData);
console.log(allEnvSecrets);
