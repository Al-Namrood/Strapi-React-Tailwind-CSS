import Post from "./Post";

const PostList = ({ rows }) => {
  return (
    <div className="p-6">
      <table className="table-auto ">
        <thead>
          <tr>
            <th className="p-6">Author</th>
            <th className="p-6">Title</th>
            <th className="p-6">Content</th>
            <th className="p-6">Created At</th>
          </tr>
        </thead>

        <Post rows={rows} />
      </table>
    </div>
  );
};

export default PostList;
