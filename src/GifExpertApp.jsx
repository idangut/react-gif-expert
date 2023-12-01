import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["High School DxD"]);

  const onAddCateogry = (newCategory = "") => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
    // setCategories((cat) => [...cat,, newCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCateogry={(value) => onAddCateogry(value)} />
      {categories.map((category, index) => (
        <GifGrid category={category} key={`category-${index}`} />
      ))}
    </>
  );
};
