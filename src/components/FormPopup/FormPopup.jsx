import React from "react";
import { Grid } from "@material-ui/core";
import { Form } from "./useForm";
import Controls from "../controls/Controls";

export default function FormPopup() {
  return (
    // <Form onSubmit={handleSubmit}>
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            label="Tên Kịch bản"
            //   value={values.fullName}
            //   onChange={handleInputChange}
            //   error={errors.fullName}
          />
          <Controls.Input
            label="Email"
            name="ví dụ 1"
            //   value={values.email}
            //   onChange={handleInputChange}
            //   error={errors.email}
          />
          <Controls.Input
            label="ví dụ 2"
            name="mobile"
            //   value={values.mobile}
            //   onChange={handleInputChange}
            //   error={errors.mobile}
          />
          <Controls.Input
            label="ví dụ 3"
            name="city"
            //   value={values.city}
            //   onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          {/* <Controls.RadioGroup
            name="gender"
            label="Gender"
            //   value={values.gender}
            //   onChange={handleInputChange}
            //   items={genderItems}
          /> */}
          <Controls.Select
            name="departmentId"
            label="Ví dụ 3"
            //   value={values.departmentId}
            //   onChange={handleInputChange}
            //   options={employeeService.getDepartmentCollection()}
            //   error={errors.departmentId}
          />

          <Controls.Checkbox
            name="isPermanent"
            label="Ví dụ 4"
            //   value={values.isPermanent}
            //   onChange={handleInputChange}
          />

          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button
              text="Reset"
              color="default"
              // onClick={resetForm}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
