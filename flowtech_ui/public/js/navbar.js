

const preloginNavbar = () => {
    const body = document.querySelector('body')
    if (body) {
        body.style.backgroundColor = '#fffdf7'
    }
    const navbar = document.querySelector('.navbar.navbar-light.navbar-expand-lg');
    if (navbar) {
        navbar.style.backgroundColor = '#3271C2'
        navbar.style.border = 'none';
        navbar.style.boxShadow = '0px 2px 5px #5252'
        navbar.style.height = '50px'
        // navbar.style.position = 'relative'

        const logo = navbar.querySelector('.navbar-brand');

        if (navbar) {
            if (logo) {
                logo.style.backgroundColor = '#fff'
                logo.style.borderRadius = '5px'
                // logo.style.position = 'absolute'
                // logo.style.height = '100%';
                logo.style.width = 'max-content';
                // logo.style.marginTop = '2px';
                logo.style.alignContent = 'center';


                logo.innerHTML = `
                              
                                <img src="/assets/flowtech_ui/images/transparent_samarpan.png" alt="flowtech logo" style="display:block;width:135px;">
                                `;
            }

        }
    }
}


const postLoginNavbar = () => {
    const navbars = document.getElementsByClassName('navbar');
    if (navbars.length > 0) {
        Array.from(navbars).forEach(nav => {
            if (nav.classList.contains('navbar-expand')) {
                // nav.style.background = 'linear-gradient(90deg,#007e85 0%,#007e85dc 30%,#007e85d8 60%,#007e85dc 80%,#007e85 100%)';
                nav.style.backgroundColor = '#3271C2';
                nav.style.boxShadow = '0px 2px 5px #5252';
                nav.style.height = '50px'


                const navContainer = nav.querySelector('.container');
                // if (navContainer) {
                //     const logo = navContainer.querySelector('.navbar-brand.navbar-home')
                //     if (logo) {
                //         logo.style.marginTop = '6px'
                //         logo.innerHTML = `
                //                         <span style="padding:1px; border-radius:5px; display:inline-block;align-content:center;width:max-content;height:auto;background:#ffff;">
                //                 <img src="/assets/flowtech_ui/images/transparent_samarpan.png" alt="flowtech logo" style="display:block;">
                //                 </span>
                //                         `;

                //     }
                //     const navSubdiv = document.querySelector('.collapse.navbar-collapse.justify-content-end')
                //     searchtab(navSubdiv);
                //     notificationstab(navSubdiv);
                //     helpsection(navSubdiv);
                //     avatar(navSubdiv);
                // }
                if (navContainer) {
                    const logo = navContainer.querySelector('.navbar-brand.navbar-home');

                    if (logo) {
                        logo.style.marginTop = '6px';
                        logo.innerHTML = `
        <span style="
            display:inline-block;
            background:#fff;
            border-radius:6px;
            perspective:800px;
            padding:1px;
            boxShadow = '0px 0px 5px #525252';

        ">
            <div class="cube" style="
                width:150px;
                height:40px;
                position:relative;
                transform-style:preserve-3d;
                transition:transform 1.2s cubic-bezier(0.4,0,0.2,1);
            ">
                <!-- FRONT -->
                <img src="/assets/flowtech_ui/images/transparent_samarpan.png"
                     style="
                        position:absolute;
                        top:50%;
                        left:50%;
                        width:100%;
                        height:max-content;
                        object-fit:contain;
                        object-position:center;
                        backface-visibility:hidden;
                        transform: translate(-50%, -50%) translateZ(20px);
                     ">

                <!-- BACK -->
                <img src="/assets/flowtech_ui/images/flowtech_logo.png"
                     style="
                        position:absolute;
                        top:50%;
                        left:50%;
                        width:170px;
                        height:max-content;
                        object-fit:contain;
                        object-position:center;
                        backface-visibility:hidden;
                        transform: translate(-50%, -50%) rotateX(180deg) translateZ(20px);
                     ">
            </div>
        </span>
        `;

                        const cube = logo.querySelector('.cube');
                        let flipped = false;

                        // Flip every 3 seconds
                        setInterval(() => {
                            flipped = !flipped;
                            cube.style.transform = flipped ? 'rotateX(180deg)' : 'rotateX(0deg)';
                        }, 5000);
                    }

                    const navSubdiv = document.querySelector('.collapse.navbar-collapse.justify-content-end');
                    searchtab(navSubdiv);
                    notificationstab(navSubdiv);
                    helpsection(navSubdiv);
                    avatar(navSubdiv);
                }




            }
        });
    } else {
        setTimeout(postLoginNavbar, 100);
    }
}



