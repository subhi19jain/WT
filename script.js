const form = document.getElementById("bookForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        book: document.getElementById("book").value.trim(),
        message: document.getElementById("message").value.trim()
    };

    // Validation
    if (!data.name || !data.email || !data.book) {
        statusText.textContent = " Please fill all required fields.";
        statusText.style.color = "red";
        return;
    }

    statusText.textContent = "Submitting...";
    statusText.style.color = "black";

    try {
        const response = await fetch("https://httpbin.org/post", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error("Failed");

        statusText.textContent = "Your request has been submitted successfully!";
        statusText.style.color = "green";
        form.reset();

    } catch (error) {
        statusText.textContent = " Submission failed. Please try again.";
        statusText.style.color = "orange";
    }
});
