/* eslint-disable react/prop-types */
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100"
      >
        Prev
      </button>
      <span className="mx-4 text-lg text-gray-600">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
