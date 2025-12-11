function initSidebarHoverAndActive() {
    const sidebarItems = document.querySelectorAll('.desk-sidebar-item.standard-sidebar-item');

    const defaultSelected = document.querySelector('.desk-sidebar-item.standard-sidebar-item.selected');
    if (defaultSelected) {
        applySelectedStyles(defaultSelected);
    }

    sidebarItems.forEach(item => {
        item.style.transition = '0.2s';
        item.style.height = '30px';


        item.addEventListener('mouseover', function () {
            if (!this.classList.contains('selected')) {
                applyHoverStyles(this);
            }
        });

        item.addEventListener('mouseout', function () {
            if (!this.classList.contains('selected')) {
                clearStyles(this);
            }
        });

        item.addEventListener('click', function () {

            sidebarItems.forEach(i => {
                i.classList.remove('selected');
                clearStyles(i);
            });

            this.classList.add('selected');
            applySelectedStyles(this);
        });
    });
}



function applyHoverStyles(selected) {
    selected.style.backgroundColor = '#3270c2e1';
    selected.style.marginLeft = '15px';
    selected.style.color = '#ffffff';
    selected.style.borderRadius = '5px';
    selected.style.boxShadow = '0px 0px 5px #ccc';


    const label = selected.querySelector('.sidebar-item-label');
    if (label) label.style.color = '#ffffff';

    const iconSvg = selected.querySelector('.sidebar-item-icon svg');
    if (iconSvg) {
        iconSvg.style.fill = '#ffffff';
        iconSvg.style.color = '#ffffff';
    }
}

function applySelectedStyles(selected) {
    selected.style.backgroundColor = '#3271C2';
    selected.style.color = '#ffffff';
    selected.style.marginLeft = '15px';

    selected.style.boxShadow = '0px 0px 5px #ccc';
    selected.style.borderRadius = '5px';
    const label = selected.querySelector('.sidebar-item-label');
    if (label) label.style.color = '#ffffff';

    const iconSvg = selected.querySelector('.sidebar-item-icon svg');
    if (iconSvg) {
        iconSvg.style.fill = '#ffffff';
        iconSvg.style.color = '#ffffff';
    }
}

function clearStyles(selected) {
    selected.style.backgroundColor = 'transparent';
    selected.style.color = '383838';
    selected.style.boxShadow = 'none';
    selected.style.borderRadius = 'none';
    selected.style.marginLeft = '0px';


    const label = selected.querySelector('.sidebar-item-label');
    if (label) label.style.color = '#383838';

    const iconSvg = selected.querySelector('.sidebar-item-icon svg');
    if (iconSvg) {
        iconSvg.style.fill = 'none';
        iconSvg.style.color = '#1b1b1be3';
    }
}


setTimeout(() => {
    initSidebarHoverAndActive();
}, 800);


document.addEventListener("DOMContentLoaded", initSidebarHoverAndActive);

const desksidebarobserver = new MutationObserver(initSidebarHoverAndActive);
desksidebarobserver.observe(document.body, {
    childList: true,
    subtree: true
});


// function replaceGettingStartedIcon() {
//     const items = document.querySelectorAll('.sidebar-item-icon[item-icon="getting-started"]');

//     items.forEach(iconWrapper => {
//         const svg = iconWrapper.querySelector('svg');

//         if (svg) {
//             svg.remove();
//         }

//         const img = document.createElement('img');
//         img.src = "/assets/flowtech_ui/images/house-regular-full.svg";
//         img.style.width = "20px";
//         img.style.height = "20px";
//         img.style.filter = "invert(100%)";
//         img.style.stroke = "none";
//         img.style.objectFit = "contain";

//         iconWrapper.appendChild(img);
//     });
// }


