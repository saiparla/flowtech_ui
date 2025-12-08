
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

