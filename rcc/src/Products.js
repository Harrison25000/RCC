import './css/Products.css';
import { ProductCard } from './components/Cards/ProductCard.js';

function Products() {

  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth();
  var day = currentDate.getDate();
  var addedYear = new Date(year + 1, month, day);

  return (
    <div className="ProductPage">
      <div className="ProductsFilter">
        <form className='ProductsFilterForm'>
          <div className='ProductFilterSelectDiv'>
            <label for="countrySelect">Country:</label>
            <select id="countrySelect">
              <option value="UK">UK</option>
              <option value="Spain">Spain</option>
              <option value="Italy">Italy</option>
              <option value="Portugal">Portugal</option>
            </select>
          </div>
          <div className='ProductFilterSelectDiv'>
            <label for="itemSelect">Item:</label>
            <select id="itemSelect">
              <option value="Clothes">Clothes</option>
              <option value="Accessories">Accessories</option>
              <option value="Toiletries">Toiletries</option>
            </select>
          </div>
          <div className='ProductFilterSelectDiv'>
            <label for="startDate">Start Date:</label>
            <input type="date" id="startDate" name="trip-start"
              min={currentDate.toISOString().split("T")[0]} max={addedYear.toISOString().split("T")[0]}></input>
          </div>
          <div className='ProductFilterSelectDiv'>
            <label for="endDate">End Date:</label>
            <input type="date" id="endDate" name="trip-end"
              min={currentDate.toISOString().split("T")[0]} max={addedYear.toISOString().split("T")[0]}></input>
          </div>
        </form>
      </div>
      <div className='ProductsDisplay'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Products;
