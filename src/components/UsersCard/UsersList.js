// function UsersList() {
//     return fetch('https://jsonplaceholder.typicode.com/users').then(data => data.json())
// }

// export default UsersList;

export function getList() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
  }