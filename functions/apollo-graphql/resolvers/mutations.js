const onPaymentIntentReceived = require('./mutations/onPaymentIntentReceived');
const onNewSubscriptionRequested = require('./mutations/onNewSubscriptionRequested');
const onCreateCustomer = require('./mutations/onCreateCustomer');

module.exports = {
    onPaymentIntentReceived,
    onNewSubscriptionRequested,
    onCreateCustomer
}