const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const links = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when clicking a link
links.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});



const slides = document.querySelectorAll('.text-slide');
let current = 0;

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 2500); // change text every 2.5 seconds



// ===== Network BG (full page) =====
(function(){
    const canvas = document.getElementById('hero-network');
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const points = [];
    const pointCount = 50;

    for(let i=0;i<pointCount;i++){
        points.push({
            x: Math.random()*width,
            y: Math.random()*height,
            vx: (Math.random()-0.5)*1,
            vy: (Math.random()-0.5)*1
        });
    }

    function draw(){
        ctx.clearRect(0,0,width,height);

        for(let i=0;i<pointCount;i++){
            for(let j=i+1;j<pointCount;j++){
                const dx = points[i].x - points[j].x;
                const dy = points[i].y - points[j].y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if(dist < 150){
                    ctx.strokeStyle = `rgba(255,255,255,${1 - dist/150})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(points[i].x,points[i].y);
                    ctx.lineTo(points[j].x,points[j].y);
                    ctx.stroke();
                }
            }
        }

        for(let i=0;i<pointCount;i++){
            const p = points[i];
            ctx.fillStyle='white';
            ctx.beginPath();
            ctx.arc(p.x,p.y,2,0,Math.PI*2);
            ctx.fill();
            p.x+=p.vx;
            p.y+=p.vy;
            if(p.x<0||p.x>width)p.vx*=-1;
            if(p.y<0||p.y>height)p.vy*=-1;
        }

        requestAnimationFrame(draw);
    }
    draw();

    window.addEventListener('resize', ()=>{
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
})();


(function(){
    const canvas = document.getElementById('hero-network');
    const ctx = canvas.getContext('2d');

    let width, height;
    let dpr = window.devicePixelRatio || 1;

    function initCanvas(){
        // FIX ADDED HERE — always read the CSS size
        width = canvas.clientWidth;
        height = canvas.clientHeight;

        // FIX ADDED — adjust canvas resolution for mobile DPI
        canvas.width = width * dpr;
        canvas.height = height * dpr;

        // FIX ADDED — scale drawing so it is sharp & not blurry
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    initCanvas();

    const points = [];
    const pointCount = 50;

    for(let i=0; i<pointCount; i++){
        points.push({
            x: Math.random()*width,
            y: Math.random()*height,
            vx: (Math.random()-0.5)*1,
            vy: (Math.random()-0.5)*1
        });
    }

    function draw(){
        ctx.clearRect(0,0,width,height);

        // lines
        for(let i=0;i<pointCount;i++){
            for(let j=i+1;j<pointCount;j++){
                const dx = points[i].x - points[j].x;
                const dy = points[i].y - points[j].y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if(dist < 150){
                    ctx.strokeStyle = `rgba(255,255,255,${1 - dist/150})`;
                    ctx.lineWidth = 1 / dpr;  // FIXED THICK LINES ON MOBILE
                    ctx.beginPath();
                    ctx.moveTo(points[i].x, points[i].y);
                    ctx.lineTo(points[j].x, points[j].y);
                    ctx.stroke();
                }
            }
        }

        // points
        for(let i=0;i<pointCount;i++){
            const p = points[i];
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(p.x,p.y,2,0,Math.PI*2);
            ctx.fill();

            p.x += p.vx;
            p.y += p.vy;

            if(p.x < 0 || p.x > width) p.vx*=-1;
            if(p.y < 0 || p.y > height) p.vy*=-1;
        }

        requestAnimationFrame(draw);
    }

    draw();

    window.addEventListener('resize', ()=>{
        dpr = window.devicePixelRatio || 1;  // update DPI if zoom changes
        initCanvas();
    });
})();

