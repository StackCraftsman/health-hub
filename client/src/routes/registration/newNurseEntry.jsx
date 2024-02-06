import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNusrseRecord } from "../../services/queries/req.query";
import { SubHeading } from "../../components/heading/heading.component";
import { ThreeDots } from "../../components/Loader/loaders";
import { Section } from "../../containers/container.styled";
import { Success } from "../editUsers/editUser.styled";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "../../components/button/button.styled";
import {
  Fieldset,
  Form,
  Input
} from "../../components/form/form.styled";
const formField = {
  temperature: "",
  weight: "",
  blood_pressure: "",
  next_appointment: "",
  nurse_id: "",
  patient_id: "",
};
const NurseEntry = () => {
  const { userId } = useParams();
  const [formData, setFormData] = useState(formField);

  const {
    temperature,
    weight,
    blood_pressure,
    next_appointment,
} = formData;

    formData.nurse_id=localStorage.getItem("userId")
  formData.patient_id = userId;
  const { mutate, isSuccess, isLoading } = useNusrseRecord();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <Section>
      {isLoading ? (
        <Success>
          <ThreeDots />
        </Success>
      ) : isSuccess ? (
        <Success>
          <SubHeading green>Successfully Compeleted</SubHeading>
          <Link to={"/dashboard/patients"}>
            <Button primary>Go back</Button>
          </Link>
        </Success>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Link to="/dashboard/patients">
            {" "}
            <MdKeyboardBackspace
              style={{ fontSize: "1.8rem", color: "black" }}
            />
          </Link>
          <p>Hello Nurse {localStorage.getItem("fullname")}, Fill in your report.</p>
          <Fieldset>
            <label htmlFor="temperature">Temperature:</label>
            <Input
              type="text"
              id="temperature"
              name="temperature"
              value={temperature}
              onChange={handleChange}

            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="weight">Weight:</label>
            <Input
              type="text"
              id="weight"
              name="weight"
              value={weight}
              onChange={handleChange}
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="blood_pressure">Blood Pressure:</label>
            <Input
              type="text"
              id="blood_pressure"
              name="blood_pressure"
              value={blood_pressure}
              onChange={handleChange}
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="next_appointment">Next Appointment:</label>
            <Input
              type="date"
              id="next_appointment"
              name="next_appointment"
              value={next_appointment}
              onChange={handleChange}
            />
          </Fieldset>

          <Fieldset>
            <Input submit type="submit" value="Submit" />
          </Fieldset>
        </Form>
      )}
    </Section>
  );
};

export default NurseEntry;
