import React, {useState} from "react";

function Users() {
    const [users, setUsers] = useState([{
        Name: "Tony",
        Email: "carlson.tony@gmail.com",
        Age: 37,
        Action: "sit"
    }])
    return (
        <div>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user) => {
                            return <tr>
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                <td>{user.Age}</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>

                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;