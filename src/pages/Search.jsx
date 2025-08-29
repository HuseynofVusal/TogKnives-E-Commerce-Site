import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { useGetProductQuery } from "../store/api";
import ProductCard from "../components/ProductCard";
import SortDropdown from "../components/SortDropDown";
import LazySection from "../components/LazySection";
import PriceRange from "../components/PriceRange";

const Search = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const { data: fetchedProducts } = useGetProductQuery();

  // məhsullar gələndə yüklə
  useEffect(() => {
    if (fetchedProducts) {
      const update = fetchedProducts.map((item) => ({
        ...item,
        quantity: 1,
      }));
      setProducts(update);
      setFilteredProducts(update);

      // məhsulların qiymət intervalını tap
      const prices = update.map((p) => p.price);
      const min = Math.floor(Math.min(...prices) / 200) * 200;
      const max = Math.ceil(Math.max(...prices) / 200) * 200;
      setMinPrice(min);
      setMaxPrice(max);
      setPriceRange([min, max]);
    }
  }, [fetchedProducts]);

  // search + priceRange filter
  useEffect(() => {
    let result = products;

    if (search.trim() !== "") {
      result = result.filter((item) =>
        item.slug.toLowerCase().includes(search.toLowerCase())
      );
    }

    result = result.filter(
      (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
    );

    setFilteredProducts(result);
  }, [search, products, priceRange]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            ? `${filteredProducts.length} Results`
            : search.length
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
          <BiSearch className="text-[#776c65] text-2xl cursor-pointer" />
        </div>
      </div>

      <LazySection>
        {filteredProducts.length > 0 && (
          <div className="flex justify-between items-center gap-3 py-7">
            <div className="flex items-center gap-2">
              <FiFilter className="text-[#776c65]" />
              <span className="text-[14px] uppercase text-[#776c65] leading-[15px] cursor-pointer">
                Filter
              </span>
            </div>
            <PriceRange
              value={priceRange}
              onChange={setPriceRange}
              min={minPrice}
              max={maxPrice}
            />
            <SortDropdown onSortChange={handleSortChange} />
          </div>
        )}
      </LazySection>

      <LazySection>
        <ProductCard filteredProducts={filteredProducts} />
      </LazySection>
    </main>
  );
};

export default Search;
