<script>
    export let label;
    export let value;
    export let colorClass = "text-primary-500"; // Default color
</script>

<div class="flex-1 bg-gradient-to-tr from-tertiary-200 to-secondary-100 p-2  rounded-lg shadow-md text-center shadow-primary-100/50">
    <h3 class="text-xs font-medium text-tertiary">{label}</h3>
    <p class="text-base font-bold {colorClass}">{value}</p>
</div>
