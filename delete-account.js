// Get form and button elements
const deleteForm = document.getElementById('delete-form');
const deleteBtn = document.getElementById('delete-btn');

// Add event listener to delete button
deleteBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission

  const email = deleteForm['email'].value;
  const password = deleteForm['password'].value;

  // Delete user account from Firebase Auth
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      userCredential.user.delete()
        .then(() => {
          console.log('User account deleted successfully.');
          alert('User account deleted successfully.');
        })
        .catch((error) => {
          console.error(error);
          alert(error.message);
        });
    })
    .catch((error) => {
      console.error(error);
      alert(error.message);
    });
});
