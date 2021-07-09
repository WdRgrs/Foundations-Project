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

document.getElementById('bridge').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/bridge"/>'
    document.getElementById('date').innerHTML = 'September 24th, 2020'
    document.getElementById('location').innerHTML = 'Idaho'
    document.getElementById('title').innerHTML = 'Bridge'
    document.getElementById('blurb').innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit saepe eius illum vero quod dolore sit? Culpa eaque illum atque iste vel dolores velit provident reiciendis est aliquam, veritatis obcaecati minus praesentium delectus. Consequuntur quod aperiam reprehenderit dolorum nostrum modi?'
}

document.getElementById('firework1').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/firework1"/>'
    document.getElementById('date').innerHTML = 'July 4th, 2020'
    document.getElementById('location').innerHTML = 'Vanderpool, Texas'
    document.getElementById('title').innerHTML = 'Volatile Luminescent Sky Urchin, the Second'
    document.getElementById('blurb').innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quis animi, quo a eveniet, officiis nostrum qui dolores impedit saepe eius illum vero quod dolore sit? Culpa eaque illum atque iste vel dolores velit provident reiciendis est aliquam, veritatis obcaecati minus praesentium delectus. Consequuntur quod aperiam reprehenderit dolorum nostrum modi?'
}

document.getElementById('firework2').onclick = function() {
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/firework2"/>'
    document.getElementById('date').innerHTML = 'July 4th, 2020'
    document.getElementById('location').innerHTML = 'Vanderpool, Texas'
    document.getElementById('title').innerHTML = 'Volatile Luminescent Sky Urchin'
    document.getElementById('blurb').innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, esse assumenda tempora eos cumque animi id exercitationem accusamus corporis, beatae aliquam odio numquam, voluptas aut? <br><br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, iure dolorem corrupti doloribus ab ullam?'
}  

document.getElementById('glacierLake').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/glacierLake"/>'
    document.getElementById('date').innerHTML = 'August 7th, 2020'
    document.getElementById('location').innerHTML = 'Glacier Natl Park, Montana'
    document.getElementById('title').innerHTML = 'Glacier Lake'
    document.getElementById('blurb').innerHTML = 'Lorem ipsum dolor, sit amet consectetur quo a eveniet, officiis nostrum qui dolores impedit saepe eius illum vero quod dolore sit? Culpa eaque illum atque iste vel dolores velit provident reiciendis est aliquam, veritatis obcaecati minus praesentium delectus. Consequuntur quod aperiam reprehenderit dolorum nostrum modi?'
}

document.getElementById('lighthouse').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/lighthouse"/>'
    document.getElementById('date').innerHTML = 'September 24th, 2020'
    document.getElementById('location').innerHTML = 'Townsend, Washington'
    document.getElementById('title').innerHTML = 'Point Wilson Lighthouse'
    document.getElementById('blurb').innerHTML = 'Lorem consequuntur quod aperiam reprehenderit dolorum nostrum modi? Lorem ipsum dolor, sit amet consectetur quo a eveniet, officiis nostrum qui dolores impedit saepe eius illum vero quod dolore sit?'
}

document.getElementById('lightning2').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/lightning2"/>'
    document.getElementById('date').innerHTML = 'May 17th, 2020'
    document.getElementById('location').innerHTML = 'McDonald, KS'
    document.getElementById('title').innerHTML = 'Flash on the Plains'
    document.getElementById('blurb').innerHTML = 'Lorem consequuntur quod aperiam reprehenderit dolorum nostrum modi? Lorem ipsum dolor, sit amet consectetur quo a eveniet, officiis nostrum qui dolores impedit saepe eius illum vero quod dolore sit?'
}

document.getElementById('mexico').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/mexico"/>'
    document.getElementById('date').innerHTML = 'Nov 14th, 2020'
    document.getElementById('location').innerHTML = 'La Paz, Mexico'
    document.getElementById('title').innerHTML = 'Sunset Hike'
    document.getElementById('blurb').innerHTML = 'Lorem consequuntur quod aperiam reprehenderit dolorum nostrum modi? Lorem ipsum dolor, sit amet consectetur quo a eveniet, officiis nostrum qui dolores impedit saepe eius illum vero quod dolore sit?'
}

