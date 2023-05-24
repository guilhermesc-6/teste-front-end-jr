import { CategoryCard } from "../CategoryCard";

import { categories } from "../../utils/categories";

import "./index.scss";

export function Categories() {
  return (
    <div className='categories-container'>
      {categories.map((category, i) => {
        return <CategoryCard key={i} name={category.name} image={category.image} />;
      })}
    </div>
  );
}
