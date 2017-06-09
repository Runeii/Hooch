<script>
  (function(html) {
    html.className = html.className.replace(/\bno-js\b/, 'js');
  })(document.documentElement);
</script>
<style type"text/javascript">
  .js body {
      background-color: black;
  }
  .js body:not(.pace-done) nav, .js body:not(.pace-done) main, .js body:not(.pace-done) #hoochlife_intro svg {
    opacity:0;
    transition:none;
  }
  .js body.pace-done nav ul, .js body.pace-done main, .js body.pace-done #hoochlife_intro svg {
    opacity:initial;
    transition:opacity 0.5s;
  }
  .js body:not(.pace-done) #hoochlife_intro {
    background-color:rgba(0,0,0,1);
  }
 .js body.pace-done #hoochlife_intro {
   background-color:rgba(0,0,0,0);
 }
 .js body:not(.pace-done) #hoochlife_intro,
 .js body:not(.pace-done) #hoochlife_intro svg,
 .js body.pace-done #hoochlife_intro,
 .js body.pace-done #hoochlife_intro svg {
   transition:opacity 0.5s linear, background-color 0.5s linear 0.25s;
 }
</style>
