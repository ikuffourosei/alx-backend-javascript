export default function createInt8TypedArray(length, position, value) {
  const typeArr = new ArrayBuffer(length);
  const result = new Int8Array(typeArr);
  if (position >= length) {
    throw new Error('Position out of range');
  }
  result[position] = value;
}
