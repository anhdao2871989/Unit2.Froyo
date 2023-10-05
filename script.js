function countFlavors() {
    // Get the input value and split it into an array
    const inputElement = document.getElementById("flavorsInput");
    const inputText = inputElement.value;
    const flavorsArray = inputText.split(",");

    // Create an object to store flavor counts
    const flavorCounts = {};

    // Loop through the flavors and count them
    for (const flavor of flavorsArray) {
        const trimmedFlavor = flavor.trim(); // Remove leading/trailing spaces
        if (trimmedFlavor !== "") {
            if (flavorCounts[trimmedFlavor]) {
                flavorCounts[trimmedFlavor]++;
            } else {
                flavorCounts[trimmedFlavor] = 1;
            }
        }
    }

    // Display the results in the browser console
    console.log("Flavor Counts:");
    console.table(flavorCounts);
}
