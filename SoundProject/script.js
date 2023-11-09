//this part of script js is for the index.html file

// // Getting the current page URL
// const currentPage = window.location.pathname.split("/").pop();

// // Setting the timeout only if the current page is "index.html"
// if (currentPage === "index.html") {
//   setTimeout(function () {
//     window.location.href = "page1.html";
//   }, 8000); // 8 seconds
// }

//we start with the page1.html file from here
const scenes = [
  { img: "images/page1New.gif", audio: "audio/audio1.mp3" },
  { img: "images/page2.gif", audio: "audio/audio2.mp3" },
  { img: "images/page3.gif", audio: "audio/audio3.mp3" },
  { img: "images/page4.gif", audio: "audio/audio4.mp3" },
  { img: "images/page5.gif", audio: "audio/audio5.mp3" },
  { img: "images/page6.gif", audio: "audio/audio6.mp3" },
  { img: "images/page7.gif", audio: "audio/audio7.mp3" },
  // ... add all scenes here
  { img: "images/page8.gif", audio: "audio/audio8.mp3" },
  {
    img: "images/page9.gif",
    audio: "audio/audio9.mp3",
  },
];

let currentScene = -1; // Start before the first scene, which is the video scene

// Get the elements
const imageElement = document.getElementById("story-image");
const audioElement = document.getElementById("story-audio");
const audioSourceElement = document.getElementById("audio-source");
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");

// Function to start the story
function startStory() {
  startButton.style.display = "none"; // Hide the start button
  nextButton.style.display = "inline"; // Show the next button
  changeScene(); // Change to the first scene
}

// Function to change the scene
function changeScene() {
  currentScene++;
  if (currentScene >= scenes.length) {
    // Reached the end, hide the next button and exit the function
    nextButton.style.display = "none";
    startButton.style.display = "none";
    return;
  }
  if (scenes[currentScene].img) {
    imageElement.src = scenes[currentScene].img;
    imageElement.style.display = "block"; // Show the image
  }
  if (scenes[currentScene].audio) {
    audioSourceElement.src = scenes[currentScene].audio;
    audioElement.load(); // Load the new audio source
    audioElement.play(); // Play the audio
  }
}

// Event listeners for the buttons
startButton.addEventListener("click", startStory);
nextButton.addEventListener("click", changeScene);
