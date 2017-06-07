<?php
get_header();
?>
</header><!-- #masthead -->
<main>
  <?php
  if ( have_posts() ) : while ( have_posts() ) :
    the_post(); ?>
    <article class="single">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-8 offset-md-2">
            <?php the_content(); ?>
          </div>
        </div>
      </div>
    </article>
  <?php
    endwhile;
    endif;
  ?>
  <section id="whatson">
    <div class="fixed-backdrop">&nbsp;</div>
    <div class="content">
      <div class="container">
        <div class="row justify-content-center align-items-end banner-row">
          <div class="col-auto">
            <h2 class="banner display-2">What's On</h2>
            <p class="sub-banner banner h3 header">What's happening elsewhere in our HoochLife</p>
          </div>
        </div>
        <?php
          getWhatsOn();
        ?>
      </div>
    </div>
  </section>
<?php
get_footer();
?>
