// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
  let shutbackground = document.getElementById("shuttleBackground");
  let rocket = document.getElementById("rocket");
  rocket.style.position = "relative";
  rocket.style.right = "0px";
  let button = document.getElementById("takeoff");
  let status = document.getElementById("flightStatus");
  let height = document.getElementById("spaceShuttleHeight");
  let land = document.getElementById("landing");
  let abort = document.getElementById("missionAbort");
  let up = document.getElementById("up");
  let left = document.getElementById("left");
  let down = document.getElementById("down");
  let right = document.getElementById("right");

  let top = 0;
  let left1 = 0;

  button.addEventListener("click", function () {
    let result = confirm("Confirm that the shuttle is ready for takeoff.");
    if (result === true) {
      status.innerHTML = "Shuttle in flight.";
      shutbackground.style.backgroundColor = "blue";
      height.innerText = 10000;
    }
  });
  land.addEventListener("click", function () {
    alert("The shuttle is landing. Landing gear engaged.");
    status.innerHTML = "The shuttle has landed.";
    shutbackground.style.backgroundColor = "";
    height.innerText = 0;
  });
  abort.addEventListener("click", function () {
    let yesNo = confirm("Confirm that you want to abort the mission.");
    if (yesNo === true) {
      status.innerHTML = "Mission aborted.";
      shutbackground.style.backgroundColor = "";
      height.innerText = 0;
    }
  });
  up.addEventListener("click", function () {
    let originalHeight = Number(height.innerText);
    originalHeight += 10000;
    height.innerText = originalHeight;
    top -= 10;
    rocket.style.top = top - 10 + "px";
  });
  down.addEventListener("click", function () {
    //rocket.style.down = parseInt(rocket.style.down) + 10 + "px";
    let originalHeight = Number(height.innerText);
    originalHeight -= 10000;
    height.innerText = originalHeight;
    top += 10;
    rocket.style.top = top - 10 + "px";
  });

  left.addEventListener("click", function () {
    left1 -= 10;
    rocket.style.left = left1 - 10 + "px";
    //rocket.style.right = parseInt(rocket.style.right) + 10 + "px";
  });
  right.addEventListener("click", function () {
    left1 += 10;
    //rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
    rocket.style.left = left1 - 10 + "px";
  });
}
window.addEventListener("load", init);
