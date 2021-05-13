module.exports = async (_, {amountInCents, metadata, receiptEmail, currency}, {stripe}) => {

    try {
        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amountInCents,
            currency,
            metadata: {
                details: metadata
            },
            receipt_email: receiptEmail
        });

        return paymentIntent.client_secret;
    } catch (err) {
        console.error(err);

        return '';
    }

}