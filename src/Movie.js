import React, {Component} from "react";
import PropTypes from 'prop-types';
import "./Movie.css";
import LinesEllipsis from 'react-lines-ellipsis'


// class Movie extends Component {
//   static propTypes = {
//     title: propTypes.string,
//     poster: propTypes.string
//   }

//   render() {
//     return (
//       <div>
//         <MoviePoster poster={this.props.poster} />
//         <h1> {this.props.title} </h1>
//       </div>
//     );
//   }
// }

// class Movie extends Component {
//   render() {
//     return (
//       <div className="Movie">
//       <div className="Movie__Columns">
//         <MoviePoster poster={this.props.poster} />
//       </div>
//       <div className="Movie__Columns">
//         <h1> {this.props.title} </h1>
//         <div className="Movie__Genres">
//           {this.props.genres.map((genre, index) => <MovieGenre genre={genre}/>)}
//         </div>
//         <p className="Movie__Synopsis">
//           {this.props.synopsis}
//         </p>
//       </div>
//     </div>
//     );
//   }
// }

// class MoviePoster extends Component {
//   render() {
//     return (
//       <img src={this.props.poster} alt=""/>
//     );
//   }
// }

function Movie({title, poster, genres, synopsis}){
  return (
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} alt={title}/>
      </div>
      <div className="Movie__Column">
        <h1> {title} </h1>
        <div className="Movie__Genres">
          {genres.map((genre,index) => <MovieGenre genre={genre} key={index}/>)}
        </div>
        <p className="Movie__Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />          
        </p>
      </div>
    </div>
  )
}
function MovieGenre({genre}){
  return (
    <span className="Movie__Genre">{genre} </span>
  )
}
function MoviePoster({poster, alt}){ //props가 매개변수
  return (
      <img src = {poster} alt={alt} title={alt} className="Movie__Poster"/>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

MovieGenre.propTypes ={
  genre: PropTypes.string.isRequired
}

export default Movie;
