const ServerConnection = (serverUrl, roomId) => {
  return {
    connect() {
      console.log(
        `Connection build on server ${serverUrl} for ${roomId} Channel`,
      );
    },

    disconnect() {
      console.log(
        `Disconnected from server ${serverUrl} for ${roomId} channel`,
      );
    },
  };
};

export default ServerConnection;
