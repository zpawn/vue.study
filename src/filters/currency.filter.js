export default (value, currency = 'UAH') => (
  new Intl
    .NumberFormat('ru-RU', {
      style: 'currency',
      currency,
    })
    .format(value)
);
