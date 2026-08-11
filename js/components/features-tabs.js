function initFeatureTabs() {

    const tabs =
        document.querySelectorAll(
            ".feature-tab"
        );

    const panels =
        document.querySelectorAll(
            ".feature-panel"
        );


    if (!tabs.length || !panels.length) {
        return;
    }


    function showPanel(tabId) {

        // Hide all panels

        panels.forEach((panel) => {

            panel.classList.add("hidden");

        });


        // Remove active style from tabs

        tabs.forEach((tab) => {

            tab.classList.remove(
                "text-blue-600",
                "font-semibold"
            );

            tab.classList.add(
                "text-gray-900"
            );

        });


        // Show selected panel

        const selectedPanel =
            document.querySelector(
                `[data-panel="${tabId}"]`
            );


        if (selectedPanel) {

            selectedPanel.classList.remove(
                "hidden"
            );

        }


        // Active tab

        const selectedTab =
            document.querySelector(
                `[data-tab="${tabId}"]`
            );


        if (selectedTab) {

            selectedTab.classList.remove(
                "text-gray-900"
            );

            selectedTab.classList.add(
                "text-blue-600",
                "font-semibold"
            );

        }

    }


    tabs.forEach((tab) => {

        tab.addEventListener(
            "click",
            () => {

                const tabId =
                    tab.dataset.tab;

                showPanel(tabId);

            }
        );

    });


    // First tab active initially

    showPanel(
        tabs[0].dataset.tab
    );

}