import React from "react";
import Category from "./Category";

function CategoryFilter({categoryList, selectedCategory, onSelectCategory}) {

  console.log(categoryList)
  const categoryMapped = categoryList.map((category) => {
    // <Category name={category} key={category onSelectCategory={onSelectCategory}}/>

    const className = category === selectedCategory ? "selected" : null;
    return (
    <button
    key={category}
    className={selectedCategory}
    onClick={() => onSelectCategory(category)}
    >{category}</button>
    )

  })


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryMapped}
    </div>
  );
}

export default CategoryFilter;
