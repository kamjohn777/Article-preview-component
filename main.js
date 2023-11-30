const shareIconDiv = document.getElementById('share-icon-div');
const socialIconDiv = document.getElementById('content');

shareIconDiv.addEventListener('click', function() {
    socialIconDiv.classList.toggle('show');
})

document.addEventListener('click', function(e) {
    if (!shareIconDiv.contains(e.target) && !socialIconDiv.contains(e.target)) {
        socialIconDiv.classList.remove('show');
    }
})

