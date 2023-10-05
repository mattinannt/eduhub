CREATE OR REPLACE FUNCTION "public"."set_invitation_expiration_date"()
RETURNS TRIGGER AS $$
BEGIN
  IF (TG_OP = 'INSERT' AND NEW.status = 'INVITED') OR
     (TG_OP = 'UPDATE' AND NEW.status = 'INVITED') THEN
    NEW."invitationExpirationDate" = NOW() + interval '2 days';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER "set_invitation_expiration_date_trigger"
BEFORE INSERT OR UPDATE ON "public"."CourseEnrollment"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_invitation_expiration_date"();
COMMENT ON TRIGGER "set_invitation_expiration_date_trigger" ON "public"."CourseEnrollment"
IS 'trigger to set default value of column "invitationExpirationDate" to two days after creation when status is set or updated to INVITED';
