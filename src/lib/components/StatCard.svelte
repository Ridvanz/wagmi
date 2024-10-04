<script>
    export let label;
    export let value;
    export let colorClass = "text-primary-500"; // Default color
</script>

<div class="flex-1  p-2  rounded-lg shadow-md text-center">
    <h3 class="text-xs font-medium text-tertiary">{label}</h3>
    <p class="text-base font-bold {colorClass}">{value}</p>
</div>
