import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Switch from "../../components/switch/switch.component";
import { MdKeyboardBackspace } from "react-icons/md";
import { LoginContainer, Section } from "./signin.styled";
import { SubHeading } from "../../components/heading/heading.component";
import { Fieldset, Form, Input } from "../../components/form/form.styled";
import { GoInfo } from "react-icons/go";
import { UseSignin } from "../../services/queries/req.query";
import { Success } from "../editUsers/editUser.styled";
import { ThreeDots } from "../../components/Loader/loaders";

const Signin = ({ getUser, getUser_role, getJob_type }) => {
  const [file_no, setFile_no] = useState("");
  const [reg_no, setReg_no] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isSelected, setIsSelected] = useState("staff");
  const navigate = useNavigate();

const onSuccess = (res) => {
  const { data } = res;
  const fullname = `${data.details.first_name} ${data.details.last_name}`;
  localStorage.setItem("token", data.access_token);
  localStorage.setItem("userId", data.details.id);
  localStorage.setItem("fullname", fullname);
  navigate("/dashboard");
  getJob_type(data.details.job_title);
  getUser_role(data.details.user_role);
};

const onError = (err) => {
  console.log(`The following error occoured ${err}`);
};

const { mutate, isLoading, isError } = UseSignin(onSuccess, onError);

const handleLogin = (e) => {
  e.preventDefault();
  if (isSelected !== "staff") {
    getUser("patient");
    mutate({ file_no, password });
  } else {
    mutate({ reg_no, password });
    getUser("staff");
  }
};

  return (
    <LoginContainer>
      <Section left>
        <Link to="/">
          <MdKeyboardBackspace style={{ fontSize: "1.8rem", color: "black" }} />
        </Link>
      </Section>
      <Section>
        {isLoading ? (
          <Success>
            <ThreeDots />
          </Success>
        ) : (
          <>
            <SubHeading login>Welcome to Health hub, kindly Login</SubHeading>
            <Form onSubmit={(e) => handleLogin(e)}>
              <div className="tooltip">
                <GoInfo />
                To test demo hover here
                <span className="tooltiptext">
                  Signin with "S2023DS16" as a Nurse".
                  use "admin" as the password. You can create a patient to signin as a patient. Explore on PC
                </span>
              </div>
              <p>What best describe you?</p>
              <Fieldset>
                <Switch
                  content="I'm a Staff"
                  inputName="user_type"
                  inputId="staff"
                  inputValue="staff"
                  checked={isSelected === "staff"}
                  handleRadio={(e) => {
                    setIsSelected(e.target.value);
                  }}
                />
                <Switch
                  content="I'm a Patient"
                  inputName="user_type"
                  inputId="patient"
                  inputValue="patient"
                  checked={isSelected === "patient"}
                  handleRadio={(e) => {
                    setIsSelected(e.target.value);
                  }}
                />
              </Fieldset>
              {isError ? (
                <p
                  style={{
                    color: "red",
                    margin: "20px 0",
                    textAlign: "center",
                  }}
                >
                  Invalid {isSelected === "staff" ? "Reg No" : "File No"} or
                  Password
                </p>
              ) : null}
              <Fieldset>
                <label
                  htmlFor={isSelected === "staff" ? "Reg No:" : "File No:"}
                >
                  {isSelected === "staff" ? "Reg No:" : "File No:"}
                </label>
                <Input
                  type="text"
                  placeholder={
                    isSelected === "staff"
                      ? "eg. S2022000001"
                      : "eg. P2022000001"
                  }
                  name={isSelected === "staff" ? "Reg No:" : "File No:"}
                  id={isSelected === "staff" ? "Reg No:" : "File No:"}
                  // value={reg_no}
                  value={isSelected === "staff" ? reg_no : file_no}
                  onChange={(e) => {
                    isSelected === "staff"
                      ? setReg_no(e.target.value)
                      : setFile_no(e.target.value);
                    setFile_no(e.target.value);
                  }}
                />
              </Fieldset>
              <Fieldset>
                <label htmlFor="password">Password:</label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Fieldset>
              <label htmlFor="remember">
                <input
                  type="checkbox"
                  id="remember"
                  value="remember_me"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />{" "}
                Remember me{" "}
              </label>
              <Input submit type="submit" value="Signin" />
            </Form>
          </>
        )}
      </Section>
    </LoginContainer>
  );
};

export default Signin;
