import React from "react";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import AddressForm from "./AddressForm.jsx";


function Shipping({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}) {
  return (
  <Box m='30px auto'>
    {/* BILLING FORM */}
    <Box>
        <Typography sx={{mb: '15px'}} fontSize='18PX'>
           Billing Information
        </Typography>
        <AddressForm
        type='billingAddress'
        values={values.billingAddress}
        errors={errors}
        handleBlur={handleBlur}
        touched={touched}
        handleChange={handleChange}
        />
    </Box>

    <Box mb='20px'>
        <FormControlLabel
            label='Same for Shipping Address'
            control={
                <Checkbox
                defaultChecked
                value={values.shippingAddress.isSameAddress}
                onChange={() => setFieldValue('shippingAddress.isSameAddress', !values.shippingAddress.isSameAddress)}
                />
            }
        />
    </Box>

    {/* SHIPPING FORM */}
    {!values.shippingAddress.isSameAddress && (
        <Box>
        <Typography sx={{mb: '15px'}} fontSize='18PX'>
           Shipping Information
        </Typography>
        <AddressForm
        type='billingAddress'
        values={values.billingAddress}
        errors={errors}
        handleBlur={handleBlur}
        touched={touched}
        handleChange={handleChange}
        />
    </Box>
    )}
  </Box>
)
}

export default Shipping;
