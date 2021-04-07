import React from "react";
import { Link } from "react-router-dom";
import Cast from "../components/Cast";

const Show = props => {
  const { show, imgSize } = props;
  const imageUrl = "https://image.tmdb.org/t/p/";

  if (!show) return <></>;

  return (
    <div
      className={`show-picked-container ${!props.showCast ? "show-multi" : ""}`}
    >
          <section className="show-picked">
            <h3>
              Title: <Link to={`/show/${show.id}`}>{show.original_name}</Link>
            </h3>
            <h4>First Aired: {show.first_air_date}</h4>
            <img
              className="images"
              src={`${imageUrl}${imgSize}${show.poster_path}`}
              alt={show.id}
            />
            <h4>Description: {show.overview}</h4>
          </section>

      {/* below shows cast members on cast page */}
      <section className="blue-background">
        {props.showCast ? <Cast show={show} /> : <></>}
      </section>
    </div>
  );
};
export default Show;
