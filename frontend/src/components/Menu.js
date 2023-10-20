import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
//import CreateCategory from './CreateCategory';

export default function Menu() {
    const [foodCat, setFoodCat] = useState([]); // Store menu categories
    const [foodItem, setFoodItem] = useState([]); // Store menu items
    const [selectedCategory, setSelectedCategory] = useState(null);
    //const [showAddCategory, setShowAddCategory] = useState(false);

    // Function to toggle the "Add Category" modal/form
    // const toggleAddCategory = () => {
    //     setShowAddCategory(!showAddCategory);
    // };

    const loadData = async () => {
        let response = await fetch("http://localhost:4000/api/fooddata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        response = await response.json();

        setFoodItem(response[0]); // Assuming items are in response[0]
        setFoodCat(response[1]); // Assuming categories are in response[1]

        console.log(response[0], response[1]);
    }

    useEffect(() => {
        loadData();
    }, []);


    const MenuCategories = ({ categories }) => (
        <div>
            {categories.map((category) => (
                <button
                    key={category._id}
                    onClick={() => {
                        setSelectedCategory(category.categoryName);
                        console.log("Selected category:", category.categoryName);
                    }} className={selectedCategory === category.categoryName ? "selected" : ""}

                >
                    {category.categoryName}
                </button>
            ))}
           
        </div>
    );

    const MenuItems = ({ foodItem, selectedCategory }) => {
        if (!foodItem || foodItem.length === 0 || selectedCategory === null) {
            return <div>Please Select the category to view the menu items.</div>;
        }

        const selectedCategoryData = foodItem.find(
            (categoryData) =>
                categoryData.categoryName.toLowerCase() ===
                selectedCategory.toLowerCase()
        );

        if (!selectedCategoryData || !selectedCategoryData.items) {
            return <div>No menu items available for the selected category.</div>;
        }

        const items = selectedCategoryData.items;

        if (items.length === 0) {
            return <div>No menu items.</div>;
        }

        {
            return (
                <div className="container">
                    <div className="row">
                        {items.map((item) => (
                            <div key={item.name} className="col-md-4 mb-4">
                                <div className="card">
                                    <img
                                        src={item.image}
                                        className="card-img-top"
                                        alt={item.name}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <ul className="list-group list-group-flush">
                                            {Object.entries(item.sizes).map(([size, cost]) => (
                                                <li
                                                    key={size}
                                                    className="list-group-item d-flex justify-content-between align-items-center"
                                                >
                                                    {size}
                                                    <span className="badge badge-primary badge-pill" style={{ color: "grey" }}>
                                                        ${cost.toFixed(2)}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        };
    };


    return (
        <div class="card-title">
            <MenuCategories
                categories={foodCat} // Pass menu categories as a prop to MenuCategories
                setSelectedCategory={setSelectedCategory}
            />
            <MenuItems
                foodItem={foodItem}
                selectedCategory={selectedCategory}//
            />
        </div>
    );
}
