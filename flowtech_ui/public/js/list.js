
const sortselection = () => {
    const filterflex = document.querySelector('.filter-section.flex');
    if (!filterflex) return;

    const filterselectors = filterflex.querySelectorAll('.sort-selector');
    if (filterselectors.length === 0) return;

    filterselectors.forEach(selector => {
        const orderButton = selector.querySelector('.btn-order');
        const ordertext = selector.querySelector('.sort-selector-button');
        const dropdown = selector.querySelector('.dropdown-menu.dropdown-menu-right')
        if (!orderButton) return;
        orderButton.style.padding = '3px';
        orderButton.style.marginRight = '2px';
        orderButton.style.borderRadius = '5px';
        orderButton.style.boxShadow = '0px 0px 3px grey';

        if (ordertext) {
            ordertext.style.backgroundColor = '#3271c2';
            ordertext.style.color = '#fff';
            ordertext.style.marginRight = '2px';
            ordertext.style.borderRadius = '5px';
            ordertext.style.boxShadow = '0px 0px 3px grey';

            ordertext.addEventListener('mouseover', () => {
                ordertext.style.backgroundColor = '#525252';
                ordertext.style.color = '#fff';
            })
            ordertext.addEventListener('mouseout', () => {
                ordertext.style.backgroundColor = '#3271c2';
                ordertext.style.color = '#fff';
            })
            if (dropdown) {
                const dropdownactions = dropdown.querySelectorAll('.dropdown-item.option')
                if (dropdownactions) {
                    dropdownactions.forEach((options) => {
                        options.style.color = '#383838'
                        options.style.transition = '500ms'


                        options.addEventListener('mouseover', () => {
                            const currentWidth = options.getBoundingClientRect().width;
                            options.style.background = 'linear-gradient(135deg, #3271C2, #163E76)'
                            options.style.color = '#fff'
                            options.style.marginLeft = '10px'
                            options.style.width = (currentWidth - 10) + 'px';
                        })
                        options.addEventListener('mouseout', () => {
                            options.style.background = 'transparent';
                            options.style.color = '#383838';
                            options.style.marginLeft = '0px'
                            const currentWidth = options.getBoundingClientRect().width;
                            options.style.width = (currentWidth) + 'px';
                        })
                    })
                }
                dropdown.style.backgroundColor = '#fff'
                dropdown.style.borderRadius = '5px'
                dropdown.style.boxShadow = '0px 0px 4px #888'
            }
        }

        const sortselectorsvg = selector.querySelector('.sort-order');
        if (sortselectorsvg) sortselectorsvg.style.display = 'none';

        let img = orderButton.querySelector('img');
        if (!img) {
            img = document.createElement('img');
            img.style.width = '20px';
            img.style.height = '20px';
            img.style.objectFit = 'contain';
            img.style.marginLeft = '3px';
            img.style.marginTop = '-2px';
            orderButton.appendChild(img);
        }

        if (orderButton.dataset.sortState === undefined) {
            orderButton.dataset.sortState = orderButton.getAttribute('data-value') || 'asc';
        }

        const updateSortIcon = () => {
            const sortValue = orderButton.dataset.sortState;
            if (sortValue === 'asc') {
                img.src = '/assets/flowtech_ui/images/sort-asc.png';
                img.alt = 'Ascending';
            } else {
                img.src = '/assets/flowtech_ui/images/sort-desc.png';
                img.alt = 'Descending';
            }
            orderButton.style.backgroundColor = '#3271c2';
            orderButton.style.color = '#fff';
        };

        updateSortIcon();

        if (!orderButton.dataset.listenerAttached) {
            orderButton.addEventListener('click', () => {
                orderButton.dataset.sortState = orderButton.dataset.sortState === 'asc' ? 'desc' : 'asc';

                updateSortIcon();
            });
            orderButton.dataset.listenerAttached = 'true';
        }
    });
};

document.addEventListener("DOMContentLoaded", sortselection);

const sortobserver = new MutationObserver(sortselection);
sortobserver.observe(document.body, {
    childList: true,
    subtree: true
});

