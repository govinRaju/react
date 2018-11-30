(function() {
  "use strict";

  function ProductImage(props){
    return React.createElement("img",{
      src:"../../../assets/red.jpg",
      alt:"product image" 
    });
  }

  function ProductCustomizer(props){
    return React.createElement(
      "div",
      {className:"customizer"},
      React.createElement(
        "div",
        {classname:"product-image"},
        React.createElement(ProductImage)
      )
    );
  }

  ReactDOM.render(
    React.createElement(ProductCustomizer),
    document.getElementById("react-root"));
})();
