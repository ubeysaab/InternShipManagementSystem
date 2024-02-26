import React from 'react'

function Post(props) {
  return (
  <div className="postCard ">
    <div className="postCard__top">
      <div className="postCard__img">
        <img src={props.img} alt="company logo" />
      </div>
      <div className="postCard__titles">
        <h4>
        {props.title}
          </h4>       

        <h5>
          {props.companyName}
          </h5> 
          <b>
            {props.companyPlace}
          </b>
      </div>
    </div>

    <div className="postCard__down">
      <p>
        {props.desc}
      </p>
      <div className="postCard__readmore">
        <p>
          {props.date.toLocaleString()}
        </p>
        <button >
ReadMore        </button>
      </div>
    </div>
  </div>
  )
}

export default Post