const express = require("express");
const router = express.Router();
const categoryValidation = require("../validations/categoryValidation");
const categoryController = require("../controllers/categoryController");
const Authorization = require("../services/Authorization");

router.post(
  "/create-category",
  [categoryValidation, Authorization.authorized],
  categoryController.create
);
router.get(
  "/categories/:page",
  Authorization.authorized,
  categoryController.categories
);
router.get(
  "/fatch-category/:id",
  Authorization.authorized,
  categoryController.fatchCategory
);
router.put(
  "/update-category/:id",
  [categoryValidation, Authorization.authorized],
  categoryController.updateCategory
);
router.delete(
  "/delete-category/:id",
  Authorization.authorized,
  categoryController.deleteCategory
);
router.get(
  "/allcategories",
  Authorization.authorized,
  categoryController.allCategories
);
module.exports = router;