document.getElementById('montanasky').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/montanasky"/>'
    document.getElementById('date').innerHTML = 'September 14th, 2020'
    document.getElementById('location').innerHTML = 'Polebridge, Montana'
    document.getElementById('title').innerHTML = 'The Montana Milkyway'
    document.getElementById('blurb').innerHTML = 'Lorem consequuntur quod aperiam reprehenderit dolorum nostrum modi? Lorem ipsum dolor, sit amet consectetur quo a eveniet, officiis nostrum qui dolores impedit saepe eius illum vero quod dolore sit?'
}

document.getElementById('moose').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/moose"/>'
    document.getElementById('date').innerHTML = 'September 4th, 2020'
    document.getElementById('location').innerHTML = 'Medicine Bow, Wyoming'
    document.getElementById('title').innerHTML = 'Winter Nap'
    document.getElementById('blurb').innerHTML = 'Lorem consequuntur quod aperiam reprehenderit dolorum nostrum modi? Lorem ipsum dolor, sit amet consectetur quo a eveniet, officiis nostrum qui dolores impedit saepe eius illum vero quod dolore sit?'
}

document.getElementById('mooseLong').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/mooseLong"/>'
    document.getElementById('date').innerHTML = 'September 4th, 2020'
    document.getElementById('location').innerHTML = 'Medicine Bow, Wyoming'
    document.getElementById('title').innerHTML = 'Winter Napping'
    document.getElementById('blurb').innerHTML = 'Lorem consequuntur quod aperiam reprehenderit dolorum nostrum modi? Lorem ipsum dolor, sit amet consectetur quo a eveniet, officiis nostrum qui dolores impedit saepe eius illum vero quod dolore sit?'
}

document.getElementById('puddle').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/puddle"/>'
    document.getElementById('date').innerHTML = 'July 24th, 2020'
    document.getElementById('location').innerHTML = 'Redfeather, Colorado'
    document.getElementById('title').innerHTML = 'Sunset Puddles'
    document.getElementById('blurb').innerHTML = 'Lorem consequuntur quod aperiam reprehenderit dolorum nostrum modi? Lorem ipsum dolor, sit amet consectetur quo a eveniet, officiis nostrum qui dolores impedit saepe eius illum vero quod dolore sit?'
}

document.getElementById('scuba').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/scuba"/>'
    document.getElementById('date').innerHTML = 'July, 2010'
    document.getElementById('location').innerHTML = 'Bridgeport, Nebraska'
    document.getElementById('title').innerHTML = 'Relaxing in the Weeds'
    document.getElementById('blurb').innerHTML = 'Lorem consequuntur quod aperiam reprehenderit dolorum nostrum modi? Lorem ipsum dolor, sit amet consectetur quo a eveniet, officiis nostrum qui dolores impedit saepe eius illum vero quod dolore sit?'
}

document.getElementById('scubamulti').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/scubamulti"/>'
    document.getElementById('date').innerHTML = 'September 4th, 2020'
    document.getElementById('location').innerHTML = 'Bridgeport, NE || Lake Pactola, South Dakota'
    document.getElementById('title').innerHTML = 'Scuba Dove'
    document.getElementById('blurb').innerHTML = 'Lorem consequuntur quod aperiam reprehenderit dolorum nostrum modi? Lorem ipsum dolor, sit amet consectetur quo a eveniet, officiis nostrum qui dolores impedit saepe eius illum vero quod dolore sit?'
}

document.getElementById('seaweeds').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/seaweeds"/>'
    document.getElementById('date').innerHTML = 'September 4th, 2020'
    document.getElementById('location').innerHTML = 'Lake Pactola, South Dakota'
    document.getElementById('title').innerHTML = 'Underwater Forest'
    document.getElementById('blurb').innerHTML = 'Lorem consequuntur quod aperiam reprehenderit dolorum nostrum modi? Lorem ipsum dolor, sit amet consectetur quo a eveniet, officiis nostrum qui dolores impedit saepe eius illum vero quod dolore sit?'
}

document.getElementById('snail').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/snail"/>'
    document.getElementById('date').innerHTML = 'June 18th, 2016'
    document.getElementById('location').innerHTML = 'Kauai, Hawaii'
    document.getElementById('title').innerHTML = 'Early Bird'
    document.getElementById('blurb').innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, esse assumenda tempora eos cumque animi id exercitationem accusamus corporis, beatae aliquam odio numquam, voluptas aut?  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, iure dolorem corrupti doloribus ab ullam?'
}

