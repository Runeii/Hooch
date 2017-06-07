<?php

function disable_wp_emojicons() {
  // all actions related to emojis
  remove_action( 'admin_print_styles', 'print_emoji_styles' );
  remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
  remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
  remove_action( 'wp_print_styles', 'print_emoji_styles' );
  remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
  remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
  remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
  // filter to remove TinyMCE emojis
  add_filter( 'tiny_mce_plugins', 'disable_emojicons_tinymce' );
}
add_action( 'init', 'disable_wp_emojicons' );

function hooch_scripts_styles() {
    wp_enqueue_style( 'main', get_template_directory_uri() . '/assets/css/style-min.css', array(), '1.2.4');
    wp_enqueue_script( 'jquery');
    wp_enqueue_script( 'scripts', get_template_directory_uri() . '/assets/js/scripts-min.js', array(), '1.2.4', true);
}
add_action( 'wp_enqueue_scripts', 'hooch_scripts_styles' );
add_action( 'admin_enqueue_scripts', 'hooch_scripts_styles_admin' );
function hooch_scripts_styles_admin() {
  wp_enqueue_style( 'admin_css', get_template_directory_uri() . '/assets/css/admin-style.css', false, '1.2.3' );
 }

add_filter('show_admin_bar', '__return_false');
add_theme_support( 'post-thumbnails' );


add_image_size( 'image_product', 210, 9999, false );
add_image_size( 'image_300', 300, 9999, false );
add_image_size( 'image_400', 400, 9999, false );
add_image_size( 'screen_mobile', 576, 9999, false );
add_image_size( 'screen_small', 768, 9999, false );
add_image_size( 'screen_medium', 992, 9999, false );
add_image_size( 'screen_large', 1200, 9999, false );
add_image_size( 'screen_extra_large', 1920, 9999, false );

$args = array(
  'supports' => array('thumbnail', 'title'),
  'show_ui' => true,
  'label' => 'Retailers',
  'show_in_menu' => true
);
register_post_type('retailers', $args );

add_action( 'admin_menu', 'social_menu' );
function social_menu(){
  add_options_page( 'Manage social feeds', 'Manage Social', manage_options, 'manage_social', 'social_page');
}

function social_page(){
  if(isset($_POST['approve'])) {
    $feed = get_option( 'instagram_feed_record', 'break' );
    foreach($_POST['cards'] as $card) {
      $feed[$card]->approved = 'approved';
    }
    update_option( 'instagram_feed_record', $feed );
  } else if(isset($_POST['reject'])) {
    $feed = get_option( 'instagram_feed_record', 'break' );
    foreach($_POST['cards'] as $card) {
      $feed[$card]->approved = 'rejected';
    }
    update_option( 'instagram_feed_record', $feed );
  }
  echo '<form action="' . admin_url("/options-general.php?page=manage_social") . '" method="post">';
  echo '<button class="button button-primary" type="submit" name="approve">Approve selected</button>';
  echo '<button class="button button-secondary" type="submit" name="reject">Reject selected</button><br />';
  output_instagram_admin();
  echo '</form>';
}


function custom_excerpt($post, $num) {
  if($num == 0) {
    $charlength = 280;
  } else {
    $charlength = 140;
  }
  $excerpt = get_the_excerpt();
  $charlength++;
  $return = '';

  if ( mb_strlen( $excerpt ) > $charlength ) {
    $subex = mb_substr( $excerpt, 0, $charlength - 5 );
    $exwords = explode( ' ', $subex );
    $excut = - ( mb_strlen( $exwords[ count( $exwords ) - 1 ] ) );
    if ( $excut < 0 ) {
      $return .= mb_substr( $subex, 0, $excut );
    } else {
      $return .= $subex;
    }
    $return .= '...';
  } else {
    $return .= str_replace(' [&hellip;]', '...', $excerpt);
  }
  return $return;
}

function update_instagram(){
  $json = file_get_contents('https://www.instagram.com/hoochlemonbrew/?__a=1');
  $json = json_decode($json);
  $output = get_option( 'instagram_feed_record', 'break' );
  foreach($json->user->media->nodes as $post) {
    if(is_array($output) && !array_key_exists($post->id, $output)) {
      $output[$post->id] = $post;
      $output[$post->id]->approved = null;
    }
  }
  update_option('instagram_feed_record', $output);
  return $json;
}
if ( ! wp_next_scheduled( 'update_instagram_hook' ) ) {
  wp_schedule_event( time(), 'hourly', 'update_instagram_hook' );
}
add_action( 'update_instagram_hook', 'update_instagram' );

