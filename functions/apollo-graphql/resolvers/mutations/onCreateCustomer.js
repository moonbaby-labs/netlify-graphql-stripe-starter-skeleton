

module.exports = async (_, {email}, {stripe}) => {
    try {

        const customer = await stripe.customers.create({
            email,
          });

        return customer;
    } catch (error) {
        console.error(error);

        return null;
    }
}