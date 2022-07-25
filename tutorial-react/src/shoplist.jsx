import React from 'react';

function ShoppingList() {
  return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
  );
}

export default ShoppingList;