const searchtab = (navSubdiv) => {
    const shortcutSearch = navSubdiv.querySelector('.input-group.search-bar.text-muted');
    const seacrchIcon = shortcutSearch.querySelector('.search-icon')
    if (shortcutSearch) {
        const awesomplete = document.querySelector('.awesomplete')
        {
            if (awesomplete) {
                awesomplete.style.backgroundColor = '#fff'
                awesomplete.style.boxShadow = '0px 0px 5px #888'
                awesomplete.style.borderRadius = '5px';
                const inputTag = awesomplete.querySelector('input')
                {
                    if (inputTag) {
                        inputTag.style.backgroundColor = '#fff'
                    }
                }
            }
        }
    }
    if (seacrchIcon) {
        const searchSvg = seacrchIcon.querySelector('svg');
        if (searchSvg) {
            searchSvg.style.stroke = '#888'
            searchSvg.style.strokeWidth = '1.5px'
        }
    }
}

const notificationstab = (navSubdiv) => {
    const notifications = navSubdiv.querySelector('.navbar-nav');
    if (notifications) {
        const notificationdiv = notifications.querySelector('.btn-reset.nav-link.notifications-icon.text-muted')
        if (notificationdiv) {
            notificationdiv.style.padding = '2px'
            notificationdiv.style.border = '1px solid #ccc'
            notificationdiv.style.borderRadius = '3px';
            notificationdiv.innerHTML = `<img src='/assets/flowtech_ui/images/bell.png' alt='bell icon' style="height:16px;"/>`
        }
        const notificationsBox = notifications.querySelector('.dropdown-menu.notifications-list.dropdown-menu-right');
        if (notificationsBox) {
            notificationsBox.style.marginTop = '17px'
            notificationsBox.style.marginLeft = '5px'
            notificationsBox.style.boxShadow = '0px 0px 7px grey';
            notificationsBox.style.borderRadius = '5px'
            notificationsBox.style.backgroundColor = '#fff'

            const dropdownHead = notificationsBox.querySelector('.notification-list-header');
            const notificationHeadButtons = dropdownHead.querySelector('.header-actions')
            if (dropdownHead) {
                dropdownHead.style.borderBottom = '1px solid #464545ff'
                const categories = dropdownHead.querySelectorAll('.notifications-category');
                const applyStyles = () => {
                    categories.forEach(cat => {
                        cat.style.color = '#464545ff';
                        cat.style.borderBottom = 'none';
                        cat.style.transition = 'color 0.5s, border-bottom 0.5s';
                    });
                    const active = dropdownHead.querySelector('.notifications-category.active');
                    if (active) {

                        active.style.color = '#3271C2';
                        active.style.borderBottom = '1px solid #3271C2';
                        active.style.transition = 'color 0.5s, border-bottom 0.5s';
                    }
                };
                applyStyles();

                const observer = new MutationObserver(() => {
                    applyStyles();
                });
                observer.observe(dropdownHead, {
                    subtree: true,
                    attributes: true,
                    attributeFilter: ['class']
                });
            }
            if (notificationHeadButtons) {
                const icons = notificationHeadButtons.querySelectorAll('span');

                if (icons) {

                    const iconslist = Array.from(icons)
                    iconslist.map((a) => {
                        a.style.border = '1px solid #ccc';
                        a.style.borderRadius = '3px';
                        a.style.padding = '2px';
                        const svgicons = a.querySelector('svg')
                        if (svgicons) {

                            svgicons.style.stroke = '1b1b1be3';
                            svgicons.style.strokeWidth = '1.5px'
                        }
                    })
                }
            }

        }
    }
}

const helpsection = (navSubdiv) => {
    const helpSection = navSubdiv.querySelector('.nav-item.dropdown.dropdown-help.dropdown-mobile.d-none.d-lg-block')
    if (helpSection) {
        const help = helpSection.querySelector('button span');
        const helpSvg = helpSection.querySelector('button span>svg');
        if (help) {
            help.style.color = '#fff';
            if (helpSvg) {
                helpSvg.style.stroke = '#fff';
                helpSvg.style.strokeWidth = '1.5px';

            }
        }
    }
    const helpDropdown = helpSection.querySelector('.dropdown-menu.dropdown-menu-right')
    const dropdownitem = helpSection.querySelectorAll('.dropdown-item')
    if (helpDropdown) {
        helpDropdown.style.marginTop = '18px';
        helpDropdown.style.boxShadow = '0px 0px 7px grey';
        helpDropdown.style.borderRadius = '5px'
        helpDropdown.style.backgroundColor = '#fff'
        if (dropdownitem) {
            dropdownitem.forEach(item => {
                item.style.color = '#383838';
                item.style.borderRadius = '5px';

                item.addEventListener('mouseenter', () => {
                    item.style.color = '#fff';
                    item.style.background = 'linear-gradient(135deg, #3271C2, #163E76)'
                });

                item.addEventListener('mouseleave', () => {
                    item.style.background = 'transparent';
                    item.style.color = '#383838';

                });
            });
        }


    }

}



