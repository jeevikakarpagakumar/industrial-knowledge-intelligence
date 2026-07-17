import { Document } from "./types";

export const CORPUS: Document[] = [
  {
    id: "PID-PMP-101",
    title: "Piping and Instrumentation Diagram Description - Crude Transfer Pump P-101",
    docType: "PID",
    date: "2024-03-15T08:00:00Z",
    equipmentTags: ["P-101", "E-405"],
    personnel: [],
    standardsReferenced: ["API 610", "ASME B31.3"],
    content: "The Piping and Instrumentation Diagram (P&ID) for the Crude Transfer Pump P-101 details the installation of a horizontal, split-case centrifugal pump designed in compliance with API 610 standards. The suction line originates from the bottom of the raw crude storage tank T-101, passing through a 10-inch manual gate valve HV-101A and a temporary suction strainer ST-101 before entering the pump suction nozzle. A pressure transmitter PT-101 is located upstream of the suction nozzle to monitor NPSH availability. The 8-inch discharge piping features a concentric increaser, a non-return swing check valve CV-101, and an automatic flow control valve FCV-101, which is controlled by flow transmitter FT-101, ultimately routing the crude stream to the pre-heat exchanger E-405. A minimum flow bypass line is routed from the discharge line back to T-101, containing an orifice plate FO-101 and a solenoid-operated valve SOV-101. Auxiliary piping includes a mechanical seal flush plan, specifically API Plan 11, routing fluid from the pump discharge through a flow control orifice to the seal chamber. High and low-pressure alarms are integrated into the DCS system to initiate automatic pump trip sequences in the event of dry running or downstream blockage."
  },
  {
    id: "WO-2024-1187",
    title: "Maintenance Work Order - Mechanical Seal Replacement for Pump P-101",
    docType: "WorkOrder",
    date: "2024-06-20T07:30:00Z",
    equipmentTags: ["P-101"],
    personnel: ["Ramesh Kumar", "Sanjay Patel"],
    standardsReferenced: ["ISO 1940", "API 682"],
    content: "This work order was initiated following reports of high product leakage from the drive-end mechanical seal of the Crude Transfer Pump P-101, accompanied by elevated vibration levels exceeding 4.5 mm/s. Maintenance technicians Ramesh Kumar and Sanjay Patel executed the isolation protocol, including electrical lockout-tagout (LOTO) of the motor breaker and block valve closure. The pump was completely drained, purged with nitrogen, and decoupled. Upon disassembly, the API Plan 11 mechanical seal faces were found to be severely scored due to fine particulate ingress, necessitating a full cartridge seal replacement in accordance with API 682 guidelines. The impeller clearance was checked and confirmed to be within the tolerance of 0.25 mm. After installing the new seal cartridge, coupling alignment was performed using a dual-dial indicator system to achieve alignment within ISO 1940 standards. Following re-assembly, the pump was un-isolated, line pressure was restored, and a successful test run was conducted. Vibration readings post-maintenance registered at a normal 1.2 mm/s, and zero leakage was observed at the seal gland."
  },
  {
    id: "SOP-BLR-014",
    title: "Standard Operating Procedure - Startup and Normal Operation of Steam Boiler B-201",
    docType: "SOP",
    date: "2025-01-10T09:00:00Z",
    equipmentTags: ["B-201", "V-220"],
    personnel: [],
    standardsReferenced: ["Indian Boiler Regulations (IBR) 1950", "ASME Section I"],
    content: "This Standard Operating Procedure governs the startup, steady-state operation, and monitoring of the pulverized coal-fired utility steam boiler B-201. Prior to light-up, operators must verify that the drum water level is at the normal operating limit of 50% and that the draft fans (ID and FD fans) are running in auto cascade mode. The purge cycle must be completed to clear any combustible gases from the furnace. Following burner ignition, the steam drum pressure must be raised gradually at a rate not exceeding 2.0 kg/cm² per minute. The design operating pressure of B-201 is 12.0 kg/cm². To protect the boiler shell from overpressurization, the main steam line safety relief valve V-220 is calibrated and set to lift at a design pressure of 15.5 kg/cm², in compliance with IBR regulations. During normal operations, field operators must inspect the header pressure every two hours. In the event of drum pressure exceeding 14.5 kg/cm², the operator must manually adjust the burner firing rate and check the manual vent valve PV-201."
  },
  {
    id: "INSP-VLV-0091",
    title: "Safety Valve Inspection and Calibration Report - V-220",
    docType: "InspectionReport",
    date: "2025-05-18T10:00:00Z",
    equipmentTags: ["V-220", "B-201"],
    personnel: ["A. K. Sharma", "Vijay Singh"],
    standardsReferenced: ["ASME Section VIII", "API 576"],
    content: "This inspection report details the annual statutory inspection and bench testing of the safety relief valve V-220, installed on the main steam drum of Boiler B-201. The inspection was carried out by lead inspector A. K. Sharma and calibration technician Vijay Singh. The valve was dismantled from its location and transported to the valve testing workshop. Visual inspection revealed minor scaling on the nozzle and disc surfaces, which was cleaned using wire brushing and solvent. The spring assembly was inspected for cracks and fatigue, showing normal elasticity. The valve was then mounted on the hydraulic test bench for set pressure verification. During the pop test, the actual opening pressure was observed and recorded at 14.8 kg/cm². The valve popped cleanly at this pressure and reset at 14.1 kg/cm² after blowdown. The bubble tightness test was performed at 13.5 kg/cm² using nitrogen gas, showing zero leakage. The valve was certified fit for service, tagged with the current test results, and reinstalled on B-201."
  },
  {
    id: "MAN-CMP-301",
    title: "OEM Instruction Manual - Centrifugal Process Gas Compressor C-301",
    docType: "OEMManual",
    date: "2023-08-01T00:00:00Z",
    equipmentTags: ["C-301"],
    personnel: [],
    standardsReferenced: ["API 617", "API 614"],
    content: "This section of the OEM operation manual outlines the startup prerequisites and lube oil system requirements for the multi-stage centrifugal process gas compressor C-301. The compressor is supplied with a dedicated lubrication console conforming to API 614 standards. Before initiating the startup sequence from the DCS, the operator must verify that the auxiliary oil pump (AOP) is running and that the lube oil header pressure is stable between 2.2 and 2.5 kg/cm². The lube oil temperature must be maintained at a minimum of 38°C using the electric immersion heater in the reservoir. The main compressor shaft seal system employs dry gas seals, which require a continuous flow of clean, dry nitrogen barrier gas regulated at a differential pressure of 0.8 bar above the reference process pressure. If the differential pressure falls below 0.3 bar, the DCS will trigger an automatic startup lockout. During continuous run, check the vibration sensors (XY proximity probes) on all bearings; peak-to-peak vibration must not exceed 25 microns."
  },
  {
    id: "INC-HEX-0405",
    title: "Incident Investigation Report - Process Leak at Heat Exchanger E-405",
    docType: "IncidentReport",
    date: "2025-03-22T23:15:00Z",
    equipmentTags: ["E-405"],
    personnel: ["S. K. Bose", "H. J. Vyas"],
    standardsReferenced: ["OSHA 1910.119", "OISD-GDN-169"],
    content: "On March 22, 2025, at approximately 22:45 hours, field operator H. J. Vyas detected a heavy vapor cloud emanating from the channel-side flange of the Heat Exchanger E-405 in the crude distillation unit. The shift supervisor, S. K. Bose, immediately initiated the emergency shutdown procedure for the pre-heat train to isolate E-405 from the hot hydrocarbon feed. The plant firefighting squad was deployed to spray a water curtain, mitigating the ignition risk of the leaking naphtha-rich stream. The system pressure was depressurized to the flare header. A preliminary inspection indicated a catastrophic failure of the spiral-wound metallic gasket on the tube-sheet joint, likely caused by thermal shock during a sudden upstream temperature fluctuation. There were no injuries or fatalities reported, but the unit experienced a loss of containment estimated at 1.5 barrels of process fluid. The incident was classified as a Tier-2 process safety event, and the heat exchanger was tagged out for complete physical inspection and gasket replacement."
  },
  {
    id: "AUD-BLR-0201",
    title: "EHS Compliance Audit Report - Utility Boiler B-201",
    docType: "ComplianceAudit",
    date: "2025-02-05T11:00:00Z",
    equipmentTags: ["B-201", "V-220"],
    personnel: ["M. N. Rao"],
    standardsReferenced: ["OISD-STD-116", "Factories Act 1948 Section 38"],
    content: "A comprehensive Environmental, Health, and Safety (EHS) compliance audit was conducted on the utility boiler B-201 by lead auditor M. N. Rao to verify adherence to Indian statutory regulations and industrial safety standards. The audit focused on compliance with the Factories Act 1948, Section 38, regarding fire safety, and OISD-STD-116 guidelines for fire protection facilities in petroleum and chemical plants. The auditor verified the installation and function of the fuel gas quick-cutoff valves and the automatic safety interlocks for boiler trip. The records for the safety relief valve V-220 were reviewed; while physical inspection tags were present, the log showed that the statutory annual pressure lift certification was nearing its expiration date. The audit recommended immediate calibration scheduling to maintain compliance. Additionally, the housekeeping around the burner platform was found to be satisfactory, and the emergency escape routes were clear. The plant management must submit a corrective action plan for the valve certification within thirty days."
  },
  {
    id: "REG-CMP-301",
    title: "PESO Licence Renewal Application - Process Gas Compressor C-301",
    docType: "RegulatorySubmission",
    date: "2024-10-12T14:00:00Z",
    equipmentTags: ["C-301"],
    personnel: ["K. P. Sen"],
    standardsReferenced: ["Petroleum Rules 2002", "OISD-STD-118"],
    content: "This regulatory submission is the formal application prepared by K. P. Sen for the renewal of the operating licence for the Centrifugal Process Gas Compressor C-301, submitted to the Petroleum and Explosives Safety Organisation (PESO) under the Petroleum Rules 2002. Compressor C-301 handles highly flammable hydrocarbon gas and is situated in a Zone-1 hazardous area, requiring stringent compliance with OISD-STD-118. The application includes updated hazardous area classification drawings, single-line electrical diagrams, and flameproof certification (Ex d / Ex de) for all instrumentation, junction boxes, and the main drive motor. Furthermore, data regarding the gas leakage monitoring system around the dry gas seal console has been compiled, demonstrating that average leakage rates remain well below the regulatory threshold of 50 ppm. The document also certifies that emergency shutdown valves (SDVs) upstream and downstream of C-301 undergo periodic stroke testing, with closure times recorded under 5 seconds, ensuring rapid containment in case of emergencies."
  },
  {
    id: "WO-2024-3402",
    title: "Emergency Maintenance Work Order - Pump P-101 Shaft Sleeve and Seal Repair",
    docType: "WorkOrder",
    date: "2024-11-05T08:00:00Z",
    equipmentTags: ["P-101"],
    personnel: ["Ramesh Kumar", "Amit Sharma"],
    standardsReferenced: ["API 682", "ASME B36.10"],
    content: "This emergency work order was issued when the Crude Transfer Pump P-101 suffered another high-volume mechanical seal leak, just five months after a complete cartridge seal replacement under WO-2024-1187. Maintenance technician Ramesh Kumar and engineer Amit Sharma isolated the pump and proceeded with disassembly. The newly installed API 682 mechanical seal cartridge was found damaged, with the primary carbon ring cracked. A closer investigation of the pump shaft assembly revealed severe wear and scoring on the shaft sleeve at the seal landing area, measuring 0.12 mm under the nominal diameter. This sleeve wear resulted in radial shaft deflection during startup, explaining the premature and recurring failure of the mechanical seals. The worn shaft sleeve was removed and replaced with a hardened stainless steel (SS316) sleeve. A new seal cartridge was installed, and precision laser alignment was conducted. The team recommended upgrading the periodic vibration monitoring frequency from monthly to weekly to detect early indicators of shaft deflection."
  },
  {
    id: "INSP-HEX-0205",
    title: "Post-Incident NDT and Integrity Assessment - Heat Exchanger E-405",
    docType: "InspectionReport",
    date: "2025-04-02T10:00:00Z",
    equipmentTags: ["E-405"],
    personnel: ["S. K. Bose", "Rajesh Mehta"],
    standardsReferenced: ["ASME Section VIII Div 1", "API 510"],
    content: "Following the process fluid leak incident on March 22, 2025 (documented in Incident Report INC-HEX-0405), a detailed non-destructive testing (NDT) and structural integrity assessment was conducted on Heat Exchanger E-405. Shift supervisor S. K. Bose and inspection engineer Rajesh Mehta oversaw the process. The channel head was removed to expose the tube bundle, and a thorough dye penetrant inspection (DPI) was executed on the tube-to-tubesheet weld joints. The testing identified multiple micro-cracks in the heat-affected zones of three tubes on the top pass. Ultrasonic thickness gauging of the shell wall was also performed in compliance with API 510, indicating no significant wall loss. The failure of the joint was attributed to transient thermal stresses experienced during the process surge of the incident. It was decided to plug the cracked tubes using tapered steel plugs and to install a new high-temperature spiral-wound gasket. A hydrostatic pressure test at 1.5 times the design pressure was successfully completed prior to putting the exchanger back in service."
  }
];
