const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0', // Permite que o servidor ouça em todas as interfaces de rede
    port: 8000, // Define a porta para o webpack-dev-server
    allowedHosts: [
      'vue-laravel', // Permite que o hostname 'vue' seja aceito
    ],
  },
});
