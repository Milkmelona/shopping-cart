
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PHP'
})

const currencyFormat = (total) => formatter.format(total);

export default currencyFormat;