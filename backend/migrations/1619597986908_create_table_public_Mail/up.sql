CREATE TABLE "public"."Mail"("Id" serial NOT NULL, "Title" text NOT NULL, "VersionNumber" text NOT NULL, "Author" integer NOT NULL, "SenderAddress" text, "ReplyToAddress" text, "Subject" text NOT NULL, "Content" text NOT NULL, PRIMARY KEY ("Id") , FOREIGN KEY ("Author") REFERENCES "public"."Person"("Id") ON UPDATE restrict ON DELETE restrict);
