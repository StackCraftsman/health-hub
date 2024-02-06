import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import { Fieldset, Form, Input, Select } from "../../components/form/form.styled";
import { Section } from "../../containers/container.styled";

const NewDrug = () => {
  return (
    <Section>
      <Form>
        <Link to="/dashboard/drugs">
          {" "}
          <MdKeyboardBackspace style={{ fontSize: "1.8rem", color: "black" }} />
        </Link>
        <p>Kindly provide the drug information patient's details</p>
        <Fieldset>
          <label htmlFor="drug_name">Drug Name:</label>
          <Input
            type="text"
            id="drug_name"
            name="drug_name"
            placeholder="e.g: Folic Acid"
          />
        </Fieldset>
        <Fieldset>
          <label htmlFor="serial_number">Serial Number:</label>
          <Input
            type="text"
            id="serial_number"
            name="serial_number"
            placeholder="e.g: 455653SDED457986"
          />
        </Fieldset>
        <Fieldset>
          <label htmlFor="manufactured_date">Manufactured Date:</label>
          <Input type="date" id="manufactured_date" name="manufactured_date" />
        </Fieldset>
        <Fieldset>
          <label htmlFor="nafdac_approved">Nafdac Approved:</label>
          <Select type="date" id="nafdac_approved" name="nafdac_approved">
            <option value="" selected disabled>- - - Select Nafdac Status - - -</option>
            <option value="true">Approved</option>
            <option value="false">Not Approved</option>
          </Select>
        </Fieldset>
        <Fieldset>
          <label htmlFor="expiry_date">Expiry Date:</label>
          <Input type="date" id="expiry_date" name="expiry_date" />
        </Fieldset>
        <Fieldset>
          <label htmlFor="quantity">Quantity:</label>
          <Input type="number" id="quantity" name="quantity" />
        </Fieldset>
        <Fieldset>
          <label htmlFor="price">Price per unit:</label>
          <Input type="number" id="price" name="price" />
        </Fieldset>
        <Fieldset>
          <Input submit type="submit" value="Submit" />
        </Fieldset>
      </Form>
    </Section>
  );
};

export default NewDrug;
