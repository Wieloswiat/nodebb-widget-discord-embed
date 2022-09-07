<div class="form-group">
  <label for="serverId">
    Server ID
  </label>
  <input
    type="text"
    class="form-control"
    name="serverId"
    placeholder="1234567890"
    required
  />
</div>
<div class="form-group">
  <label for="defaultchannel">
    Default Channel
    <br />
    <small>
      Instead of having the top channel as the first channel your users see, you
      may change it. Enable Discord's Developer mode in the Appearances tab of
      the User Settings and copy the channel ID. Here is a tutorial on obtaining
      the channel ID.
    </small>
  </label>
  <input
    type="text"
    class="form-control"
    name="defaultchannel"
    placeholder="1234567890"
  />
</div>
<div class="form-group">
  <label for="useUsername">
    Set username by default
    <br />
    <small>
      Logs the user in as a guest with their NodeBB username. Requires guestmode to be enabled.
    </small>
  </label>
  <input type="checkbox" class="form-control" name="useUsername" checked/>
</div>
<div class="form-group">
  <label for="useAvatar">
    Set user avatar by default
    <br />
    <small>
      Adds the user's avatar to the guest login. Requires guestmode to be enabled.
    </small>
  </label>
  <input type="checkbox" class="form-control" name="useAvatar" checked />
</div>
<div class="form-group">
  <label for="height">
    Widget height
    <br />
    <small>
      The height of the widget in pixels or CSS units, defaults to 600 pixels
    </small>
  </label>
  <input
    type="text"
    class="form-control"
    name="height"
    placeholder="600"
  />
</div>
