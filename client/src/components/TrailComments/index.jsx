const TrailComments = ({ comments }) => {
    return (
        <div>
            <h1 className="commTitle" >Comments:</h1>
            <div className="commSect">
                {comments &&
                    comments.map((comment) => (
                        <div className="comment" key={comment._id}>
                            <h1 className="TcommUser">Username</h1>
                            <p className="TcommText">{comment.commentText}</p>
                            <div className="likeSect">
                                <button>+ {comment.likes} </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TrailComments;