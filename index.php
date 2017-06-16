<?php
get_header();
?>
<main>
  <section id="hoochlife">
    <div class="fixed-backdrop">
      <video poster="<?php echo get_template_directory_uri(); ?>/assets/video/hoochlife_thumbnail.jpg" id="bgvid" class="background-video" playsinline autoplay muted loop>
        <source data-src="<?php echo get_template_directory_uri(); ?>/assets/video/hoochlife.mp4" type="video/mp4">
      </video>
    </div>
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
  <section id="liquidgold">
    <div class="container-fluid">
      <div class="container">
        <div class="row align-items-start">
          <div class="col-auto">
            <h2 class="banner ">Liquid Gold.</h2>
            <p class="sub-banner">Come and find out more about our flavours...</p>
          </div>
        </div>
      </div>
    </div>
    <div id="lemon-slot" class="container-fluid">
      <div id="lemon-bg" class="row-bg">
        <?php
          include("./wp-content/themes/hooch/assets/svg/Lemon-bg2.svg");
        ?>
      </div>
      <div class="container svg-bg">
        <div class="row align-items-center">
          <div class="col-9 col-lg-7 offset-lg-2 left copy">
            <h3 class="banner name">Lemon Brew</h3>
            <p class="h5">The original might just be the best. With very little changing from the liquid that rocked the world of drinkers everywhere back in the 90s; <span class="title-lemonbrew">Hooch Lemon Brew</span> gives you a big sharp citrus hit followed by sweet lemony goodness. Enjoy ice cold from the bottle, over ice or as part of one of our signature cocktails.</p>
          </div>
          <div class="col-3 col-md-2 offset-md-1 col-lg-2 offset-lg-1 image">
            <?php echo wp_get_attachment_image(472, 'image_product', false, array('class' => 'product')); ?>
            <!--<img src="<?php echo get_template_directory_uri(); ?>/assets/img/product/hooch-lemon-275-bottle.png" class="product" />-->
          </div>
        </div>
      </div>
    </div>
    <div id="hoola-slot" class="container-fluid">
      <div id="hoola-bg" class="row-bg">
      </div>
      <div class="container svg-bg">
        <div class="row align-items-center">
          <div class="col-3 col-md-2 image">
            <?php echo wp_get_attachment_image(471, 'image_product', false, array('class' => 'product')); ?>
            <!--<img src="<?php echo get_template_directory_uri(); ?>/assets/img/product/hooch-hoola-275-bottle.png" class="product" />-->
          </div>
          <div class="col-9 offset-md-1 col-lg-7 right copy">
            <h3 class="banner name">Hoola Hooch</h3>
            <p class="h5">We launched <span class="title-hoolahooch">Hoola Hooch</span> back in May 2016 and what a first year it’s had! The signature citrus hit, sweet passion fruit and mango flavours, hints of pineapple and real juicy bits give you a truly ooochy slice of paradise with every sip.</p>
          </div>
        </div>
      </div>
      <div class="container-fluid finder box">
        <div class="row align-items-center justify-content-center">
          <div class="col-12 col-md-6">
              <i class="icon-location display-1"></i>
          </div>
        </div>
        <div class="row align-items-center justify-content-center">
          <div class="col-12 col-md-6 finder">
              <h4>Enter your location to find your nearest Hooch stockist</h4>
              <input type="email" placeholder="eg: S41 7JB" />
              <input type="submit" value="Find">
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="whatson" class="ignore">
    <!--
    <div class="fixed-backdrop">&nbsp;</div>
    <div class="content">
      <div class="container">
        <div class="row justify-content-start">
          <div class="col-auto">
            <h2 class="banner">What's On.</h2>
            <p class="sub-banner">What's happening in our HoochLife</p>
          </div>
        </div>
        <?php
          getWhatsOn();
        ?>
      </div>
    </div>-->
  </section>
  <section id="social">
    <div class="content">
      <div class="container">
        <div class="row justify-content-start banner-row">
          <div class="col-auto">
            <h2 class="banner">Social.</h2>
            <p class="sub-banner">Come and talk to Hooch!</p>
          </div>
        </div>
        <div class="row">
          <?php output_instagram(); ?>
        </div>
      </div>
    </div>
  </section>
</main>
<?php
get_footer();
?>
