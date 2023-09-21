import { useNavigate } from "react-router-dom";

const PostDetails = ({ post }) => {
  const { title, body, id } = post;
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/NewDetails/${id}`);
  };

  return (
    <div className="card bg-base-100 shadow-xl flex flex-col">
      <figure>
        <img src="https://i.ibb.co/Yk1Sh4F/cover1.jpg" alt="Shoes" />
      </figure>
      <div className="flex-grow p-2">
        <h2>{title}</h2>
      </div>
      <div className="flex-grow p-2 text-justify ">
        <p>{body}</p>
      </div>
      <div className="card-actions justify-end p-3 border-t-2">
        <button onClick={handleDetails} className="btn btn-sm btn-primary">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
