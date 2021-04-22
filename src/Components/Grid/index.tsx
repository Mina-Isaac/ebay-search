import React, { useMemo } from "react";
import "./style.scss";
import {
  loadMoreData,
  selectList,
  selectPagination,
  selectData,
} from "../../store/dataSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ProductCard from "../../Components/ProductCard";
import InfiniteScroll from "react-infinite-scroll-component";

function Grid() {
  const list = useAppSelector(selectList);
  const pagination = useAppSelector(selectPagination);
  const lastCallItemCount = useAppSelector(selectData)
    ?.findItemsByKeywordsResponse[0].searchResult?.[0]["@count"];
  const dispatch = useAppDispatch();

  const hasMore = !(
    lastCallItemCount === "0" ||
    pagination?.[0].pageNumber === pagination?.[0].totalPages
  );

  const fetchMoreData = () => dispatch(loadMoreData());

  const results = useMemo(
    () =>
      list?.map(
        ({ title, galleryURL, condition, sellingStatus, viewItemURL }, i) => {
          const [
            {
              currentPrice: [{ __value__: price }],
            },
          ] = sellingStatus;
          const cardProps = {
            title: title[0],
            image: galleryURL?.[0],
            condition: condition?.[0].conditionDisplayName[0],
            viewItemURL: viewItemURL[0],
            price,
          };
          return <ProductCard key={i} {...cardProps} />;
        }
      ),

    [list]
  );

  return (
    <div id="grid" className="results">
      <InfiniteScroll
        dataLength={list?.length || 0}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <h4 style={{ position: "absolute", bottom: "10px", right: "50%" }}>
            Loading...
          </h4>
        }
        scrollableTarget="grid"
      >
        {results}
      </InfiniteScroll>
    </div>
  );
}

export default React.memo(Grid);
