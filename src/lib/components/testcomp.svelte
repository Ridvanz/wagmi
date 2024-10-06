<script>
    import { hoverStore } from './store.js';

    function enter() {
        hoverStore.set(true);
    }

    function leave() {
        hoverStore.set(false);
    }
</script>

<div on:mouseenter={enter} on:mouseleave={leave}>
    Hover over me!
</div>
