$(document)
    .ready(function () {
        // fix menu when passed
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function () {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function () {
                    $('.fixed.menu').transition('fade out');
                }
            });

        /** Uncomment if you want the following menu in other pages **/
        /**
        $('.pagehead')
            .visibility({
                once: false,
                onBottomPassed: function () {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function () {
                    $('.fixed.menu').transition('fade out');
                }
            });
            **/

        // create sidebar and attach to menu open
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item');

                // enable tabs
        $('.tabs .item').tab();

        $('.service.cards .image').dimmer({
          on: 'hover'
        });

        $('.ui.embed').embed();

        window.showModal = function(modal_id){
          $('#' + modal_id)
            .modal('show');
            return false;
        };


        function preloadSlider(tag){
          var numToLoad = $(tag +' img').length;
          var numLoaded = 0;
          $(tag + ' img').each(function() {
              var currentimage = new Image();
              currentimage.src = this.src;
              currentimage.onload = function(){
                  numLoaded += 1;
                  // alert("Loaded: " + numLoaded);
                  if (numLoaded == numToLoad) {
                    $(tag + ' img').removeClass('hidden');
                    $(tag).unslider({
                      autoplay: true,
                      infinite: true,
                      arrows: {
                      	//  Unslider default behaviour
                      	prev: '<a class="ui left floated basic circular icon button slider-button "><i class="ui large icon arrow left"></i></a>',
                      	next: '<a class="ui right floated  basic circular icon button slider-button "><i class="ui large icon arrow right"></i></a>',
                      }
                    });
                  
                  }
              };
          });
          
        }

        preloadSlider('.service-slider');
        preloadSlider('.project-slider');
        

        $('.ui.accordion')
          .accordion()
        ;
        
       
        // Wicked credit to
      	// http://www.zachstronaut.com/posts/2009/01/18/jquery-smooth-scroll-bugs.html
      	var scrollElement = 'html, body';
      	$('html, body').each(function () {
      		var initScrollTop = $(this).attr('scrollTop');
      		$(this).attr('scrollTop', initScrollTop + 1);
      		if ($(this).attr('scrollTop') == initScrollTop + 1) {
      			scrollElement = this.nodeName.toLowerCase();
      			$(this).attr('scrollTop', initScrollTop);
      			return false;
      		}    
      	});

      	// Smooth scrolling for internal links
      	$("a[href^='#']").click(function(event) {
      		event.preventDefault();
          // alert('aliens');
      		var $this = $(this),
      		target = this.hash,
      		$target = $(target);
	
      		$(scrollElement).stop().animate({
      			'scrollTop': $target.offset().top
      		}, 500, 'swing', function() {
      			window.location.hash = target;
      		});
	
      	});

        


    });
