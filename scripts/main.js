const topic = document.getElementById('topic');
const taso1 = document.getElementById('taso1');
const taso2 = document.getElementById('taso2');
const taso3 = document.getElementById('taso3');

function startTaso1() {
    taso1.classList.add("selected");
    taso2.classList.remove("selected");
    taso3.classList.remove("selected");
    getNewTopic();
}

function startTaso2() {
    taso1.classList.remove("selected");
    taso2.classList.add("selected");
    taso3.classList.remove("selected");
    getNewTopic();
}

function startTaso3() {
    taso1.classList.remove("selected");
    taso2.classList.remove("selected");
    taso3.classList.add("selected");
    getNewTopic();
}

function randomTopic(array) {
    const randomTopic = Math.floor(Math.random()*array.length)
    topic.innerHTML = array[randomTopic];
  }

function getNewTopic() {
    if (taso1.classList.contains('selected')) {
        randomTopic(topics[0]);
    }
    else if (taso2.classList.contains('selected')) {
        randomTopic(topics[1]);
    }
    else {
        randomTopic(topics[2]);
    }
};