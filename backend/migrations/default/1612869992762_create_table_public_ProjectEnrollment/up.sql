CREATE TABLE "public"."ProjectEnrollment"("Id" serial NOT NULL, "EnrollmentId" integer NOT NULL, "ProjectId" integer NOT NULL, PRIMARY KEY ("Id") , FOREIGN KEY ("EnrollmentId") REFERENCES "public"."Enrollment"("Id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("ProjectId") REFERENCES "public"."Project"("Id") ON UPDATE restrict ON DELETE restrict);