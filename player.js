// Select all the elements in the HTML page 
// and assign them to a variable 
let now_playing = document.querySelector(".now-playing"); 
let track_art = document.querySelector(".track-art"); 
let track_name = document.querySelector(".track-name"); 
let track_artist = document.querySelector(".track-artist"); 

let playpause_btn = document.querySelector(".playpause-track"); 
let next_btn = document.querySelector(".next-track"); 
let prev_btn = document.querySelector(".prev-track"); 

let seek_slider = document.querySelector(".seek_slider"); 
let volume_slider = document.querySelector(".volume_slider"); 
let curr_time = document.querySelector(".current-time"); 
let total_duration = document.querySelector(".total-duration"); 

// Specify globally used values 
let track_index = 0; 
let isPlaying = false; 
let updateTimer; 

// Create the audio element for the player 
let curr_track = document.createElement('audio'); 

// Define the list of tracks that have to be played 
let track_list = [ 
{ 
	name: "Nee Kannu Neeli ", 
	artist: "Broke For Free", 
	image: "data:image/jpeg;base64,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", 
	path: "https://s9.as9200325.fun/2003251834/tely138nkr2ncsa/Uppena%20-%20(2020)/[iSongs.info]%2001%20-%20Nee%20Kannu%20Neeli%20Samudram.mp3"
}, 
{ 
	name: "Sara Sari", 
	artist: "Anurag ", 
	image: "data:image/jpeg;base64,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", 
	path: "https://s9.as9200325.fun/2003251834/tely138nkr2ncsa/Bheeshma%20-%20(2020)/[iSongs.info]%2003%20-%20Sara%20Sari.mp3"
}, 
{ 
	name: "Tharagadhi dati", 
	artist: "Chad Crouch", 
	image: "Image URL", 
	path: "https://s9.as9200325.fun/2003251834/tely138nkr2ncsa/Colour%20Photo%20-%20(2020)/[iSongs.info]%2001%20-%20Tharagathi%20Gadhi.mp3", 
}, 
]; 
function loadTrack(track_index) { 
    // Clear the previous seek timer 
    clearInterval(updateTimer); 
    resetValues(); 
    
    // Load a new track 
    curr_track.src = track_list[track_index].path; 
    curr_track.load(); 
    
    // Update details of the track 
    track_art.style.backgroundImage = 
        "url(" + track_list[track_index].image + ")"; 
    track_name.textContent = track_list[track_index].name; 
    track_artist.textContent = track_list[track_index].artist; 
    now_playing.textContent = 
        "PLAYING " + (track_index + 1) + " OF " + track_list.length; 
    
    // Set an interval of 1000 milliseconds 
    // for updating the seek slider 
    updateTimer = setInterval(seekUpdate, 1000); 
    
    // Move to the next track if the current finishes playing 
    // using the 'ended' event 
    curr_track.addEventListener("ended", nextTrack); 
    
    // Apply a random background color 
    random_bg_color(); 
    } 
    
    function random_bg_color() { 
    // Get a random number between 64 to 256 
    // (for getting lighter colors) 
    let red = Math.floor(Math.random() * 256) + 64; 
    let green = Math.floor(Math.random() * 256) + 64; 
    let blue = Math.floor(Math.random() * 256) + 64; 
    
    // Construct a color withe the given values 
    let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")"; 
    
    // Set the background to the new color 
    document.body.style.background = bgColor; 
    } 
    
    // Functiom to reset all values to their default 
    function resetValues() { 
    curr_time.textContent = "00:00"; 
    total_duration.textContent = "00:00"; 
    seek_slider.value = 0; 
    } 
    function playpauseTrack() { 
        // Switch between playing and pausing 
        // depending on the current state 
        if (!isPlaying) playTrack(); 
        else pauseTrack(); 
        } 
        
        function playTrack() { 
        // Play the loaded track 
        curr_track.play(); 
        isPlaying = true; 
        
        // Replace icon with the pause icon 
        playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>'; 
        } 
        
        function pauseTrack() { 
        // Pause the loaded track 
        curr_track.pause(); 
        isPlaying = false; 
        
        // Replace icon with the play icon 
        playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';; 
        } 
        
        function nextTrack() { 
        // Go back to the first track if the 
        // current one is the last in the track list 
        if (track_index < track_list.length - 1) 
            track_index += 1; 
        else track_index = 0; 
        
        // Load and play the new track 
        loadTrack(track_index); 
        playTrack(); 
        } 
        
        function prevTrack() { 
        // Go back to the last track if the 
        // current one is the first in the track list 
        if (track_index > 0) 
            track_index -= 1; 
        else track_index = track_list.length; 
            
        // Load and play the new track 
        loadTrack(track_index); 
        playTrack(); 
        } 
        function seekTo() { 
            // Calculate the seek position by the 
            // percentage of the seek slider 
            // and get the relative duration to the track 
            seekto = curr_track.duration * (seek_slider.value / 100); 
            
            // Set the current track position to the calculated seek position 
            curr_track.currentTime = seekto; 
            } 
            
            function setVolume() { 
            // Set the volume according to the 
            // percentage of the volume slider set 
            curr_track.volume = volume_slider.value / 100; 
            } 
            
            function seekUpdate() { 
            let seekPosition = 0; 
            
            // Check if the current track duration is a legible number 
            if (!isNaN(curr_track.duration)) { 
                seekPosition = curr_track.currentTime * (100 / curr_track.duration); 
                seek_slider.value = seekPosition; 
            
                // Calculate the time left and the total duration 
                let currentMinutes = Math.floor(curr_track.currentTime / 60); 
                let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60); 
                let durationMinutes = Math.floor(curr_track.duration / 60); 
                let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60); 
            
                // Add a zero to the single digit time values 
                if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; } 
                if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; } 
                if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; } 
                if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; } 
            
                // Display the updated duration 
                curr_time.textContent = currentMinutes + ":" + currentSeconds; 
                total_duration.textContent = durationMinutes + ":" + durationSeconds; 
            } 
            } 
// Load the first track in the tracklist 
loadTrack(track_index); 
                    