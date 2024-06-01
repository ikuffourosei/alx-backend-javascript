export default function uploadPhoto(filename) {
  const response = Promise.reject(new Error(`${filename} cannot be processed`));
  return response;
}
