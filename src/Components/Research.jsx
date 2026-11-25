export const Research = ({ paragraphs }) => (
  <section className="research section" id="research">
    <h2 className="section-title">Research &amp; Academic Service</h2>
    <div className="bd-grid">
      {paragraphs.map((parts, index) => (
        <p key={index}>
          {parts.map((part, partIndex) => typeof part === "string" ? part : (
            <a key={partIndex} className="product-link" href={part.url} target="_blank" rel="noopener noreferrer">{part.text}</a>
          ))}
        </p>
      ))}
    </div>
  </section>
);
