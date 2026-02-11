const _ = require("lodash");
const chalk = require("chalk");

module.exports = async function unfollowNotFollowBack(ig) {
    console.log(chalk.cyan("🚀 Collecting followers and following..."));

    const meId = (await ig.account.currentUser()).pk;
    const followersFeed = ig.feed.accountFollowers(meId);
    const followingFeed = ig.feed.accountFollowing(meId);

    let followers = [];
    let following = [];

    // Collect followers
    do {
        const items = await followersFeed.items();
        followers.push(...items.map(i => i.pk));
    } while (followersFeed.moreAvailable);

    // Collect following
    do {
        const items = await followingFeed.items();
        following.push(...items.map(i => i.pk));
    } while (followingFeed.moreAvailable);

    const notFollowingBack = _.difference(following, followers);
    console.log(chalk.yellow(`Found ${notFollowingBack.length} users not following back.`));

    for (const userId of notFollowingBack) {
        await ig.friendship.destroy(userId);
        console.log(chalk.green(`Unfollowed user ID: ${userId}`));
    }

    console.log(chalk.green.bold("✅ All done!"));
};
