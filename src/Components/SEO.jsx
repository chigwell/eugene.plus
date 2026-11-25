import { Helmet } from "react-helmet";

export const SEO = ({ name, ocupation, description }) => {
  return (
    <Helmet>
      <title>{name} — {ocupation}</title>
      <html lang="en" />
      <meta name="description" content={description} />
    </Helmet>
  );
};
