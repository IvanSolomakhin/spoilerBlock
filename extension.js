/*
 * Hide spoilers from youtube and google search.
 */

/** Observer callback */
const observerCallback = () => {
    hide(document.getElementsByClassName('ytd-secondary-search-container-renderer'));
};

/**
 * Hide spoilers on youtube.
 * Observe primary search element and on change hide secondary element
 */
const youtube = () => {
    /**
     * Youtube secondary search.
     * @type {HTMLElement}
     */
    hide(document.getElementById('secondary'));
    const observer = new MutationObserver(observerCallback);
    const observedNode = document.getElementById('primary');
    observer.observe(observedNode, { attributes: true, childList: true, subtree: true, characterData: true, characterDataOldValue: true });
};

/** Hide spoilers on google */
const google = () => {
    /**
     * Spoilers on google search. Usually first is sport results
     * @todo Find out how to hide only sport results
     * @type {HTMLCollectionOf<Element>}
     */
    const spoilers = document.getElementsByClassName('Wnoohf');
    if (spoilers.length < 1) {
        return ;
    }
    const spoiler = spoilers[0];
    hide(spoiler);
};

/**
 * Hide element or elements
 * @param {Array|HTMLCollectionOf|HTMLElement|Element} element
 */
const hide = (element) => {
    if (!element || ((element instanceof HTMLCollection || Array.isArray(element)) && !element.length)) return ;

    if (element instanceof HTMLCollection || Array.isArray(element)) {
        for (let el of element) {
            el.style.visibility = 'hidden';
        }
        console.info(`Hiding spoiler in ${element}`);
        return ;
    }

    element.style.visibility = 'hidden';
    console.info(`Hiding spoiler in ${element}`);
};

/** Split logic between google and youtube */
const findAndHide = () => {
    if (window.location.href.match(/google/)) {
        google();
    } else {
        youtube();
    }
};

/* Check if `DOMContentLoaded` already fired */
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", findAndHide);
} else {
    findAndHide();
}
