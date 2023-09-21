import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const NewDetails = () => {
  const news = useLoaderData();
  const { title, body, userId } = news;
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="m-5">
        <div className="card card-compact w-6/12 mx-auto bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/g3RDVYL/D.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>{title}</p>
            <p>{body}</p>
            <p>{userId}</p>
            <div className="card-actions justify-end">
              <button onClick={handleBack} className="btn btn-primary">
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDetails;
