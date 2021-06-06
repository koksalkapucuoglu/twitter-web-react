import React from "react";

import * as Icons from "../components/icons";

export default {
  title: "Icons",
};
//default svg rengini kullanmak istemiyorsak ikonları oluştururken rengi currentcolor yapıp burada özel olarak belirtebiliriz
export const Icon = () => (
  <div className="icons">
    <Icons.ArrowBottom styles={{ color: "red" }} />
    <Icons.Bookmark />
    <Icons.BookmarkFill />
    <Icons.Close />
    <Icons.Emoji />
    <Icons.Explore />
    <Icons.ExplorerFill />
    <Icons.Gif />
    <Icons.Home />
    <Icons.HomeFill />
    <Icons.Like />
    <Icons.Lists />
    <Icons.ListsFill />
    <Icons.Media />
    <Icons.Messages />
    <Icons.MessagesFill />
    <Icons.More />
    <Icons.Notification />
    <Icons.NotificationFill />
    <Icons.Options />
    <Icons.Profile />
    <Icons.ProfileFill />
    <Icons.Question />
    <Icons.Reply />
    <Icons.Retweet />
    <Icons.Search />
    <Icons.Share />
    <Icons.TimelineProp />
    <Icons.Tweet />
    <Icons.Twitter />
  </div>
);
