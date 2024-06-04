export default function updateUniqueItems(mapData) {
  const num = 100;
  if (mapData instanceof Map) {
    for (const key of mapData.keys()) {
      if (mapData.get(key) === 1) {
        mapData.set(key, num);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return mapData;
}
