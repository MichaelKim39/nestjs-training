# Setup / Terminal Commands

- `npx @nestjs/cli new <PROJECT_NAME>` - creates new project
  - `app.module.ts` is the root module of the application
  - `main.ts` is the app entry point

# Controllers

Nest employs 2 options for manipulating responses

- Standard
  - Recommended;
  - JS objects and arrays are automaticalled JSON serialised
  - Serialised data is data that is converted into a stream of bytes which allows it to be more easily saved or transmitted (cuts down storage & transmission size, and can leverage existing protocols and libraries that can interpret serialised data)
  - JS Primitivies are not serialised
- Library Specific
  - E.g. Express response object using @Res decorator

See a list of decorators and the platform specific objects they represent [here](https://docs.nestjs.com/controllers)

@All - decorator that targets all HTTP method

# Prisma

## What is Prisma & Setup

Prisma is a Node.js and TypeScript ORM, or Object Relational Mapping.

Prisma acts as a data modelling and manipulation language that is intuitive, avoiding the need to write raw SQL, while still utilising SQL based databases under the hood.

Prisma uses Prisma Schema Language (PSL) to define database schema

`schema.prisma` has 3 components

- Data source
- Generator
- Data model

`prisma generate` will generate assets based on Prisma client's generator and data model blocks

`npx prisma migrate dev --name "<MIGRATION_NAME>"` will do three things

1. Save migration (snapshot schema and calculate SQL to migrate) as migration file
2. Execute migration SQL on database
3. Generate prisma client based on latest schema

## Creating Prisma Service

It is good practice to abstract away the Prisma Client API

Create a separate file to instantiate prisma client and connect to database

`npx nest generate module prisma`

`npx nest generate service prisma`

`enableShutdownHooks` in the service file will ensure app shuts down gracefully - without this Prisma will interfere with how NestJS and exit the app before application shutdown hooks fire

We can then link the prisma service class to the `prisma.module.ts` that will define a singleton instance of the class.

The prisma service will be available for any module that imports `PrismaModule`

# Implementing CRUD

Generate REST resources using `npx nest generate resource`

# Other / Misc

- DTO = Data Transfer Object -> defines how the request should look like

- More secure not to have auto increment ID - ok for pokemon but not for sensitive data like user IDs (Affects guessability of the ID and aggregate values like total users - better to hide info from hackers)

- Note on seeding, don't overrely on fake data and tests
