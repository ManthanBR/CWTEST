window.addEventListener("zappar-sns-ready", function () {
    console.log("Zappar SNS ready event fired!");

    const targetNode = document.getElementById('ZapparSnapshotContainer');

    if (!targetNode) {
        console.error("Zappar Snapshot container not found");
        return;
    }

    const observer = new MutationObserver(function (mutationsList, observer) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                console.log("child list mutated, checking for download button");
                const saveButton = document.getElementById('zapparSaveButton');
                if (saveButton) {
                    console.log("Save button found!");
                    // Remove the initial download attribute
                    saveButton.removeAttribute('download');
                    // Set the custom download attribute
                    saveButton.setAttribute('download', 'MyCustomVideoName.mp4');
                    console.log("Save button download attribute set to MyCustomVideoName.mp4");
                    observer.disconnect();
                    return;
                }
            }
        }
    });
    observer.observe(targetNode, { childList: true, subtree: true });
});
