export type DocType =
  | "PID"
  | "WorkOrder"
  | "SOP"
  | "InspectionReport"
  | "IncidentReport"
  | "OEMManual"
  | "ComplianceAudit"
  | "RegulatorySubmission";

export interface Document {
  id: string;
  title: string;
  docType: DocType;
  date: string; // ISO format
  equipmentTags: string[];
  personnel: string[];
  standardsReferenced: string[];
  content: string;
}