function output_instagram(){
  $feed = update_instagram();
  $output = '';
  $i = 1;
  foreach($feed->user->media->nodes as $post) {
    preg_match_all('/(#\w+)/', $post->caption, $hashtags);
    $copy = preg_replace ('/(#\w+)/', '', $post->caption);
    $output .= '<div class="col-12 col-sm-6 col-md-4">';
    $output .= '<article>';
    $output .= '<img data-original="'. $post->thumbnail_src .'" src="'. get_template_directory_uri() .'/assets/img/holder.gif" />';
    $output .= '<div class="description"><p>'. $copy;
    foreach($hashtags[0] as $hashtag) {
      $output .= '<strong>'. $hashtag .'</strong> ';
    }
    $output .= '</p></div>';
    $output .= '<ul class="meta">';
    $output .= '<li><i class="icon-heart"></i>'. $post->likes->count . '</li>';
    $output .= '<li><i class="icon-comment"></i>'. $post->comments->count . '</li>';
    $output .= '</ul>';
    $output .= '</article>';
    $output .= '</div>';
    $i++;
    if($i == 13) break;
  }
  echo $output;
}
function output_instagram_admin(){
  $feed = update_instagram();
  $output = '';
  foreach($feed as $post) {
    if($post->approved != null) {
      $output .= '<input type="checkbox" name="cards[]" value="'. $post->id.'" id="'. $post->id.'" checked />';
      $output .= '<label class="instagram_card '. $post->approved .'" for="'. $post->id.'">';
    } else {
      $output .= '<input type="checkbox" name="cards[]" value="'. $post->id.'" id="'. $post->id.'" />';
      $output .= '<label class="instagram_card" for="'. $post->id.'">';
    }
    preg_match_all('/(#\w+)/', $post->caption, $hashtags);
    $copy = preg_replace ('/(#\w+)/', '', $post->caption);
    $output .= '<img src="'. $post->thumbnail_src .'" />';
    $output .= '<p>'. $copy;
    foreach($hashtags[0] as $hashtag) {
      $output .= '<strong>'. $hashtag .'</strong> ';
    }
    $output .= '</p>';
    $output .= '</label>';
  }
  echo $output;
}

function getWhatsOn(){
  $whatson = array();
  $args = array(
    'post_type' => 'post',
    'post_per_page' => 6
  );
  $the_query = new WP_Query( $args );
  if ( $the_query->have_posts() ) : while ( $the_query->have_posts() ) :
    $the_query->the_post();
      if($the_query->current_post <= 3) {
        $entry = '<article>';
        $entry .= '<div class="image">';
          /* While this is hidden, no point loading image get_the_post_thumbnail($post, 'screen_mobile') .'</div>'; */
        $entry .= '<div class="body">';
        $entry .= '<div class="banner alt tag h5">'. get_the_category($post)[0]->name .'</div>';
        $entry .= '<h3>'. get_the_title($post) .'</h3>';
        $entry .= '<p>'. custom_excerpt($post, $the_query->current_post) .'</p>';
        $entry .= '<a href="'. get_permalink($post) .'" class="banner alt">Read more</a>';
        $entry .= '</div>';
        $entry .= '</article>';
      } else if($the_query->current_post <= 6) {
        $entry = '<article class="col-12 col-md-6 col-lg-4 nib">';
        $entry .= '<div class="body">';
        $entry .= '<div class="banner alt tag h5">'. get_the_category($post)[0]->name .'</div>';
        $entry .= '<h3>'. get_the_title($post) .'</h3>';
        $entry .= '<p>'. custom_excerpt($post, $the_query->current_post) .'</p>';
        $entry .= '<a href="'. get_permalink($post) .'" class="banner alt">Read more</a>';
        $entry .= '</div>';
        $entry .= '</article>';
      }
      $whatson[] = $entry;
    endwhile; endif;
    wp_reset_postdata(); ?>
    <div class="row">
      <div class="col-12 first-article">
        <?php echo $whatson[0]; ?>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-8">
        <div class="row justify-content-between">
          <div class="col-12">
            <?php echo $whatson[1]; ?>
          </div>
          <div class="col-12">
            <?php echo $whatson[2]; ?>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 vertical">
        <?php echo $whatson[3]; ?>
      </div>
    </div>
    <div class="row">
      <?php echo $whatson[4]; ?>
      <?php echo $whatson[5]; ?>
      <?php echo $whatson[6]; ?>
    </div>
    <?php
}
?>
