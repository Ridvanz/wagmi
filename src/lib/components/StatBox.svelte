
<script lang="ts">
    export let label: string;
    export let value: string | number;
    export let variant: '1' | '2' = '1';
</script>

<div class="flex h-14 items-center whitespace-nowrap gap-5 justify-between p-4 {variant=='1' ? '' : 'bg-[#F1F1F1]' } ">
    <p>{label}</p> <p>{value}</p>
</div>