const commentBoxes = document.querySelector('#commentBoxes');
const form = document.querySelector('form');

const baseURL = 'https://wwwwwwwwwwwwwwwwwwwww.herokuapp.com/api/comments';
// const baseURL = 'http://localhost:5050/api/comments';

const commentCallback = ({ data: comments }) => displayComments(comments);
const errCallback = err => console.log(err);

const getAllComments = () => axios.get(baseURL).then(commentCallback).catch(errCallback);
const createComments = body => axios.post(baseURL, body).then(commentCallback).catch(errCallback);
const deleteComments = id => axios.delete(`${baseURL}/${id}`).then(commentCallback).catch(errCallback)
// const updateComment = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(commentCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let words = document.querySelector('#words')

    let bodyObj = {
        words: words.value
    }

    createComments(bodyObj)

    words.value = ''
}

function createCommentCard(comment) {
    const commentCard = document.createElement('div')
    commentCard.classList.add('comment-card')

    commentCard.innerHTML = `<p class="words">${comment.words}</p>
        <button onclick="deleteComments(${comment.id})">Remove</button>`

    commentBoxes.appendChild(commentCard);
}

function displayComments(arr) {
    commentBoxes.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createCommentCard(arr[i])
    }
}








//HOME PAGE FUNCTIONALITY


document.getElementById('aboutWade').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw2" src="/pictures/barpic"/>'
    document.getElementById('aboutMe').innerHTML = 'Coming from a previous career in industrial welding and other things that I do not know what to say right now, probably I will update this but I would imagine it will be about this long but maybe not with a run-on sentence, you know what I mean?  That was more of a run on question but you get the jist of it.'
}  

document.getElementById('skills').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw2" src="/pictures/skills"/>'
    document.getElementById('aboutMe').innerHTML = 'this is a test'
}  


//PHOTO PAGE FUNCTIONALITY

document.getElementById('fireworkA').onclick = function() {
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/firework2"/>'
    document.getElementById('date').innerHTML = 'July 4th, 2020'
    document.getElementById('location').innerHTML = 'Vanderpool, Texas'
    document.getElementById('title').innerHTML = 'Volatile Luminescent Sky Urchin'
    document.getElementById('blurb').innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, esse assumenda tempora eos cumque animi id exercitationem accusamus corporis, beatae aliquam odio numquam, voluptas aut? <br><br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, iure dolorem corrupti doloribus ab ullam?'
}  

document.getElementById('fireworkB').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/firework1"/>'
    document.getElementById('date').innerHTML = 'July 4th, 2020'
    document.getElementById('location').innerHTML = 'Vanderpool, Texas'
    document.getElementById('title').innerHTML = 'Volatile Luminescent Sky Urchin, the Second'
    document.getElementById('blurb').innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quis animi, quo a eveniet, officiis nostrum qui dolores impedit saepe eius illum vero quod dolore sit? Culpa eaque illum atque iste vel dolores velit provident reiciendis est aliquam, veritatis obcaecati minus praesentium delectus. Consequuntur quod aperiam reprehenderit dolorum nostrum modi?'
}

document.getElementById('snail').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/snail2"/>'
    document.getElementById('date').innerHTML = 'June 18th, 2016'
    document.getElementById('location').innerHTML = 'Kauai, Hawaii'
    document.getElementById('title').innerHTML = 'Early Bird'
    document.getElementById('blurb').innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, esse assumenda tempora eos cumque animi id exercitationem accusamus corporis, beatae aliquam odio numquam, voluptas aut?  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, iure dolorem corrupti doloribus ab ullam?'
}

document.getElementById('Snail Jr.').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/snail"/>'
    document.getElementById('date').innerHTML = 'June 18th, 2016'
    document.getElementById('location').innerHTML = 'Kauai, Hawaii'
    document.getElementById('title').innerHTML = 'Snail Jr., son of Snail'
        document.getElementById('blurb').innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sit unde veniam dolor modi nostrum tempore aspernatur qui quas libero laborum, voluptates ut soluta ipsam quisquam fugit mollitia repellat earum.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sit unde veniam dolor modi nostrum tempore aspernatur qui quas libero laborum, voluptates ut soluta ipsam quisquam fugit mollitia repellat earum.'
}  

document.getElementById('bike').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/bike"/>'
    document.getElementById('date').innerHTML = 'March 17th, 2018'
    document.getElementById('location').innerHTML = 'Big Bend, Texas'
    document.getElementById('title').innerHTML = 'Dog Cholla - Single Track'
        document.getElementById('blurb').innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sit unde veniam dolor modi nostrum tempore aspernatur qui quas libero laborum, voluptates ut soluta ipsam quisquam fugit mollitia repellat earum.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sit unde veniam dolor modi nostrum tempore aspernatur qui quas libero laborum, voluptates ut soluta ipsam quisquam fugit mollitia repellat earum.'
}  

    















form.addEventListener('submit', submitHandler)

getAllComments();