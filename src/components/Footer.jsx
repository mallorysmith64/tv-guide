import React from "react";

function Footer() {
  let getYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <small>&copy; Copyright {getYear}</small>
      </footer>
    </>
  );
}

export default Footer;
