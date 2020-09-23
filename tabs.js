const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
    console.log(event.currentTarget)
    // SUDO code - write what are you trying to do
        // hide all tab panels
        tabPanels.forEach(panel => {panel.hidden = true});

        // mark all tabs as unselected
        tabButtons.forEach(tab => {
            // b.ariaSelected = false;
            // above doesn't work - aria specific; need to use setAttribute
            tab.setAttribute('aria-selected', false);
        })

        //mark the clicked tab as selected
        event.currentTarget.setAttribute('aria-selected', true);

        // find the associated tab panel and show it!
        const {id} = event.currentTarget;
        console.log(id);

        // method #1
        // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
        // tabPanel.hidden = false;

        // method #2 - find in the array of tabPanels
        const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id);
        console.log(tabPanel);
        tabPanel.hidden = false;
};

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));