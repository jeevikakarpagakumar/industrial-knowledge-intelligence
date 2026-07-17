import { Document } from "./types";

export const CORPUS: Document[] = [
  {
    id: "PID-PMP-101",
    title: "Piping and Instrumentation Diagram Description - Crude Transfer Pump P-101",
    docType: "PID",
    date: "2024-03-15T08:00:00Z",
    equipmentTags: ["P-101"],
    personnel: [],
    standardsReferenced: ["API 610", "ASME B31.3"],
    content: "The Piping and Instrumentation Diagram (P&ID) for the Crude Transfer Pump P-101 details the installation of a horizontal, split-case centrifugal pump designed in compliance with API 610 standards. The suction line originates from the bottom of the raw crude storage tank T-101, passing through a 10-inch manual gate valve HV-101A and a temporary suction strainer ST-101 before entering the pump suction nozzle. A pressure transmitter PT-101 is located upstream of the suction nozzle to monitor NPSH availability. The 8-inch discharge piping features a concentric increaser, a non-return swing check valve CV-101, and an automatic flow control valve FCV-101, which is controlled by flow transmitter FT-101. A minimum flow bypass line is routed from the discharge line back to T-101, containing an orifice plate FO-101 and a solenoid-operated valve SOV-101. Auxiliary piping includes a mechanical seal flush plan, specifically API Plan 11, routing fluid from the pump discharge through a flow control orifice to the seal chamber. High and low-pressure alarms are integrated into the DCS system to initiate automatic pump trip sequences in the event of dry running or downstream blockage."
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
  }
];
