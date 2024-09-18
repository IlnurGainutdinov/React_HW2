import React, { useState } from "react";

function CommentsList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);

  const removeComment = (id) => {
    const changedComments = comments.filter((comment) => comment.id !== id);
    setComments(changedComments);
  };

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.text}
            <button onClick={() => removeComment(comment.id)}>Удалить {comment.id} комментарий</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsList;
