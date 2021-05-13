const onPaymentIntent = require('./mutations/onPaymentIntent');
const onNewSubscription = require('./mutations/onNewSubscription');
const onCreateCustomer = require('./mutations/onCreateCustomer');

module.exports = {
    onPaymentIntent,
    onNewSubscription,
    onCreateCustomer
}