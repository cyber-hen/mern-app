import React from 'react';
import './ItemCard.css';

function ItemCard({ item, onDelete, onToggle }) {
  return (
    <div className={`item-card ${item.completed ? 'completed' : ''}`}>
      <div className="item-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      <div className="item-actions">
        <button
          className="toggle-btn"
          onClick={() => onToggle(item._id, item.completed)}
        >
          {item.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          className="delete-btn"
          onClick={() => onDelete(item._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
