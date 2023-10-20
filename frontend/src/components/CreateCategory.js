// CreateCategory.js
import React, { useState } from 'react';

const CreateCategory = ({ onCreateCategory }) => {
  const [categoryName, setCategoryName] = useState('');

  const handleCreate = () => {
    onCreateCategory(categoryName);
    setCategoryName('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Category Name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button onClick={handleCreate}>Create Category</button>
    </div>
  );
};

export default CreateCategory;