const filterselection = () => {
    const filterflex = document.querySelector('.filter-section.flex');
    if (!filterflex) return;

    const filterselectors = filterflex.querySelector('.filter-selector');
    if (filterselectors.length === 0) return;

    const buttongroup = filterselectors.querySelector('.btn-group');
    if (!buttongroup) return;
    const buttons = buttongroup.querySelectorAll('button');
    const button = buttongroup.querySelector('button');
    if (button) {

        button.addEventListener('mouseover', () => {
            button.style.background = '#383838'
            button.style.color = '#fff'

        })
        button.addEventListener('mouseout', () => {
            button.style.background = '#3271c2';
            button.style.color = '#fff';


        })
    }
    if (!buttons) return;
    buttons.forEach((button) => {
        button.style.background = '#3271c2'
        button.style.color = '#fff'
        button.style.marginLeft = '2px'
        button.style.borderRadius = '5px'
        button.style.boxShadow = '0px 0px 4px #888'
    })

    const filtericon = filterselectors.querySelector('.filter-icon svg');
    if (filtericon) {
        filtericon.style.stroke = '#fff'
        filtericon.style.strokeWidth = '1.5px'
    }
    const filterXicon = filterselectors.querySelector('.filter-x-button svg');
    if (filterXicon) {
        filterXicon.style.stroke = '#fff'
        filterXicon.style.strokeWidth = '1.5px'
        filterXicon.style.marginTop = '-2px'
    }
    const filterlabel = buttongroup.querySelector('.filter-label')
    if (!filterlabel) return;
    filterlabel.style.borderRadius = '5px';
    filterlabel.style.boxShadow = '0px 0px 5px #888';
    filterlabel.style.textAlign = 'center';
    filterlabel.style.alignContent = 'center';




}

document.addEventListener("DOMContentLoaded", filterselection);

const filterobserver = new MutationObserver(filterselection);
filterobserver.observe(document.body, {
    childList: true,
    subtree: true
});


const filterDialog = () => {
    const popper = document.querySelector('.popover-body.popover-content')
    if (popper) {
        popper.style.borderRadius = '4px'
        popper.style.boxShadow = '0px 0px 5px #888'
        const filterarea = document.querySelector('.filter-area');
        if (filterarea) {
            const addfilter = document.querySelector('.add-filter');
            const clearfilter = document.querySelector('.clear-filters');
            const applyfilters = document.querySelector('.apply-filters');
            if (addfilter) {
                addfilter.style.backgroundColor = '#3271c2'
                addfilter.style.borderRadius = '4px'
                addfilter.style.boxShadow = '0px 0px 5px #888'
                addfilter.style.color = '#fff'
                addfilter.style.setProperty('color', '#fff', 'important');
            }
            if (clearfilter) {
                clearfilter.style.backgroundColor = 'rgb(253, 0, 0)'
                clearfilter.style.color = '#fff'
                clearfilter.style.borderRadius = '4px'
                clearfilter.style.boxShadow = '0px 0px 5px #888'
            }
            if (applyfilters) {
                applyfilters.style.backgroundColor = '#349e21ff'
                applyfilters.style.color = '#fff'
                applyfilters.style.borderRadius = '4px'
                applyfilters.style.boxShadow = '0px 0px 5px #888'
            }
        }
    }
}


document.addEventListener("DOMContentLoaded", filterDialog);

const filterDialogobserver = new MutationObserver(filterDialog);
filterDialogobserver.observe(document.body, {
    childList: true,
    subtree: true
});


const standardfilters = () => {
    const filterDivs = document.querySelectorAll('.standard-filter-section.flex > .form-group > input');

    if (filterDivs.length > 0) {
        filterDivs.forEach(div => {
            div.style.backgroundColor = '#fff';
            div.style.padding = '2px';
            div.style.paddingLeft = '10px';
            div.style.borderRadius = '4px';
            div.style.marginRight = '8px';
            div.style.boxShadow = '0px 0px 5px #ccc';
            div.style.transition = '500ms';

            div.addEventListener('blur', () => {
                div.style.border = '1px solid #ccc';
            });

            div.addEventListener('focus', () => {
                div.style.border = '1px solid #3271c2';
                div.style.boxShadow = 'none';
            });
        });
    }

    const linkInputs = document.querySelectorAll(
        '.standard-filter-section.flex .form-group .link-field input'
    );

    linkInputs.forEach(div => {

        div.style.backgroundColor = '#fff';
        div.style.padding = '2px';
        div.style.paddingLeft = '10px';
        div.style.borderRadius = '4px';
        div.style.marginRight = '8px';
        div.style.boxShadow = '0px 0px 5px #ccc';
        div.style.transition = '500ms';
        div.addEventListener('blur', () => {
            div.style.border = '1px solid #ccc';
        });

        div.addEventListener('focus', () => {
            div.style.border = '1px solid #3271c2';
            div.style.boxShadow = 'none';
        });
    });

    const selectFields = document.querySelectorAll(
        '.standard-filter-section.flex .form-group select'
    );

    selectFields.forEach(select => {
        select.style.backgroundColor = '#fff';
        select.style.padding = '2px 10px';
        select.style.borderRadius = '4px';
        select.style.marginRight = '8px';
        select.style.boxShadow = '0px 0px 5px #ccc';
        select.style.transition = '500ms';
        select.style.cursor = 'pointer';

        select.addEventListener('blur', () => {
            select.style.border = '1px solid #ccc';
        });

        select.addEventListener('focus', () => {
            select.style.border = '1px solid #3271c2';
            select.style.boxShadow = 'none';
        });

    });
    styleAwesompleteDropdown();
};


