gsap.from('#overlid h1',{
 y:40,
 duration:2,
 opacity:0,
 ease:"Expo.InOut",
})
gsap.to("#overlid h1",{
  delay:2,
  opacity:0,
  y:40,
  duration:2,
  ease:"Expo.InOut",
})
gsap.to("#overlay",{
  y:-40,
  duration:4,
})