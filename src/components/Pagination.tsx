import React, { useState } from "react";
import { Pagination } from "./PaginationUse";
export const PaginationContainer = () => {
  const [page, setPage] = useState(1);
  const totalPages = 15;
  const handlePages = (updatePage: number) => setPage(updatePage);
  return (
    <div className="container">
      <Pagination
        page={page}
        totalPages={totalPages}
        handlePagination={handlePages}
      />
    </div>
  );
};
