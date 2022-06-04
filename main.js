const mutationObserver = new MutationObserver(entries => {
    main();
});
function main(trigger){
    if (/\/watch/.test(location.pathname)) {
        const video = document.querySelector('#player-container video');
        const playerContainer = document.querySelector('#player-theater-container');

        if(video){
        document.querySelector("body").classList.add("fsy-modifier");
        }
        

    } else {
        console.log('false');
        document.querySelector("body").classList.remove("fsy-modifier");
    }
    
}
document.onload = main();
window.resize = main();
mutationObserver.observe(document.querySelector('head'),{childList: true})