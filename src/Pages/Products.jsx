import React, { useEffect, useState } from 'react'
import productData from '../Data/Productsdata';
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
  var data2 = productData.Products;
  const navigate = useNavigate();
  if (filter || searchdata) {
    data2 = productData.Products?.filter(
      item => item.p_Title === filter ||
        item?.p_Categoery === filter ||
        item?.p_Categoery === searchdata ||
        (item?.p_Color.includes(filter)) ||
        (item?.p_Title.startsWith(searchdata?.charAt(0).toUpperCase() + searchdata?.substr(1).toLowerCase())) ||
        (item?.p_Title)?.includes(searchdata?.toLowerCase() || searchdata?.toUpperCase()) === true ||
        (item?.p_Color)?.includes(searchdata?.toLowerCase() || searchdata?.toUpperCase()) === true ||
        (item?.p_Price <= Number(filter))
    );
  }

  useEffect(() => {
  }, [])
  const sendproductdetails = (productData) => {

    navigate(`/ProductDetails/${productData.p_Id}`);
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
        {currentPageData?.map((e) => {
          return <Card
            hoverable
            cover={<img alt="example" onClick={() => sendproductdetails(e)} className='w-56 h-56 relative' src={e?.srcOne} />}
          >
            <Meta className='absolute top-48 w-auto left-0 p-2 bg-white' title={e?.p_Title} />
            <div className="flex justify-between mt-3">
              <div><p>{e?.p_Categoery}</p></div>
              <div><p>${e?.p_Price}</p></div>
            </div>
            <div className="flex justify-between mt-3">
              <div><Rate allowHalf defaultValue={e?.p_Rating} /></div>
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
