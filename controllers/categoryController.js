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
        return res.status(201).json({ message: "category has created" });
      } else {
        return res
          .status(401)
          .json({ errors: [{ msg: `${name} is already exists` }] });
      }
    } else {
      return res.status(401).json({ errors: errors.array() });
    }
  }
  async fatch(req, res) {
    try {
      const category = await CategoryModel.find({});
      return res.status(200).json({ status: true, category });
    } catch (error) {
      return res.status(401).json({ message: "category does not found" });
    }
  }
}

module.exports = new Category();
