const salesPerStream = require('./salesPerStream');
const salesPerUser = require('./salesPerUser');
const top5SalesCustomers = require('./top5SalesCustomers');
const top5ViewsCustomers = require('./top5ViewsCustomers');
const totalProducts = require('./totalProducts');
const totalSales = require('./totalSales');
const totalViews = require('./totalViews');
const totalApiCalls = require('./totalApiCalls');

module.exports = {
    top5SalesCustomers,
    top5ViewsCustomers,
    totalProducts,
    totalSales,
    totalViews,
    salesPerUser,
    salesPerStream,
    totalApiCalls
}