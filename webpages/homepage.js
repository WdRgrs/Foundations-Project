document.getElementById('aboutwade').onclick = function() { 
        document.getElementById('pictureReturn').innerHTML = '<img id="fw2" src="/pictures/barpic"/>'
        document.getElementById('aboutMe').innerHTML = 'Coming from a previous career in industrial welding and other things that I do not know what to say right now, probably I will update this but I would imagine it will be about this long but maybe not with a run-on sentence, you know what I mean?  That was more of a run on question but you get the jist of it.'
}  
     
document.getElementById('skills').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw2" src="/pictures/skills"/>'
    document.getElementById('aboutMe').innerHTML = ''
}  

document.getElementById('contact').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = ''
    document.getElementById('aboutMe').innerHTML = 'E-mail: <br> wdrgrs@gmail.com'
}