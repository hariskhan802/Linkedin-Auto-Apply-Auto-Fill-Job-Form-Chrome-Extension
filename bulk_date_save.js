chrome.storage.local.get('inputFieldConfigs', function(test) {
    let results = []
    test.inputFieldConfigs.forEach(el => {
        if(el.placeholderIncludes.toLowerCase().includes('salary')){
            results.push(
                {
                    "count": el.count,
                    "defaultValue": 600000,
                    "placeholderIncludes": el.placeholderIncludes
                }
            )
        }else {
            results.push(
                {
                    "count": el.count,
                    "defaultValue": el.defaultValue,
                    "placeholderIncludes": el.placeholderIncludes
                }
            )
        }
        
    })
    
})