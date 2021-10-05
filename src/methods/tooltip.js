import Tooltip from "bootstrap/js/dist/tooltip";
export default function() {
  //inti tooltip
  Array.from(
    document.querySelectorAll('button[data-bs-toggle="tooltip"]')
  ).forEach((tooltipNode) => new Tooltip(tooltipNode));
}
