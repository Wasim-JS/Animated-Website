let tl = gsap.timeline()
tl.from("header .logo,header nav li",{
    y:-300,
    duration:1,
    opacity:0,
    stagger:0.2
})
tl.from("main h1",{
    y:-20,
    duration:1,
    opacity:0,
    scale:0.2,
})
tl.from("main h4,h5",{
    y:70,
    duration:1,
    opacity:0,
    stagger:0.4
})

let t2 = gsap.timeline({
    scrollTrigger: {
        trigger:'.sec2 .data',
        scroller:"body",
        // scrub:true,
        start:"top 70%",
        // end:"top 40%",
        // markers:true
    }
})
t2.from('.sec2 .data h2',{
    x:-500,
    duration:.7,
    opacity:0,
    scale:3,
    rotate:-180,
    // scrollTrigger:{
        //     trigger:'.sec2 .data h4',
        //     scroller:"body",
        //     start:"top 70%",
        //     markers:true
        // }
    })
    t2.from('.sec2 .data h4',{
        x:500,
        duration:.7,
        opacity:0,
        scale:3,
        rotateY:180,
        // scrub:true,
        // scrollTrigger:{
            //     trigger:'.sec2 .data h4',
    //     scroller:"body",
    //     start:"top 80%",
    //    markers:true
    // }
})

let t3 = gsap.timeline({
    scrollTrigger: {
        trigger:'.sec3',
        scroller:"body",
         scrub:true,
        start:"top 0%",
        end:"top -100%",
        // markers:true,
        pin:true
    }
})


t3.to(".sec3 .name",{
    transform:"translateX(-1200px)"
})



let t4 = gsap.timeline({
    scrollTrigger: {
        trigger:'.sec4 .data',
        scroller:"body",
        start:"top 70%",
        // markers:true
    }
})

t4.from('.sec4 .data h2',{
    x:-500,
    duration:1,
    opacity:0,
    scale:8,

    })

t4.from('.sec4 .data h4',{
        y:-500,
        duration:1,
        opacity:0,
        scale:3,
        rotateY:180,
})

document.getElementById('string').addEventListener('mousemove',(e)=>{

    let path = `M 50 150 Q ${e.x} ${e.y} 1180 150`

    gsap.to("svg path",{
        attr:{d:path},
        duration:1,
        
    })
    
})
document.getElementById('string').addEventListener('mouseleave',(e)=>{
    
    let initalData = "M 50 150 Q 500 150 1180 150"
    
    
    gsap.to("svg path",{
        attr:{d:initalData},
        duration:1.5,
        ease:"elastic.out"
    
    })

})