import React from "react";

export const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map((value) => {
          return (
            <li key={value} className="page-item">
              <a
                onClick={() => paginate(value)}
                href="!#"
                className="page-link"
              >
                {value}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