const avatar = (navSubdiv) => {
    const avatarsection = navSubdiv.querySelector('.nav-item.dropdown.dropdown-navbar-user.dropdown-mobile');
    if (!avatarsection) return;

    const button = avatarsection.querySelector('.btn-reset.nav-link');
    const dropdown = avatarsection.querySelector('.dropdown-menu.dropdown-menu-right');
    if (!dropdown) return;

    const dropdownItems = dropdown.querySelectorAll('.dropdown-item');

    if (button) {
        const avtarbtn = button.querySelector('.avatar.avatar-medium div');
        if (avtarbtn) {
            avtarbtn.style.backgroundColor = '#fff';
            avtarbtn.style.color = '#2385c2';
            avtarbtn.style.textTransform = 'uppercase';
            avtarbtn.style.fontWeight = '500';
        }
    }

    dropdown.style.marginTop = '18px';
    dropdown.style.boxShadow = '0px 0px 7px grey';
    dropdown.style.borderRadius = '5px';
    dropdown.style.backgroundColor = '#fff';

    const logoutBtn = dropdown.querySelector('.dropdown-item[onclick="return frappe.app.logout()"]');

    if (logoutBtn) {
        logoutBtn.style.borderRadius = '5px';
        logoutBtn.style.color = '#383838';


        logoutBtn.addEventListener('mouseenter', () => {
            logoutBtn.style.background = '#e63946';
            logoutBtn.style.color = '#fff';
        });

        logoutBtn.addEventListener('mouseleave', () => {
            logoutBtn.style.background = 'transparent';
            logoutBtn.style.color = '#383838';

        });
    }

    dropdownItems.forEach(item => {

        if (item === logoutBtn) return;

        item.style.color = '#383838';
        item.style.borderRadius = '5px';

        item.addEventListener('mouseenter', () => {
            item.style.color = '#fff';
            item.style.background = 'linear-gradient(135deg, #3271C2, #163E76)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.background = 'transparent';
            item.style.color = '#383838';
        });
    });
};


const target = document.querySelector('.navbar-collapse.collapse');

if (target) {
    const observer = new MutationObserver(() => {
        if (target.classList.contains('show')) {
            target.style.zIndex = '999999';
            target.style.background = '#fff';

            target.style.borderRadius = '5px';
            target.style.marginTop = '16px';
            target.style.boxShadow = '0 0px 5px grey';
        }
    });

    observer.observe(target, {
        attributes: true,
        attributeFilter: ['class']
    });
}



preloginNavbar();
postLoginNavbar();

const observeHelpDropdown = () => {
    const waitForDropdown = setInterval(() => {
        const helpDropdown = document.querySelector('.nav-item.dropdown.dropdown-help.dropdown-mobile.d-none.d-lg-block .dropdown-menu.dropdown-menu-right');

        if (helpDropdown) {
            clearInterval(waitForDropdown);
            helpDropdown.style.marginTop = '18px';
            helpDropdown.style.boxShadow = '0px 0px 7px grey';
            helpDropdown.style.borderRadius = '5px';
            helpDropdown.style.backgroundColor = '#fff';

            const styleDropdownItems = (items) => {
                items.forEach(item => {
                    item.style.color = '#383838';
                    item.style.borderRadius = '5px';

                    item.addEventListener('mouseenter', () => {
                        item.style.color = '#fff';
                        item.style.background = 'linear-gradient(135deg, #3271C2, #163E76)';
                    });

                    item.addEventListener('mouseleave', () => {
                        item.style.background = 'transparent';
                        item.style.color = '#383838';
                    });
                });
            };

            const initialItems = helpDropdown.querySelectorAll('.dropdown-item');
            if (initialItems.length > 0) styleDropdownItems(initialItems);

            const observer = new MutationObserver((mutationsList) => {
                mutationsList.forEach(mutation => {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1 && node.matches('.dropdown-item')) {
                            styleDropdownItems([node]);
                        }

                        if (node.nodeType === 1) {
                            const nestedItems = node.querySelectorAll('.dropdown-item');
                            if (nestedItems.length > 0) styleDropdownItems(nestedItems);
                        }
                    });
                });
            });

            observer.observe(helpDropdown, {
                childList: true,
                subtree: true
            });
        }
    }, 100);
};

document.addEventListener('DOMContentLoaded', () => {
    observeHelpDropdown();
});


// const flowtechlogo = () => {
//     const pageactions = document.querySelector('.flex.col.page-actions.justify-content-end');

//     // if (!pageactions) return;

//     // Prevent adding logo twice
//     if (pageactions.querySelector('.flowtech-logo'))
//         {
//             pageactions.querySelector('.flowtech-logo').remove()
//         };

//     // Add spacing to the previous last element
//     const lastChild = pageactions.lastElementChild;
//     if (lastChild) {
//         lastChild.style.marginRight = "20px";
//     }

//     // Create logo
//     const logo = document.createElement('img');
//     logo.src = '/assets/flowtech_ui/images/flowtech_logo.png';
//     logo.classList.add('flowtech-logo');
//     logo.style.height = '35px';

//     pageactions.appendChild(logo);
// };




// // // Initial load
// document.addEventListener('DOMContentLoaded', flowtechlogo);

// // Mutation observer
// const logoobserver = new MutationObserver(flowtechlogo);

// logoobserver.observe(document.body, {
//     childList: true,
//     subtree: true
// });








