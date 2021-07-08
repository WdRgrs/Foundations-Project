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
    <div id='delete' onclick="deleteComments(${comment.id})">X</div>`
    
    commentBoxes.appendChild(commentCard);

    myDiv = document.getElementById("commentBoxes");
    myDiv.scrollTop = myDiv.scrollHeight;
}

function displayComments(arr) {
    commentBoxes.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createCommentCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllComments();



//Start of buttons

document.getElementById('bottomListTitle').onclick = function() {
    window.location.reload();
}

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

document.getElementById('snailA').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/snail2"/>'
    document.getElementById('date').innerHTML = 'June 18th, 2016'
    document.getElementById('location').innerHTML = 'Kauai, Hawaii'
    document.getElementById('title').innerHTML = 'Early Bird'
    document.getElementById('blurb').innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, esse assumenda tempora eos cumque animi id exercitationem accusamus corporis, beatae aliquam odio numquam, voluptas aut?  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, iure dolorem corrupti doloribus ab ullam?'
}

document.getElementById('snailB').onclick = function() { 
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
