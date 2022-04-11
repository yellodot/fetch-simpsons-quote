export const QuoteCard = ({ quote }) => {

  return (
    quote && (
      <div className="QuoteCard">
        <h1>{quote.character}</h1>
        <h2>{quote.quote}</h2>
        <img src={quote.image} alt={quote.character} />
      </div>
    )
  );
}


