import propTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({ coverImg, title, summary, genres }) {
    return (
        <div>
            <img src={coverImg} alt="title" />
            <Link to="/movie">{title}</Link>
            <p>{summary}</p>
            <ul>
                {genres.map(genre => <li key={genre}>{genre}</li>)}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    coverImg: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;