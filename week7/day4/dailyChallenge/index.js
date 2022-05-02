// Daily Challenge: Creating Objects;
let videos = []

class Video {
    constructor(title, uploader, time) {
        this.title = title,
            this.uploader = uploader,
            this.time = time
        videos.push({ title, uploader, time })
    }
}

let video1 = new Video('Robbin hood', 'Dar BS', 5)
let video2 = new Video('Mama mia', 'Amit BS', 10);
let video3 = new Video('Mogly', 'Matan Sharabi', 12);
let video4 = new Video('Frozen', 'Sahar Sharabi', 3);
let video5 = new Video('Mean girls', 'Maya Glazer Sharabi', 7);

let jsonVideos = JSON.stringify(videos);