var ytdApp = document.querySelector('ytd-app');

const mutationObserver = new MutationObserver(entries => {
    main(ytdApp);
});

function main(ytdApp){
    const trigger = document.cookie
  .split("; ")
  .find((row) => row.startsWith("wide="))
  ?.split("=")[1];

    if (trigger == 1 && window.location.pathname == '/watch') {
        const video = document.querySelector('video');
        if (video) {
            document.querySelector("body").classList.add("fsy-modifier");
        video.setAttribute('style',`
        height: auto;
        height: 100vw;
        width: 100vw;
        object-fit: contain;
        top:0 !important;
        left:0 !important;
        position: relative;
        `)
        }
    } else {
        document.querySelector("body").classList.remove("fsy-modifier");
    }

    // set theme color for black safari navbar
    document.querySelector('[name="theme-color"]').setAttribute('content','#000000');

    window.addEventListener('mousemove', (event) => {
        const showTrigger = event.clientY > 240;
        document.querySelector("body").classList.toggle('show-menu', !showTrigger);
      });
}

window.onresize = main(ytdApp);
window.onload = main(ytdApp);
document.body.ontransitionend = main(ytdApp);
mutationObserver.observe(ytdApp, {
    childList: true,
    subtree: true
})