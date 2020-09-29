const formatter = Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
});

export default function formatMoney(cents) {
  return formatter.format(cents / 100);
}
