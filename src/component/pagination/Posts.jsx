import React from "react";

export const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className="list-group ">
      {posts.map((value) => { 
        return <li key={value.id}> {value.title} </li>;
      })}
    </ul>
  );
};
