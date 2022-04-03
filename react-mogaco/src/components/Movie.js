import propTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
    return (
        <div>
            <img src={coverImg} alt="title" />
            <Link to={`/Movie/${id}`}><h2>{title}</h2></Link>
            <p>{summary}</p>
            <ul>
                {genres.map(genre => <li key={genre}>{genre}</li>)}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    coverImg: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;