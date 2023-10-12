import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  const retrievePosts = () => {
    axios
      .get("http://localhost:8000/posts")
      .then((res) => {
        if (res.data.success) {
          setPosts(res.data.existingPosts);
        }
      })
      .catch((error) => console.log(error));

    console.log(posts);
  };

  useEffect(() => {
    retrievePosts();
  }, []);

  return (
    <div>
      <button onClick={retrievePosts}>Click</button>
      <div>
        {/* {posts.map((post, index) => (
          <div key={index}>
            <h1>{post.topic}</h1>
            <p>{post.description}</p>
            <p>{post.postCategory}</p>
          </div>
        ))} */}

        <div className="container">
          <p>All Posts</p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Topic</th>
                <th scope="col">Description</th>
                <th scope="col">Post Category</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td><Link to={`/post/${post._id}`} style={{textDecoration:"none",color:"black"}}>{post.topic}</Link></td>
                  <td>{post.description}</td>
                  <td>{post.postCategory}</td>

                  <td>
                    <a className="btn btn-warning" href={`/edit/${post._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <Link to={`/edit/${post._id}`} className="btn btn-warning">
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </Link>
                    &nbsp; 
                    <a className="btn btn-danger" href="/delete">
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-success"><Link to={"/add"} style={{textDecoration:"none", color:"white"}}>Create New Post</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Home;
