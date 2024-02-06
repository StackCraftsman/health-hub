import React from "react";
import { Div } from "../../routes/Detail/detail.style";
import { usePatientRecord } from "../../services/queries/req.query";
import { SecHeading, SubHeading } from "../heading/heading.component";
import { DetailList } from "../Loader/loaders";
import { Para, RecordContainer, Span } from "./record.styled";

const Record = ({ userId }) => {
  const { isLoading, data } = usePatientRecord(userId);

  if (isLoading) {
    return <DetailList />;
  }

  return (
    <RecordContainer>
      <SecHeading>{data?.created_at}Record for 20th June 2021</SecHeading>
      <Div record>
        <SubHeading bio>Vitals</SubHeading>
        <div>
          <Para>
            Weight: <em>83KG</em>
          </Para>
          <Para>
            Height: <em>--</em>
          </Para>
          <Para>
            Blood Pressure: <em>123/89bpm</em>
          </Para>
          <Para>
            Body Temperature: <em>32&deg;C</em>
          </Para>
        </div>
      </Div>
      <Div record>
        <SubHeading bio>Records</SubHeading>
        <div>
          <Para>
            Symptoms: <em>Headache, Sore throat</em>
          </Para>
          <Para>
            Diagnosis: <em>Malaria</em>
          </Para>
        </div>
      </Div>
      <Div record>
        <SubHeading bio>Lab work</SubHeading>
        <div>
          <Para>
            Test: <em>hpv test</em>
          </Para>
          <Para>
            Result: <em>+ive</em>
          </Para>
        </div>
      </Div>
      <Div record>
        <SubHeading bio>Prescriptons</SubHeading>
        <Div bio>
          <div>
            <Para>
              Medication: <em>Vitamin C</em>
            </Para>
            <Para>
              Dosage: <em>1 tab 2 times daily</em>
            </Para>
          </div>
          <div>
            <Para>
              Medication: <em>Folic acid</em>
            </Para>
            <Para>
              Dosage: <em>1 tab daily</em>
            </Para>
          </div>
        </Div>
      </Div>
      <Div record>
        <SubHeading bio>Comments</SubHeading>
        <div>
          <Para comment>
            <Span>Nurse's Comment:</Span> Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Aliquam, distinctio eos cum tenetur
            velit nulla dolores labore totam nesciunt, ipsum nobis porro
            consequuntur molestias saepe voluptatem hic id, vero odio!
          </Para>
          <Para comment>
            <Span>Doctor's Comment:</Span> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Non eos soluta voluptatem itaque vel
            neque laboriosam dolores molestiae quod fuga suscipit qui a
            architecto, veritatis quidem, aspernatur mollitia, id dolore.
          </Para>
          <Para comment>
            <Span>Biochemist's Comment:</Span> Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Quos quis perspiciatis tempore ipsam
            eaque autem magni labore rem beatae explicabo, doloremque pariatur
            qui? Fugiat doloremque maxime suscipit similique. Incidunt, ratione!
          </Para>
          <Para comment>
            <Span>Pharmasist's Comment:</Span> Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptate voluptates, perferendis
            nostrum hic repellat ut fugiat quam sequi in laboriosam tenetur
            deserunt tempora numquam quis explicabo et illum necessitatibus
            alias?
          </Para>
        </div>
      </Div>
    </RecordContainer>
  );
};

export default Record;
