$(function(){
  $('#show-comments').on('click', function(){
    var disqus_shortname = '{{ .Site.DisqusShortname }}';

    (function() {
      var disqus = document.createElement('script');
      disqus.type = 'text/javascript';
      disqus.async = true;
      disqus.src = '//' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(disqus);
    })();

    $(this).hide();
    });
  });
