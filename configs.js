const configs = {
  // add your name here (used by the bot)
  MY_NAME: "Sidney",
  // Repeated daily tasks (these tasks will be automatically added each day)
  // an example of the syntax:
  DAILY_REPEATED_TASKS: ["Inchecken bij Fem om 8.00 in de ochtend", "Opstaan om 7.00 uur", "10 minuten workout gewichten, bodyweight of dumbels (thuis of in gym)", "10 minuten mediteren na opstaan", "Elke maandag 5 solliciaties vinden en versturen"],

  // When you want to be greeted by the bot (to start your day)
  GREETING_TIME: {
    hour: 8,
    minute: 30,
    second: 00,
  },
  //When you want to add the DAILY_REPEATED_TASKS (if any)
  DAILY_REPEATED_TASKS_TIME: {
    hour: 8,
    minute: 00,
    second: 00,
  },
};

module.exports = configs;
