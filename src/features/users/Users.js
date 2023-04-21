import React from "react";
import { useSelector } from "react-redux";
// add any needed imports here

function Users() {

  // read from redux store
  const users = useSelector((state) => state.users)
  const numUsers = users.length;
  return (
    <div>
      <ul>
        Users!
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {users.map((user,index) => (
          <li key={index}>{user.username}</li>
        ))}
        {/* In addition, display the total number of users curently in the store */}
        <p>Total Users: {numUsers}</p>
      </ul>
    </div>
  );
}

export default Users;
