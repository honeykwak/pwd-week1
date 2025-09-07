document.addEventListener('DOMContentLoaded', () => {
    // Project description accordion logic
    const projectTitles = document.querySelectorAll('.project-title');
    projectTitles.forEach(title => {
        title.addEventListener('click', () => {
            const description = title.nextElementSibling;
            const isVisible = description.style.display === 'block';
            
            // Close all descriptions
            document.querySelectorAll('.description').forEach(desc => {
                desc.style.display = 'none';
            });

            // Toggle the clicked one
            if (!isVisible) {
                description.style.display = 'block';
            }
        });
    });

    // Profile picture toggle logic
    const profilePic = document.getElementById('profile-pic');
    if (profilePic) {
        const picSources = [
            'https://just-publish-kjh-4-1.s3.us-east-1.amazonaws.com/for-profile/test1.jpeg',
            'https://just-publish-kjh-4-1.s3.us-east-1.amazonaws.com/for-profile/test2.jpeg'
        ];
        let currentPicIndex = 0;

        profilePic.addEventListener('click', () => {
            currentPicIndex = (currentPicIndex + 1) % picSources.length;
            profilePic.src = picSources[currentPicIndex];
        });
    }
});
