
const replaceMenuIcon = () => {
    const labels = document.querySelectorAll('.menu-btn-group-label');
    labels.forEach(label => {
        const svg = label.querySelector('svg');
        if (svg) svg.remove();

        if (!label.querySelector('img')) {
            const img = document.createElement('img');
            img.src = "/assets/flowtech_ui/images/option.png";
            img.alt = "Options";
            img.style.width = "16px";
            img.style.height = "16px";
            img.style.objectFit = "contain";
            label.appendChild(img);
        }
    });
}

document.addEventListener("DOMContentLoaded", replaceMenuIcon);

const observer1 = new MutationObserver(replaceMenuIcon);
observer1.observe(document.body, {
    childList: true,
    subtree: true
});




const replacePageIcon = () => {
    const pageButtons = document.querySelectorAll('.page-icon-group button');
    pageButtons.forEach(btn => {
        const reloadtitle = btn.getAttribute('data-original-title') || btn.title;
        if (reloadtitle == 'Reload List') {
            const svg = btn.querySelector('svg');
            if (svg) svg.remove();

            if (!btn.querySelector('img')) {
                const img = document.createElement('img');
                img.src = "/assets/flowtech_ui/images/reload.png";
                img.alt = "Reload";
                img.style.width = "16px";
                img.style.width = "16px";
                img.style.rotate = "29deg";
                img.style.objectFit = "contain";
                img.style.transition = "transform  0.5s";
                btn.appendChild(img);
                img.addEventListener('click', () => {
                    img.style.transform = "rotate(360deg)";

                    setTimeout(() => {
                        img.style.transform = "rotate(0deg)";
                    }, 500);
                });
            }
        }

        const printtitle = btn.getAttribute('data-original-title') || btn.title;
        if (printtitle == 'Print') {
            const svg = btn.querySelector('svg');
            if (svg) svg.remove();

            // if (!btn.querySelector('img')) {
            //     const img = document.createElement('img');
            //     img.src = "/assets/flowtech_ui/images/printer.png";
            //     img.alt = "Reload";
            //     img.style.width = "16px";
            //     img.style.width = "16px";
            //     img.style.rotate = "29deg";
            //     img.style.objectFit = "contain";
            //     img.style.transition = "transform  0.5s";
            //     btn.appendChild(img);
            //     img.addEventListener('click', () => {
            //         img.style.transform = "rotate(360deg)";

            //         setTimeout(() => {
            //             img.style.transform = "rotate(0deg)";
            //         }, 500);
            //     });
            // }

            if (!btn.querySelector('img')) {
                const img = document.createElement('img');
                img.src = "/assets/flowtech_ui/images/printer.png";
                img.alt = "Reload";
                img.style.width = "16px";
                img.style.height = "16px";
                // img.style.rotate = "29deg";
                img.style.objectFit = "contain";
                img.style.transition = "transform 0.25s ease";
                btn.appendChild(img);

                img.addEventListener('mouseenter', () => {
                    img.style.transform = "rotate(29deg)";

                    setTimeout(() => {
                        img.style.transform = "rotate(-29deg)";
                    }, 150);

                    setTimeout(() => {
                        img.style.transform = "rotate(-29deg)";
                    }, 300);
                    setTimeout(() => {
                        img.style.transform = "rotate(0deg)";
                    }, 400);
                });
                img.addEventListener('mouseout', () => {
                    img.style.transform = "rotate(0deg)";
                })
            }


        }
    });
}

document.addEventListener("DOMContentLoaded", replacePageIcon);

const observer2 = new MutationObserver(replacePageIcon);
observer2.observe(document.body, {
    childList: true,
    subtree: true
});


function replaceCustomButtonIcon() {

    const customButtons = document.querySelectorAll('.custom-btn-group .btn.btn-default.btn-sm.ellipsis');

    customButtons.forEach(btn => {
        const hiddenSpan = btn.querySelector('.hidden-xs');
        if (hiddenSpan) {
            const svgs = hiddenSpan.querySelectorAll('.icon.icon-sm');
            svgs.forEach(svg => svg.remove());

            if (!hiddenSpan.querySelector('img')) {
                const img = document.createElement('img');
                img.src = "/assets/flowtech_ui/images/menu.png";
                img.alt = "Options";
                img.style.width = "16px";
                img.style.height = "16px";
                img.style.objectFit = "contain";
                hiddenSpan.insertBefore(img, hiddenSpan.firstChild);
            }
        }
    });
}
replaceCustomButtonIcon();
const observer = new MutationObserver(replaceCustomButtonIcon);
observer.observe(document.body, { childList: true, subtree: true });


function replaceAddItemIcon() {
    const addItemButton = document.querySelector('.btn-primary.primary-action');

    if (addItemButton) {
        const textSpan = addItemButton.querySelector('.hidden-xs');
        if (textSpan) {
            const svg = addItemButton.querySelector('svg');
            if (svg) svg.remove();

            if (!textSpan.querySelector('img')) {
                const img = document.createElement('img');
                img.src = "/assets/flowtech_ui/images/add.png";
                img.alt = "Options";
                img.style.width = "16px";
                img.style.height = "16px";
                img.style.objectFit = "contain";
                img.style.marginRight = "4px";

                textSpan.insertBefore(img, textSpan.firstChild);
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', replaceAddItemIcon);

const observer3 = new MutationObserver(replaceAddItemIcon);
observer3.observe(document.body, {
    childList: true,
    subtree: true
});


