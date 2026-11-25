export const AboutMe = ({ label, description, additionalDescription }) => (
  <section className="profile section" id="profile">
    <h2 className="section-title">{label}</h2>
    <p className="profile__description">{description}</p>
    {additionalDescription && <p className="profile__description profile__additional">{additionalDescription}</p>}
  </section>
);
