const salesPerStream = require('./salesPerStream');
const salesPerUser = require('./salesPerUser');
const top5SalesCustomers = require('./top5SalesCustomers');
const top5ViewsCustomers = require('./top5ViewsCustomers');
const totalProductsSold = require('./totalProductsSold');
const totalSales = require('./totalSales');
const totalViews = require('./totalViews');
const totalApiCalls = require('./totalApiCalls');
const getSubscriptionClients = require('../componentHandlers/getSubscriptionClients')
const getEnterpriseClients = require('../componentHandlers/getEnterpriseClients')

module.exports = {
    top5SalesCustomers,
    top5ViewsCustomers,
    totalProductsSold,
    totalSales,
    totalViews,
    salesPerUser,
    salesPerStream,
    totalApiCalls,
    getEnterpriseClients,
    getSubscriptionClients
}