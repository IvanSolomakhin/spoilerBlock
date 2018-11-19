/*
 * Hide spoilers from youtube.
 */

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

/** Observer callback */
const observerCallback = () => {
    hide(document.getElementsByClassName('ytd-secondary-search-container-renderer'));
};

/**
 * Hide spoilers on youtube.
 * Observe primary search element and on change hide secondary element
 */
const findAndHide = () => {
    /**
     * Youtube secondary search.
     * @type {HTMLElement}
     */
    hide(document.getElementById('secondary'));
    const observer = new MutationObserver(observerCallback);
    const observedNode = document.getElementById('primary');
    if (observedNode) {
        observer.observe(observedNode, { attributes: true, childList: true, subtree: true, characterData: true, characterDataOldValue: true });
    }
};

/** Check if `DOMContentLoaded` already fired */
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", findAndHide);
} else {
    findAndHide();
}
