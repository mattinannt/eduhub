import { gql } from "@apollo/client";

export const COURSE = gql`
  query Course($id: Int!) {
    Course_by_pk(Id: $id) {
      BookingDeadline
      Cost
      CourseType
      DayOfTheWeek
      Description
      Difficulty
      Id
      Image
      Language
      MaxParticipants
      Name
      Semester
      ShortDescription
      TimeOfStart
      City
      Duration
      CourseInstructors {
        Instructor {
          Person {
            Firstname
            Image
            Lastname
            Id
          }
          Description
          Qualification
          Id
        }
        Id
      }
      Ects
      Status
      MaxMissedDates
      MaxProjectParticipants
      Sessions {
        Id
        Description
        Finish
        Start
        Title
      }
    }
  }
`;