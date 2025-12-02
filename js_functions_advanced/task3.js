function divide(numerator, denominator) {
    if (denominator === 0) {
    throw new Error("Denominator cannot be zero");
    }
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error("Both numerator and denominator must be numbers");
    }
    return numerator / denominator;
}

try {
    console.log(divide(20, 5));
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Division completed");
}

try {
    console.log(divide(30, 0));
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Division completed");
}

try {
    console.log(divide(40, "a"));
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Division completed");
}