import 'reflect-metadata';
import 'ts-tiny-invariant';
import { ApolloServer } from 'apollo-server-micro';
import { resolvers } from '../../prisma/generated/type-graphql';

import { PrismaClient } from '@prisma/client';
import prismaDb from '@/lib/dbConnection';
import Cors from 'micro-cors';

import { IncomingMessage, ServerResponse } from 'http';
import { buildSchema } from 'type-graphql';

const cors = Cors({
  allowMethods: ['POST', 'OPTIONS', 'GET', 'HEAD'],
});

const prisma= prismaDb

interface Context {
  prisma: PrismaClient;
}


export const config = {
  api: {
    bodyParser: false,
  },
};

const functionHandler = async (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });


  const apolloServer = new ApolloServer({
    context: (): Context => ({ prisma }),
    schema,
    // persistedQueries: false, // This disables persisted queries
    // cache: 'bounded', // This sets up a bounded cache
    // introspection: process.env.NODE_ENV !== 'production',
  });


  const startServer = apolloServer.start();
  await startServer;

  
  return apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
};

export default cors((req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  return functionHandler(req, res);
});