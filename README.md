# MajorFriarmBot - trolling your Facebook group

Are you a member of a Facebook group with very predictable posts? Ever thought about how well a bot would fit in?

Well you are in luck! This repo will help you create such a bot.

## Requirements

javascript utilizes newer js syntax as well as promises and async/await. Node 8 and above should be fine.

## How to

 - `npm install`
 - Got to [Graph API explorer](https://developers.facebook.com/tools/explorer), push the "Get Token" button, 
 make sure to request a token with `user_managed_groups` and `publish_actions` access. Copy paste this token to a file 
 called `token` in the same folder as the project
 - `node API_crawler.js`
 - `node post_nonsense.js` or `./run.sh`
