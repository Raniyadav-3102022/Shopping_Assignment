import React, { useEffect, useState } from 'react'
import data from '../Data/Productsdata';
import { Button, Card } from 'antd';
import { Pagination } from 'antd';
import {
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { Rate } from 'antd';

const { Meta } = Card;

function Products({ filter, searchdata }) {
  const [currentPage, setCurrentPage] = useState(1);
  console.log(filter, "filter")
  const itemsPerPage = 4;
  var data2 = data.Products;
  const navigate = useNavigate();
  if (filter || searchdata) {
    data2 = data.Products?.filter(
      item => item.title === filter ||
        item?.categoery === filter ||
        (item?.Color && item?.Color.includes(filter)) ||
        (item?.color && item?.color.includes(filter)) ||
        (item?.title && item?.title.startsWith(searchdata && searchdata?.charAt(0).toUpperCase() + searchdata?.substr(1).toLowerCase())) ||
        (item?.Color)?.includes(searchdata) === true ||
        (item?.color)?.includes(searchdata) === true ||
        (item?.price <= Number(filter))
    );
  }

  useEffect(() => {
  }, [])
  const sendproductdetails = (data) => {

    navigate(`/ProductDetails/${data.id}`);
  }

  const currentPageData = data2.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = page => {
    setCurrentPage(page);
  };
  return (
    <>
      <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4">
        {currentPageData.map((e) => {
          return <Card
            hoverable
            cover={<img alt="example" onClick={() => sendproductdetails(e)} className='w-56 h-56 relative' src={e.src} />}
          >
            <Meta className='absolute top-48 w-auto left-0 p-2 bg-white' title={e?.title} />
            <div className="flex justify-between mt-3">
              <div><p>{e?.categoery}</p></div>
              <div><p>${e?.price}</p></div>
            </div>
            <div className="flex justify-between mt-3">
              <div><Rate allowHalf defaultValue={e?.rating} /></div>
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
          total={data2?.length}
          onChange={handlePageChange}
        />
      </div>
    </>
  )
}

export default Products
