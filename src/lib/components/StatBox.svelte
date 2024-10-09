
<script lang="ts">
    export let label: string;
    export let value: string | number;
    export let variant: '1' | '2' = '1';
</script>

<div class="flex max-h-20 text-xs 2xl:text-sm h-full min-h-14 items-center whitespace-nowrap gap-1 justify-between p-4 {variant=='1' ? '' : 'bg-[#F1F1F1]' } ">
    <p>{label}</p> <p>{value}</p>
</div>