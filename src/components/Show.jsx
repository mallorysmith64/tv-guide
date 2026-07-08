import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cast from "../components/Cast";

// Replacement for react-show-more-text library (avoids its broken CJS/ESM packaging)
const ShowMoreText = ({
  lines = 2,
  more = "Show more",
  less = "Show less",
  className = "",
  onClick,
  width,
  children
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    const next = !expanded;
    setExpanded(next);
    if (onClick) onClick(next);
  };

  return (
    <div className={className} style={width ? { width } : undefined}>
      <div
        style={
          expanded
            ? undefined
            : {
                display: "-webkit-box",
                WebkitLineClamp: lines,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
              }
        }
      >
        {children}
      </div>
      <button
        type="button"
        onClick={toggle}
        className="my-anchor-css-class"
        style={{
          background: "none",
          border: "none",
          padding: 0,
          color: "inherit",
          textDecoration: "underline",
          cursor: "pointer"
        }}
      >
        {expanded ? less : more}
      </button>
    </div>
  );
};

const Show = (props) => {
  const { show, imgSize } = props;
  const imageUrl = "https://image.tmdb.org/t/p/";

  if (!show) return <></>;

  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };

  return (
    <div className={`${!props.showCast ? "show-multi" : ""}`}>
      <section className="green-background show-picked-container">
        <section className="show-picked text">
          <h3>
            Title: <Link to={`/show/${show.id}`}>{show.original_name}</Link>
          </h3>
          <h3> First Aired: {show.first_air_date}</h3>
          <img
            src={`${imageUrl}${imgSize}${show.poster_path}`}
            className="show-poster"
            alt={show.id}
          />

          <ShowMoreText
            /* Default options */
            lines={2}
            more="Show more"
            less="Show less"
            className="content-css"
            onClick={executeOnClick}
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