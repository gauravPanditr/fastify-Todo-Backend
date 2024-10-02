import Fastify, { FastifyRequest, FastifyReply } from 'fastify';

const fastify = Fastify();

fastify.get('/ping/:userId', async (request: FastifyRequest, reply: FastifyReply) => {
      const {userId}=request.params as { userId: string };
      reply.send(`User ID is: ${userId}`);
});


fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
