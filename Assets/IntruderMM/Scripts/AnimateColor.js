#pragma strict

private var myRenderer : Renderer;
var myColor : Color;

function Start () {
myRenderer = renderer;
}

function Update () {
if(myRenderer.material.color!=myColor)
myRenderer.material.color = myColor;
}