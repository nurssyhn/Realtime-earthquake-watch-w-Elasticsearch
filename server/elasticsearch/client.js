const { Client } = require('@elastic/elasticsearch');
const config = require('config');

const elasticConfig = config.get('elastic');

const client = new Client({
  node: 'http://localhost:9200',
  auth: {
    username: elasticConfig.username,
    password: elasticConfig.password
  }
});

client.ping()
  .then(response => console.log("You are connected to Elasticsearch!"))
  .catch(error => console.error("Elasticsearch is not connected:", error))

module.exports = client; 