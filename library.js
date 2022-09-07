"use strict";

const user = require.main.require("./src/user");
const nconf = require.main.require("nconf");
const discordEmbed = {};
let app;

discordEmbed.init = async function (params) {
	app = params.app;
};

discordEmbed.getWidgets = async function (widgets) {
	const discordWidget = {
		name: "Discord Chat",
		widget: "discord-chat",
		description: "Discord chat embed powered by Widgetbot",
		content: await app.renderAsync("admin/discordWidget", {}),
	};
	widgets.push(discordWidget);
	return widgets;
};
discordEmbed.renderDiscordWidget = async function (widget) {
	const data = widget.data;
	data.height = data.height || "600";
	if (data.serverId.slice(0, 4) === "http") {
		data.serverId = data.serverId
			.slice(data.serverId.slice(0, -1).lastIndexOf("/"))
			.replaceAll("/", "");
	}
	const userFields = await user.getUserFields(widget.uid, ["username", "picture"]);
	if (data.useUsername === "on") {
		data.username = userFields.username;
	}
	if (data.useAvatar === "on" && userFields.picture?.length) {
		data.useravatar = userFields.picture.startsWith("http") ? userFields.picture : `${nconf.get("url")}${userFields.picture}`;
	}

	widget.html = await app.renderAsync("widgets/discordChat", data);
	return widget;
};

module.exports = discordEmbed;
