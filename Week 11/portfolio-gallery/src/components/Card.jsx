function Card({ title, children }) {
  return (
    <section className="content-card">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Card;
