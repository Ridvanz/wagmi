<script>
    export let label;
    export let value;
    export let colorClass = "text-primary-500"; // Default color
</script>

<div class="flex-1 bg-gradient-to-tr from-tertiary-900 to-secondary-800 p-2 border border-primary-500 rounded-lg shadow-md text-center shadow-primary-500/50">
    <h3 class="text-xs font-medium text-white">{label}</h3>
    <p class="text-base font-bold {colorClass}">{value}</p>
</div>
