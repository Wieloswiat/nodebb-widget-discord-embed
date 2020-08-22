"use strict";

const user = require.main.require("./src/user");

const discordEmbed = {};
let app;

discordEmbed.init = async function (params) {
    app = params.app;
};

discordEmbed.getWidgets = async function (widgets) {
    const discordWidget = {
        name: "Discord Chat",
        widget: "discord-chat",
        description: "Discord chat embed powered by TitanEmbeds",
        content: await app.renderAsync("admin/discordWidget", {}),
    };
    widgets.push(discordWidget);
    return widgets;
};
discordEmbed.renderDiscordWidget = async function (widget) {
    let data = widget.data;
    if (data.id.slice(0, 4) == "http") {
        data.id = data.id
            .slice(data.id.slice(0, -1).lastIndexOf("/"))
            .replaceAll("/", "");
    }
    data.username = await user.getUsernamesByUids([widget.uid])[0];
    widget.html = await app.renderAsync("widgets/discordChat", data);
    return widget;
};

module.exports = discordEmbed;
