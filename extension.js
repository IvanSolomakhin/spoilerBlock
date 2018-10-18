/*
 * Hide spoilers from youtube and google search.
 */

/**
 * Hide element
 * @param element
 */
const hide = (element) => {
    element.style.visibility = 'hidden';
    console.info('Hiding spoiler');
};

/**
 * Find elements and hide them
 */
const findAndHide = () => {
    /**
     * Youtube secondary search.
     * @type {HTMLElement}
     */
    const secondarySearch = document.getElementById('secondary');
    if (secondarySearch) {
        hide(secondarySearch);
    }

    /**
     * Spoilers on google search. Usually first is sport results
     * @type {HTMLCollectionOf<Element>}
     */
    const spoilers = document.getElementsByClassName('Wnoohf');
    if (spoilers.length < 1) {
        return ;
    }
    const spoiler = spoilers[0];
    hide(spoiler);
};

/*
 *  Check if `DOMContentLoaded` already fired
 */
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", findAndHide);
}
else {
    findAndHide();
}
