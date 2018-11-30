(function() {
  "use strict";

  function SizeSelector(props){
    return (
      <div className="field-group">
        <label htmlFor="size-options">Size:</label>
        <select name="sizeOptions" id="size-options">
          <option>7</option>
          <option>7.5</option>
          <option>8</option>
          <option>8.5</option>
          <option>9</option>
          <option>9.5</option>
          <option>10</option>
          <option>10.5</option>
          <option>11</option>
          <option>11.5</option>
          <option>12</option>
          <option>12.5</option>
        </select>
      </div>
    );
  }

  function ProductImage(props) {
    return <img src="../../../assets/red.jpg" alt="Product Image" />;
  }

  function ProductCustomizer(props) {
    return (
      <div className="customizer">
        <div className="product-image">
          <ProductImage />
        </div>
        <div className="selectors">
        <SizeSelector />
        </div>
      </div>
    );
  }

  ReactDOM.render(<ProductCustomizer />, document.getElementById("react-root"));
})();
