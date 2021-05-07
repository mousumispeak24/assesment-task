import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addNewSagaRewordRule,getStudentManagementSaga,updateSagaStudent,searchSagaAction,deleteSagaAction
} from "../state/actions";
import {
  Button,
} from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import "../style.css";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { Search as SearchIcon } from "@material-ui/icons";
import AddNewDialog from "./addNewDialog";
import Edit from "@material-ui/icons/Edit";
import DeleteIcon from '@material-ui/icons/Delete';
import MessagePopup from "./messagePopup"
const ProductManagement = (props) => {
  const dispatch = useDispatch();
  const { data,successMessage,successMessageToShow  } = useSelector(
    (state) => state.auth
  );
  //set hooks
  const [shouldShowAddRuleDialog, setShouldShowAddRuleDialog] = useState(false);
  const [reworsData, setReworsData] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [searchInputValidationError, setSearchInputValidationError] = useState(
    false
  );
  const [message,setMessage] = useState("");
  const [deleteData,setDeleteData] = useState(""); 
  useEffect(() => {
    dispatch(getStudentManagementSaga());
    return () => {
    };
  }, []);
  useEffect(() => {
    dispatch(getStudentManagementSaga());
    return () => {};
  }, [successMessage]);
  
  useEffect(() => {
    setMessage(successMessageToShow)
  return () => {};
},[successMessageToShow]);
 
  //VALIDATION...............
  const validate = () => {
    let isValid = true;
    if (!searchInput) {
      setSearchInputValidationError(true);
      isValid = false;
    }
    return isValid;
  };
  const handelSubmitNewRule = (payload) => {
    dispatch(addNewSagaRewordRule(payload));
  };
  const handelSubmitUpdateRule = (payload) => {
    dispatch(updateSagaStudent(payload));
  };
  const onSearchKeyPress = () => {
    if (validate()) {
      const payload = {
        searchKey: searchInput.trim(),
        };
      dispatch(searchSagaAction(payload));
    }else{
      dispatch(getStudentManagementSaga());
    }
  };
  const handelSearchTextChange = (event) => {
    if (searchInputValidationError) {
      setSearchInputValidationError(false);
    }
    setSearchInput(event.target.value);
  };
  const handelEditclick = (reword) => {
    setShouldShowAddRuleDialog(true);
    setReworsData(reword);
  };

  const handelDeleteclick = (payload) => {
    setMessage("Are you want to delete the data ?");
    setDeleteData(payload);
  };
 
  const handelDeleteSubmit = () => {
   dispatch(deleteSagaAction(deleteData.studentData));
   setMessage("");
  };
  const deleteCancel = () => {
    setDeleteData("");
    setMessage("");
   };
  const closeMessage = ()=>{
    setMessage("");
  }
   //open dialog................
   const handleOpenAddNewDialog = () => {
    setShouldShowAddRuleDialog(true);
  };
  const handleCloseAddNewDialog = () => {
    setShouldShowAddRuleDialog(false);
    setReworsData(undefined);
  };
  return (
    <React.Fragment>
      <div className="main-container">
          <h1>STUDENT DATA TABLE</h1>
          <Paper className="root">
            <div className="table-wrapper">
              <div className="center-between table-topbar">
                <div
                  className="margin-left-20 width-30per"
                  style={{ marginBottom: 6 }}
                >
                  <TextField
                    className="margin-top-10 margin-bottom-10 width-100per"
                    type="text"
                    label="Search here"
                    InputProps={{
                      classes: {
                        input: "text-field-style",
                      },
                      endAdornment: (
                        <InputAdornment variant="filled" position="end">
                          <IconButton
                            onClick={onSearchKeyPress}
                            disableRipple={true}
                          >
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    value={searchInput}
                    onChange={
                      handelSearchTextChange
                    }
                    onKeyDown={(e) => {
                    }}
                    margin="normal"
                  />
                </div>
              <div className="responsive-btn width-20per">
                  <Button
                    className="btn-style dialog-submit-button"
                    onClick={handleOpenAddNewDialog}
                  >
                    Add New
                  </Button>
                </div>
              </div>
              <TableContainer component={Paper}>
                <Table className="table" stickyHeader aria-label="sticky table">
                  <TableHead style={{backgroundColor:'red !important'}}>
                    <TableRow>
                      <TableCell align="center">Name</TableCell>
                      <TableCell align="center"> Description</TableCell>
                      <TableCell align="center"> Price</TableCell>
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody style={{overflow:"scroll",maxHeight:"100px"}}>
                    {data.length
                      ? data.map((studentData) => (
                          <TableRow key={studentData.id}>
                            <TableCell align="center">{studentData.name}</TableCell>
                            <TableCell align="center">{studentData.description}</TableCell>
                            <TableCell align="center" style = {studentData.price<=10?{color:"red"}:{color:" rgba(0, 0, 0, 0.87)"}}>{studentData.price}</TableCell>
                            <TableCell align="center">
                            <span
                                title="Update Product"
                                onClick={() => handelEditclick({ studentData })}
                                className="editButton"
                              >
                                <Edit style={{ color: "green" }}/>
                              </span>
                              <span
                                title="Delete Product"
                                onClick={() => handelDeleteclick({ studentData })}
                                className="deleteButton"
                              >
                                <DeleteIcon color="secondary" />
                              </span>
                            </TableCell>
                          </TableRow>
                        ))
                      : null}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Paper>
        </div>
        {shouldShowAddRuleDialog ? (
        <AddNewDialog
          product={reworsData}
          close={handleCloseAddNewDialog}
          onSubmitNewRule={handelSubmitNewRule}
          onSubmitUpdateRule={handelSubmitUpdateRule}
        />
      ) : null}
      {
        message!==""?(
          <MessagePopup
          messageIs = {message}
          closeMessage={closeMessage}
          handelDeleteSubmit ={handelDeleteSubmit}
          deleteCancel ={deleteCancel}
           />
        ):null
      }
    </React.Fragment>
  );
};

export default ProductManagement;
