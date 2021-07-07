const commentBoxes = document.querySelector('#commentBoxes');
const form = document.querySelector('form');

const baseURL = 'http://localhost:5050/api/comments';

const commentCallback = ({ data: comments }) => displayComments(comments);
const errCallback = err => console.log(err);

const getAllComments = () => axios.get(baseURL).then(commentCallback).catch(errCallback);
const createComment = body => axios.post(baseURL, body).then(commentCallback).catch(errCallback);
const deleteComment = id => axios.delete(`${baseURL}/${id}`).then(commentCallback).catch(errCallback)
// const updateComment = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(commentCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let words = document.querySelector('#words')

    let bodyObj = {
        words: words.value,
    }

    createComment(bodyObj)

    words.value = ''
}

function createCommentCard(comments) {
    const commentCard = document.createElement('div')
    commentCard.classList.add('comment-card')

    commentCard.innerHTML = `<p class="words">${comments.words}</p>
        <button onclick="deleteComment(${comments.id})">Remove</button>`

    commentBoxes.appendChild(commentCard);
}

function displayComments(arr) {
    commentBoxes.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createCommentCard(arr[i])
    }
}


form.addEventListener('submit', submitHandler)

getAllComments();