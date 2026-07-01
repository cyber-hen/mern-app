import React, { useState } from 'react';
import './ItemForm.css';

function ItemForm({ onAddItem }) {
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.description) {
      onAddItem(formData);
      setFormData({ title: '', description: '' });
    }
  };

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Item Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Item Description"
        value={formData.description}
        onChange={handleChange}
        rows="4"
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
