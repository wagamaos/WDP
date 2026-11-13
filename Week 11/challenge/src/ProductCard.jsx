function ProductCard({ name, price, rating, inStock, imageUrl }) {
  const safeRating = Number.isFinite(rating)
    ? Math.min(5, Math.max(0, rating))
    : 0;
  const wholeStars = Math.floor(safeRating);
  const hasHalfStar = safeRating - wholeStars >= 0.5;
  const emptyStars = 5 - wholeStars - (hasHalfStar ? 1 : 0);
  const stars = '★'.repeat(wholeStars)
    + (hasHalfStar ? '½' : '')
    + '☆'.repeat(emptyStars);

  return (
    <article className="product-card">
      <img className="product-card__image" src={imageUrl} alt={name} loading="lazy" decoding="async" />
      <div className="product-card__body">
        <h2>{name}</h2>
        <p className="product-card__price">
          {new Intl.NumberFormat('ko-KR', {
            style: 'currency',
            currency: 'KRW',
            maximumFractionDigits: 0
          }).format(price)}
        </p>
        <p className="product-card__rating">
          <span className="product-card__stars" aria-hidden="true">{stars}</span>
          <span>{safeRating.toFixed(1)} / 5 stars</span>
        </p>
        <p className={`product-card__stock ${inStock ? 'is-available' : 'is-unavailable'}`}>
          <span className="product-card__stock-dot" aria-hidden="true" />
          {inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      </div>
    </article>
  );
}

export default ProductCard;
