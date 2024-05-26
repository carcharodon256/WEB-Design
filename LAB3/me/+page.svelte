<script>
    import { browser } from '$app/environment';
    import { goto } from '$app/navigation';
    import { getContext } from 'svelte';

    let auth;
    $: {
        auth = getContext('auth');
        if (browser && !$auth)
            goto('/login?from=profile');
    }

    export let data;
</script>

<style scoped>
    table {
        margin: auto;
        margin-top: 200px;
        border-collapse: collapse;

        width: 60%;
        text-align: left;
        background-color: white;
        font-family: Arial;
        font-size: 16px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    }

    th, td {
        padding: 12px;
        border: 2px solid silver;
    }

    th {
        background-color: #4CAF50;
    }
</style>

{#if data.user !== false}
    <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td id="name">{data.user.name}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td id="email">{data.user.email}</td>
            </tr>
        </tbody>
    </table>
{/if}
