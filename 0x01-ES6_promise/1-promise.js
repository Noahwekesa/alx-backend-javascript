export default function getFullResponseFromAPI(success) {
  return new promise((resolve, reject) => {
    if (success) {
      reesolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
