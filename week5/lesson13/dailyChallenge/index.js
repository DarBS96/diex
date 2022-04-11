const inputs = [...document.querySelectorAll('input')];
const btn = document.querySelector('button');
const span = document.getElementById('story');

const createStory = () => {
    let story = `Every four Years, countries from all over the ${inputs[0].value
} send their best ${inputs[1].value}
to compete in the ${inputs[2].value} games and win. These events are called the Olympic ${inputs[3].value}
  and they started to ${inputs[4].value} long time ago`;
    span.append(story);
    console.log(span)
};

btn.addEventListener('click', createStory);