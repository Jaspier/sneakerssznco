import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to sneakerssznco",
  description: "Authentic Sneakers for the best prices",
  keywords: "sneakers, trendy, buy sneakers, authentic, best prices",
};

export default Meta;
