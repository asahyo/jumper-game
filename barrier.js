function barrier(){
  this.width = 50;
  this.height = 200;
  
  this.x = w-100;
  this.y = h-300;
  
  this.gravity = 0.5; //force bringing jumper down
  this.lift = -10; //force opposing force of gravity
  this.velocity = 0; //speed of gravity force


  this.show = function(){
    fill(0, 0, 255);
    rect(this.x, this.y, this.width, this.height)
  }
  
  //build a function called up that will take initial velocity and modify by the opposing gravity
  //this.up = function(){
   // this.velocity += this.lift;
  //}
  
  //this will continuously update the jumper
  this.update = function(){
    this.velocity += this.gravity;
    this.x -= this.velocity;
    //this.velocity *= 0.9; //air resistance
    //this will prevent jumper from leaving the ground
    if(this.x < 0){
      this.x = w + this.width;
      this.y = Math.floor((Math.random()* h) + 10);
      this.velocity = 0;
    }
    //this will prevent jumper from leaving ceiling
    if(this.y < 0){
      this.y = 0;
      this.velocity = 0;
    }
  }
}