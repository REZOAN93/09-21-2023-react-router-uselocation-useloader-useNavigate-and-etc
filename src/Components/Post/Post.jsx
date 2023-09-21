import { useLoaderData } from "react-router-dom";
import PostDetails from "./PostDetails";

const Post = () => {
  const post = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 w-11/12 mx-auto py-5">
        {post.map((na) => (
          <PostDetails key={na.id} post={na}></PostDetails>
        ))}
      </div>
    </div>
  );
};

export default Post;
