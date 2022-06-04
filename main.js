var ytdApp = document.querySelector('ytd-app');
const mutationObserver = new MutationObserver(entries => {
    main();
});
function main(){
    var ytdApp = document.querySelector('ytd-app');
    console.dir(ytdApp);
    const trigger = ytdApp.attributes.length == 0 ? true: false;
    console.log(trigger);
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
function test(){
    console.log('changed')
}
document.onload = main();
window.onresize = main();
// document.addEventListener('click', main());
mutationObserver.observe(ytdApp, {attributes: true})