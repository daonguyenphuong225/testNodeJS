const route = require("express").Router();

const UserRouter = require('./user')
const TaskRouter = require('./task');
const hienThiRouter = require('./hienThiHtml');

route.use(UserRouter);
route.use(TaskRouter);
route.use(hienThiRouter);

module.exports = route;
