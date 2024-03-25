import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";

function Search({ setShowSearch }) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]); // State to hold search results
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);

  const onChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  
    // Filter items based on the input query
    const matchingItems = Object.values(items).filter((item) => {
      const itemName = item && item.attributes && item.attributes.name;
      return itemName && typeof itemName === "string" && itemName.toLowerCase().includes(value.toLowerCase());
    });
   
    // Update the search results
    setSearchResults(matchingItems);
  };

  const handleSearch = () => {
    if (!query || query.trim() === "") {
      return;
    }

    if (searchResults.length > 0) {
      navigate("/product/" + searchResults[0].id);
      setShowSearch(false);
    } else {
      console.log("No item found matching the search query");
    }
  };

  return (
    <div className="fixed w-full h-full z-40 top-0 left-0 bg-white translate-y-(100%)">
      <div className="w-full flex justify-center pt-[100px] pb-[50px] border border-b-[1px] relative md:pt-[20px] md:pb-[10]">
        <input
          className="w-full max-w-[1200px] h-[50px] text-center text-[20px] font-bold text-[#212121] outline-none border-0 md:text-[48px] md:h-[40px] "
          autoFocus
          placeholder="Search for Product"
          type="text"
          value={query}
          onChange={onChange}
        />
        <CloseIcon
          className="absolute text-[25px] right-[20px] top-[50%] translate-y-[-50%] cursor-pointer md:right-[40px] md:text-[50px]"
          onClick={() => setShowSearch(false)}
        />
      </div>
      <div className="max-w-[88%] mt-0 mb-auto md:max-w-800px">
        {/* Display search results if available */}
        {searchResults.length > 0 && (
          <div className="search-results flex flex-col gap-6">
            {searchResults.map((item) => (
              <div
                className="searched-item flex gap-2 items-center" 
                key={item.id}
                onClick={() => {
                  navigate("/item/" + item.id);
                  setShowSearch(false);
                }}
              >
                <div className="image-container ">
                  {item.attributes.image && item.attributes.image.data && item.attributes.image.data.attributes && (
                    <img className="rounded-full" src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} alt={item.attributes.name} />
                  )}
                </div>
                <div className="prod-details flex  flex-col">
                  <span className="name">{item.attributes.name}</span>
                  <span className="desc">{item.attributes.category}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        {query.length === 0 && (
          <div className="start-msg">
            Start typing to see products you are looking for.
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
