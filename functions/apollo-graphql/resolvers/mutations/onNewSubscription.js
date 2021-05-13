

module.exports = async (_, {customerId, paymentMethodId, priceId}, {stripe}) => {
    try {
        await stripe.paymentMethods.attach(paymentMethodId, {
            customer: customerId,
          });


        // Change the default invoice settings on the customer to the new payment method
        await stripe.customers.update(
            customerId,
            {
            invoice_settings: {
                default_payment_method: paymentMethodId,
            },
            }
        );

        // Create the subscription
        const sub = await stripe.subscriptions.create({
            customer: customerId,
            items: [{ price: priceId }],
            expand: ['latest_invoice.payment_intent'],
        });
        
        return sub.id;
    } catch (error) {
        console.error(error);

        return "";
    }
}