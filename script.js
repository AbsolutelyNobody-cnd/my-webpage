// Define the data object containing the content for the template
const data = {
    title: "Welcome to CS3210 Template Engine Lab",
    content: "This is a simple template engine demonstration.",
    author: "Dr.Red",
};

// Function to render the template by replacing placeholders with data values
function renderTemplate(template, data) {
    for (const key in data) {
        // Use a regular expression to find placeholders in the template
        const regex = new RegExp('{{' + key + '}}', 'g');
        template = template.replace(regex, data[key]); // Replace placeholders with actual data
    }
    return template; // Return the updated template
}

// Define the HTML template string with placeholders for dynamic data
const template = `
    <h3>{{title}}</h3>
    <p>{{content}}</p>
    <p>Author: {{author}}</p>
`;

// Select the element where the rendered template will be displayed
const app = document.getElementById('app');

// Use the renderTemplate function to process the template and update the DOM
app.innerHTML = renderTemplate(template, data);
