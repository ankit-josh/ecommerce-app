import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import Dropdown1 from "./Dropdown1";
import ReactImageMagnify from "react-image-magnify";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);

      setProduct(await response.json());
      setLoading(false);
    };

    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const img1 = product.image;

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: img1,
                src: img1,
                isFluidWidth: true,
              },
              largeImage: {
                src: img1,
                width: 1200,
                height: 1800,
              },
            }}
          />
        </div>

        <div>
          <div>
            <object
              data="https://www.youtube.com/embed/nfk6sCzRTbM?autoplay=1"
              width="560px"
              height="315px"
            ></object>
          </div>

          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead fw-bolder">
              Rating{product.rating && product.rating.rate}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 fw-bold my-4">${product.price}</h3>
            <h5 className="dropdown">{Dropdown1()}</h5>
            <p className="lead">{product.description}</p>
            <button className="btn btn-outline-dark px-4 py-2">
              ADD TO CART
            </button>
            <NavLink
              className="btn btn-dark ms-2 px-3 py-2"
              to="/cart"
              onClick={() => addProduct(product)}
            >
              GO TO CART
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
