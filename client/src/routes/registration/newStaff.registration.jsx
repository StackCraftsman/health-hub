import { useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "../../components/button/button.styled";
import {
  Fieldset,
  Form,
  Input,
  Select,
} from "../../components/form/form.styled";
import { SubHeading } from "../../components/heading/heading.component";
import { ThreeDots } from "../../components/Loader/loaders";
import { Section } from "../../containers/container.styled";
import { useCreateStaff } from "../../services/queries/req.query";
import { Success } from "../editUsers/editUser.styled";

const formField = {
  first_name: "",
  last_name: "",
  email: "",
  address: "",
  phone: "",
  user_type: "staff",
  licence_no: "",
  user_role: "user",
  job_title: "",
  password: "",
  sex: "",
  next_of_kin: "",
  next_of_kin_phone: "",
  next_of_kin_address: "",
  relationship: "",
};

const NewStaffContainer = () => {
  const [formData, setFormData] = useState(formField);
  const {
    first_name,
    last_name,
    email,
    address,
    phone,
    job_title,
    licence_no,
    password,
    sex,
    next_of_kin,
    next_of_kin_phone,
    next_of_kin_address,
    relationship,
  } = formData;

  const { mutate, isSuccess, isLoading } = useCreateStaff();

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
          <Link to={"/dashboard/staff"}>
            <Button primary>Go back</Button>
          </Link>
        </Success>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Link to="/dashboard/staff">
            {" "}
            <MdKeyboardBackspace
              style={{ fontSize: "1.8rem", color: "black" }}
            />
          </Link>
          <p>Fill in the staff informations</p>
          <Fieldset>
            <label htmlFor="first_name">First Name:</label>
            <Input
              type="text"
              id="first_name"
              name="first_name"
              value={first_name}
              onChange={handleChange}
              placeholder=""
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
              placeholder=""
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="sex">Sex:</label>
            <Select name="sex" id="sex" value={sex} onChange={handleChange}>
              <option value="" disabled>
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
              placeholder="+2348126535797"
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
              placeholder="someone@example.com"
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
            <label htmlFor="address">Address:</label>
            <Input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={handleChange}
              placeholder="213 New Haven, Ebute Meta Abuja"
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="licence_no">Medical Licence:</label>
            <Input
              type="text"
              id="licence_no"
              name="licence_no"
              value={licence_no}
              onChange={handleChange}
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="job_title">Job Title:</label>
            <Input
              type="text"
              id="job_title"
              name="job_title"
              value={job_title}
              onChange={handleChange}
              placeholder="Doctor"
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
            <label htmlFor="relationship">Relationship with Next of Kin:</label>
            <Input
              type="text"
              id="relationship"
              name="relationship"
              placeholder="brother"
              value={relationship}
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

export default NewStaffContainer;