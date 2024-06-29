document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const petName = document.getElementById('petName').value;
    const petBreed = document.getElementById('petBreed').value;
    const petAge = document.getElementById('petAge').value;
    const petMedicalHistory = document.getElementById('petMedicalHistory').value;
    console.log(`Saving profile for ${petName}, ${petBreed}, ${petAge}, ${petMedicalHistory}`);
    // Add actual pet profile saving logic here
});
