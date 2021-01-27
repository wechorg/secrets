let my_secret = process.env.HYPIXEL_KEY;

let allEnvSecrets = {
  my_secret: "stuff" + my_secret.split().join(",") + "others",
  something: "blah",
};

let logData = JSON.stringify(allEnvSecrets);

console.log(logData);
