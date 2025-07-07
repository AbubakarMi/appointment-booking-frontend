// admin.js

// Example: Show toast notification (Bootstrap 5)
function showToast(message, type = 'success') {
  const toastContainer = document.createElement('div');
  toastContainer.className = `toast align-items-center text-bg-${type} border-0 position-fixed top-0 end-0 m-3`;
  toastContainer.setAttribute('role', 'alert');
  toastContainer.setAttribute('aria-live', 'assertive');
  toastContainer.setAttribute('aria-atomic', 'true');
  toastContainer.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">${message}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  `;

  document.body.appendChild(toastContainer);
  const toast = new bootstrap.Toast(toastContainer);
  toast.show();

  // Auto-remove after 5 seconds
  setTimeout(() => {
    toastContainer.remove();
  }, 5000);
}

// Optional: Filter table rows by status (Confirmed, Pending, Failed)
function filterTable(status) {
  const rows = document.querySelectorAll("tbody tr");
  rows.forEach(row => {
    const cell = row.querySelector("td:last-child .badge");
    if (!status || cell.textContent.trim().toLowerCase() === status.toLowerCase()) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

// Optional: Add click events
document.addEventListener("DOMContentLoaded", function () {
  // Example: Trigger toast on load
  showToast("Welcome Admin 👋", "success");

  // Example filter usage
  // filterTable("Pending"); // Uncomment to test filtering
});
