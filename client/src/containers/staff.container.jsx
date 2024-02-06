import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../components/button/button.styled";
import { DataTable } from "../components/Loader/loaders";
import { useAllStaff, UseDeleteUser } from "../services/queries/req.query";
import { Row, Section, Table, Td, Th, Thead } from "./container.styled";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Icon } from "../components/icon/icon.styled";
import { MdOutlineDeleteForever } from "react-icons/md";
import { handleEdit } from "../services/function/helper.functions";

const StaffContainer = () => {
  const { isLoading, data, refetch } = useAllStaff();
  const [edit, setEdit] = useState(false);
  const onSuccess = () => {
    refetch();
  };
  const onError = (err) => {
    console.log(err);
  };
  const { mutate } = UseDeleteUser(onSuccess, onError);

  return (
    <Section>
      <Row right>
        <div style={{ padding: "10px", display: "flex", gap: "20px" }}>
          <Link to="/dashboard/new_staff">
            <Button primary>Register New Staff</Button>
          </Link>
          <Button onClick={() => handleEdit(setEdit, edit)}>
            <FaUserEdit /> Edit
          </Button>
        </div>
      </Row>
      <Row>
        <Table>
          <Thead>
            <tr>
              <Th>S/N</Th>
              <Th>Name</Th>
              <Th>Reg No</Th>
              <Th>Phone No</Th>
              <Th>Email</Th>
              <Th>Address</Th>
              <Th>Job Title</Th>
              <Th>User Role</Th>
              <Th>Status</Th>
              {edit && <Th>Edit</Th>}
            </tr>
          </Thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={9}>
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
                  <Td style={{ color: "skyblue" }}>
                    <Link to={`/dashboard/staff_detail/${item.id}`}>
                      {item.first_name} {item.last_name}
                    </Link>
                  </Td>
                  <Td>{item.reg_no}</Td>
                  <Td>{item.phone}</Td>
                  <Td>{item.email}</Td>
                  <Td>{item.address}</Td>
                  <Td>{item.job_title}</Td>
                  <Td>{item.user_role}</Td>
                  <Td>{item.status ? "On Duty" : "Off Duty"}</Td>
                  {edit && (
                    <Td>
                      <Icon edit>
                        <Link to={`/dashboard/edit_staff/${item.id}`}>
                          {" "}
                          <HiOutlinePencilAlt />
                        </Link>{" "}
                        <MdOutlineDeleteForever
                          onClick={() => {
                            mutate(item.id);
                          }}
                          style={{ color: "red" }}
                        />
                      </Icon>
                    </Td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Row>
    </Section>
  );
};

export default StaffContainer;