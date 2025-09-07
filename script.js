document.addEventListener('DOMContentLoaded', () => {
    const projectTitles = document.querySelectorAll('.project-title');

    projectTitles.forEach(title => {
        title.addEventListener('click', () => {
            // Close all other descriptions
            projectTitles.forEach(otherTitle => {
                const otherDesc = otherTitle.nextElementSibling;
                if (otherTitle !== title && otherDesc.style.display === 'block') {
                    otherDesc.style.display = 'none';
                }
            });

            // Toggle the clicked description
            const description = title.nextElementSibling;
            if (description.style.display === 'block') {
                description.style.display = 'none';
            } else {
                description.style.display = 'block';
            }
        });
    });
});
