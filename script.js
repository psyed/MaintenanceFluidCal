function calculate() {
  const weight = parseFloat(document.getElementById("weight").value);
  const maintenanceFluid = calculateMaintenanceFluid(weight);
  document.getElementById("result").textContent = "Maintenance Fluid: " + maintenanceFluid + " mL/day";
}
