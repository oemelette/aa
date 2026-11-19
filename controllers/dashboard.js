const logger = require("../utils/logger.js");
const playlistStore = require("../models/playlist-store.js");
const songStore = require("../models/song-store");

const dashboard = {
  async index(request, response) {
    logger.info("dashboard rendering");
    const playLists = await playlistStore.getAllPlaylists();
    const viewData = {
      title: "Dashboard",
      playlists: playLists
    };
    logger.info('about to render', playLists);
    response.render("dashboard", viewData);
  },
  async deleteplaylist(request, response) {
    const playlistId = request.params.id;
    logger.debug(`Deleting Playlist ${playlistId} from dashboard`);
    await playlistStore.removePlaylist(playlistId);
    response.redirect("/dashboard");
  }
};

module.exports = dashboard;
