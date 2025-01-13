const settingsButton = document.getElementById('settings-button');
settingsButton.addEventListener('click', function() {
    chrome.tabs.create({ url: 'settings.html' });
});

const defaultButton = document.getElementById('default-button');
defaultButton.addEventListener('click', function() {
    chrome.tabs.create({ url: 'defaultInput.html' });
});


function importData(file) {
    const reader = new FileReader();

    reader.onload = (event) => {
        try {
            const importedData = JSON.parse(event.target.result);

            // Validate the imported data (optional)
            if (typeof importedData === 'object') {
                chrome.storage.local.set(importedData, () => {
                    console.log('Data imported successfully.');
                    alert('Data imported successfully!');
                });
            } else {
                alert('Invalid data format!');
            }
        } catch (error) {
            console.error('Error importing data:', error);
            alert('Failed to import data. Please check the file format.');
        }
    };

    reader.readAsText(file);
}

// Example: Attach importData to a file input
document.getElementById('importFileInput').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        importData(file);
    }
});


function exportData() {
    chrome.storage.local.get(null, (data) => {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        // Create a link element to trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'extension-data.json'; // File name for the exported data
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}

// Example: Attach exportData to a button
document.getElementById('exportButton').addEventListener('click', exportData);
