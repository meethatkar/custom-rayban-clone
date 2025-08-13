Shery.imageEffect("#back", {
    style: 5,
    config: { "a": { "value": 2, "range": [0, 30] }, "b": { "value": -0.97, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 2.209436094691232 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0.007447881834415552 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": true }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.08, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": false }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.4, "range": [0, 10] }, "metaball": { "value": 0.15, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.4, "range": [0, 2] }, "noise_scale": { "value": 16, "range": [0, 100] } },
    gooey: true,
    // debug:true
})

function cursor() {
    let clickDiv = document.querySelector("#click");
    window.addEventListener("mousemove", (dets) => {
        clickDiv.style.top = `${dets.clientY - 15}px`;
        clickDiv.style.left = `${dets.clientX + 5}px`;
    })

    window.addEventListener("click", () => {
        // alert();
        gsap.from(clickDiv, {
            opacity: 0,
            color: "black",
            duration: 0.5
        })
    })
}
cursor();


function text_anim() {
    let elems = document.querySelectorAll(".elem");

    elems.forEach((elem) => {
        let h1s = elem.querySelectorAll("h1");
        let index = 0;     //TAKEN CAUSE CAN'T USE forEach() HERE.
        let isAnimating = false;

        window.addEventListener("click", () => {
            if (!isAnimating) {
                isAnimating = true,
                    gsap.to(h1s[index], {
                        top: "-=100%",      //-='s kiya so beech ka upar aur upar ka neech aa jayega
                        ease: Expo.expoInOut,
                        duration: 0.5,
                        onComplete: function () {
                            gsap.set(this._targets[0], { top: "100%" })
                            // HERE "this._targets[0]" MEANS THE CURRENT H1 THAT IS ANIMATED, AND GSAP.SET(ELEM, PROPERTY) IS USE TO SET CSS PROPERTY OF THAT ELEM. 
                            isAnimating = false;            //ISSE YAHA PE LIKHA CAUSE THIS IS END.
                        }
                    })

                index === h1s.length - 1 ? index = 0 : index++;
                // HERE "h1s.length-1" KIYA HAI CAUSE LENGHT IS 5 BUT INDEX ARE 0 TO 4 SO INDEX CAN'T BE MATCHED WITH 5, SO -1

                gsap.to(h1s[index], {
                    top: "-=100%",      //-='s kiya so beech ka upar aur upar ka neech aa jayega
                    ease: Expo.expoInOut,
                    duration: 0.5,
                })
            }
        })
    })
}
text_anim();

function image_anim() {
    let imgArr = ['assets/IMG_7564.JPG',
        'assets/IMG_7565.JPG',
        'assets/IMG_7566.JPG',
        'assets/IMG_7567.JPG',
        'assets/IMG_7568.JPG',
    ]

    let index = 0;
    let img_div = document.querySelector("#img-div");

    window.addEventListener("click", () => {
        index === imgArr.length-1 ? index=0 : index++;
        img_div.style.backgroundImage = `url(${imgArr[index]})`
        gsap.from(img_div,{
            width:0,
            ease: Expo.expoInOut,
            duration: 0.5
        })
    })
}
image_anim();
