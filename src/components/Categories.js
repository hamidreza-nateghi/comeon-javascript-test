import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../features/filterSlice';
import { useGetCategoriesQuery } from '../features/gameSlice';
import clsx from 'clsx';

function Categories() {
  const dispatch = useDispatch();
  const { data, isError, isLoading } = useGetCategoriesQuery();
  const { categoryId } = useSelector((state) => state.filter);

  const handleClick = (id) => {
    dispatch(setCategoryId(id));
  };

  const renderCategories = () => {
    if (isLoading) return <div className="ui active centered inline loader"></div>;

    if (isError)
      return (
        <div class="ui negative message">
          <div class="header">Error</div>
        </div>
      );

    return (
      <div className="ui selection animated list category items">
        {data.map((category) => {
          const active = category.id == categoryId;
          return (
            <div
              key={category.id}
              className={clsx('category item', active && 'disabled')}
              onClick={() => handleClick(category.id)}
            >
              <div className="content">
                <div className={clsx('ui header', active && 'teal')}>{category.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="four wide column">
      <h3 className="ui dividing header">Categories</h3>
      {renderCategories()}
    </div>
  );
}

export default Categories;
