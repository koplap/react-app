import React, { useState, useEffect } from 'react';
function Users() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") 
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  const listUser = user.map((u) => (
    <tr key={u.id}>
      <td className="px-5 py-5 text-sm">{u.id}</td>
      <td className="px-5 py-5 text-sm">{u.name}</td> 
      <td className="px-5 py-5 text-sm">{u.email}</td>
      <td className="px-5 py-5 text-sm">{u.address.street}</td>
      <td className="px-5 py-5 text-sm">{u.address.city}</td>
    </tr>
  ));
  return (
    <>
      <h1 className="text-red-300 font-bold">แสดงชื่อผู้ใช้งาน</h1>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">ID</th>
            <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">Name</th>
            <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">Email</th>
            <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">Street</th>
            <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">City</th>
          </tr>
        </thead>
        <tbody>{listUser}</tbody>
      </table>
    </>
  );
}

export default Users;
