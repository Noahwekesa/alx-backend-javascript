import { uploadPhoto, Create } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), Create()])
    .then((values) => {
      console.log(values[0].body, values[1].body);
    })
    .catch(() => console.log('Signup system offline'));
}
