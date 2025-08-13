import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { useGetProductQuery } from "../store/api";
import ProductCard from "../components/ProductCard";
import SortDropdown from "../components/SortDropDown";

const Search = () => {
  const [search, setSearch] = useState("");
  const [str, setStr] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { data: fetchedProducts } = useGetProductQuery();

  useEffect(() => {
    if (fetchedProducts) {
      setProducts(fetchedProducts);
    }
  }, [fetchedProducts]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const searchProducts = () => {
    const result = products.filter((item) =>
      item.slug.toLowerCase().includes(search.toLowerCase())
    );

    setStr(search);
    setFilteredProducts(result);
  };

  const handleSortChange = (option) => {
    const sorted = [...filteredProducts];
    if (option === "Price, low to high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (option === "Price, high to low") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sorted);
  };

  return (
    <main className="cont">
      <div
        className={`cont !mt-30 ${
          filteredProducts?.length ? "pb-0" : "!py-[8rem]"
        } flex flex-col gap-10 items-center justify-center`}
      >
        <h2 className="text-4xl text-[#776c65] uppercase font-sans">
          {filteredProducts.length
            ? `${filteredProducts.length} Results for "${str}"`
            : str.length
            ? "No results could be found."
            : "Search"}
        </h2>

        <div className="md:w-[700px] w-[226px] flex items-center gap-3 pb-[24px] border-b border-b-[#bebebe]">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="!text-[#323131] outline-0 text-[24px] leading-[32px]  w-full"
            type="text"
            placeholder="Search for..."
          />
          <BiSearch
            onClick={searchProducts}
            className="text-[#776c65] text-2xl cursor-pointer"
          />
        </div>
      </div>

      {filteredProducts.length > 0 && (
        <div className="flex justify-between items-center gap-3 py-7">
          <div className="flex items-center gap-2">
            <FiFilter className="text-[#776c65]" />
            <span className="text-[14px] uppercase text-[#776c65] leading-[15px] cursor-pointer">
              Filter
            </span>
          </div>
          <SortDropdown onSortChange={handleSortChange} />
        </div>
      )}

      <ProductCard filteredProducts={filteredProducts} />
    </main>
  );
};

export default Search;
