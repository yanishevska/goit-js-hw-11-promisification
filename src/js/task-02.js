const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];



const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve) => {
    const updatedUsers = allUsers.map((users) => {
      return users.name === userName ? { ...users, active: !users.active } : users;
    });
    resolve(updatedUsers);
  });
};


const logger = updatedUsers => console.table(updatedUsers);


toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
