<script>
    import 'bootstrap/dist/css/bootstrap.css';
    import '../styles.css';

    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';

    setContext('auth', writable(false));
</script>

<div class="container-fluid">
    <div class="bg-image">
        <nav class="navbar navbar-expand-md navbar-light custom-navbar sticky-top">
            <div class="container">
                <a href="/" class="navbar-brand"><img src="/logo.png" class="logo" alt="logo">Calculator</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a href="/" class="nav-link">Головна</a>
                        </li>
                        <li class="nav-item">
                            <a href="/about" class="nav-link">Про сайт</a>
                        </li>
                        <li class="nav-item">
                            <a href="/reg" class="nav-link">Реєстрація</a>
                        </li>
                        <li class="nav-item">
                            <a href="/login" class="nav-link">Вхід</a>
                        </li>
                        <li class="nav-item">
                            <a href="/me" class="nav-link" data-sveltekit-preload-data="tap">Профіль</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="row" style="min-height: calc(100vh - 100px - 58px);">
            <div class="col-md-2"></div>
            <slot></slot>
            <div class="col-md-2"></div>
        </div>
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8" style="background-color: rgb(214, 214, 214); height: 100px; text-align: center;">
                <div class="container" style="margin-top: 15px;">
                    <p style="margin: 37px;"><b>All rights reserved.</b></p>
                </div>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>
</div>
