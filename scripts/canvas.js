
    var canvas = document.querySelector("#myCanvas")
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var c = canvas.getContext('2d');
    var dx;
    var dy;
    var mouse = {
        x: undefined,
        y: undefined
    }

    var maxRadius = 10;

    var colorArray = [
        'pink',
        'orange',
    ];

    window.addEventListener('click', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    window.addEventListener('mousemove', function(event){
        mouse.a = event.x;
        mouse.b = event.y;
    })

    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    })


    function Circle(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius / 5;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)]

        this.create = function () {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
        }

                    
        this.update = function() {
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;

            if (mouse.a - this.x < 50 && mouse.a - this.x > -50
                && mouse.b - this.y < 50 && mouse.b - this.y > -50) {
                    this.radius = 0;

                } else if (this.radius < 20) {
                        this.radius += 1;
            }

            this.create();
        }

    }


    var circleArray = [] ;

    function makeCircles() {
        for (var i = 0; i < 1000; i++) {
            var radius = 20; //Math.random() * 3 + 1;
            dx = (Math.random() - 0.5) * 1;
            dy = (Math.random() - 0.5) * 1;
            var x = innerWidth/2;
            var y = innerHeight/2;
            circleArray.push(new Circle(x,y,dx,dy, radius))
        }

    }


    function animate () {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);
        for (var i = 0; i<circleArray.length; i ++) {
            circleArray[i].update();
        }
    }

    animate();
