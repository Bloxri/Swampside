#pragma strict

var triggerByUse = false;
var triggerByShoot = false;
var hp = -1;

var triggerByEnter = false;



var objectsToAnimate : GameObject[];
var objectsToStop : GameObject[]; 
var animationNames : String[];


var objectsToEnable : GameObject[];
var objectsToDisable : GameObject[];


var delayTime = 0.0;


var enabledByDefault = true;
var canRedo = false;
var redoTime = 1.0;