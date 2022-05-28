function Categories({ categories }) {
  return (
    <div className="four wide column">
      <h3 className="ui dividing header">Categories</h3>
      <div className="ui selection animated list category items">
        {categories.map((category) => (
          <div key={category.id} className="category item">
            <div className="content">
              <div className="header">{category.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
