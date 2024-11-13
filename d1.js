console.log('同步before');
const user = getUser(2, (user) => {
  console.log('inside callback');
  console.log(user);
  console.log('AFTER');
});
// console.log(user);
console.log('同步after');

function getUser(id, cb) {
  setTimeout(() => {
    console.log('Reading a user from a database...');
    cb({ id: id, gitHubUsername: 'rossi' });
  }, 2000);
}
