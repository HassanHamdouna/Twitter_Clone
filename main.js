let tweets = [];
// grab the elements
let newsfeed = document.getElementById("newsfeed");
let tweetInput = document.getElementById("tweet-input");
let usernameInput = document.getElementById("username-input");
let submitButton = document.getElementById("submit-button");

// create a function that creates the tweet element
function createTweet(text, username) {
    // Create the outer div element
    let tweet = document.createElement("div");
    tweet.classList.add("tweet");

    // Create the image element
    var image = document.createElement("img");
    image.id = "image";
    image.classList.add("tweet-img");
    image.src = "./IMG_9651.jpg";
    image.alt = "";

    // Append the image to the outer div
    tweet.appendChild(image);

    // Create the inner div element
    var tweetDetails = document.createElement("dev");
    tweetDetails.classList.add("feed-tweet-details");

    // Create the tweeter-details div
    var tweeterDetails = document.createElement("div");
    tweeterDetails.classList.add("tweeter-details");

    // Create the tweeter-name link
    var tweeterName = document.createElement("a");
    tweeterName.classList.add("tweeter-name");
    tweeterName.textContent = username;

    // Create the tweeter-handle span
    var tweeterHandle = document.createElement("span");
    tweeterHandle.classList.add("tweeter-handle");
    tweeterHandle.textContent = "@" + username;

    // Append the tweeter-handle to the tweeter-name
    tweeterName.appendChild(tweeterHandle);

    // Create the more_horiz icon
    var iconsMoreHoriz = document.createElement("i");
    iconsMoreHoriz.id = "icons-more-horiz";
    iconsMoreHoriz.classList.add("material-icons-outlined");
    iconsMoreHoriz.textContent = "more_horiz";

    // Append the tweeter-name and more_horiz icon to the tweeter-details div
    tweeterDetails.appendChild(tweeterName);
    tweeterDetails.appendChild(iconsMoreHoriz);

    // Create the tweet-text div
    var tweetText = document.createElement("div");
    tweetText.classList.add("tweet-text");

    // Create the tweet-text p element
    var tweetTextP = document.createElement("p");
    tweetTextP.textContent = text;

    // Append the p element to the tweet-text div
    tweetText.appendChild(tweetTextP);

    // Create the tweet-icons div
    var tweetIcons = document.createElement("div");
    tweetIcons.classList.add("tweet-icons");

    // Create the icons-chat icon
    var iconsChat = document.createElement("i");
    iconsChat.id = "icons-chat";
    iconsChat.classList.add("material-icons-outlined");
    iconsChat.innerHTML = '<i class="material-icons-outlined">chat_bubble_outline</i>';

    // Create the icons-restart icon
    var iconsRestart = document.createElement("button");
    iconsRestart.id = "icons-restart";
    iconsRestart.classList.add("material-icons-outlined");
    iconsRestart.innerHTML = '<i class="material-icons-outlined">restart_alt</i>';

    iconsRestart.addEventListener("click", function () {
        newsfeed.insertBefore(tweet.cloneNode(true), newsfeed.firstChild);
    });
    // Create the icons-favorite icon
    var iconsFavorite = document.createElement("button");
    iconsFavorite.id = "icons-favorite";
    iconsFavorite.classList.add("material-icons-outlined");
    iconsFavorite.textContent = "favorite_border";
    iconsFavorite.addEventListener("click", function () {
        tweet.classList.toggle("liked");
        tweeterHandle.classList.toggle("tweeterHandle")
    });
    // Create the icons-upload icon
    var iconsUpload = document.createElement("i");
    iconsUpload.id = "icons-upload";
    iconsUpload.classList.add("material-icons-outlined");
    iconsUpload.textContent = "upload";

    // Append the icons to the tweet-icons div
    tweetIcons.appendChild(iconsChat);
    tweetIcons.appendChild(iconsRestart);
    tweetIcons.appendChild(iconsFavorite);
    tweetIcons.appendChild(iconsUpload);

    // Append the tweeter-details, tweet-text and tweet-icons to the tweetDetails div
    tweetDetails.appendChild(tweeterDetails);
    tweetDetails.appendChild(tweetText);
    tweetDetails.appendChild(tweetIcons);

    // Append the tweetDetails div to the newsfeed div
    tweet.appendChild(tweetDetails);

    return tweet;
}

// attach the click event to the submit button
submitButton.addEventListener("click", function () {
    let text = tweetInput.value;
    let username = usernameInput.value;
    if (text === "" || username === "") {
        alert("Please enter a valid username and tweet");
        return;
    }
    // create the tweet element
    let newTweet = createTweet(text, username);
    // add the tweet to the top of the newsfeed
    newsfeed.insertBefore(newTweet, newsfeed.firstChild);

    // add the tweet to the tweets array
    tweets.push({ text, username });


    // clear the input fields
    tweetInput.value = "";
    usernameInput.value = "";
});
