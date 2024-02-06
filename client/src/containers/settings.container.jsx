import { useState } from "react";
import { Fieldset, Form, Input } from "../components/form/form.styled";
import { Section } from "./container.styled";

const formField = {
  password: "",
  new_password: "",
  confirm_password: "",
};
const SettingsContainer = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(formField);

  const {
    old_password,
    new_password,
    confirm_password,
} = formData;

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

  return (
    <Section>
      <Form>
        <Fieldset>
          <label htmlFor="avatar">Change Your Profile Picture</label>
          <Input type="file" name="avatar" id="avatar" />
        </Fieldset>
      </Form>
      <div>
        <p
          style={{ cursor: "pointer", marginRight: "20px" }}
          onClick={() => {
            setOpen(!open);
          }}
        >
          Reset Password
        </p>
        <Form style={open ? { display: "block" } : { display: " none" }}>
          <Fieldset>
            <Input
              type="password"
              name="old_password"
              value={old_password}
              onChange={handleChange}
              id="old_password"
              placeholder="Old Password"
            />
            <Input
              type="password"
              name="new_password"
              value={new_password}
              id="new_password"
              placeholder="New Password"
              onChange={handleChange}
            />
            <Input
              type="password"
              name="confirm_password"
              onChange={handleChange}
              value={confirm_password}
              id="confirm_password"
              placeholder="Confirm New Password"
            />
            <Input type="button" value={"Submit"} onClick={() => {}} />
          </Fieldset>
        </Form>
      </div>
    </Section>
  );
};

export default SettingsContainer;
