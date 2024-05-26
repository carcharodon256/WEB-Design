<script>
    import { goto } from '$app/navigation';
    import { getContext } from 'svelte';

    let name;
    let email;
    let password;
    let passwordRepeat;

    let auth = getContext('auth');

    async function register(event) {
        event.preventDefault();

        if (password != passwordRepeat) {
            alert('Паролi не спiвпадають');
            return;
        }

        let user;
        try {
            user = await (await fetch(`https://127.0.0.1:8080/api/register?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {
                method: 'POST'
            })).json();
        } catch (e) {
            alert('Такий користувач вже в базi даних (e-mail треба унiкальний)');
            return;
        }

        $: $auth = false;
        alert(`Користувач додан (id=${user.id}), увiйдiть`);
        goto('/login');
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
        <form role="form" on:submit={ register }>
            <div class="form-group">
                <label for="name">Ім'я</label>
                <input type="name" class="form-control" id="name" placeholder="Ім'я" required bind:value={ name } />
            </div>
            <hr>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Email" required bind:value={ email } />
            </div>
            <hr>
            <div class="form-group">
                <label for="password">Пароль</label>
                <input type="password" class="form-control" id="pass" placeholder="Пароль" required bind:value={ password } />
            </div>
            <hr>
            <div class="form-group">
                <label for="pass_repeat">Повторіть пароль</label>
                <input type="password" class="form-control" id="pass_repeat" placeholder="Повторіть пароль" required bind:value={ passwordRepeat } />
            </div>
            <hr>
            <button type="submit" class="btn btn-success">Зареєструватися</button>
        </form>
    </div>
</div>
<div class="col-md-2"></div>
