<script lang="ts">
    import CalculatorButton from '$lib/components/CalculatorButton.svelte';
    import { evaluate } from 'mathjs';

    let input = '2 + 2';

    function go() {
        input = evaluate(input).toString();
    }

    function clear() {
        input = '';
    }

    function addInput(e: any) {
        let char    = e.detail.val;
        let isOp    = /[^0-9\.]/.test(char);
        let afterOp = /[^0-9\.]/.test(input[input.length - 1]);

        input += ((isOp && !afterOp) ? ' ' : '') + char + (isOp ? ' ' : '');
    }

    function range(i: number) {
        return { length: i };
    }
</script>

<style scoped>
    small {
        font-size: 13px;
    }
</style>

<div class="col-md-8" style="background-color: rgb(245, 245, 245); margin-bottom: 20px; margin-top: 20px; height: 78.8vh; border-radius: 25px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
    <div class="h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                <div class="card align-items-center  rounded">
                    <div class="card-body" style="background-color: rgb(159, 159, 159);">
                        
                        <div class="container-fluid border rounded p-0">
                            <div class="row flex-fill no-gutters">
                                <div class="col-12 border rounded">
                                    <input type="text" value={ input } style="width:100%;" disabled />
                                </div>
                            </div>
                            <div class="row no-gutters">
                                <CalculatorButton value="+" kind="dark" on:press={ addInput } />
                                <CalculatorButton value="-" kind="dark" on:press={ addInput } />
                                <CalculatorButton value="*" kind="dark" on:press={ addInput }>&times;</CalculatorButton>
                                <CalculatorButton value="/" kind="dark" on:press={ addInput }>&divide;</CalculatorButton>
                            </div>
                            {#each range(3) as _, i}
                                <div class="row no-gutters">
                                    {#each range(3) as _, j}
                                        <CalculatorButton value={ (1 + 3 * (2 - i)) + j } waves={ true } on:press={ addInput } />
                                    {/each}
                                    <div class="col-3">
                                    </div>
                                </div>
                            {/each}
                            <div class="row no-gutters">
                                <CalculatorButton value="0" waves={ true } on:press={ addInput } />
                                <CalculatorButton value="." kind="dark" on:press={ addInput } />
                                <CalculatorButton value="AC" kind="success" on:press={ clear }><small>AC</small></CalculatorButton>
                                <CalculatorButton value="=" kind="primary" waves={ true } on:press={ go } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
