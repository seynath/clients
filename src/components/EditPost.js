import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function EditPost() {

  const { id } = useParams();
  const [values, setValues] = useState({});
  const navigate = useNavigate();

useEffect(() => {
  axios
    .get(`http://localhost:8000/post/${id}`)
    .then((response) => {
      console.log(response.data.post);
      setValues(response.data.post);
    
    })
    .catch((err) => {
      console.log(err);
    });
}, [id]);




const [isSubmitted, setIsSubmitted] = useState(false);

useEffect(() => {

  if (isSubmitted){

  axios
    .put(`http://localhost:8000/post/update/${id}`, values)
    .then((response) => {
      console.log(response.data.success);
      setValues(values);
      alert("Post Updated Successfully");
      navigate("/");
     
    })

    .catch((err) => {
      console.log(err);
    });}
    
}, [isSubmitted]);

function handleSubmit(e) {
  e.preventDefault();
  setIsSubmitted(!isSubmitted);
  // navigate("/");
}


  return (
    <div>
      <h1>Edit Post</h1>
      <form onSubmit={(handleSubmit)}
>
        <div className="form-group">
          <label htmlFor="topic">Topic</label>
          <input
            type="text"
            onChange={(e) => {
              setValues({ ...values, topic: e.target.value });
            }}

            value={values.topic}
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
            value={values.description}

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
            value={values.postCategory}

            className="form-control"
            id="postCategory"
            placeholder="Enter Post Category"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  )
}

export default EditPost