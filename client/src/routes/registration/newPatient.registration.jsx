import { useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "../../components/button/button.styled";
// import { Button } from "../../components/button/button.styled";
import {
  Fieldset,
  Form,
  Input,
  Select,
} from "../../components/form/form.styled";
import { SubHeading } from "../../components/heading/heading.component";
import { ThreeDots } from "../../components/Loader/loaders";
import { Section } from "../../containers/container.styled";
import { useCreatePatient } from "../../services/queries/req.query";
import { Success } from "../editUsers/editUser.styled";

const formField = {
  first_name: "",
  last_name: "",
  email: "",
  address: "",
  phone: "",
  file_no: "",
  password: "",
  sex: "",
  next_of_kin: "",
  next_of_kin_phone: "",
  next_of_kin_address: "",
  relation: "",
  chronic_disease: "",
  disability: "",
  genotype: "",
  blood_group: "",
};

const NewPatientContainer = () => {
  const [formData, setFormData] = useState(formField);
  const {
    first_name,
    last_name,
    email,
    address,
    file_no,
    phone,
    blood_group,
    password,
    sex,
    next_of_kin,
    next_of_kin_phone,
    next_of_kin_address,
    relation,
    chronic_disease,
    disability,
    genotype,
  } = formData;

  const { mutate, isSuccess, isLoading } = useCreatePatient();

  const resetFeild = () => {
    setFormData(formField);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
    resetFeild();
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
          <p>Kindly fill in the patient's details</p>

          <Fieldset>
            <label htmlFor="first_name">First Name:</label>
            <Input
              type="text"
              id="first_name"
              name="first_name"
              value={first_name}
              onChange={handleChange}
              placeholder="e.g: John"
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="last_name">Last Name:</label>
            <Input
              type="text"
              id="last_name"
              name="last_name"
              value={last_name}
              onChange={handleChange}
              placeholder="e.g: Doe"
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="email">Email:</label>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="e.g: someone@example.com"
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="file_no">File No:</label>
            <Input
              type="file_no"
              id="file_no"
              name="file_no"
              value={file_no}
              onChange={handleChange}
              placeholder="e.g: P2023CS65"
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="password">Password:</label>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="sex">Sex:</label>
            <Select name="sex" id="sex" value={sex} onChange={handleChange}>
              <option value="" selected disabled>
                - - - Select Patient's Sex - - -
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="Non Binary">Non Binary</option>
              <option value="others">Others</option>
            </Select>
          </Fieldset>
          <Fieldset>
            <label htmlFor="phone">Phone No:</label>
            <Input
              type="numeric"
              id="phone"
              name="phone"
              value={phone}
              onChange={handleChange}
              placeholder="eg: +234 8082 5555 777"
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="address">Address:</label>
            <Input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={handleChange}
              placeholder="eg: 123 pyper avenue"
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="blood_group">Blood Group:</label>
            <Select
              name="blood_group"
              id="blood_group"
              value={blood_group}
              onChange={handleChange}
            >
              <option value="" selected disabled>
                - - - Select Patient's Blood Group - - -
              </option>
              <option value="O Positive">O+</option>
              <option value="O Negative">O-</option>
              <option value="A Positive">A+</option>
              <option value="A Negative">A-</option>
              <option value="AB Positive">AB+</option>
            </Select>
          </Fieldset>
          <Fieldset>
            <label htmlFor="genotype">Genotype:</label>
            <Select
              name="genotype"
              value={genotype}
              onChange={handleChange}
              id="genotype"
            >
              <option value="" disabled>
                - - - Select Patient's Genotype - - -
              </option>
              <option value="AA">AA</option>
              <option value="AS">AS</option>
              <option value="AC">AC</option>
              <option value="SS">SS</option>
              <option value="SC">SC+</option>
            </Select>
          </Fieldset>
          <Fieldset>
            <label htmlFor="disability">Disability:</label>
            <Input
              type="text"
              id="disability"
              name="disability"
              value={disability}
              onChange={handleChange}
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="chronic_disease">Chronic Disease:</label>
            <Input
              type="text"
              id="chronic_disease"
              name="chronic_disease"
              value={chronic_disease}
              onChange={handleChange}
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="next_of_kin">Next of Kin:</label>
            <Input
              type="text"
              id="next_of_kin"
              name="next_of_kin"
              value={next_of_kin}
              onChange={handleChange}
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="next_of_kin_phone">Next of Kin Phone No:</label>
            <Input
              type="numeric"
              id="next_of_kin_phone"
              name="next_of_kin_phone"
              value={next_of_kin_phone}
              onChange={handleChange}
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="next_of_kin_address">Next of Kin Address:</label>
            <Input
              type="text"
              id="next_of_kin_address"
              name="next_of_kin_address"
              value={next_of_kin_address}
              onChange={handleChange}
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="relation">Relationship with Next of Kin:</label>
            <Input
              type="text"
              id="relation"
              name="relation"
              value={relation}
              onChange={handleChange}
              placeholder="Mother"
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


export default NewPatientContainer;