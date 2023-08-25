import { Image } from "../Image";
export const PostCard = ({ post }) => {
  return (
    <div key={post.id} className="post">
      <Image src={post.cover} />
      <div className="text">
        <h1>{post.title}</h1>
        <h3>{post.body}</h3>
      </div>
    </div>
  );
};
