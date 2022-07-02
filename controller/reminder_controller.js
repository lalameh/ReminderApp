let database = require("../database");

let remindersController = {
  list: (req, res) => {
    res.render("reminder/index", { reminders: database.cindy.reminders });
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: database.cindy.reminders });
    }
  },

  create: (req, res) => {
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
    database.cindy.reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
    // implement this code
    let id = req.params.id;
    let index = -1;
    let obj = database.cindy.reminders.find(function (reminder, i) {
      if (reminder.id == id) {
        index = i;
        return reminder.id == id;
      };
    });
    let bool = req.body.completed === 'true';
    database.cindy.reminders[index].title = req.body.title;
    database.cindy.reminders[index].description = req.body.description;
    database.cindy.reminders[index].completed = bool;
    res.render("reminder/single-reminder", { reminderItem: obj });
  },

  delete: (req, res) => {
    // Implement this code
    let id = req.params.id;
    let index = -1;
    let obj = database.cindy.reminders.find(function (reminder, i) {
      if (reminder.id == id) {
        index = i;
        return reminder.id == id;
      };
    });
    database.cindy.reminders.splice(index, 1);
    res.redirect("/reminders");
  },
};

module.exports = remindersController;