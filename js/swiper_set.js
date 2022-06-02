
const swiper13 = new Swiper(".mySwiper2-4", { //핸드폰 스와이퍼
	touchRatio: 0,
	slidesPerView: 1,
	spaceBetween: 0,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	effect: "fade", //"slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards"
	//  autoplay: { //스와이퍼 오토플레이
	//    delay: 3000,
	//  },
	navigation: { // 스크롤바 네비게이션
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

const swiper12 = new Swiper(".mySwiper2-3", { //핸드폰 스와이퍼
	touchRatio: 0,
	slidesPerView: 1,
	spaceBetween: 0,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	effect: "fade", //"slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards"
	//  autoplay: { //스와이퍼 오토플레이
	//    delay: 3000,
	//  },
	navigation: { // 스크롤바 네비게이션
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

const swiper11 = new Swiper(".mySwiper2-2", { //핸드폰 스와이퍼
	touchRatio: 0,
	slidesPerView: 1,
	spaceBetween: 0,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	effect: "flip", //"slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards"
	//  autoplay: { //스와이퍼 오토플레이
	//    delay: 3000,
	//  },
	navigation: { // 스크롤바 네비게이션
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

const swiper10 = new Swiper(".mySwiper2-1", { //첫배경 스와이퍼
	touchRatio: 0,
	slidesPerView: 3,
	spaceBetween: 100,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	effect: "slide", //"slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards"
	//  autoplay: { //스와이퍼 오토플레이
	//    delay: 3000,
	//  },

	navigation: { // 스크롤바 네비게이션
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

const swiper8 = new Swiper(".myswiper8", {
	//spaceBetween: 10,

	touchRatio: 0,

	loop: false,

	loopPreventsSlide: true,

	rewind: false, //슬라이드를 되감는 기능(loop와 함께 사용금지)

	direction: "horizontal", //horizontal or vertical

	//spaceBetween: 100, //.swiper-slide 사이에 빈공간을 추가(body가 보이게됨)

	mousewheel: true, //마우스휠을 통한 슬라이드 제어

	autoHeight: false, //높이값을 자동으로 부모요소에 맞춤

	effect: "slide", //"slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards"

	grabCursor: false, //슬라이드화면에 마우스가 있을경우 grab커서로 변경됨

	preventInteractionOnTransition: true, //화면 전환중 버튼을 통한 작동 불가능

	roundLengths: true, //텍스트 선명도 강제 뻥튀기

	slidesOffsetBefore: 0, //컨테이너 시작지점에 공간(픽셀 단위)을 추가합니다

	slidesOffsetAfter: 0, //컨테이너 종료지점에 공간(픽셀 단위)을 추가합니다

	slidesPerView: 1, //한 슬라이드당 볼 화면 갯수

	parallax: true, //패럴랙스 효과 적용여부

	enabled: true, //패럴랙스 효과 적용여부2

});

const swiper5 = new Swiper(".myswiper5", { //두번째 스와이퍼 안에 스와이퍼
	//spaceBetween: 10,

	//Optional parameters

	//loop:false, 

	touchRatio: 0,

	loopPreventsSlide: true,

	rewind: false, //슬라이드를 되감는 기능(loop와 함께 사용금지)

	direction: "horizontal", //horizontal or vertical

	speed: 500, //화면 넘어가는 속도 (ms)

	//spaceBetween: 100, //.swiper-slide 사이에 빈공간을 추가(body가 보이게됨)

	mousewheel: false, //마우스휠을 통한 슬라이드 제어

	autoHeight: false, //높이값을 자동으로 부모요소에 맞춤

	effect: "fade", //"slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards"

	grabCursor: false, //슬라이드화면에 마우스가 있을경우 grab커서로 변경됨

	preventInteractionOnTransition: true, //화면 전환중 버튼을 통한 작동 불가능

	roundLengths: true, //텍스트 선명도 강제 뻥튀기

	slidesOffsetBefore: 0, //컨테이너 시작지점에 공간(픽셀 단위)을 추가합니다

	slidesOffsetAfter: 0, //컨테이너 종료지점에 공간(픽셀 단위)을 추가합니다

	slidesPerView: 1, //한 슬라이드당 볼 화면 갯수

	parallax: true, //패럴랙스 효과 적용여부

	enabled: true, //패럴랙스 효과 적용여부2

	//preloadImages: false,// flase=이미지가 화면에 들어올때 로드시작 true=사이트 접속시 로드시작

	//lazy: true, //이미지 화면에 들어올때 로드여부

	//slidesPerView: "auto",
	//freeMode: true,
	//scrollbar: {
	//  el: ".swiper-scrollbar",
	//},
	//mousewheel: true,
	//});

	on: {
		slideChangeTransitionStart: function () {

		},
		slideChangeTransitionEnd: function () { //슬라이드 전환이 끝나면

		}
	}
});


const swiper2 = new Swiper(".mySwiper2", { //썸네일용 스와이퍼

	touchRatio: 0,

	spaceBetween: 20,

	slidesPerView: 4,

	freeMode: true,

	watchSlidesProgress: true,

});


const swiper = new Swiper(".mySwiper1", {
			//spaceBetween: 10,

			touchRatio: 0,

			loop: false,

			loopPreventsSlide: true,

			rewind: false, //슬라이드를 되감는 기능(loop와 함께 사용금지)

			direction: "vertical", //horizontal or vertical

			speed: 1500, //화면 넘어가는 속도 (ms)

			//spaceBetween: 100, //.swiper-slide 사이에 빈공간을 추가(body가 보이게됨)

			mousewheel: true, //마우스휠을 통한 슬라이드 제어

			autoHeight: false, //높이값을 자동으로 부모요소에 맞춤

			effect: "slide", //"slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards"

			grabCursor: false, //슬라이드화면에 마우스가 있을경우 grab커서로 변경됨

			preventInteractionOnTransition: true, //화면 전환중 버튼을 통한 작동 불가능

			roundLengths: true, //텍스트 선명도 강제 뻥튀기

			slidesOffsetBefore: 0, //컨테이너 시작지점에 공간(픽셀 단위)을 추가합니다

			slidesOffsetAfter: 0, //컨테이너 종료지점에 공간(픽셀 단위)을 추가합니다

			slidesPerView: 1, //한 슬라이드당 볼 화면 갯수

			parallax: true, //패럴랙스 효과 적용여부

			enabled: true, //패럴랙스 효과 적용여부2

			//preloadImages: false,// flase=이미지가 화면에 들어올때 로드시작 true=사이트 접속시 로드시작

			//lazy: true, //이미지 화면에 들어올때 로드여부

			pagination: { //페이지네이션
				el: ".swiper-pagination",
				//type: "progressbar", //페이지네이션 형식
				clickable: true,
			},

			//swiper 마지막영역으로 넘어가면 swiper 비활성화, 마지막 영역의 속도가 0ms가 되면 비활성화로 바꿀것 
			//      on: {
			//        reachEnd: function() {
			//          swiper.mousewheel.disable();
			//        }
			//      },

			//  navigation: { // 스크롤바 네비게이션
			//    nextEl: ".swiper-button-next",
			//    prevEl: ".swiper-button-prev",
			//  },


			scrollbar: { //스크롤바
				el: ".swiper-scrollbar",
			},

			thumbs: { //썸네일 사용시
				swiper: swiper2,
			},

			on: {
				slideChangeTransitionStart: function () {
					$(".test_phone, .img_tag_set, .circle_set, .phone_btn, .flash, .headshake, .key1, .clock_test, .rotate_start").hide(0); //슬라이드 전환이 시작되면 해당 클래스가 있는 부분을 숨김 .gsap_text, .gsap_text_two 뺐음
					//클래스 맨뒤에 ,남길경우 슬라이드 전환중 다른 슬라이드로 전환 가능
					$(".test_phone").removeClass('animate__animated animate__fadeIn');
					$(".img_tag_1").removeClass('animate__animated animate__bounceIn');
					$(".circle_1").removeClass('animate__animated animate__rotateIn');
					$(".phone_btn_1").removeClass('animate__animated animate__backInUp');
					$(".flash").removeClass('animate__animated animate__heartBeat');
					$(".headshake").removeClass('animate__animated animate__headShake');
					$(".key1").removeClass('animate__animated key_line1');
					$(".clock_test").removeClass('animate__animated clock_start');
					$(".rotate_start").removeClass('animate__animated rotate_z');
					$(".slide1_img1").addClass('d-none').removeClass('animate__animated animate__bounceIn');
					$(".slide1_img2").addClass('d-none').removeClass('animate__animated animate__bounceIn');
					$(".slide1_img3").addClass('d-none').removeClass('animate__animated animate__bounceIn');
					$(".gsap_text1").addClass('d-none').removeClass('animate__animated typewriter1');
					$(".gsap_text1_2").addClass('d-none').removeClass('animate__animated typewriter1_2');
					$(".slide2_img").addClass('d-none');
					$(".gsap_text2").addClass('d-none');
					$(".gsap_text2_2").addClass('d-none');
					$(".gsap_text2_3").addClass('d-none');
					$(".gsap_text3").addClass('d-none');
					$(".gsap_text3_2").addClass('d-none');
					$(".gsap_text3_3").addClass('d-none');
					$(".rotate_move1").removeClass('rotate_trigger1').addClass('d-none');
					$(".rotate_move2").removeClass('rotate_trigger2').addClass('d-none');
					$(".rotate_move3").removeClass('rotate_trigger3').addClass('d-none');
					$(".rotate_move4").removeClass('rotate_trigger4').addClass('d-none');




				},
				slideChangeTransitionEnd: function () {
					$(".test_phone, .img_tag_set, .circle_set, .phone_btn, .flash, .headshake, .key1, .clock_test, .rotate_start, .gsap_text1, .gsap_text2, .slide2_img").show(0); //슬라이드 전환이 끝나면 해당 클래스가 있는 부분을 보여줌
					$(".test_phone").addClass('animate__animated animate__fadeIn');
					$(".img_tag_1").addClass('animate__animated animate__bounceIn');
					$(".circle_1").addClass('animate__animated animate__rotateIn');
					$(".phone_btn_1").addClass('animate__animated animate__backInUp');
					$(".flash").addClass('animate__animated animate__heartBeat');
					$(".headshake").addClass('animate__animated animate__headShake');
					$(".key1").addClass('animate__animated key_line1');
					$(".clock_test").addClass('animate__animated clock_start');
					$(".rotate_start").addClass('animate__animated rotate_z');
					$(".gsap_text1").addClass('animate__animated typewriter1').removeClass('d-none');
					$(".gsap_text1_2").addClass('animate__animated typewriter1_2').removeClass('d-none');
					$(".slide1_img1").addClass('animate__animated animate__bounceIn').removeClass('d-none');
					$(".slide1_img2").addClass('animate__animated animate__bounceIn').removeClass('d-none');
					$(".slide1_img3").addClass('animate__animated animate__bounceIn').removeClass('d-none');
					$(".slide2_img").addClass('animate__animated animate__bounceIn').removeClass('d-none');
					$(".gsap_text2").addClass('animate__animated typewriter2').removeClass('d-none');
					$(".gsap_text3").addClass('animate__animated typewriter3').removeClass('d-none');
					$(".gsap_text3_2").addClass('animate__animated typewriter3_2').removeClass('d-none');
					$(".gsap_text3_2").addClass('animate__animated typewriter3_2').removeClass('d-none');
					$(".rotate_move1").addClass('rotate_trigger1').removeClass('d-none');
					$(".rotate_move2").addClass('rotate_trigger2').removeClass('d-none');
					$(".rotate_move3").addClass('rotate_trigger3').removeClass('d-none');
					$(".rotate_move4").addClass('rotate_trigger4').removeClass('d-none');

					setTimeout(function () {
						$(".gsap_text2_2").show(0);
						$(".gsap_text2_2").addClass('animate__animated typewriter2_2').removeClass('d-none');
					}, 1000);
					// setTimeout(function () {
					// 	$(".gsap_text3_2").show(0);
					// 	$(".gsap_text3_2").addClass('animate__animated typewriter3_2').removeClass('d-none');
					// }, 2000);
					setTimeout(function () {
						$(".gsap_text2_3").show(0);
						$(".gsap_text2_3").addClass('animate__animated typewriter2_3').removeClass('d-none');
					}, 3500);

					setTimeout(function () {
					$(".gsap_text3_3").show(0);
					$(".gsap_text3_3").addClass('animate__animated typewriter3_3').removeClass('d-none');
				},
				3000);
		}
	},
});