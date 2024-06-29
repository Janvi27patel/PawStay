document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const specialRequirements = document.getElementById('specialRequirements').value;
    console.log(`Booking from ${startDate} to ${endDate}, special requirements: ${specialRequirements}`);
    // Add actual booking logic here
});
