import React from "react";
import styled from "styled-components";

const Footer = () => {
  const Creator = styled.p`
    margin: auto;
    font-weight: bold;
    color: yellow;
  `;

  return (
    <div>
      <br />
      <div className="card bg-dark text-light fixed-bottom">
        <Creator>Cristian Machuca - Buenos Aires 2022 -</Creator>
      </div>
    </div>
  );
};

export default Footer;
