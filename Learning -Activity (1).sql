CREATE TABLE "users" (
  "userId" uuid PRIMARY KEY,
  "name" varchar,
  "username" vrchar,
  "email" varchar,
  "password" varchar,
  "createdAt" timestamptz,
  "updatedAt" timestamptz
);

CREATE TABLE "mounth" (
  "mounthId" uuid PRIMARY KEY,
  "name" varchar,
  "cretaedAt" timestamptz,
  "updatedAt" timestamptz
);

CREATE TABLE "activities" (
  "activitiyId" uuid PRIMARY KEY,
  "userId" uuid,
  "mounthId" uuid,
  "methodId" uuid,
  "name" varchar,
  "dateTime" timestamptz,
  "createdAt" timestamptz,
  "updatedAt" timestamptz
);

CREATE TABLE "methods" (
  "methodId" uuid PRIMARY KEY,
  "name" varchar,
  "createdAt" timestamptz,
  "updatedAt" timestamptz
);

ALTER TABLE "activities" ADD FOREIGN KEY ("userId") REFERENCES "users" ("userId");

ALTER TABLE "activities" ADD FOREIGN KEY ("mounthId") REFERENCES "mounth" ("mounthId");

ALTER TABLE "activities" ADD FOREIGN KEY ("methodId") REFERENCES "methods" ("methodId");
