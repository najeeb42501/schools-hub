import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

function AddBlogs() {
  const [initialData, setInitialData] = useState({
    _id: "",
    title: "",
    content: "",
    author: "",
  });
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/admin/get-blogs"
        );
        setBlogs(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
    author: Yup.string().required("Author is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/admin/add-blogs",
        values
      );
      console.log(response.data);
      // Reset form after successful submission
      setInitialData({
        _id: "",
        title: "",
        content: "",
        author: "",
      });
      alert("Blog added successfully!");
    } catch (error) {
      console.error("Error adding blog:", error);
      alert("Failed to add blog");
    }
  };

  const handleEdit = (blog) => {
    console.log(blog);
    setInitialData({
      _id: blog._id,
      title: blog.title,
      content: blog.content,
      author: blog.author,
    });
  };

  return (
    <div className="">
      <div className="flex flex-col items-stretch p-10 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Add Blog</h2>
        <Formik
          enableReinitialize={true}
          initialValues={initialData}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-lg p-2 font-medium text-gray-700"
                >
                  Title
                </label>
                <Field
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter Title for blog"
                  className="form-input mt-1 p-3 my-2 bg-gray-100 rounded w-full"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="content"
                  className="block text-lg p-2  font-medium text-gray-700"
                >
                  Content
                </label>

                <ReactQuill
                  id="content"
                  name="content"
                  value={formik.values.content}
                  placeholder="Write blog here and format it"
                  onChange={formik.handleChange("content")}
                />
                <ErrorMessage
                  name="content"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="author"
                  className="block text-lg p-2 font-medium text-gray-700"
                >
                  Author
                </label>
                <Field
                  type="text"
                  id="author"
                  name="author"
                  placeholder=" Enter Author Name for blog"
                  className="form-input mt-1 p-3 my-2 bg-gray-100 rounded w-full"
                />
                <ErrorMessage
                  name="author"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-cariGreen text-white rounded-md shadow-md hover:bg-nightGreen focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Add Blog
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="p-10">
        <hr className="my-6" />
        <h2 className="text-2xl font-bold mb-6">All Blogs</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Author</th>
              <th className="border px-4 py-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{blog.title}</td>
                <td className="border px-4 py-2">{blog.author}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-cariGreen w-full  text-white px-2 py-1 rounded-md hover:bg-nightGreen"
                    onClick={() => handleEdit(blog)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddBlogs;