const styleAwesompleteDropdown = () => {
    const options = document.querySelectorAll(
        '.standard-filter-section.flex .form-group .awesomplete ul div[role="option"]'
    );

    options.forEach(opt => {
        opt.style.backgroundColor = "#fff";
        opt.style.boxShadow = "0px 0px 5px #ccc";
        opt.style.padding = "5px";
        opt.style.cursor = "pointer";
        opt.style.transition = "400ms";
        opt.style.borderRadius = "5px";


        opt.addEventListener("mouseenter", () => {
            opt.style.background = "linear-gradient(135deg, #3271C2, #163E76)";
            opt.style.color = "#fff";
            opt.style.marginLeft = "10px";
        });

        opt.addEventListener("mouseleave", () => {
            opt.style.background = "#fff";
            opt.style.color = "#000";
            opt.style.marginLeft = "0px";

        });

        opt.addEventListener("mousedown", () => {
            opt.style.backgroundColor = "#3271c2";
            opt.style.color = "#fff";
        });
    });
    styleCheckboxes();
};
const styleCheckboxes = () => {
    const checkboxes = document.querySelectorAll(
        '.standard-filter-section.flex .form-group[data-fieldtype="Check"] input[type="checkbox"]'
    );

    checkboxes.forEach(chk => {

        chk.style.appearance = "none";
        chk.style.webkitAppearance = "none";
        chk.style.mozAppearance = "none";

        chk.style.width = "16px";
        chk.style.height = "16px";
        chk.style.borderRadius = "3px";
        chk.style.cursor = "pointer";
        chk.style.display = "inline-block";
        chk.style.position = "relative";
        chk.style.outline = "none";
        chk.style.transition = "200ms";

        const drawTick = () => {
            chk.style.backgroundColor = "#3271c2";
            chk.style.borderColor = "#3271c2";
            chk.style.backgroundSize = "14px 14px";

            chk.style.backgroundImage =
                "url('/assets/flowtech_ui/images/check-solid-full.svg')"

        };

        const removeTick = () => {
            chk.style.backgroundColor = "white";
            chk.style.borderColor = "#ccc";
            chk.style.backgroundImage = "none";
        };

        // Initial state
        if (chk.checked) drawTick();
        else removeTick();

        // On change event
        chk.addEventListener("change", () => {
            if (chk.checked) {
                drawTick();
            } else {
                removeTick();
            }
        });
    });
};





document.addEventListener("DOMContentLoaded", standardfilters);
const standardfiltersobserver = new MutationObserver(standardfilters);
standardfiltersobserver.observe(document.body, {
    childList: true,
    subtree: true
});

const styleListView = () => {
    const header = document.querySelector(".list-row-head");
    if (header) {
        header.style.setProperty("background-color", "#3271c2", "important");
        header.style.setProperty("color", "white", "important");
        header.style.setProperty("font-weight", "bold", "important");
        header.style.setProperty("border-radius", "4px", "important");
        const levelright = header.querySelector('.level-right')
        if (levelright) {
            levelright.style.display = 'none'
        }
    }

    const headerTexts = document.querySelectorAll(".list-row-head span, .list-row-head div");
    headerTexts.forEach(el => {
        el.style.setProperty("color", "white", "important");
        el.style.setProperty("font-weight", "bold", "important");
    });

    const headerSvgs = document.querySelector(".level-item.list-liked-by-me.hidden-xs > span > svg");
    if (headerSvgs) {
        headerSvgs.style.setProperty("stroke", "#fff", "important");
        headerSvgs.style.setProperty("fill", "white", "important");
    }

    const rows = document.querySelectorAll(".list-row");
    rows.forEach(row => {
        row.style.transition = "transform 0.25s ease, box-shadow 0.25s ease";
        const levelright = row.querySelector('.level-right')
        if (levelright) {
            levelright.style.display = 'none'
        }

        row.addEventListener("mouseenter", () => {
            row.style.transform = "scale(1.003)";
            row.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
        });

        row.addEventListener("mouseleave", () => {
            row.style.transform = "scale(1)";
            row.style.boxShadow = "none";
        });
    });

    const tickSvg = "/assets/flowtech_ui/images/check-solid-full.svg";
    const rowCheckboxes = document.querySelectorAll('.list-row .list-row-checkbox');
    const selectAllChk = document.querySelector(".list-check-all");

    if (selectAllChk) {
        selectAllChk.style.setProperty("appearance", "none", "important");
        selectAllChk.style.setProperty("width", "18px", "important");
        selectAllChk.style.setProperty("height", "18px", "important");
        selectAllChk.style.setProperty("border-radius", "3px", "important");
        selectAllChk.style.setProperty("cursor", "pointer", "important");
        selectAllChk.style.setProperty("transition", "200ms", "important");
        selectAllChk.style.setProperty("border", "2px solid #fff", "important");
        selectAllChk.style.setProperty("background-color", "transparent", "important");
        selectAllChk.style.setProperty("background-image", "none", "important");

        selectAllChk.addEventListener("change", () => {
            styleHeaderCheckbox(selectAllChk);

            rowCheckboxes.forEach(chk => {
                chk.checked = selectAllChk.checked;
                styleCheckbox(chk, tickSvg);
            });
        });

        styleHeaderCheckbox(selectAllChk);
    }

    rowCheckboxes.forEach(chk => {
        styleCheckbox(chk, tickSvg);
    });
}

