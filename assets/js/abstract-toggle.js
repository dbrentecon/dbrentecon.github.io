document.addEventListener("click", function (e) {
  const btn = e.target.closest(".abstract-btn");
  if (!btn) return;

  e.preventDefault();
  const id = btn.getAttribute("data-abs-target");
  if (!id) return;

  const panel = document.getElementById(id);
  if (!panel) return;

  // Toggle visibility using the native `hidden` attribute
  panel.hidden = !panel.hidden;
});
