// Function to replace all img src props on the page
function replaceImgSrc(checked) {
    const images = document.getElementsByTagName("img");
    if (images.length === 0) {
        return;
    }

    for (let i = 0; i < images.length; i++) {
        const url = new URL(images[i].src);
        const params = url.searchParams;

        // Check for 'anim' parameter and modify it based on 'checked'
        if (params.has("anim")) {
            if (checked) {
                params.set("anim", "true");
            } else {
                params.set("anim", "false");
            }
            images[i].src = url.toString();
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
