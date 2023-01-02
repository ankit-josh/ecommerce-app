const Paginate = (pageNumber) => setCurrentPage(pageNumber);
return (
  <>
    <Pagination
      postPerPage={postsPerPage}
      totalPosts={posts.length}
      paginate={paginate}
    ></Pagination>
  </>
);
export default Paginate;
