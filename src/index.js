import $ from "jquery"; // Import jQuery
import "@coreui/coreui/dist/css/coreui.min.css"; // Import CoreUI CSS
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS (includes Popper.js)
import "@coreui/coreui"; // Import CoreUI JS
import "@coreui/coreui/dist/js/coreui.bundle.min.js"; // Import Popper.js
import "@coreui/chartjs/dist/js/coreui-chartjs.js";
import "@coreui/utils/dist/umd/index.js";
import "simplebar/dist/simplebar.min.js";
import "simplebar/dist/simplebar.min.css";

/*import "chart.js/dist/chart.umd.js";*/
import "chart.js/auto";

import "./styles.css"; // Import your custom CSS
import "./scss/style.scss";

// Your custom JavaScript code
$(document).ready(function () {
  console.log("CoreUI, Bootstrap, Popper.js, and jQuery are ready!");
});
