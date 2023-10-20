const express = require('express')
const router = express.Router()
const MenuCategory = require('../models/MenuCategorySchema');
const MenuItem = require('../models/MenuItemSchema');

router.post('/foodData', (req, res) => {
    try {
       
        res.send([global.FoodMenu, global.FoodCategory]);
    } catch (error) {
        console.log(error.message);
        res.send("Server Error");

    }
})

// Create a new menu category
router.post("/add-menu-categories", async (req, res) => {
    try {
        const newCategory = new MenuCategory({
            categoryName: req.body.categoryName,
        });
        await newCategory.save();
        res.status(201).json(newCategory);
        console.log(newCategory);
    } catch (error) {
        res.status(500).json({ error: "Error creating menu category" });
    }
});

//http://localhost:4000/api/edit-menu-categories/652704fb163bb43e5febe696
//Update a menu category by ID
router.put("/edit-menu-categories/:id", async (req, res) => {
    try {
        const categoryId = req.params.id; // Get the _id from the URL parameter
        const updatedCategoryName = req.body.categoryName; // Get the updated category name from the request body

        const category = await MenuCategory.findById(categoryId);

        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }

        category.categoryName = updatedCategoryName;

        await category.save();
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: "Error updating menu category" });
    }
});

//http://localhost:4000/api/delete-menu-category/652704fb163bb43e5febe696
// Delete a menu category by ID
router.delete("/delete-menu-category/:id", async (req, res) => {
    try {
        const categoryId = req.params.id; // Get the _id from the URL parameter

        // Find and remove the category by its ID
        const deletedCategory = await MenuCategory.findByIdAndRemove(categoryId);

        if (!deletedCategory) {
            return res.status(404).json({ error: "Category not found" });
        }

        res.status(200).json(deletedCategory);
    } catch (error) {
        res.status(500).json({ error: "Error deleting menu category" });
    }
});


module.exports = router;