document.getElementById('snail2').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/snail2"/>'
    document.getElementById('date').innerHTML = 'June 18th, 2016'
    document.getElementById('location').innerHTML = 'Kauai, Hawaii'
    document.getElementById('title').innerHTML = 'Snail Jr., son of Snail'
    document.getElementById('blurb').innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sit unde veniam dolor modi nostrum tempore aspernatur qui quas libero laborum, voluptates ut soluta ipsam quisquam fugit mollitia repellat earum.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sit unde veniam dolor modi nostrum tempore aspernatur qui quas libero laborum, voluptates ut soluta ipsam quisquam fugit mollitia repellat earum.'
}  

document.getElementById('sunflowers').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/sunflowers"/>'
    document.getElementById('date').innerHTML = 'March 17th, 2020'
    document.getElementById('location').innerHTML = 'Bird City, Kansas'
    document.getElementById('title').innerHTML = 'Dog Cholla - Single Track'
    document.getElementById('blurb').innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sit unde veniam dolor modi nostrum tempore aspernatur qui quas libero laborum, voluptates ut soluta ipsam quisquam fugit mollitia repellat earum.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sit unde veniam dolor modi nostrum tempore aspernatur qui quas libero laborum, voluptates ut soluta ipsam quisquam fugit mollitia repellat earum.'
}  

document.getElementById('Sunset').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/Sunset"/>'
    document.getElementById('date').innerHTML = 'October 12th, 2020'
    document.getElementById('location').innerHTML = 'Somewhere, Colorado'
    document.getElementById('title').innerHTML = 'Sunrise Hike'
    document.getElementById('blurb').innerHTML = 'Lorem consequuntur quod aperiam reprehenderit dolorum nostrum modi? Lorem ipsum dolor, sit amet consectetur quo a eveniet, officiis nostrum qui dolores impedit saepe eius illum vero quod dolore sit?'
}

document.getElementById('sunset2').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/sunset2"/>'
    document.getElementById('date').innerHTML = 'September 4th, 2020'
    document.getElementById('location').innerHTML = 'Secret, Colorado'
    document.getElementById('title').innerHTML = 'Earlier Hike'
    document.getElementById('blurb').innerHTML = 'Lorem consequuntur quod aperiam reprehenderit dolorum nostrum modi? Lorem ipsum dolor, sit amet consectetur quo a eveniet, officiis nostrum qui dolores impedit saepe eius illum vero quod dolore sit?'
}

document.getElementById('tetons').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/tetons"/>'
    document.getElementById('date').innerHTML = 'September 14th, 2020'
    document.getElementById('location').innerHTML = 'Grand Teton National Park, Wyoming'
    document.getElementById('title').innerHTML = 'Tetons means Boobies'
    document.getElementById('blurb').innerHTML = 'Lorem consequuntur quod aperiam reprehenderit dolorum nostrum modi? Lorem ipsum dolor, sit amet consectetur quo a eveniet, officiis nostrum qui dolores impedit saepe eius illum vero quod dolore sit?'
}

document.getElementById('underwatertree').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/underwatertree"/>'
    document.getElementById('date').innerHTML = 'August 20th, 2010'
    document.getElementById('location').innerHTML = 'Medicine Bow, Wyoming'
    document.getElementById('title').innerHTML = 'Spooktree'
    document.getElementById('blurb').innerHTML = 'Lorem consequuntur quod aperiam reprehenderit dolorum nostrum modi? Lorem ipsum dolor, sit amet consectetur quo a eveniet, officiis nostrum qui dolores impedit saepe eius illum vero quod dolore sit?'
}

document.getElementById('woods').onclick = function() { 
    document.getElementById('pictureReturn').innerHTML = '<img id="fw1" src="/pictures/woods"/>'
    document.getElementById('date').innerHTML = 'July, 27th'
    document.getElementById('location').innerHTML = 'Redfeather, Colorado'
    document.getElementById('title').innerHTML = 'Smokey Mountains - Fires'
    document.getElementById('blurb').innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sit unde veniam dolor modi nostrum tempore aspernatur qui quas libero laborum, voluptates ut soluta ipsam quisquam fugit mollitia repellat earum.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sit unde veniam dolor modi nostrum tempore aspernatur qui quas libero laborum, voluptates ut soluta ipsam quisquam fugit mollitia repellat earum.'
}  