const styleHeaderCheckbox = (chk) => {
    chk.style.setProperty("appearance", "none", "important");
    chk.style.setProperty("width", "18px", "important");
    chk.style.setProperty("height", "18px", "important");
    chk.style.setProperty("border-radius", "3px", "important");
    chk.style.setProperty("cursor", "pointer", "important");
    chk.style.setProperty("transition", "200ms", "important");
    chk.style.setProperty("border", "2px solid #fff", "important");
    chk.style.setProperty("background-color", "transparent", "important");
    chk.style.setProperty("background-image", "none", "important");
}

const styleCheckbox = (chk, tickSvg) => {
    chk.style.setProperty("appearance", "none", "important");
    chk.style.setProperty("webkit-appearance", "none", "important");
    chk.style.setProperty("moz-appearance", "none", "important");
    chk.style.setProperty("width", "18px", "important");
    chk.style.setProperty("height", "18px", "important");
    chk.style.setProperty("border-radius", "3px", "important");
    chk.style.setProperty("cursor", "pointer", "important");
    chk.style.setProperty("transition", "200ms", "important");

    if (chk.checked) {
        chk.style.setProperty("background-image", `url(${tickSvg})`, "important");
        chk.style.setProperty("background-size", "14px 14px", "important");
        chk.style.setProperty("background-position", "center", "important");
        chk.style.setProperty("background-repeat", "no-repeat", "important");
        chk.style.setProperty("background-color", "#3271c2", "important");
        chk.style.setProperty("border", "2px solid #3271c2", "important");
    } else {
        chk.style.setProperty("background-image", "none", "important");
        chk.style.setProperty("background-color", "transparent", "important");
        chk.style.setProperty("border", "2px solid #3271c2", "important");
    }

    chk.addEventListener("change", () => {
        styleCheckbox(chk, tickSvg);
    });
}

document.addEventListener("DOMContentLoaded", styleListView);
const listObserver = new MutationObserver(styleListView);
listObserver.observe(document.body, { childList: true, subtree: true });


const highlightButton = (button) => {
    const allButtons = document.querySelectorAll('.level-left .btn-paging');
    allButtons.forEach(btn => {
        btn.style.backgroundColor = '#fff';
        btn.style.color = '#383838';
        btn.style.border = 'none';
        btn.style.transition = 'all 0.4s ease';
    });

    button.style.backgroundColor = '#3271c2';
    button.style.color = 'white';
    button.style.borderColor = '#3271c2';
    button.style.transition = 'all 0.4s ease';
}

const attachPaginationBehavior = (button) => {
    button.addEventListener('click', () => highlightButton(button));
}

const initPaginationHighlight = () => {
    const container = document.querySelector('.level-left .btn-group');
    if (!container) return;

    const buttons = container.querySelectorAll('.btn-paging');
    buttons.forEach(attachPaginationBehavior);

    const activeButton = container.querySelector('.btn-paging.btn-info');
    if (activeButton) {
        highlightButton(activeButton);
    }
}


document.addEventListener('DOMContentLoaded', initPaginationHighlight)

const paginationobserver = new MutationObserver(initPaginationHighlight);
paginationobserver.observe(document.body, {
    childList: true,
    subtree: true
});


