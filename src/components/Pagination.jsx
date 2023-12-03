import "./Pagination.css";

function Pagination({ totalPages, onPageChange, onPrevClick, onNextClick }) {
  return (
    <div className="pagination">
      <button onClick={onPrevClick}>&#9664;</button>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button key={index} onClick={() => onPageChange(index + 1)}>
          {index + 1}
        </button>
      ))}
      <button onClick={onNextClick}>&#9654;</button>
    </div>
  );
}

export default Pagination;
