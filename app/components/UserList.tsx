import React from 'react'
interface IUserList {
    name: string
    age: number
}
const UserList = ({ users }: { users: IUserList[] }) => {
    const sortUsers = users.sort((a, b) => a.name.localeCompare(b.name));
    return (
        <ol className="user-box">
            {
                sortUsers.map((user, index) => (
                    <li className="item-box content-center" key={index}><p>{user.name}</p> <p>Age: {user.age} </p>  </li>
                ))
            }

        </ol>
    )
}

export default UserList
