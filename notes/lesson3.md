# Lesson 3

## Many to Many Relationships

- Traditionally, a new table is created to represent a many to many relationship, because databases are inefficient at storing multiple values in one cell
- E.g. pokemonTypes table, that will store a separate row for each pokemon and its type
- In Prisma, you can use an "implicit" m2m relationship by just labelling it with Prisma
- You can do an explicit m2m relationship in prisma that actually requires you to define the intermediary table
- Why would you ever do explicit? For example when you need more attributes to add onto the relationship itself. You might want to store extra information like date caught onto a "captured pokemon" table for example.
- Note that for enums, some databases may not support this whereas standard m2m is handled by all databases by default

## Migrations

- Migration is a file that contains underlying SQL representing a schema change
- Why store history of migrations?
  - Can manage existing data
  - Can apply same manipulations to all environments
  - Good for rollbacks and vsibility
- Migrations can get complex quickly especially with many iterations
- Can be pragmatic to have fewer migrations because there are no prod users
