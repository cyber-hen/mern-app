import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemForm from '../components/ItemForm';
import ItemList from '../components/ItemList';
import './Pages.css';

function Dashboard() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token');
  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('/api/items', { headers });
      setItems(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching items:', error);
      setLoading(false);
    }
  };

  const handleAddItem = async (newItem) => {
    try {
      const response = await axios.post('/api/items', newItem, { headers });
      setItems([...items, response.data]);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await axios.delete(`/api/items/${itemId}`, { headers });
      setItems(items.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleToggleItem = async (itemId, completed) => {
    try {
      const response = await axios.put(
        `/api/items/${itemId}`,
        { completed: !completed },
        { headers }
      );
      setItems(
        items.map((item) => (item._id === itemId ? response.data : item))
      );
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <div className="page dashboard-page">
      <h1>Dashboard</h1>
      <ItemForm onAddItem={handleAddItem} />
      {loading ? (
        <p>Loading items...</p>
      ) : (
        <ItemList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
        />
      )}
    </div>
  );
}

export default Dashboard;
