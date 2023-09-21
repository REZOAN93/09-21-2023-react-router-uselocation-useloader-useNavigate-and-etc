import { useLoaderData } from "react-router-dom";

const Personal = () => {
  const user = useLoaderData();
  const { name, username, email, phone, website, company } = user;
  return (
    <div className="m-5">
      <div className="card card-compact w-6/12 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/g3RDVYL/D.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{username}</p>
          <p>{email}</p>
          <p>{phone}</p>
          <p>{website}</p>
          <p>{company.name}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
