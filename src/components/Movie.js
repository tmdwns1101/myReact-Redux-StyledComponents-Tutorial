import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const MovieBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 50px;
  padding-top: 70px;
  width: 80%;
`;

const MovieItemBlock = styled.div`
  box-sizing: border-box;
  width: 45%;
  background-color: white;
  margin-bottom: 70px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);

  img {
    position: relative;
    top: -50px;
    max-width: 150px;
    width: 100%;
    margin-right: 30px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
      0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);
  }
  h3 {
    margin-bottom: 5px;
    font-size: 24px;
    color: #2c2c2c;
  }
  h5 {
    margin: 0;
    font-weight: 300;
  }
`;

const colors = [
  {
    genre: "Comedy",
    color: "#f08c00"
  },
  {
    genre: "Horror",
    color: "#212529"
  },
  {
    genre: "Action",
    color: "6741d9"
  },
  {
    genre: "Crime",
    color: "#e03131"
  },
  {
    genre: "Drama",
    color: "#ffa8a8"
  },
  {
    genre: "Family",
    color: "#8ce99a"
  },
  {
    genre: "Adventure",
    color: "#9c36b5"
  },
  {
    genre: "Thriller",
    color: "#495057"
  },
  {
    genre: "Animation",
    color: "#fcc419"
  },
  {
    genre: "War",
    color: "#c92a2a"
  },
  {
    genre: "Biography",
    color: "#82c91e"
  },
  {
    genre: "History",
    color: "#4263eb"
  },
  {
    genre: "Fantasy",
    color: "#15aabf"
  },
  {
    genre: "Romance",
    color: "#f783ac"
  },
  {
    genre: "Mystery",
    color: "#5f3dc4"
  },
  {
    genre: "Sci-Fi",
    color: "#66d9e8"
  },
  {
    genre: "Music",
    color: "#a9e34b"
  },
  {
    genre: "Musical",
    color: "#ffd43b"
  },
  {
    genre: "Western",
    color: "#862e9c"
  }
];

const colorStyle = css`
  ${({ genre }) => {
    const select = colors.filter(elem => elem.genre === genre);
    return css`
      color: ${select[0].color};
    `;
  }}
`;

const MovieGenresBlock = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  margin: 5px 0px;
`;

const MovieGenreItem = styled.li`
  margin-right: 10px;
  font-size: 14px;
  font-weight: 500;
  ${colorStyle}
`;

function MovieItem({ id, year, title, summary, poster, genres }) {
  return (
    <MovieItemBlock>
      <img src={poster} alt={title} title={title} />
      <div>
        <h3>{title}</h3>
        <h5>{year}</h5>
        <MovieGenresBlock>
          {genres.map((genre, index) => (
            <MovieGenreItem genre={genre} key={index}>
              {genre}
            </MovieGenreItem>
          ))}
        </MovieGenresBlock>
        <p title={summary}>{summary.slice(0, 180)}...</p>
      </div>
    </MovieItemBlock>
  );
}

function Movie({ movies }) {
  return (
    <MovieBlock>
      {movies.map(movie => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          genres={movie.genres}
        />
      ))}
    </MovieBlock>
  );
}

// eslint-disable-next-line react/no-typos
MovieItem.PropTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
