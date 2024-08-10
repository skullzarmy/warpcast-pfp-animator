// Function to replace all img src props on the page
function replaceImgSrc(checked) {
    const images = document.getElementsByTagName("img");
    if (images.length === 0) {
        return;
    }

    for (let i = 0; i < images.length; i++) {
        let src = images[i].src;

        // Directly search and replace 'anim=true' or 'anim=false' with the desired value
        if (src.includes("anim=true") || src.includes("anim=false")) {
            const newSrc = src.replace(/anim=(true|false)/, `anim=${checked ? "true" : "false"}`);
            images[i].src = newSrc;
        }
    }
    console.log("PFPs animated! 🚀");
}

window.addEventListener("load", () => {
    const welcomeMessage = `                                                                                
                                    Greetings from skllzrmy! 💀
This extension will automagically animate all profile pictures on the page! 🚀
Please feel free to drop me a tip at https://warpcast.com/skllzrmy/0xd55fe1b1 if you like this extension! 🙏`;
    console.log(welcomeMessage);

    // Automatically replace all img src props on page load
    replaceImgSrc(true);

    // Mutation observer to watch for changes in the DOM
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
                replaceImgSrc(true);
            }
        });
    });

    // Start observing the document with the configured parameters
    observer.observe(document.body, { childList: true, subtree: true });
});
