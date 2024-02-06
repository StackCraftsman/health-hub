import React from "react";
import { SubHeading } from "../components/heading/heading.component";
import Record from "../components/record/record.component";
import SummaryWidget from "../components/widgets/summary.widget";
import { Section, Row, Ul } from "./container.styled";

const OverviewContainer = ({ job_type, user_type }) => {
  return (
    <Section>
      <Row>
        {/*----- widgets for patients ----- */}
        {user_type === "patient" ? (
          <SummaryWidget>
            <SubHeading widget>Last Diagonisis</SubHeading>
            <p>Malaria</p>
          </SummaryWidget>
        ) : null}
        {user_type === "patient" ? (
          <SummaryWidget>
            <SubHeading>Next Appointment</SubHeading>
            <p>23rd June</p>
          </SummaryWidget>
        ) : null}
        {user_type === "patient" ? (
          <SummaryWidget>
            <SubHeading>Last Vitals Checked</SubHeading>
            <ul style={{ listStyle: "none" }}>
              <li>height - 5.2"</li>
              <li>weight - 79kg</li>
              <li>Temperature - 45 &deg; C</li>
              <li>BP - 124/232 bpm</li>
            </ul>
          </SummaryWidget>
        ) : null}
        {user_type === "patient" ? (
          <SummaryWidget>
            <SubHeading>Doctor's Information</SubHeading>
            <p>Name: Dr. Stephen Gerald (M.Med)</p>
            <p>Email: Stephengerald@fmc.com</p>
          </SummaryWidget>
        ) : null}

        {/* ----- widgets for Nurses ----- */}
        {user_type === "staff" &&
        (job_type === "nurse" || job_type === "Nurse") ? (
          <SummaryWidget>
            <SubHeading>Appointment Today</SubHeading>
            <p>
              <span>127</span> Appointments
            </p>
          </SummaryWidget>
        ) : null}
        {user_type === "staff" &&
        (job_type === "nurse" || job_type === "Nurse") ? (
          <SummaryWidget>
            <SubHeading>Doctors on Duty</SubHeading>
            <p>
              <span>7</span> Doctors
            </p>
          </SummaryWidget>
        ) : null}
        {user_type === "staff" &&
        (job_type === "nurse" ||
          job_type === "doctor" ||
          job_type === "Nurse" ||
          job_type === "Doctor") ? (
          <SummaryWidget>
            <SubHeading>Patients Admitted</SubHeading>
            <p>
              <span>14</span> Patients
            </p>
          </SummaryWidget>
        ) : null}
        {user_type === "staff" &&
        (job_type === "nurse" ||
          job_type === "doctor" ||
          job_type === "Nurse" ||
          job_type === "Doctor") ? (
          <SummaryWidget>
            <SubHeading>Processed Patients</SubHeading>
            <Ul>
              <li>John Snow</li>
              <li>Tormound Gaintsbane</li>
              <li>Bruce Wayne</li>
              <li>Chole Sullivan</li>
            </Ul>
          </SummaryWidget>
        ) : null}

        {/* Tiles for Pharamsist  */}
        {user_type === "staff" && job_type === "pharmasist" ? (
          <SummaryWidget>
            <SubHeading>About to Expire</SubHeading>
            <p>None</p>
          </SummaryWidget>
        ) : null}
        {user_type === "staff" && job_type === "pharmasist" ? (
          <SummaryWidget>
            <SubHeading>Needs Restocking</SubHeading>
            <Ul>
              <li>B Complex</li>
              <li>Paracetamol</li>
              <li>Descovite</li>
              <li>Cellgivity</li>
              <li>Folic Acid</li>
            </Ul>
          </SummaryWidget>
        ) : null}
        {user_type === "staff" && job_type === "pharmasist" ? (
          <SummaryWidget>
            <SubHeading>Patient's Pickup</SubHeading>
            <Ul>
              <li>John Akanimoh - P202200072</li>
              <li>Tracy Murphy - P2022000876</li>
              <li>Funsho Akerele - P2022000725</li>
              <li>Michael Issac - P2022000087</li>
              <li>Ejike Osuawku - P2022000011</li>
            </Ul>
          </SummaryWidget>
        ) : null}
        {user_type === "staff" && job_type === "pharmasist" ? (
          <SummaryWidget>
            <SubHeading>Something</SubHeading>
          </SummaryWidget>
        ) : null}
        {user_type === "staff" && job_type === "chemist" ? (
          <SummaryWidget>
            <SubHeading>Sample Collection</SubHeading>
            <Ul>
              <li>John Akanimoh - P202200072</li>
              <li>Tracy Murphy - P2022000876</li>
              <li>Funsho Akerele - P2022000725</li>
              <li>Michael Issac - P2022000087</li>
              <li>Ejike Osuawku - P2022000011</li>
            </Ul>
          </SummaryWidget>
        ) : null}
        {user_type === "staff" && (job_type === "chemist"||job_type === "Chemist") ? (
          <SummaryWidget>
            <SubHeading>Results to Dispatch</SubHeading>
            <Ul>
              <li>John Akanimoh - P202200072</li>
              <li>Tracy Murphy - P2022000876</li>
              <li>Funsho Akerele - P2022000725</li>
            </Ul>
          </SummaryWidget>
        ) : null}
        {user_type === "staff" && (job_type === "chemist"||job_type === "Chemist") ? (
          <SummaryWidget>
            <SubHeading>Processing</SubHeading>
            <p>None</p>
          </SummaryWidget>
        ) : null}
      </Row>
      {user_type === "patient" ? <Record /> : null}
    </Section>
  );
};

export default OverviewContainer;
