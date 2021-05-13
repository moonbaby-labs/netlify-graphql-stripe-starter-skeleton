const { gql } = require('apollo-server-lambda')

module.exports = gql`
  type Query {
    hello: String
  }

  type Mutation {
    onPaymentIntentReceived(metadata: String, amountInCents: Int!, receiptEmail: String): String
    onCreateCustomer(email: String!): Customer
    onNewSubscriptionRequested(paymentMethodId: String!, customerId: String!, priceId: String!): Boolean
  }

  type Customer {
    id: String!
    balance: Int
    created: Int
    currency: String
    delinquent: Boolean
  }
`