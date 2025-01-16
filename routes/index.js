var express = require('express');
var router = express.Router();
const todoController = require("../controller/todo_controller");
const {sequelize} = require("../models");
const {QueryTypes} = require("sequelize");


/* GET home page. */
router.get('/', todoController.homeRoute);

module.exports = router;
router.get('/:id', todoController.renderAddForm);
router.post('/add', todoController.addNewItem);

router.get('/complete/:id', todoController.markItemAsComplete)

router.get('/incomplete/:id', todoController.markItemAsIncomplete)

router.get('/delete/:id', todoController.deleteItem)

router.get('/edit/:id', todoController.renderEditForm)
router.post('/edit/:id', todoController.EditItem)