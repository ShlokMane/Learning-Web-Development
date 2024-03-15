// gsap.to("#box1", {
//   x: 1000,
//   delay: 1,
//   duration: 3,
//   rotate: 360,
//   scale: 0.5,
// });
// gsap.to("#box2", {
//   x: 1000,
//   delay: 4,
//   duration: 3,
//   rotate: 360,
//   scale: 0.5,
// });
// gsap.to("#box3", {
//   x: 1000,
//   delay: 7,
//   duration: 3,
//   rotate: 360,
//   scale: 0.5,
// });

var t1 = gsap.timeline();
t1.to("#box1", {
  x: 1000,
  duration: 3,
  rotate: 360,
  scale: 0.5,
});
t1.to("#box2", {
  x: 1000,
  duration: 3,
  rotate: 360,
  scale: 0.5,
});
t1.to("#box3", {
  x: 1000,
  duration: 3,
  rotate: 360,
  scale: 0.5,
});
