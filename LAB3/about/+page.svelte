<script>
    let slide = 0;

    function prevSlide() {
        if (--slide == -1)
            slide = 2;
    }

    function nextSlide() {
        if (++slide == 3)
            slide = 0;
    }
</script>

<div class="col-md-8">
    <div class="row">
        <div class="col-md-12 d-flex justify-content-center align-items-center">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li on:click={ () => slide = 0 } class:active={ slide == 0 }></li>
                    <li on:click={ () => slide = 1 } data-slide-to="1" class:active={ slide == 1 }></li>
                    <li on:click={ () => slide = 2 } data-slide-to="2" class:active={ slide == 2 }></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item" class:active={ slide == 0 }>
                        <img src="/img1.jpg" alt="first pic" class="d-block w-100" />
                    </div>
                    <div class="carousel-item" class:active={ slide == 1 }>
                        <img src="/img2.jpg" alt="second pic" class="d-block w-100" />
                    </div>
                    <div class="carousel-item" class:active={ slide == 2 }>
                        <img src="/img3.jpg" alt="third puc" class="d-block w-100" />
                    </div>
                </div>
                <a class="carousel-control-prev" role="button" data-slide="prev" on:click={ prevSlide }>
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" role="button" data-slide="next" on:click={ nextSlide }>
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>

    <div class="row mt-4" style="background-color: rgb(245, 245, 245); margin-bottom: 40px!important; padding-top: 10px!important; border-radius: 25px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
        <div class="col-md-6">
            <h2>Lorem ipsum</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac leo sed felis ullamcorper volutpat. Ut nec arcu sit amet felis
                consequat vestibulum non eu dui. Nulla vel tempor tellus. Sed scelerisque varius dui, sed tincidunt felis pulvinar eu.
                Suspendisse at vestibulum elit.
            </p>
        </div>
        <div class="col-md-6">
            <h2>Lorem ipsum</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac leo sed felis ullamcorper volutpat. Ut nec arcu sit amet felis
                consequat vestibulum non eu dui. Nulla vel tempor tellus. Sed scelerisque varius dui, sed tincidunt felis pulvinar eu.
                Suspendisse at vestibulum elit.
            </p>
        </div>
    </div>
</div>