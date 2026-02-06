const ServerConnection = (serverUrl) => {
  return {
    connect() {
      console.log(`Connection build on server ${serverUrl}`);
    },

    disconnect() {
      console.log(`Disconnected from server ${serverUrl}`);
    },
  };
};

export default ServerConnection;
