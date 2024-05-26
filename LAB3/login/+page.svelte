<script>
    import { goto } from '$app/navigation';
    import { getContext } from 'svelte';

    let auth;
    $: {
        auth = getContext('auth');
        if ($auth)
            goto('/me');
    }

    let email    = '';
    let password = '';

    async function login(event) {
        event.preventDefault();

        let resp = await fetch('https://127.0.0.1:8080/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
            mode: 'cors',
            credentials: 'include'
        });

        if (resp.url.indexOf('?error') != -1) {
            alert('Неправильнi данi :(');
            return;
        }

        $: $auth = true;
        goto('/me');
    }
</script>

<style scoped>
    button[type=submit] {
        margin: 0 auto;
        display: block;
    }
</style>

<div class="col-md-2"></div>
<div class="col-md-4" style="background-color: rgb(245, 245, 245); margin-bottom: 20px; margin-top: 20px; height: 78.8vh; display: flex; border-radius: 25px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
    <div class="forma">
        <form role="form" on:submit={ login }>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" required placeholder="Email" bind:value={ email } />
            </div>
            <hr>
            <div class="form-group">
                <label for="pass">Пароль</label>
                <input type="password" class="form-control" id="pass" required placeholder="Пароль" bind:value={ password } />
            </div>
            <button type="submit" class="btn btn-success">Увійти</button>
        </form>
    </div>
</div>
<div class="col-md-2"></div>
