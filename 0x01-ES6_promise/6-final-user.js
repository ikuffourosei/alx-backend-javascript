import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const response = [];
  try {
    const user = await signUpUser(firstName, lastName);
    response.push({ status: 'fulfilled', value: user });
    await uploadPhoto(fileName);
  } catch (err) {
    response.push({
      status: 'rejected',
      value: `Error: ${fileName} cannot be processed`,
    });
  }
  return response;
}
