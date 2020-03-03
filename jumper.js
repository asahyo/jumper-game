function jumper(){
  //this is a part of function, jumper
  this.x = 1;
  this.y = 100;
  this.gravity = 0.5; //force bringing jumper down
  this.lift = -10; //force opposing force of gravity
  this.velocity = 0; //speed of gravity force
  
  //building a function to display on the screen. This is where i put my values of what the jumper would look like
  this.show = function(){
    fill(255, 0, 0);
    ellipse(this.x, this.y, 50, 50)
  }
  
  //build a function called up that will take initial velocity and modify by the opposing gravity
  this.up = function(){
    this.velocity += this.lift;
  }
  
  //this will continuously update the jumper
  this.update = function(){
    this.velocity += this.gravity;
    this.y += this.velocity;
    this.velocity *= 0.9; //air resistance
    //this will prevent jumper from leaving the ground
    if(this.y > h){
      this.y = h;
      this.velocity = 0;
    }
    //this will prevent jumper from leaving ceiling
    if(this.y < 0){
      this.y = 0;
      this.velocity = 0;
    }
  }
  
  
  
  
  
}