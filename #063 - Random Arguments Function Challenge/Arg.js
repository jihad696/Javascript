function showDetails(x, y, z) {
    let arr = [x, y, z];

    let name;
    let age;
    let hire;

    for (let i = 0; i < arr.length; i++) {

        typeof arr[i] === "string"
            ? (name = arr[i])
            : typeof arr[i] === "number"
            ? (age = arr[i])
            : typeof arr[i] === "boolean"
            ? (hire = arr[i])
            : null;
    }

    console.log(
        `Hello ${name}, Your Age Is ${age}, You Are ${
            hire ? "Available" : "Not Available"
        } For Hire`
    );
}


showDetails("Gehad", 8, true);
showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

