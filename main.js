var ytdApp = document.querySelector('ytd-app');
window.check = 'here';
const mutationObserver = new MutationObserver(entries => {
    main(ytdApp);
});
function main(ytdApp){
    const trigger = ytdApp.attributes.length == 0 ? true: false;

    if (trigger) {
        const video = document.querySelector('video');
        if (video) {
            document.querySelector("body").classList.add("fsy-modifier");
        video.setAttribute('style',`
        height: auto;
        max-height: 100%;
        max-width: 100vw;
        top:0;
        left:0;
        position: relative;
        `)
        }
    } else {
        document.querySelector("body").classList.remove("fsy-modifier");
    }
}

window.onresize = main(ytdApp);
window.onload = main(ytdApp);
document.body.ontransitionend = main(ytdApp);
mutationObserver.observe(ytdApp, {attributes: true})