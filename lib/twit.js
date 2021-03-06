const Twitt = require('twitter');
const twitter = new Twitt({ bearer_token: 'AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA' });

const isTwitterUrl = /https?:\/\/twitter.com\/[0-9-a-zA-Z_]{1,20}\/status\/([0-9]*)/;

const twittOpts = {
    tweet_mode: 'extended'
};

const tweet_dl = (url) => new Promise((resolve, reject) => {
    let twittId = isTwitterUrl.exec(url)[1]
    try {
        twitter.get(`statuses/show/${twittId}`, twittOpts).then(res => {
            if (res.extended_entities) {
                let fixedMedia;
                if (res.extended_entities && res.extended_entities.media[0].type == 'video') {
                    fixedMedia = {
                        url: res.extended_entities.media[0].video_info.variants.filter(file => file.content_type == 'video/mp4').slice(-1)[0].url,
                        type: res.extended_entities.media[0].type
                    }
                } else {
                    fixedMedia = {
                        url: res.extended_entities.media[0].media_url_https,
                        type: res.extended_entities.media[0].type
                    }
                }
                let media = []
                for (let i of res.extended_entities.media) {
                    if (i.type == 'video' || i.type == 'animated_gif') {
                        media.push({
                            mediaUrl: i.video_info.variants.filter(file => file.content_type == 'video/mp4').slice(-1)[0].url,
                            mediaType: i.type
                        })
                    } else {
                        media.push({
                            mediaUrl: i.media_url_https,
                            mediaType: i.type
                        })
                    }
                }
                resolve({
                    fixedMedia,
                    full_text: res.full_text,
                    created_at: res.created_at,
                    username: res.user.screen_name,
                    name: res.user.name,
                    media
                })
            }
        }).catch(e => console.log(e))
    } catch (error) {
        console.log(error);
    }
})


module.exports = tweet_dl