
$(document).ready(function() {

    const poster = $('.postercontainer');
    const light = $('.lighteffect');
    const texts = $('.texttop, .texttitle, .textmd'); 
    const ctaButton = $('.ctabutton'); 
    const finalScene = $('.finalimagescene'); 

    
    // 포스터 위에 마우스 이동 
    poster.on('mouseenter', function() {
        light.css('opacity', 1);
    });

    poster.on('mouseleave', function() {
        light.css('opacity', 0);
        texts.removeClass('textglow'); // 나갔을떄 반짝반짝 제거
    });

    poster.on('mousemove', function(e) {
        // 마우스 위치 계산 x,y축임
        let mouseX = e.pageX - $(this).offset().left;
        let mouseY = e.pageY - $(this).offset().top;
        
        light.css({'left': mouseX + 'px', 'top': mouseY + 'px'});

        texts.each(function() {
            const text = $(this);
            const textOffset = text.offset();
            const textLeft = textOffset.left - poster.offset().left;
            const textTop = textOffset.top - poster.offset().top;
            const textWidth = text.outerWidth();
            const textHeight = text.outerHeight();

            if (mouseX > textLeft && mouseX < textLeft + textWidth && 
                mouseY > textTop && mouseY < textTop + textHeight) {
                text.addClass('textglow');
            } else {
                text.removeClass('textglow');
            }
        });
    });

    // 안내 사항 버튼 클릭하게 하기
    ctaButton.on('click', function(e) {
        e.preventDefault(); 
        finalScene.addClass('show'); 
        
        $('.endingscene')
            .css('transition', 'opacity 1.5s 0.5s ease')
            .css('opacity', 0); 
    });

    // --- 애니메이션 타이머 설정 ---

    setTimeout(function() {
        $('.texttitle').addClass('fadeintitle');
    }, 500);

    setTimeout(function() {
        $('.textdateanimated').addClass('startslideanimation');
    }, 1000); 

    setTimeout(function() {
        poster.addClass('showsecondimage');
    }, 8000); 

    setTimeout(function() {
        $('.endingscene').addClass('show'); 
        
        setTimeout(function() {
            $('.endingcredits').addClass('startscroll'); 
        }, 2000); 
        
    }, 21000); 

});