import { Link } from "react-router-dom";

const UserDetails = ({user}) => {
    const {name,username,email,phone,website,company,id}=user
    return (
        <div className="border p-5 rounded-lg bg-slate-300">
            <h1>{name}</h1>
            <h1>{username}</h1>
            <h1>{email}</h1>
            <h1>{phone}</h1>
            <h1>{website}</h1>
            <h1>{company.name}</h1>
            <Link className="btn btn-sm my-5 bg-slate-400 focus:outline-none border-none" to={`/personal/${id}`}>More Details</Link>
        </div>
    );
};

export default UserDetails;