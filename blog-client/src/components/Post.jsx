import React from "react";
const formatDate = (date) => {
  date = new Date(date);
  return `${date.getDate()}/${("0" + (date.getMonth() + 1)).slice(
    -2
  )}/${date.getFullYear()}`;
};
const Post = ({ rows }) => {
  return rows.map((post) => (
    <tbody key={post.id}>
      <tr>
        <td className="border border-black p-2">{post.author}</td>
        <td className="border border-black p-2">{post.articleName}</td>
        <td className="border border-black p-2">{post.content}</td>
        <td className="border border-black p-2">
          {formatDate(post.created_at)}
        </td>
      </tr>
    </tbody>
  ));
};

export default Post;
