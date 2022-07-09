let remindersController = {
  list: (req, res) => {
    res.render("reminder/index", { reminders: req.user.reminders });
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = req.user.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: req.user.reminders });
    }
  },

  create: (req, res) => {
    let reminder = {
      id: req.user.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
    req.user.reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = req.user.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
    // implement this code
    let id = req.params.id;
    let index = -1;
    let obj = req.user.reminders.find(function (reminder, i) {
      if (reminder.id == id) {
        index = i;
        return reminder.id == id;
      };
    });
    let bool = req.body.completed === 'true';
    req.user.reminders[index].title = req.body.title;
    req.user.reminders[index].description = req.body.description;
    req.user.reminders[index].completed = bool;
    res.render("reminder/single-reminder", { reminderItem: obj });
  },

  delete: (req, res) => {
    // Implement this code
    let id = req.params.id;
    let index = -1;
    let obj = req.user.reminders.find(function (reminder, i) {
      if (reminder.id == id) {
        index = i;
        return reminder.id == id;
      };
    });
    req.user.reminders.splice(index, 1);
    res.redirect("/reminders");
  },
};

module.exports = remindersController;
