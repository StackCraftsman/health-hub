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
  diagnosis: "",
  recommendation: "",
  prescription: "",
  doctor_id: "",
  report_report: "",
};
const DoctorEntry = () => {
  const { userId } = useParams();
  const [formData, setFormData] = useState(formField);

  const {
    diagnosis,
    recommendation,
    prescription,
} = formData;

    formData.doctor_id=localStorage.getItem("userId")
  formData.nurse_report = userId;
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
          <p>
            Hello Doctor {localStorage.getItem("fullname")}, Fill in your report.
          </p>
                    <Fieldset>
            <label htmlFor="diagnosis">Diagnosis:</label>
            <Input
              type="text"
              id="diagnosis"
              name="diagnosis"
              value={diagnosis}
              onChange={handleChange}
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="recommendation">Recommendation:</label>
            <Input
              type="text"
              id="recommendation"
              name="recommendation"
              value={recommendation}
              onChange={handleChange}
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="prescription">Presciption:</label>
            <Input
              type="text"
              id="prescription"
              name="prescription"
              value={prescription}
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

export default DoctorEntry;
