import { FC, Dispatch, SetStateAction } from "react";
import { IPost } from "./Posts.type";
import style from "./Posts.module.css";
import { Link } from "react-router-dom";
import useFetch from "./hooks/useFetch";

const Posts: FC<{
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
}> = ({ activePage, setActivePage }) => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { isLoading, data, error } = useFetch<IPost[]>(
    `https://jsonplaceholder.typicode.com/posts?userId=${activePage}`
  );

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {data?.map((post) => (
        <div key={post.id}>
          <Link className={style.post__title} to={`post/${post.id}`}>
            {post.title}
          </Link>
          <p>{post.body}</p>
        </div>
      ))}
      <div className={style.pagination}>
        {pages.map((page) => (
          <button
            key={page}
            className={style.pagination__button}
            disabled={page === activePage}
            onClick={() => setActivePage(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Posts;
