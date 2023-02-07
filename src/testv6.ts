// import * as PIXI from "pixi.js";
// import { Spine, SpineParser } from "pixi-spine";

// const app: any = new PIXI.Application();
// document.body.appendChild(app.view);

// app.loader
//   .add("test", "test.skel", {
//     metadata: { spineSkeletonScale: 1 },
//   })
//   .load(function (loader: any, resources: any) {
//     const animation = new Spine(app.loader.resources.test.spineData);
//     animation.scale.set(0.5);
//     app.stage.addChild(animation);
//     animation.x = -300;
//     animation.y = -100;

//     // add the animation to the scene and render...
//     app.stage.addChild(animation);

//     if (animation.state.hasAnimation("IDLE")) {
//       // run forever, little boy!
//       animation.state.setAnimation(0, "IDLE", true);
//       // dont run too fast
//       animation.state.timeScale = 0.1;
//       // update yourself
//       animation.autoUpdate = true;
//     }
//     app.start();
//   });
