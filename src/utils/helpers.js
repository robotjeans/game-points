export function groupBy(array) {
  const grouped = {};
  for (const obj of array) {
    const { value, quantity, ...rest } = obj;
    const key = Object.entries(rest).join('-');
    if (!grouped[key]) {
      grouped[key] = { ...rest, value: 0, quantity: 0 };
    }
    grouped[key].quantity += quantity;
    grouped[key].value += value;
  }
  return Object.values(grouped);
}
