const TrailComments = ({ comments }) => {
    return (
        <div className="commSect">
            {comments &&
                comments.map((comment) => (
                    <div key={comment._id}>
                        
                    </div>
                ))
            }
        </div>
    )
}