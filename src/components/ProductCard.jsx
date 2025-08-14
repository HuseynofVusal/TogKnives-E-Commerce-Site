import React, { useEffect, useRef, useState } from "react";
import Rating from "./Rating";
import { BsBasket3, BsFillBasket2Fill } from "react-icons/bs";
import { NavLink, useLocation } from "react-router";
import BasketModal from "./BasketModal";
import {
  useAddBasketMutation,
  useGetProductByCategoryIdQuery,
  useGetProductQuery,
} from "../store/api";
import toast from "react-hot-toast";

const ProductCard = ({ filteredProducts }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.getAll("category");

  const [addBasket, { isLoading: isAdding, isSuccess }] =
    useAddBasketMutation();
  const toastId = useRef(null);

  const [products, setProducts] = useState([]);

  const [basketModal, setBasketModal] = useState(false);
  const [basketModalId, setBasketModalId] = useState(null);

  useEffect(() => {
    if (isAdding) {
      if (!toastId.current) {
        toastId.current = toast.loading("Adding to basket...");
      }
    }

    if (isSuccess) {
      if (toastId.current) {
        toast.success("Successfully added to basket!", { id: toastId.current });
        toastId.current = null;
      }
    }
  }, [isAdding, isSuccess]);

  const { data: filterProducts = [], isLoading: isLoadingProducts } = !category
    ? useGetProductQuery()
    : useGetProductByCategoryIdQuery(+category[1], {
        skip: !category[1],
      });

  useEffect(() => {
    if (
      filterProducts &&
      Array.isArray(filterProducts) &&
      filterProducts.length > 0
    ) {
      setProducts(
        filterProducts.map((item) => ({
          ...item,
          quantity: 1,
        }))
      );
    }
  }, [filterProducts]);

  const handleAddBasket = async (basketId, quantity) => {
    try {
      await addBasket({ basketId, quantity }).unwrap();
      setBasketModal(true);
      setBasketModalId(basketId);
    } catch (err) {
      toast.error("Error adding to basket");
      console.error("Error adding to basket:", err);
    }
  };

  const displayedProducts =
    location.pathname === "/main/search" ? filteredProducts : products;

  if (isLoadingProducts) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-3 !py-10 cont">
      {displayedProducts?.map((item) => (
        <NavLink
          to={`/main/product?product=${item.id}&${item.slug}`}
          key={item.id}
          className="w-full relative group"
        >
          <div className="w-full relative">
            <img
              src={item.images[0]?.url}
              className={`w-full h-auto object-cover transition-opacity duration-500 ${
                item.images[1] && "group-hover:opacity-0"
              }`}
              alt={item.name}
            />

            {item.images[1] && (
              <img
                src={item.images[1]?.url}
                className="w-full h-auto object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                alt={item.name}
              />
            )}

            <div
              onClick={(e) => {
                e.preventDefault();
                handleAddBasket(item.id, item.quantity);
              }}
              className="group-hover:bottom-[5%] group-hover:opacity-100 opacity-0 duration-300 absolute hidden md:block right-[5%] bottom-[2%] text-black text-[12px] lg:bg-[#e97625] border-2 border-transparent hover:border-[#e97625] bg-white hover:bg-white hover:text-[#e97625] cursor-pointer px-3 py-2 uppercase"
            >
              <span className="hidden lg:block">Add to Basket</span>
              <span className="lg:hidden md:block hidden">
                <BsFillBasket2Fill className="text-[#e97625] text-2xl" />
              </span>
            </div>
          </div>

          <div className="p-3">
            <h3 className="text-[#776c65] my-2">{item.name}</h3>
            <p className="text-[#776c65] text-[12px] my-2 uppercase line-clamp-2">
              {item.description?.split("=")[1] ?? ""}
            </p>
            <span className="text-[#776c65] my-2">
              <span className="text-[#776c65] font-semibold font-sans">$</span>
              {item.price}.00
            </span>
            <div className="flex justify-between items-center">
              <Rating />
              <div
                onClick={() => handleAddBasket(item.id, item.quantity)}
                className="flex items-start gap-2 md:hidden"
              >
                <BsBasket3 className="text-[#e97625]" />
                <span className="uppercase text-[13px] text-[#e97625]">
                  Add
                </span>
              </div>
            </div>
          </div>
        </NavLink>
      ))}

      {basketModal && isSuccess && (
        <BasketModal
          setBasketModal={setBasketModal}
          products={products}
          basketModalId={basketModalId}
        />
      )}
    </div>
  );
};

export default ProductCard;
