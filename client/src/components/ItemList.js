import React from 'react';
import ItemCard from './ItemCard';
import './ItemList.css';

function ItemList({ items, onDeleteItem, onToggleItem }) {
  if (items.length === 0) {
    return (
      <div className="empty-state">
        <p>No items yet. Create one to get started!</p>
      </div>
    );
  }

  return (
    <div className="item-list">
      {items.map((item) => (
        <ItemCard
          key={item._id}
          item={item}
          onDelete={onDeleteItem}
          onToggle={onToggleItem}
        />
      ))}
    </div>
  );
}

export default ItemList;
