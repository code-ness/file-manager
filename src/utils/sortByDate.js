export default function sortByDate(type, arr) {
  switch (type) {
    case "asc":
      return arr.sort(
        (item1, item2) =>
          new Date(item1.timeCreated) - new Date(item2.timeCreated)
      );
    case "desc":
      return arr.sort(
        (item1, item2) =>
          new Date(item2.timeCreated) - new Date(item1.timeCreated)
      );
  }
}
