const client = `../../index`;

client.on("email", content => {
  console.log("Message: " + content);
});
client.subscribe("email");
