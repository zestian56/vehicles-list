export function itemContains(item, search) {
  return item
    .toString()
    .toLowerCase()
    .includes(search.toString().toLowerCase());
}
