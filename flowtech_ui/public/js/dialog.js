const styleCustomModal = () => {
    document.querySelectorAll('.modal.show').forEach(modal => {
        if (modal.dataset.styledModal === 'true') return;
        modal.style.alignContent = 'center'
        const dialog = modal.querySelector('.modal-dialog');
        if (dialog) {
            dialog.style.borderRadius = '5px';
            dialog.style.border = 'none';
            dialog.style.backgroundColor = '#ffffff';
            dialog.style.boxShadow = '0px 0px 2px #ccc';
            dialog.style.padding = '0px';
        }

        const header = modal.querySelector('.modal-header');
        if (header) {
            header.style.backgroundColor = '#3271c2';
            header.style.color = '#ffffff';
            header.style.borderRadius = '2px';
            header.style.textAlign = 'center';
            header.querySelectorAll('h4').forEach(h4 => h4.style.color = '#ffffff');

            header.querySelectorAll('.btn-modal-close svg').forEach(svg => {
                const img = document.createElement('img');
                img.src = '/assets/flowtech_ui/images/xmark.svg';
                img.style.width = '20px';
                img.style.height = '20px';
                svg.replaceWith(img);
            });
        }
        modal.querySelectorAll('input[type="text"], input[type="number"], input[type="email"], input[type="password"], textarea, select').forEach(input => {
            if (input.type === 'checkbox') return;

            input.style.borderRadius = '5px';
            input.style.backgroundColor = '#fff';
            input.style.boxShadow = '0px 0px 3px #ccc';
            input.style.border = '1px solid #ccc';
            input.style.padding = '5px 10px';
        });

        modal.querySelectorAll('.section-head.collapsible').forEach(header => {
            if (header.classList.contains('collapsed')) {
                header.style.color = '#3271c2';
                header.style.borderRadius = '5px';
            }
        });


        modal.querySelectorAll('.modal-footer .btn').forEach(btn => {
            if (btn.dataset.styledBtn === 'true') return;

            if (btn.textContent.trim() === 'Save') {
                btn.style.backgroundColor = '#249225';
                btn.style.color = '#ffffff';
                btn.style.borderRadius = '3px';
                btn.style.border = 'none';
                btn.style.boxShadow = '0px 0px 5px #ccc';


                // Hover effect
                btn.addEventListener('mouseenter', () => btn.style.backgroundColor = '#05a308ff');
                btn.addEventListener('mouseleave', () => btn.style.backgroundColor = '#249225');
            } else if (btn.textContent.trim() === 'Edit Full Form' || btn.textContent.trim() === 'Edit') {
                btn.style.backgroundColor = '#3271c2';
                btn.style.color = '#fff';
                btn.style.border = 'none';
                btn.style.borderRadius = '3px';
                btn.style.boxShadow = '0px 0px 5px #ccc';

                // Hover effect
                btn.addEventListener('mouseenter', () => btn.style.backgroundColor = '#dc3545');
                btn.addEventListener('mouseleave', () => btn.style.backgroundColor = '#3271c2');
            } else {
                btn.style.backgroundColor = '#3271c2';
                btn.style.color = '#ffffff';
                btn.style.borderRadius = '3px';
                btn.style.boxShadow = '0px 0px 5px #ccc';
            }

            btn.dataset.styledBtn = 'true';
        });

        modal.dataset.styledModal = 'true';
    });
};

document.addEventListener('DOMContentLoaded', styleCustomModal);

const modalObserver = new MutationObserver(() => styleCustomModal());
modalObserver.observe(document.body, { childList: true, subtree: true });