class Launchers {
    constructor(bodyA,pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.01,
        length: 10
      }
      this.pointB = pointB;
      this.launcher =  Matter.Constraint.create(options);
      World.add(world, this.launcher);
    }

    fly(){
      this.launcher.bodyA=null;
    }
    
    Launch(bodyA){
      this.launcher.bodyA=bodyA;
    } 

    display(){
     
    }
  }