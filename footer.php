
<footer id="colophon" class="site-footer" role="contentinfo">
  <section id="contact" class="contact">
    <div class="content">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-auto">
            <h2 class="banner">Contact.</h2>
            <p class="sub-banner">Want to get in touch? Get us on social</p>
          </div>
        </div>
        <div class="row align-items-center justify-content-center">
          <div class="col-auto icons">
            <a href="https://www.facebook.com/hoochlemonbrew"><i class="icon-facebook-squared h1"></i></a>
            <a href="https://twitter.com/HoochLemonBrew"><i class="icon-twitter-squared h1"></i></a>
            <a href="https://www.instagram.com/hoochlemonbrew/"><i class="icon-instagram h1"></i></a>
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
          <span class="col-12 col-md-6 links">
            <a href="<?php echo home_url(); ?>/terms-and-conditions">Terms & Conditions</a>
            <a href="<?php echo home_url(); ?>/privacy-policy">Privacy Policy</a>
          </span>
          <span class="col-12 col-md-6 copyright">&copy; <?php echo date('Y'); ?> Global Brands Ltd. all rights reserved.</span>
        </div>
      </div>
    </div>
  </section>
</footer>
<?php wp_footer(); ?>
</body>
</html>
