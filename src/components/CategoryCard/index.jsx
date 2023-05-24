import "./index.scss";

export function CategoryCard({ name, image }) {
  return (
    <div className='category-card-container'>
      <div className='category-card-icon'>
        <img src={image} alt={name} />
      </div>
      <span>{name}</span>
    </div>
  );
}
