// import axios from "axios";
// import e from "cors";
// import React from "react";
// import { useState, useEffect } from "react";

// function CreatePost() {
//   const initialFormValues = {
//     topic: "",
//     description: "",
//     postCategory: "",
//   };

//   const [values, setValues] = useState(initialFormValues);

//   const handleInputChange = (e) => {
//     console.log(values);
//     axios
//       .post("http://localhost:8000/post/save", values)
//       .then((response) => {
//         console.log(response.data.success);
//         setValues(initialFormValues);
//       })

//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       <h1>Create Post</h1>
//       <form onSubmit={handleInputChange}>
//         <div className="form-group">
//           <label htmlFor="topic">Topic</label>
//           <input
//             type="text"
//             onChange={(e) => {
//               setValues({ ...values, topic: e.target.value });
//             }}
//             className="form-control"
//             id="topic"
//             placeholder="Enter Topic"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="description">Description</label>
//           <input
//             type="text"
//             onChange={(e) => {
//               setValues({ ...values, description: e.target.value });
//             }}
//             className="form-control"
//             id="description"
//             placeholder="Enter Description"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="postCategory">Post Category</label>
//           <input
//             type="text"
//             onChange={(e) => {
//               setValues({ ...values, postCategory: e.target.value });
//             }}
//             className="form-control"
//             id="postCategory"
//             placeholder="Enter Post Category"
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CreatePost;


import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function CreatePost() {
  const initialFormValues = {
    topic: "",
    description: "",
    postCategory: "",
  };

  const [values, setValues] = useState(initialFormValues);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    axios.post("http://localhost:8000/post/save", values)
    .then((response) => {
      console.log(response.data.success);
      setValues(initialFormValues);
    })

    .catch((err) => {
      console.log(err);
    });
  }, [isSubmitted])


  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={() => setIsSubmitted(!isSubmitted)}
>
        <div className="form-group">
          <label htmlFor="topic">Topic</label>
          <input
            type="text"
            onChange={(e) => {
              setValues({ ...values, topic: e.target.value });
            }}
            className="form-control"
            id="topic"
            placeholder="Enter Topic"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            onChange={(e) => {
              setValues({ ...values, description: e.target.value });
            }}
            className="form-control"
            id="description"
            placeholder="Enter Description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="postCategory">Post Category</label>
          <input
            type="text"
            onChange={(e) => {
              setValues({ ...values, postCategory: e.target.value });
            }}
            className="form-control"
            id="postCategory"
            placeholder="Enter Post Category"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
