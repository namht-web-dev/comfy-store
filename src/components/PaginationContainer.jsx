import { useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname, search } = location;
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;
  const numberPage = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  const [currentPage, setCurrentPage] = useState(page || 1);
  if (pageCount < 2) return null;

  const handleChangePage = (pageIndex) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageIndex);
    navigate(`${pathname}?${searchParams.toString()}`);
    setCurrentPage(pageIndex);
  };

  return (
    <div className="join">
      <button
        className="join-item btn capitalize"
        onClick={() => {
          if (currentPage > 1) handleChangePage(currentPage - 1);
        }}
      >
        prev
      </button>
      {numberPage.map((pageIndex) => {
        return (
          <button
            key={pageIndex}
            className={`join-item btn ${
              currentPage === pageIndex && "btn-secondary"
            }`}
            onClick={() => handleChangePage(pageIndex)}
          >
            {pageIndex}
          </button>
        );
      })}

      <button
        className="join-item btn capitalize"
        onClick={() => {
          if (currentPage < pageCount) handleChangePage(currentPage + 1);
        }}
      >
        next
      </button>
    </div>
  );
};
export default PaginationContainer;
