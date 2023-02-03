/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AchievementRecordType_enum } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: AchievementOptionFragment
// ====================================================

export interface AchievementOptionFragment {
  __typename: "AchievementOption";
  id: number;
  /**
   * Title of an offered achievement option
   */
  title: string;
  /**
   * Description of an offered achievement option
   */
  description: string;
  /**
   * An instructor or project mentor can provide a template for the record that must be uploaded to complete this achievement
   */
  documentationTemplateUrl: string;
  /**
   * If the record tye is "DOCUMENTATION_AND_CSV" an URL to a python script can be provided that returns a score for uploaded csv data.
   */
  evaluationScriptUrl: string;
  /**
   * Type of the achivement record that must be uploaded for this option
   */
  recordType: AchievementRecordType_enum;
}