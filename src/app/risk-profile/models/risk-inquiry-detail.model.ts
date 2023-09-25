export interface RPQuestionaireResponse {
  RPQuestionaire: RPQuestionaire[]
}

export interface RPQuestionaire {
  multiSelect?: string,
  isCeiling?: string,
  computationType?: string,
  version?: number,
  question_no: number,
  question_desc: string,
  questionnaire_code?: string,
  valid_period?: number,
  is_scoring?: string,
  Mandatory?: string,
  additional?: string,
  previous_answer_selected: number[],
  answer_options: AnswerOption[]
}

export interface AnswerOption {
  weightage?: number,
  answer_no: number,
  answer_desc: string,
  ISCEILING?: string,
  CEILINGVALUE?: string,
  VULNERABLE?: string
}

export interface RPQuestionnaireRequest {
  cifNumber: string;
}
