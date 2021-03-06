import PATIENT_SEARCH_TYPES from "./types";

const patientSearch = (query, parseResults, representation) => ( {
  type: PATIENT_SEARCH_TYPES.REQUESTED,
  query: query,
  parseResults: parseResults,
  representation: representation
} );

const patientSearchSucceeded = (results) => ( {
  type: PATIENT_SEARCH_TYPES.SUCCEEDED,
  results: results
} );

const patientSearchFailed = (message) => ( {
  type: PATIENT_SEARCH_TYPES.FAILED,
  message: message
} );

const clearPatientSearch = () => ( {
  type: PATIENT_SEARCH_TYPES.CLEAR_SEARCH
});

export default {
  patientSearch,
  patientSearchSucceeded,
  patientSearchFailed,
  clearPatientSearch
};
