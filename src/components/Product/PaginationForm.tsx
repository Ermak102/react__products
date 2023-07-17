import React, { FC, useState } from 'react';

import '../../styles/pagination.css';

interface Props {
  limit: number;
  length: number;
  currentPage: number;
  changePage: (page: number) => void;
}

const PaginationForm: FC<Props> = ({
  limit,
  length,
  currentPage,
  changePage,
}) => {
  const pageCount = Math.ceil(length / limit);

  const getCountPages = () => {
    let count = [];

    for (let i = 1; i <= pageCount; i++) {
      count.push(i);
    }

    return count;
  };

  return (
    <div className="pagination">
      <div className="container">
        <div className="pagination_wrapper">
          {getCountPages().map((page) => (
            <span
              className={'page ' + (currentPage === page ? 'active' : '')}
              key={page}
              onClick={() => changePage(page)}
            >
              {page}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaginationForm;
