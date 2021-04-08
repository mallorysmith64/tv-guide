import React from "react";
import { Link } from "react-router-dom";
import Cast from "../components/Cast";
import ShowMoreText from "react-show-more-text"; // truncate show descriptions

const Show = props => {
  const { show, imgSize } = props;
  const imageUrl = "https://image.tmdb.org/t/p/";

  if (!show) return <></>;

  const executeOnClick = isExpanded => {
    console.log(isExpanded);
  };

  return (
    <div className={`${!props.showCast ? "show-multi" : ""}`}>
      <section className="green-background show-picked-container">
        <section className="show-picked text">
          <h3>
            Title: <Link to={`/show/${show.id}`}>{show.original_name}</Link>
          </h3>
          <h4> First Aired: {show.first_air_date}</h4>
          <img src={`${imageUrl}${imgSize}${show.poster_path}`} alt={show.id} />

          <ShowMoreText
            /* Default options */
            lines={3}
            more="Show more"
            less="Show less"
            className="content-css"
            anchorClass="my-anchor-css-class"
            onClick={executeOnClick}
            expanded={false}
            width={290}
          >
            <h4> Description: {show.overview}</h4>
          </ShowMoreText>
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
