import { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import { IPost } from "./Posts.type";

const Post: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, data, error } = useFetch<IPost>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
    </div>
  );
};

export default Post;
