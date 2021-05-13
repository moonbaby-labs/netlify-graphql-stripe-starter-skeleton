module.exports = async (_, {amountInCents, metadata, receiptEmail, currency}, {stripe}) => {
    const paymentCurrency = currency || process.env.CURRENCY || 'usd';

    try {
        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amountInCents,
            currency: paymentCurrency,
            metadata: {
                details: metadata
            },
            receipt_email: receiptEmail
        });

        console.log(paymentIntent);
        return paymentIntent.client_secret;
    } catch (err) {
        console.error(err);

        return '';
    }

}