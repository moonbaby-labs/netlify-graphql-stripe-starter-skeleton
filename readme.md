# Netlify + Graphql + Stripe Starter Skeleton


## Prerequisites
1. Netlify Account and CLI
2. Stripe account

## Setup
### Netlify Setup
1. Log into your Netlify account
2. Setup a new project
3. Add your Stripe secret production env variable
4. Create and / or connect your Github / Gitlab / Bitbucket repo for deployment

### Dev Env Setup 
1. Rename env.sample to .env
2. Add your Stripe testing secret key to the env file.
3. Setup your netlify project via the CLI
4. Run `netlify dev` to run dev environment.


## How to use
This project has 3 mutations that are useful for creating Stripe payments & subscriptions. 
You can use the graphql schema to preview the mutations and it does come with graphiql for a browser representation.

### Dev host
http://localhost:8888/.netlify/functions/apollo-graphql 
You will use the host on your dev environment to connect to your main app. You can also access via browser and see the graphiql schema. graphiql is only available in dev environment.

*Your production host will be similar to this: https://[mynetlifyproject.netlify.app]/.netlify/functions/apollo-graphql*


### Mutation Descriptions
#### onPaymentIntent
Stripe transactions require a payment intent received request. This sets up the payment to be processed and returns a token that can be used for the transaction.

#### onCreateCustomer
You can create customers within Stripe. You must have a customer in order to create a subscription payment. You can also create them for general transactions as well and other payment types. This will return a customer type that you can use to create subscriptions.

#### onNewSubscription
Use this mutation whenever you want to create a new subscription. Pass in the paymentmethod id, customer, and price id. It'll create the subscription within Stripe and return the stripe id. 



## Future Development
This is a very bare skeleton. It is quick to get your prototype out the door. I want to add more methods to create payment types. You'll also want to lock it down for access when going into production. I have a auth0 and a firebase auth implementation that I have used. For bootstraps and initial versions, you could create a simple basic auth implementation.

