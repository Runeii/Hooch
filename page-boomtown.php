<?php
/*
Template name: Boomtown
*/
get_header();
?>
</header><!-- #masthead -->
<main class="no-footer">
  <div class="fixed-backdrop">&nbsp;</div>
  <?php
  if ( have_posts() ) : while ( have_posts() ) :
    the_post(); ?>
    <section id="singlepage" class="boomtown">
      <div class="content">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12">
              <h2 class="banner">Contest.</h2>
              <p class="sub-banner">Win 2 x tickets for you and a mate to Boomtown!</p>
            </div>
            <div class="col-12 col-md-8 offset-md-2 copy">
              <p>To celebrate the summer of Hooch we are giving away 2 pairs of tickets to Boom Town Fair.<br /><br />Now in its 9th year BoomTown Fair is a music, arts and family festival that takes place at Matterley Estate, nr. Winchester, Hampshire, and will run from Thursday 10th until Sunday 13th August 2017. This year's Chapter is titled 'Behind The Mask'.</p>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-12 col-md-8 offset-md-2">
              <?php the_content(); ?>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="colophon">
      <div class="content">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-auto">
              <img class="logo_footer" src="<?php echo get_template_directory_uri(); ?>/assets/svg/logo.svg" onerror="this.src='<?php echo wp_get_attachment_image_src(476, 'image_product', false)[0]; ?>'" />
            </div>
          </div>
          <div class="row align-items-bottom">
            <span class="col-12 col-md-10 offset-md-2 links">
              <a href="<?php echo home_url(); ?>/terms-and-conditions">Terms & Conditions</a>
              <a href="<?php echo home_url(); ?>/privacy-policy">Privacy Policy</a>
            </span>
          </div>
        </div>
      </div>
    </section>
    <section id="hoochlife">
      <div class="container">
        <div class="row align-items-start">
          <div class="col-12">
            <h2 class="banner">Hooch<wbr>life.</h2>
            <p class="sub-banner">Wish every day was the weekend?</p>
          </div>
        </div>
        <div class="row align-items-center lede">
          <div class="col-12 col-sm-8 offset-sm-2 col-md-8">
            <p>Yeah we do too, and even if we can't make your boss give you permanent holidays we've got the next best thing. For 14 weeks from Spring Bank Holiday to the late August Bank Holiday the #HoochLife reigns supreme.</p>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-12 col-sm-5 text-center">
            <?php echo wp_get_attachment_image(473, 'image_300', false, array('class' => 'tenpack')); ?>
            <!--<img src="<?php echo get_template_directory_uri(); ?>/assets/img/campaigns/hoochlife/hoochlife_10pack.png" class="tenpack" />-->
          </div>
          <div class="col-12 col-sm-7">
            <p>In supermarkets we're giving away on point festival merch with our Hooch patented flip out bucket hats (Kevin and Perry eat your heart out) or a pair of Hooch sunnies free in over 10,000 10x275ml packs. Our special packs are available at TESCO, Morrison's, Bargain Booze and other retailers but when they're gone they're gone people.</p>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-12 col-sm-6 col-md-6 custom-text-right">
            <p>We'll also be keeping you entertained when you're clock watching for 5pm Friday with loads of vids, games and comps.</p>
          </div>
          <div class="col-12 col-sm-6 col-md-6 text-center">
            <?php echo wp_get_attachment_image(474, 'image_400', false, array('class' => 'social')); ?>
            <!--<img src="<?php echo get_template_directory_uri(); ?>/assets/img/campaigns/hoochlife/hoochlife_social.jpg" class="social" />-->
          </div>
        </div>
        <div class="row align-items-center justify-content-center">
          <div class="col-12">
            <a href="https://www.facebook.com/hoochlemonbrew" class="sub-banner"><i class="icon-facebook-squared"></i></a>
            <a href="https://twitter.com/HoochLemonBrew" class="sub-banner"><i class="icon-twitter-squared"></i></a>
            <a href="https://www.instagram.com/hoochdrink" class="sub-banner"><i class="icon-instagram"></i></a>
          </div>
          <div class="col-12">
            <p>Stay tuned to our social channels for more info.</p>
          </div>
        </div>
      </div>
    </section>
  <?php
    endwhile;
    endif;
  ?>
</main>
<?php
get_footer();
?>
