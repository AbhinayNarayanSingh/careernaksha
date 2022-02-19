import React from "react";

const Card = () => {
  return (
    <div className="card-container">
      <img src="../img/avatar-1.png" alt="avatar" className="avatar" />
      <div className="heading-para">
        <h2>Heading/subject of the post</h2>
        <p>
          Name and designation of person posting - Type of post time of post
        </p>

        <div className="like-comment">
          <img src="../img/like.svg" alt="like" />
          <p>9</p>
          <img src="../img/comment.svg" alt="comment" />
          <p>6</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
