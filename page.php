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
<?php
get_footer();
?>
