// Function to replace all img src props on the page
function replaceImgSrc(checked) {
    const images = document.getElementsByTagName("img");
    if (images.length === 0) {
        return;
    }
    for (let i = 0; i < images.length; i++) {
        const src = images[i].src;
        if (src.endsWith("anim=false") || src.endsWith("anim=true")) {
            if (checked) {
                images[i].src = src.replace("anim=false", "anim=true");
            } else {
                images[i].src = src.replace("anim=true", "anim=false");
            }
        }
    }
    console.log("PFPs animated! 🚀");
}

window.addEventListener("load", () => {
    // Automatically replace all img src props on page load
    replaceImgSrc(true);

    // Mutation observer to watch for changes in the DOM
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === "childList") {
                replaceImgSrc(true);
            }
        });
    });

    // Start observing the document with the configured parameters
    observer.observe(document.body, { childList: true, subtree: true });
});