const rightbottombuttons = () => {
    const container = document.querySelector('.level-right button');
    if (container) {
        container.style.background = '#3271c2';
        container.style.boxShadow = '0px 0px 5px #ccc';
        container.style.borderRadius = '5px';
        container.style.color = '#ffff';
        container.style.transition = '0.2s';

        container.addEventListener('mouseover', () => {
            container.style.background = '#525252'
        })
        container.addEventListener('mouseout', () => {
            container.style.background = '#3271c2'
        })
    }



}

document.addEventListener('DOMContentLoaded', rightbottombuttons)

const buttons = new MutationObserver(rightbottombuttons);
buttons.observe(document.body, {
    childList: true,
    subtree: true
});




const styleSidebarFilters = () => {
    const sidebar = document.querySelector('.sidebar-section.filter-section');

    const groupButtons = document.querySelectorAll('.list-group-by-fields .list-sidebar-button');
    groupButtons.forEach(btn => {
        btn.style.borderRadius = "4px";
        btn.style.boxShadow = "0 0 5px #ccc";
        btn.style.backgroundColor = "#FFF";
    });

    const editFilters = document.querySelector('.add-list-group-by .add-group-by');
    if (editFilters) {

    }

    const tagButton = document.querySelector('.list-tags .list-stats .list-sidebar-button');
    if (tagButton) {
        tagButton.style.borderRadius = "4px";
        tagButton.style.backgroundColor = "#fff";
        tagButton.style.boxShadow = "0 0 4px #ccc";
    }

    const showTags = document.querySelector('.show-tags .list-tag-preview');

    const dropdowns = document.querySelectorAll('.dropdown-menu.group-by-dropdown');
    dropdowns.forEach(d => {
        d.style.borderRadius = "4px";
        d.style.boxShadow = "0 0 5px #ccc";
        d.style.padding = "5px";
        d.style.marginTop = "4px";
        const dropdownsearch = d.querySelector('input');
        if (dropdownsearch) {
            dropdownsearch.style.borderRadius = '5px';
            dropdownsearch.style.boxShadow = "0 0 5px #888";
            dropdownsearch.style.backgroundColor = "#fff";
        }
    });

    const tagsdropdown = document.querySelectorAll('.dropdown-menu.list-stats-dropdown');
    tagsdropdown.forEach(d => {
        d.style.borderRadius = "4px";
        d.style.boxShadow = "0 0 5px #ccc";
        d.style.padding = "5px";
        d.style.marginTop = "4px";
        const dropdownsearch = d.querySelector('input');
        if (dropdownsearch) {
            dropdownsearch.style.borderRadius = '5px';
            dropdownsearch.style.boxShadow = "0 0 5px #888";
            dropdownsearch.style.backgroundColor = "#fff";
        }
    });

    document.querySelectorAll(`
        .dropdown-menu.list-stats-dropdown li,
        .dropdown-menu.group-by-dropdown li,
        .dropdown-menu.list-stats-dropdown a,
        .dropdown-menu.group-by-dropdown a ,
        .dropdown-menu.list-stats-dropdown >div,
        .dropdown-menu.group-by-dropdown >div,
        .dropdown-menu.list-stats-dropdown  .stat-result > div,
        .dropdown-menu.group-by-dropdown .stat-result > li
    `).forEach(item => {
        if (item.querySelector('input') || item.tagName === 'INPUT') return;
        item.style.borderRadius = '5px';
        item.style.transition = '0.5s';

        item.onmouseenter = null;
        item.onmouseleave = null;

        item.onmouseenter = () => {
            item.style.background = 'linear-gradient(135deg, #3271C2, #163E76)';
            item.style.color = '#fff';



        };
        item.onmouseleave = () => {
            item.style.background = '#fff';
            item.style.color = '#525252';

        }
    });

    const savefilters = document.querySelector('.sidebar-section.save-filter-section');

    if (savefilters) {
        const saveinputs = savefilters.querySelectorAll('input');
        if (saveinputs) {
            saveinputs.forEach(data => {
                data.style.background = '#fff'
                data.style.borderRadius = '4px'
                data.style.boxShadow = '0px 0px 5px #ccc'
                data.style.color = 'black';

            }
            )
        }
    }

    const newfilters = document.querySelectorAll('.list-link.filter-pill.list-sidebar-button.btn.btn-default');
    if (newfilters) {
        newfilters.forEach(data => {
            data.style.background = '#fff'
            data.style.borderRadius = '5px'
            data.style.boxShadow = '0px 0px 5px #ccc';
        }
        )
    }

};

document.addEventListener("DOMContentLoaded", styleSidebarFilters);

const sidebarObserver = new MutationObserver(styleSidebarFilters);
sidebarObserver.observe(document.body, {
    childList: true,
    subtree: true
});