const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const aws = require('aws-sdk');

module.exports = (integrationContext) => {
      
    return {
        stripe
    };
}