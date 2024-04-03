const TrailList = ({ trails }) => {
    // if (blah) {
        // return <h1>No trails, sorry</h1>
    // }
    return (
        <div>
            {trails &&
                trails.map((trail) => (
                    <div>{trail.name}</div>
                ))
            }
        </div>
    )
}

export default TrailList