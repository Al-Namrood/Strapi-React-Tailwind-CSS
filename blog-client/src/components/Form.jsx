import { useState } from "react";

const Form = ({ submit }) => {
  const [author, setAuthor] = useState("");
  const [articleName, setArticleName] = useState("");
  const [content, setContent] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const values = {
      author: author,
      articleName: articleName,
      content: content,
    };

    submit(values);

    setAuthor("");
    setArticleName("");
    setContent("");
  };

  return (
    <div className="w-full max-w-xs p-6">
      <form
        id="add-post"
        onSubmit={handleOnSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="author"
          >
            Author
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="author"
            type="text"
            name="author"
            required
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="articleName"
          >
            ArticleName
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="articleName"
            type="text"
            name="articleName"
            required
            placeholder="ArticleName"
            value={articleName}
            onChange={(e) => setArticleName(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            id="content"
            name="content"
            required
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
