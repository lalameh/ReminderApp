const database = [
    {
      id: 1,
      name: "Jimmy Smith",
      email: "jimmy123@gmail.com",
      password: "jimmy123!",
      reminders: [{id: 1, title: "Jimmy", description: "Smith", completed: false}]
    },
    {
      id: 2,
      name: "Johnny Doe",
      email: "johnny123@gmail.com",
      password: "johnny123!",
      reminders: [{id: 1, title: "Johnny", description: "Doe", completed: false}]
    },
    {
      id: 3,
      name: "Jonathan Chen",
      email: "jonathan123@gmail.com",
      password: "jonathan123!",
      reminders: [{id: 1, title: "Jonathan", description: "Chen", completed: false}]
    },
  ];
  
  const userModel = {
    findOne: (email) => {
      const user = database.find((user) => user.email === email);
      if (user) {
        return user;
      }
      throw new Error(`Couldn't find user with email: ${email}`);
    },
    findById: (id) => {
      const user = database.find((user) => user.id === id);
      if (user) {
        return user;
      }
      throw new Error(`Couldn't find user with id: ${id}`);
    },
    createBygitProfile: (profile) => {
      let user = database.find((user) => user.id === profile.id);
      if (user) {
        return user;
      } else {
        user =  {
          id: profile.id,
          name: profile.username,
          email: profile.profileUrl,
          password: profile.id,
          reminders: [{id: 1, title: profile.username, description: "Welcome", completed: false}]
        };
        database.push(user);
        return user;
      }
      
    }
  };
  
  module.exports = { database, userModel };
  