import { createClient } from 'redis';

const client = createClient();

createClient({
    url: 'redis://root:root@awesome.localhost:6379'
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

await client.hSet('status-vehicle1', 'hodometer', 3422);
await client.hSet('status-vehicle1', 'horimeter', '00:03:00');
const value = await client.hGetAll('status-vehicle1');

console.log(value.hodometer)
console.log(value.horimeter)

await client.disconnect();