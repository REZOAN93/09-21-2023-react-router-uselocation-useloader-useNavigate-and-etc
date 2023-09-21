import { useLoaderData } from "react-router-dom";
import UserDetails from "./UserDetails";

const User = () => {
  const users = useLoaderData();

  console.log(users);
  return (
    <div>
      <h1>This is User Page {users.length} </h1>
      <div className="grid grid-cols-3 gap-5 m-6">
      {users.map((na) => (
        <UserDetails key={na.id} user={na}></UserDetails>
      ))}
      </div>
    </div>
  );
};

export default User;
