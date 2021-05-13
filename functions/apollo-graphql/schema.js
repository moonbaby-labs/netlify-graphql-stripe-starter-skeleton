const { gql } = require('apollo-server-lambda')

module.exports = gql`
  type Query {
    hello: String
  }

  type Mutation {
    onPaymentIntent(metadata: String, amountInCents: Int!, receiptEmail: String): String
    onCreateCustomer(email: String!): Customer
    onNewSubscription(paymentMethodId: String!, customerId: String!, priceId: String!): String
  }

  type Customer {
    id: String!
    balance: Int
    created: Int
    currency: String
    delinquent: Boolean
  }
`