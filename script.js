document.getElementById('registration-form').addEventListener('submit', function(event) 
{
    event.preventDefault();
  
     var firstName = document.getElementById('first-name').value;
     var lastName = document.getElementById('last-name').value;
     var email = document.getElementById('email').value;
     var password = document.getElementById('password').value;
     var confirmPassword = document.getElementById('confirm-password').value;
  
  if (password === confirmPassword) {
      alert('Registration Successful!\n\nName: ' + firstName + ' ' + lastName + '\nEmail: ' + email);
    } else {
      alert('Passwords do not match. Please try again.');
    }
});
  