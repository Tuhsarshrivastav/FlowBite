const { validationResult } = require("express-validator");
const CategoryModel = require("../models/categorysModel");
class Category {
  async create(req, res) {
    const errors = validationResult(req);
    const { name } = req.body;
    if (errors.isEmpty()) {
      const exist = await CategoryModel.findOne({ name });
      if (!exist) {
        await CategoryModel.create({ name });
        return res
          .status(201)
          .json({ message: "Your category has created successfully!" });
      } else {
        return res
          .status(401)
          .json({ errors: [{ msg: `${name} is already exists` }] });
      }
    } else {
      return res.status(401).json({ errors: errors.array() });
    }
  }
  async categories(req, res) {
    const page = req.params.page;
    const perPage = 3;
    const skip = (page - 1) * perPage;
    try {
      const count = await CategoryModel.find({}).countDocuments();
      const response = await CategoryModel.find({})
        .skip(skip)
        .limit(perPage)
        .sort({ updatedAt: -1 });
      return res.status(200).json({ categories: response, perPage, count });
    } catch (error) {
      console.log(error.message);
    }
  }
  async fatchCategory(req, res) {
    const { id } = req.params;
    try {
      const response = await CategoryModel.findOne({ _id: id });
      return res.status(200).json({ category: response });
    } catch (error) {
      console.log(error.message);
    }
  }
  async updateCategory(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const exist = await CategoryModel.findOne({ name });
      if (!exist) {
        await CategoryModel.updateOne({ _id: id }, { $set: { name } });
        return res
          .status(200)
          .json({ message: "Your category has updated successfully!" });
      } else {
        return res
          .status(401)
          .json({ errors: [{ msg: `${name} category is already exist` }] });
      }
    } else {
      return res.status(401).json({ errors: errors.array() });
    }
  }
}

module.exports = new Category();
