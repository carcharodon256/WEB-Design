<script>
    import { createEventDispatcher } from 'svelte';

    export let value;
    export let kind  = 'secondary';
    export let waves = false;

    const dispatch = createEventDispatcher();
    function clickHand(event) {
        dispatch('press', { val: value });
        dispatch('click', event);
    }
</script>

<style scoped>
    .calc-button {
        width: 100%;
        height: 100%;
    }
</style>

<div class="col-3 border rounded" on:click={ clickHand }>
    <button type="button" value={ value } class="btn btn-{ kind } calc-button" class:waves-effect={ waves }>
        <slot>{ value }</slot>
    </button>
</div>
