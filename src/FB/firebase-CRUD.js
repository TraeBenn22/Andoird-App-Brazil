import firebase from 'firebase';

export function addUser(user, addComplete) {
  firebase
    .firestore()
    .collection('users')
    .add({
      email: user.email,
    })
    .then(data => addComplete(data))
    .catch(error => console.error(error));
}
