const config = {
  auth: {
    username: process.env.USERNAME || '',
    password: process.env.PASSWORD || '',
  },
  job: {
    hashtags: ['like4like', 'follow4follow', 'followforfollow', 'likeforlike', 'lfl', 'fff', 'followtofollback', 'viral', 'hype', 'follback', 'followme', 'likeback', 'spamlike'],
    numberOfPosts: Number(process.env.NUMBER_OF_POSTS) || 10,
    unfollow: Number(process.env.NUMBER_OF_UNFOLLOW) || 10,
    commentProbability: 50,
  },
  wit: {
    accessToken: process.env.WIT_TOKEN || '',
    expectedConfidence: 0.7,
  },
  comments: {
    happy: [
      'Great',
      'Wow',
      'Damn',
      'Nice',
      'Cool!',
      'Awesome',
      'Beautiful',
      'Amazing',
      'Perfect',
      'Wonderful',
      'Gorgeous!',
      'Handsome',
      'Pretty',
      'Mellifluous',
      'Great Stuff!',
      'followback',
      'likeback',
      'lfl u first',
      'fff u turn',
      'Nice Pict!',
      'Cantik',
      'Keren',
    ],
    sad: ['damn', 'im gonna cry', 'nooo', 'why', 'omg', 'oh God', ':(', 'im so sorry', 'i apologize', 'sad', 'dont give up', 'jangan patah semangat', 'kamu pasti bisa'],
  },
};

export = config;
//this is my change
