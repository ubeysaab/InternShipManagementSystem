import React from 'react'
import posts from "../../posts.js"
import Post from "../../Components/Post.jsx"
function Posts() {

  let postsData = posts.map((item,i) => {
    return (
      <Post key={i} {...item}/>
    )
  })
  console.log(posts)
  console.log(postsData);

  return (
    <section className='posts'>
      <h1> all internship post gonna be here </h1>
      {postsData}
    </section>
  )
}

export default Posts