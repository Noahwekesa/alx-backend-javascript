export default function appendToEachArrayValue(array, appendString) {
  for (const idx in array) {
    array[idx] = appendString + array[idx];
  }
  return array;
}
