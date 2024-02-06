import { useState } from "react";
import { MdEditNote, MdOutlineDeleteForever } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Button } from "../components/button/button.styled";
import { DataTable } from "../components/Loader/loaders";
import {
  handleDelete,
  handleEdit,
} from "../services/function/helper.functions";
import { useDrugData } from "../services/queries/req.query";
import { Row, Section, Table, Td, Th, Thead } from "./container.styled";
import { Icon } from "../components/icon/icon.styled";

const DrugContainer = () => {
  const { isLoading, data } = useDrugData();
  const [edit, setEdit] = useState(false);

  return (
    <Section>
      <Row right>
        <div style={{ padding: "10px", display: "flex", gap: "20px" }}>
          <Link to="/dashboard/new_drug">
            <Button primary>Add new drug</Button>
          </Link>
          <Button onClick={() => handleEdit(setEdit, edit)}>
            <MdEditNote /> Edit
          </Button>
        </div>
      </Row>
      <Row>
        <Table>
          <Thead>
            <tr>
              <Th>S/N</Th>
              <Th>Name</Th>
              <Th>Manufactured Date</Th>
              <Th>Expiry Date</Th>
              <Th>Nafdac Approved</Th>
              <Th>Quantity</Th>
              <Th>Price per unit</Th>
              <Th>Serial Number</Th>
              {edit && <Th>Edit</Th>}
            </tr>
          </Thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={8}>
                  <DataTable />
                </td>
              </tr>
            ) : (
              data?.map((item, i) => (
                <tr
                  key={i}
                  style={i % 2 === 0 ? { backgroundColor: "#f4f4f4" } : {}}
                >
                  <Td>{i + 1}</Td>
                  <Td>
                    <Link to="/dashboard/drug_detail">Paracetamol</Link>
                  </Td>
                  <Td>08/2020</Td>
                  <Td>12/2024</Td>
                  <Td>true</Td>
                  <Td>1000</Td>
                  <Td>250 NGN</Td>
                  <Td>232464657DSB6392</Td>
                  {edit && (
                    <Td>
                      <Icon edit>
                        <Link to={`/edit/:${item.id}`}>
                          {" "}
                          <HiOutlinePencilAlt />
                        </Link>{" "}
                        <MdOutlineDeleteForever
                          onClick={() => {
                            handleDelete(item.id);
                          }}
                          style={{ color: "red" }}
                        />
                      </Icon>
                    </Td>
                  )}
                </tr>
              ))
            )}
            <tr>
              <td>1</td>
              <td>
                <Link to="/dashboard/drug_detail">Amateen</Link>
              </td>
              <td>08/2017</td>
              <td>12/2023</td>
              <td>false</td>
              <td>730</td>
              <td>600 NGN</td>
              <td>275464657DSB6392</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Link to="/dashboard/drug_detail">Folic Acid</Link>
              </td>
              <td>02/2020</td>
              <td>10/2024</td>
              <td>1070</td>
              <td>350 NGN</td>
              <td>976DCD7DSB6392</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Section>
  );
};

export default DrugContainer;
