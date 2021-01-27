let my_secret = process.env.HYPIXEL_KEY;

let allEnvSecrets = {
  my_secret: my_secret.split().join(","),
  something: "blah",
};

let logData = JSON.stringify(allEnvSecrets);

console.log(logData);
