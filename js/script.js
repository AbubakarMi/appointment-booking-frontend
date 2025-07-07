document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('bookingForm');
  const successMsg = document.getElementById('successMsg');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const service = document.getElementById('service').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;
      const notes = document.getElementById('notes').value;

      const appointment = {
        service,
        date,
        time,
        notes
      };

      let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
      appointments.push(appointment);
      localStorage.setItem('appointments', JSON.stringify(appointments));

      successMsg.classList.remove('d-none');

      form.reset();
    });
  }
});
