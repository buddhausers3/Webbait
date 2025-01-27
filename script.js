document.getElementById("startButton").addEventListener("click", function() {
  setTimeout(() => {
    document.getElementById("content").classList.add("hidden");
    const jumpscare = document.getElementById("jumpscare");
    jumpscare.classList.remove("hidden");
    const scream = document.getElementById("scream");
    scream.play();
  }, 3000); // 3-second delay before the jump scare
});
