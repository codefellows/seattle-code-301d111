function Movies(props) {

    return (
      <section>
        {props.movies.map((movie, index) => (
            <section key={index}>
                <h3>{movie.title}</h3>
            </section>
        ))}
      </section>
    )

}

export default Movies;