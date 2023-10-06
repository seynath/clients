// import React, { Component } from 'react'
// import axios from 'axios'

// export default class AppClass extends Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//        posts: []
//     }
//   }

//     componentDidCatch() {
//       this.retrievePosts()
//     }
//     retrievePosts = () => {
//       axios.get('http://localhost:8000/posts')
//       .then(res => {
//             if(res.data.success){
//               this.setState({
//                 posts:res.data.existingPosts

//               })
//             }})

//       .catch(error => console.log(error))
//       console.log(this.state.posts)
//     }

//   render() {
//     return (
//       <div>
//         <button onClick={this.retrievePosts}>Click</button>
//         <div>
//           {this.state.posts.map((posts,index) => (
//             <div key={index}>
//               <h1>{posts.topic}</h1>
//               <p>{posts.description}</p>
//             </div>
//           ))}
//         </div>

//       </div>
//     )
//   }
// }

import React, { useEffect, useState } from "react";
import axios from "axios";

function AppClass() {
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
          <table class="table">
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
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{post.topc}</td>
                  <td>{post.description}</td>
                  <td>{post.postCategory}</td>

                  <td>
                    <a className="btn btn-warning" href={`/edit/${post._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" href="/delete">
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AppClass;
