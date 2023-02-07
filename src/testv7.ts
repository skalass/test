import "pixi-spine"; // Do this once at the very start of your code. This registers the loader!

import * as PIXI from "pixi.js";
import { Spine } from "pixi-spine";

const app: any = new PIXI.Application();
document.body.appendChild(app.view);

PIXI.Assets.load("test.skel").then((resource) => {
  const animation = new Spine(resource.spineData);
  animation.scale.set(0.5);
  app.stage.addChild(animation);
  animation.x = -300;
  animation.y = -100;

  // add the animation to the scene and render...
  app.stage.addChild(animation);

  if (animation.state.hasAnimation("IDLE")) {
    // run forever, little boy!
    animation.state.setAnimation(0, "IDLE", true);
    // dont run too fast
    animation.state.timeScale = 0.1;
    // update yourself
    animation.autoUpdate = true;
  }
});
