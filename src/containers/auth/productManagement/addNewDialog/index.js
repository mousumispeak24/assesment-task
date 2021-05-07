import React, { useEffect, useState } from "react";
// import { useDispatch, } from "react-redux";
import "../addNewDialog/addNewRuleDialog.css";
import { Button, TextField, Dialog, DialogContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const AddNewDialog = (props) => {
  // const dispatch = useDispatch();
  //if edit reword................
  useEffect(() => {
    // effect
    if (props && props.product) {
      setProductId(props.product.studentData.id);
      setRewordTitle(props.product.studentData.name);
      setdescription(props.product.studentData.description);
      setPrice(props.product.studentData.price)
    }
    return () => {};
  }, []);
  //validation................
  const validate = () => {
    let isValid = true;
    if (!rewordTitle) {
      setTitleValidationError(true);
      isValid = false;
    }
    if (!description ) {
      setDescriptionValidationError(true);
      isValid = false;
    }
    if(!price){
      setPriceValidationError(true)
      isValid = false
    }
    return isValid;
  };
  //set hooks......................
  const [productId, setProductId] = useState(undefined);
  const [rewordTitle, setRewordTitle] = useState("");
  const [titleValidationError, setTitleValidationError] = useState(
    false
  );
  const [description, setdescription] = useState();
  const [descriptionValidationError, setDescriptionValidationError] = useState(
    false
  );
  const [priceValidationError, setPriceValidationError] = useState(
    false
  );
  const [price, setPrice] = useState(0);
  const handelNameChange = (event) => {
    if (titleValidationError) {
      setTitleValidationError(false);
    }
   
    setRewordTitle(event.target.value);
  };
  const handelDescriptionChange = (event) => {
    if (descriptionValidationError) {
      setDescriptionValidationError(false);
    }
    setdescription(event.target.value);
  };
  const handelPriceChange = (event) => {
    if(priceValidationError){
      setPriceValidationError(false);
    }
    setPrice(event.target.value);
  };

  const handelSubmit = async () => {
    if (validate()) {
      if (props && props.product) {
        const payload = {
          id: productId,
          name: rewordTitle,
          description: description,
          price:price
        };
        props.onSubmitUpdateRule(payload);
      } else {
        const payload = {
          name: rewordTitle,
          description:description,
          price:price 
        };
        props.onSubmitNewRule(payload);
      }
      props.close();
    }
  };
  const header = props.product
    ? "Update product data"
    : "Add a new product";
  return (
    <div>
      <Dialog
        open={true}
        onClose={props.close}
        disableBackdropClick={true}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <div className="center-between">
            <div>
              <h2 className="dialog-heading  padding-left-15">{header}</h2>
            </div>
            <div onClick={props.close} className="close-icon">
              <CloseIcon />
            </div>
          </div>
          <div style={{ flex: 1, backgroundColor: "rgb(255,255,255)" }}>
            <div className="margin-left-20 margin-right-20">
              <TextField
                className="margin-bottom-0 margin-top-20"
                required
                label="Name"
                fullWidth
                value={rewordTitle}
                onChange={handelNameChange}
                margin="normal"
              />
              {titleValidationError ? (
                <span className="error-msg" style={{color:"red"}}>{`Enter a valid name`}</span>
              ) : null}

              <TextField
                className="margin-bottom-0 margin-top-20"
                required
                label="Description"
                fullWidth
                value={description}
                onChange={handelDescriptionChange}
                margin="normal"
              />
              {descriptionValidationError ? (
                <span className="error-msg" style={{color:"red"}}>
                  {`Enter a valid description`}
                </span>
              ) : null}

              <TextField
                className="margin-bottom-0 margin-top-20"
                required
                label="Price"
                fullWidth
                value={price}
                onChange={handelPriceChange}
                margin="normal"
                type= "number"
              />
              {priceValidationError ? (
                <span className="error-msg" style={{color:"red"}}>
                  {`Enter a valid price`}
                </span>
              ) : null}

              <div className="responsive-btn">
                <Button
                  className="btn-style dialog-submit-button width-20per"
                  style={{ marginLeft: 22 }}
                  onClick={handelSubmit}
                >
                  Submit
                </Button>
                <Button
                  className="cancel-btn-style dialog-submit-button width-20per"
                  onClick={() => {
                    props.close();
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewDialog;
