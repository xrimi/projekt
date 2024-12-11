const runs = 150000000;
const start = performance.now(); // in ms, usually with 100us resolution
for (let i = runs; i>0; i--) {}
const end = performance.now();
const ms = end - start;
const cyclesPerRun = 2;
const speed = (runs / ms / 1000000) * cyclesPerRun;
console.log(`Time: ${Math.round(ms)/1000}s, estimated speed: ${Math.round(speed*10)/10} GHz`);


document.addEventListener("DOMContentLoaded", () => {
    function greet(name) {
      return `Hello, ${name}.`;
    }
    const greeting = greet(`your estimated CPU speed is ${Math.round(speed*10)/10} GHz`);
    const para = document.createElement('p');
    para.textContent = greeting;
    document.querySelector('main').appendChild(para);
  });
  