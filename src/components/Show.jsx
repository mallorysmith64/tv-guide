import React from "react";
import { Link } from "react-router-dom";
import Cast from "../components/Cast";

const Show = props => {
  const { show, imgSize } = props;
  const imageUrl = "https://image.tmdb.org/t/p/";
  // const maxLength = 300;

  // const { text } = props;

  if (!show) return <></>;

  return (
    <div className={`${!props.showCast ? "show-multi" : ""}`}>
      {/* {text.length > maxLength ? (
        <div className={`${text.substring(0, maxLength)}...`}>
          <a href="/#">Read more</a>
        </div>
      ) : (
        <p>{text}</p>
      )} */}

      <section className="green-background show-picked-container">
        <section className="show-picked">
          <h3>
            Title: <Link to={`/show/${show.id}`}>{show.original_name}</Link>
          </h3>
          <h4> First Aired: {show.first_air_date}</h4>
          <img src={`${imageUrl}${imgSize}${show.poster_path}`} alt={show.id} />
          <h4 className="text"> Description: {show.overview}</h4>
        </section>
      </section>

      {/* below shows cast members on cast page */}
      <section className="blue-background">
        {props.showCast ? <Cast show={show} /> : <></>}
      </section>
    </div>
  );
};
export default Show;
