 
// gsap.to('#box', {
//     x : 1200,
//     duration:2,
//     // delay:2,
//     backgroundColor:'aqua',
//     y:200,
//     borderRadius:'50%',
//     repeat :3,
//     yoyo : true
// })

"stagger ka mtlb hota hai ak ky bad ka chalao"
"repeat use hota hai kitne time repeat krna hai agar repeat -1 karegy tu infinite chalta rahe ga"

"yoyo use hota hai jane ky bad wapis bhi aye"
// gsap.from('h1', {
//     opacity : 0,
//     duration:1,
//     stagger:0.3,
//     y:20,
//     delay:1
// })

let tl = gsap.timeline()

tl.from('h3', {
    opacity:0,
    duration:0.5,
    delay:0.1,
    y:-20,
    stagger:1

})

tl.from('li', {
    opacity:0,
    duration:0.3,
    delay:0.2,
    y:-20,
    stagger:0.1

})

gsap.from('h1',{
    duration:0.8,
    delay:0.5,
    y:20,
    opacity:0,
    scale:1.5
})