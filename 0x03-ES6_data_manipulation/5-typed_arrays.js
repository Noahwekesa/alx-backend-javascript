export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  // Create an Int8Array view of the buffer
  const int8Array = new Int8Array(buffer);

  // Check if the position is within the range of the buffer
  if (position < 0 || position >= int8Array.length) {
    throw new Error('Position outside range');
  }

  // Set the value at the specified position
  int8Array[position] = value;

  return buffer;
}
