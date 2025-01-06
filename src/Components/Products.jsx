import React, { useContext, useEffect, useState } from 'react'
import productData from '../Data/Productsdata';
import { Button, Card, Pagination, Rate } from 'antd';
import {
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import FilterContext from '../Context/FilterContext';
import SearchDataContext from '../Context/SearchDataContext';

const { Meta } = Card;

function Products() {
  const { filter } = useContext(FilterContext);
  const { searchData  } = useContext(SearchDataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  var data = productData.Products;
  const navigate = useNavigate();
  if (filter || searchData) {
    data = productData.Products?.filter(
      item => item.productTitle === filter ||
        item.productCategoery === filter ||
        item.productCategoery === searchData ||
        (item.productColor.includes(filter)) ||
        (item.productTitle.startsWith(searchData?.charAt(0).toUpperCase() + searchData?.substr(1).toLowerCase())) ||
        (item.productTitle).includes(searchData?.toLowerCase() || searchData?.toUpperCase()) ||
        (item.productColor).includes(searchData?.toLowerCase() || searchData?.toUpperCase()) ||
        (item.productPrice <= Number(filter))
    );
  }
  const sendproductdetails = (productData) => {
    navigate(`/ProductDetails/${productData.productId}`);
  }
  const currentPageData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePageChange = page => {
    setCurrentPage(page);
  };
  return (
    <>
      <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4">
        {currentPageData?.map((e) => {
          return <Card
            key={e.productId}
            hoverable
            cover={<img alt="example" onClick={() => sendproductdetails(e)} className='w-56 h-56 relative' src={e?.productImg[0]} />}>
            <Meta className='absolute top-48 w-auto left-0 p-2 bg-white' title={e?.productTitle} />
            <div className="flex justify-between mt-3">
              <div><p>{e?.productCategoery}</p></div>
              <div><p>${e?.productPrice}</p></div>
            </div>
            <div className="flex justify-between mt-3">
              <div><Rate allowHalf defaultValue={e?.productRating} /></div>
              <Button className='border-none'><ShoppingCartOutlined /></Button>
            </div>
          </Card>
        })}
      </div>
      <div className="mt-4 flex justify-center">
        <Pagination
          defaultCurrent={1}
          current={currentPage}
          pageSize={itemsPerPage}
          total={data?.length}
          onChange={handlePageChange}
        />
      </div>
    </>
  )
}

export default Products
