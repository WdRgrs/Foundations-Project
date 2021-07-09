document.getElementById('aboutwade').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw2" src="/pictures/gator"/>'
    document.getElementById('date').innerHTML = 'Current : '
    document.getElementById('location').innerHTML = 'Full-Stack Web Dev Student'
    document.getElementById('title').innerHTML = 'About : '
    document.getElementById('blurb').innerHTML = "Howdy! I'm Wade, currently a full time student with aspirations of becoming a full-stack web developer!  I have coding experience with JavaScript, HTML5, CSS3, Git, Github, Heroku and even some design experience with Figma.  Before I got the coding bug, I was working as a travelling industrial welder which took me all over domestically, and even outside of the country a little bit.  After over a decade of burning up anything that came within a 20 foot radius of me, I've decided to hang up the full-time welding hood, although I'm still open to smaller projects.  Outside of work life, I'm forever a curious and adventerous person with hobbies including anything from scuba-diving, photography, multi-day camping/hiking excursions and catching up on the latest video games.  I will forever be a lifelong student, although I really enjoy sharing accomplishments and experiences with those around, and it wouldn't be a surprise to any who know me if I end up teaching someday."
}  
     
document.getElementById('projects').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<a href="https://www.youtube.com/watch?v=TyiiZmUncbA" target="_blank"><img id="fw3" src="/pictures/currentproject"/></a>'
    document.getElementById('date').innerHTML = '<p>Current Projects :</p>'
    document.getElementById('location').innerHTML = 'Perma Chat Box'
    document.getElementById('title').innerHTML = '<a href="https://github.com/WdRgrs/Foundations-Project" target="_blank"><img id="fw4" src="/pictures/github"/></a>'
    document.getElementById('blurb').innerHTML = "The goal here was to create a dynamic website that hosted different pages, pisctures and content with the main focus being a 'comment box'.  This project was a midterm project for DevMountain's developer students, as an end to our general schooling, just prior to our specilizations.  The project was incredibly rewarding in that it helped to tied together various concepts and topics and how the different aspects of web development tie together, from design all the way to deployment."
}  

document.getElementById('skills').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw2" src="/pictures/skills"/>'
    document.getElementById('date').innerHTML = ''
    document.getElementById('location').innerHTML = ''
    document.getElementById('title').innerHTML = ''
    document.getElementById('blurb').innerHTML = ''
}  

document.getElementById('contact').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = ''
    document.getElementById('date').innerHTML = 'E-mail : '
    document.getElementById('location').innerHTML = 'wdrgrs@gmail.com'
    document.getElementById('title').innerHTML = '<a href="https://github.com/WdRgrs" target="_blank"><img id="fw4" src="/pictures/github"/></a><a href="https://www.linkedin.com/in/wade-rogers-96829516a/" target="_blank"><img id="fw4" src="/pictures/linkedin"/></a>'
    document.getElementById('blurb').innerHTML = ''
}